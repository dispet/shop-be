import productList from './productList.json';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*'
};

export const getProductsList = async (event) => {
  console.log('Lambda invocation with event: ', event);
  // Some logic ...
  // Don't forget about logging and testing
  
  return {
    statusCode: 200,
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(productList)
  };
};
