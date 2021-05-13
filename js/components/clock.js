function renderClock(selector){
const DOM = document.querySelector(selector);
const HTML = `<div class="time">
<div class="value">432</div>
  <div class="title">days</div>
 </div>`;

 DOM.innerHTML = HTML;
}
    export {renderClock}

    // <div class="time">
                   // <div class="value">432</div>
                 //   <div class="title">days</div>
               // </div> 