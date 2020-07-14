export default{
  getItems,
  createItem,
  updateItem
};



let BASE_URL = 'https://thinkful-list-api.herokuapp.com/michaelhoover';

function getItems(){
  return fetch(`${BASE_URL}/items`);
}


function createItem(name){
  let newItem = JSON.stringify({name});
  return fetch(`${BASE_URL}/items`, {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body: newItem}
  );
}

function updateItem(id, updateData){
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updateData)
  });
}


//return Promise.resolve('A successful response!')