import fetchImage from './fetch-data.js';

const testFetchImage = async () => {
  const typedQuery = 'nature';
  const pageNum = 1;
  const result = await fetchImage(typedQuery, pageNum);
  console.log(result);
};
testFetchImage();
