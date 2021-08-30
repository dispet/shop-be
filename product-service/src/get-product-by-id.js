import productList from './productList.json';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*'
};

export const getProductsById = async (event) => {
  console.log('Lambda invocation with event: ', event);
  // const { productId } = event ....

  // Some logic ...
  // Don't forget about logging and testing

  return {
    statusCode: 200,
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(productList[0])
  };
};

