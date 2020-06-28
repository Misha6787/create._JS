'use strict';
const   blockCreateElem = document.querySelector('.blockCreateElem');
const   inp = document.querySelector('#inp');
const   button = document.querySelector('button');

function DomElement( selector = '.class', height = '24px', width = '100px', bg = 'red', fontSize = '20px' ){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
    DomElement.prototype.createElem = function(selector){
        if(selector !== ''){
            this.selector = selector;
        }
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
        block.textContent = text;
        blockCreateElem.append(block);
    };
const domElement = new DomElement();
button.addEventListener('click', function () { 
    const selector = inp.value;
    domElement.createElem(selector);
});


const check = document.querySelector('.check');
check.addEventListener('click', function(){
    console.log(domElement);
});