// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>Shopping List</h1>`;
appDiv.innerHTML = `<div>
    <h1>Shopping List</h1>
    <input placeholder="please add your item" id="itemInput" type="text"/> <button id="addItemButton" >add item</button>
    <button id="hideItems">hideItems</button>
    <ul id="itemList"></ul>
    <input placeholder="search" id="search" type="text"/>
</div>`;
let itemInput = document.getElementById('itemInput') as HTMLInputElement;
let searchInput = document.getElementById('search') as HTMLInputElement;
const listItem = document.getElementById('itemList');

type Grocery = 'ana' | 'nta' | 'howa' | 'hia';

class ShoppingList {
  groceries: string[] = [];
  construcor() {
    this.groceries = [];
  }

  addItem(item) {
    this.groceries = [...this.groceries, item]; //push is 7raaaam use concat instead
  }

  removeItem(item) {
    this.groceries = this.groceries.filter(function (grocery) {
      return item !== grocery;
    });
  }

  showItemInElem(item, elem) {
    let node = document.createElement(elem);
    let text = document.createTextNode(item);
    node.appendChild(text);
    let rmbtn = document.createElement('button');
    // rmbtn.id = 'remove' + this.groceries.indexOf('item') + this.groceries.length;
    rmbtn.innerHTML = 'remove';
    rmbtn.addEventListener('click', () => {
      // console.log(rmbtn.innerHTML);
      this.removeItem(item);
      rmbtn.parentNode.parentNode.removeChild(rmbtn.parentNode);
    });
    node.appendChild(rmbtn);
    listItem.appendChild(node);
  }

  render = () => {
    const old = document.querySelectorAll('li');
    old.forEach(function (node) {
      node.parentNode.removeChild(node);
    });
    if (this.groceries) {
      for (const g of this.groceries) {
        this.showItemInElem(g, 'li');
      }
    }
    itemInput.value = '';
  };

  render_search = () => {
    const old = document.querySelectorAll('li');
    old.forEach(function (node) {
      node.parentNode.removeChild(node);
    });
    if (this.groceries) {
      for (const g of this.groceries) {
        const regex = new RegExp(searchInput.value);
        if (regex.test(g)) this.showItemInElem(g, 'li');
      }
    }
  };

  attachEvents() {
    // add element
    const addItemButton = document.getElementById('addItemButton');
    addItemButton.addEventListener('click', () => {
      if (!itemInput.value) return;
      this.addItem(itemInput.value);
      this.render();
    });

    const listElem = document.getElementById('hideItems');
    listElem.addEventListener('click', () => {
      // if (!itemInput.value) return;
      listElem.classList.toggle('activated');
      const old = document.querySelectorAll('li');
      old.forEach(function (node) {
        node.parentNode.removeChild(node);
      });
    });

    const search = document.getElementById('search');
    search.addEventListener('change', () => {
      console.log('change');
      if (!searchInput.value) return;
      this.render_search();
    });
  }
}

const myList = new ShoppingList(); //component should have an uppercase by convention
myList.attachEvents();
myList.render();
console.log(myList);
