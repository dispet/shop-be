const ApiError = require('../utils/apiError');
const corsHeaders = {
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    }
};

const { Client } = require('pg');
import { dbOptions } from './dbOptions';

export const addProduct = async (event) => {
    console.log('Lambda invocation with event: ', event);
    const client = new Client(dbOptions);
    client.connect();

    try {
        const { body } = event;
        if (!body) throw new ApiError(400, 'Not valid data');

        const { title, description, count, price } = JSON.parse(body);
        if (!title || !description || !count || !price) throw new ApiError(400, 'Not valid data');
        const product = {
            title,
            description,
            count: Number(count),
            price: Number(price)
        };

        //TODO: add product schema validation

        const { rows } = await client.query(
            `insert into products (title, description, price) values ('${product.title}', '${product.description}', ${product.price}) RETURNING id`
        );
        const product_id = rows[0].id;

        await client.query(
            `insert into stocks (product_id, count) values ('${product_id}', ${product.count})`
        );

        return {
            statusCode: 200,
            body: JSON.stringify(product),
            ...corsHeaders
        };
    } catch (error) {
        return {
            statusCode: error.statusCode || 500,
            body: error.message
        };
    } finally {
        client.end()
    }
};
