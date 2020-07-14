export default{
  getItems,
  createItem
};



let BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelhoover';

function getItems(){
  return fetch(`${BASE_URL}/items`);
}


function createItem(name){
  let newItem = JSON.stringify({name: name});
  return fetch(`${BASE_URL}/items`, {
    method: 'post', 
    headers: {'Content-Type': 'application/json'}, 
    body: newItem}
  );
}


//return Promise.resolve('A successful response!')