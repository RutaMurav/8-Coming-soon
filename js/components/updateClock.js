import {formatNumber} ftom './formatNumber.js'


function updateClock(DOMelements, timeValues){
    for (let i=0; i < DOMelements.lenght, i++) {
        DOMelements[i].innerText = timeValues[i]
    }

}
export { updateClock}