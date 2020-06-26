'use strict';
const   blockCreateElem = document.querySelector('.blockCreateElem');

// Загатовка class = selector = '.class', height = '40px', width = '120px', bg = 'blue', fontSize = '18px'
function DomElement(selector = '#id', height = '24px', width = '100px', bg = 'red', fontSize = '20px'){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
    DomElement.prototype.createElem = function(){
        let block;
        const text = this.selector.slice(1);
        this.selector.substring(0, 1) === '.' ? block = document.createElement('div') : block = document.createElement('p');
        this.selector.substring(0, 1) === '.' ? block.setAttribute('class',text) : block.setAttribute('id', text);
        block.style.cssText = 
        `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        `;
        block.innerHTML = `${text}`;
        blockCreateElem.append(block);
    };
const domElement = new DomElement();

domElement.createElem();

const check = document.querySelector('.check');
check.addEventListener('click', function(){
    console.log(domElement);
});