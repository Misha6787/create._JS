'use strict';
const   input = document.querySelector('#input'),
        textArea = document.querySelector('.textArea'),
        button = document.querySelector('.button'),
        heightInput = document.querySelector('.heightInput'),
        widthInput = document.querySelector('.widthInput'),
        bgInput = document.querySelector('.bgInput'),
        fontSizeInput = document.querySelector('.fontSizeInput'),
        addStyle = document.querySelector('.addStyle');

const DomElement = function(){
    DomElement.prototype.createElem = function(selector, height, width, bg, fontSize){
        this.selector = selector;
        this.height = height; 
        this.width = width; 
        this.bg = bg; 
        this.fontSize = fontSize;
        if(this.selector.substring(0, 1) === '.'){
            const div = document.createElement('div');
            const text = this.selector.slice(1);

            div.setAttribute('class',text);
            div.innerHTML = `Hello_Wolrd, it's me! ${text}`;
            textArea.append(div);

        } else if(this.selector.substring(0, 1) === '#'){
            const id = document.createElement('div');
            const text = this.selector.slice(1);

            id.setAttribute('id',text);
            id.innerHTML = `Hello_Wolrd, it's me! ${text}`;
            textArea.append(id);

        }
        input.value = '';
        textArea.style.cssText = 
        `
        height: ${this.height};
        width: ${this.width};
        background-color: ${this.bg};
        font-size: ${this.fontSize};
        `;
    };
};
let domElement;

button.addEventListener('click', function(){
    const selector = input.value;
    const height = heightInput.value;
    const width = widthInput.value;
    const bg = bgInput.value;
    const fontSize = fontSizeInput.value;

    domElement = new DomElement();
    return DomElement.prototype.createElem(selector, height, width, bg, fontSize);
});

const check = document.querySelector('.check');
check.addEventListener('click', function(){
    console.log(domElement);
});

