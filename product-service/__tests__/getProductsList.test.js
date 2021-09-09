const { products } = require('../src/productList.json');
const handler = require('../src/get-all-products');

describe('getProductsList endpoint handler test', () => {
    test('returns proper response data', async () => {
        const expectedResponce = {
            statusCode: 200,
            body: JSON.stringify(products)
        };
        const response = await handler.products();
        expect(response).toMatchObject(expectedResponce);
    });
});
