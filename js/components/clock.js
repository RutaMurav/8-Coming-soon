import {formatNumber} from './formatNumber'; 

function renderClock(selector){
const DOM = document.querySelector(selector);

const time = [432, 9, 37, 39];
const titles = ['days','hours','minutes','seconds'];
let HTML = '';
for (let i = 0; i < titles.length; i++){
HTML += `<div class="time">
<div class="value">${time[i]}</div>
  <div class="title">${titles[i]}</div>
  <div> `;
}

 DOM.innerHTML = HTML;
}
    export {renderClock}
