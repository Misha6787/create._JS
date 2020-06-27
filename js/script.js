'use strict';
const   blockCreateElem = document.querySelector('.blockCreateElem');
const   inp = document.querySelector('#inp');
const   button = document.querySelector('button');

function DomElement( selector = '.c', height = '24px', width = '100px', bg = 'red', fontSize = '20px' ){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
    DomElement.prototype.createElem = function( selector ){
        if(selector === ''){
            console.log('Берем дэфолтное значение');
        } else {
            this.selector = selector;
        }
        const text = this.selector.slice(1);
        if(this.selector.substring(0, 1) === '.'){
            blockCreateElem.insertAdjacentHTML('beforeend', `
            <style>
                .${text}{
                    height: ${this.height};
                    width: ${this.width};
                    background-color: ${this.bg};
                    font-size: ${this.fontSize};
                }
            </style>
            <div class="${text}">${text}</div>
            `);
            } else if(this.selector.substring(0, 1) === '#'){ 
            blockCreateElem.insertAdjacentHTML('beforeend', `
                <style>
                #${text}{
                    height: ${this.height};
                    width: ${this.width};
                    background-color: ${this.bg};
                    font-size: ${this.fontSize};
                }
                </style>
            <p id="${text}">${text}</p>`);
            }
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