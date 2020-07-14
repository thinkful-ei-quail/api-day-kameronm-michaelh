export default{
  getItems
};



let BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelhoover';

function getItems(){
  return fetch(`${BASE_URL}/items`);
}


//return Promise.resolve('A successful response!')