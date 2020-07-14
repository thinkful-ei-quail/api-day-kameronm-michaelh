import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  console.log('hello world')
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
