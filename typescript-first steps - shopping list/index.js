"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// Import stylesheets
require("./style.css");
// Write TypeScript code!
var appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>Shopping List</h1>`;
appDiv.innerHTML = "<div>\n    <h1>Shopping List</h1>\n    <input placeholder=\"please add your item\" id=\"itemInput\" type=\"text\"/> <button id=\"addItemButton\" >add item</button>\n    <button id=\"hideItems\">hideItems</button>\n    <ul id=\"itemList\"></ul>\n    <input placeholder=\"search\" id=\"search\" type=\"text\"/>\n</div>";
var itemInput = document.getElementById('itemInput');
var searchInput = document.getElementById('search');
var listItem = document.getElementById('itemList');
var ShoppingList = /** @class */ (function () {
    function ShoppingList() {
        var _this = this;
        this.groceries = [];
        this.render = function () {
            var old = document.querySelectorAll('li');
            old.forEach(function (node) {
                node.parentNode.removeChild(node);
            });
            if (_this.groceries) {
                for (var _i = 0, _a = _this.groceries; _i < _a.length; _i++) {
                    var g = _a[_i];
                    _this.showItemInElem(g, 'li');
                }
            }
            itemInput.value = '';
        };
        this.render_search = function () {
            var old = document.querySelectorAll('li');
            old.forEach(function (node) {
                node.parentNode.removeChild(node);
            });
            if (_this.groceries) {
                for (var _i = 0, _a = _this.groceries; _i < _a.length; _i++) {
                    var g = _a[_i];
                    var regex = new RegExp(searchInput.value);
                    if (regex.test(g))
                        _this.showItemInElem(g, 'li');
                }
            }
        };
    }
    ShoppingList.prototype.construcor = function () {
        this.groceries = [];
    };
    ShoppingList.prototype.addItem = function (item) {
        this.groceries = __spreadArray(__spreadArray([], this.groceries, true), [item], false); //push is 7raaaam use concat instead
    };
    ShoppingList.prototype.removeItem = function (item) {
        this.groceries = this.groceries.filter(function (grocery) {
            return item !== grocery;
        });
    };
    ShoppingList.prototype.showItemInElem = function (item, elem) {
        var _this = this;
        var node = document.createElement(elem);
        var text = document.createTextNode(item);
        node.appendChild(text);
        var rmbtn = document.createElement('button');
        // rmbtn.id = 'remove' + this.groceries.indexOf('item') + this.groceries.length;
        rmbtn.innerHTML = 'remove';
        rmbtn.addEventListener('click', function () {
            // console.log(rmbtn.innerHTML);
            _this.removeItem(item);
            rmbtn.parentNode.parentNode.removeChild(rmbtn.parentNode);
        });
        node.appendChild(rmbtn);
        listItem.appendChild(node);
    };
    ShoppingList.prototype.attachEvents = function () {
        var _this = this;
        // add element
        var addItemButton = document.getElementById('addItemButton');
        addItemButton.addEventListener('click', function () {
            if (!itemInput.value)
                return;
            _this.addItem(itemInput.value);
            _this.render();
        });
        var listElem = document.getElementById('hideItems');
        listElem.addEventListener('click', function () {
            // if (!itemInput.value) return;
            listElem.classList.toggle('activated');
            var old = document.querySelectorAll('li');
            old.forEach(function (node) {
                node.parentNode.removeChild(node);
            });
        });
        var search = document.getElementById('search');
        search.addEventListener('change', function () {
            console.log('change');
            if (!searchInput.value)
                return;
            _this.render_search();
        });
    };
    return ShoppingList;
}());
var myList = new ShoppingList(); //component should have an uppercase by convention
myList.attachEvents();
myList.render();
console.log(myList);
