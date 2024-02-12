//area of triangle
function calculateTriangle(){
    const baseInput=document.getElementById('triangleBase');
    const baseInputText=parseFloat(baseInput.value);

    const heightInput=document.getElementById('triangleHeight');
    const heightInputText=parseFloat(heightInput.value);
    const area=(baseInputText*heightInputText)/2
    const totalArea=document.getElementById('totalArea');
    if (heightInputText<=0 || baseInputText<=0) {
        totalArea.innerText='enter valid Height and Base';
    }else{
        totalArea.innerText=area;
    }
}
//area of rectangle
function calculateRectangle() {
    const widthInput=document.getElementById('rectangleWidth');
    const widthInputText=parseFloat(widthInput.value);

    const lengthInput=document.getElementById('rectangleLength');
    const lengthInputText=parseFloat(lengthInput.value);

    const area=(widthInputText*lengthInputText)

    const totalAreaRectangle=document.getElementById('totalAreaRectangle');
    if (widthInputText<=0 || lengthInputText<=0) {
        totalAreaRectangle.innerText='enter valid Height and Base';
    }else{
        totalAreaRectangle.innerText=area;
    }
}