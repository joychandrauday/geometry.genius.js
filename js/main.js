/////common function to fetch data with id
function getValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const InputText = parseFloat(inputField.value);
    return InputText;
}
function addToShowCase(shapeType, area) {
    const showCaseArea = document.getElementById('areaShowCaseOl');
    const li = document.createElement('li');
    li.classList.add("items");
    li.innerHTML = 'the area of the ' + shapeType + ' is ' + area + ' cm(sq).<button id=convertBtn class="btn btn-success btn-sm text-white">Convert to Meter</button>';
    showCaseArea.appendChild(li);
    //convert to meter 
    document.getElementById('convertBtn').addEventListener('click', function converCmToM() {
        area = area / 100;
        li.innerHTML = 'the area of the ' + shapeType + ' is ' + area + ' m(sq).<button id=convertBtn class="btn btn-warning btn-sm text-white">Convert to Meter</button>';
    })

}
/////common function to fetch data with id


//area of triangle
function calculateTriangle() {
    const baseInput = document.getElementById('triangleBase');
    const baseInputText = parseFloat(baseInput.value);

    const heightInput = document.getElementById('triangleHeight');
    const heightInputText = parseFloat(heightInput.value);
    const area = (baseInputText * heightInputText) / 2
    const totalArea = document.getElementById('totalArea');
    if (heightInputText <= 0 || baseInputText <= 0) {
        totalArea.innerText = 'enter valid Height and Base';
    } else {
        totalArea.innerText = area;
    }

    addToShowCase("triangle", area);

}
//area of rectangle
function calculateRectangle() {
    const widthInput = document.getElementById('rectangleWidth');
    const widthInputText = parseFloat(widthInput.value);

    const lengthInput = document.getElementById('rectangleLength');
    const lengthInputText = parseFloat(lengthInput.value);

    const area = (widthInputText * lengthInputText)

    const totalAreaRectangle = document.getElementById('totalAreaRectangle');
    if (widthInputText <= 0 || lengthInputText <= 0) {
        totalAreaRectangle.innerText = 'enter valid Height and Base';
    } else {
        totalAreaRectangle.innerText = area;
    }
    addToShowCase("rectangle", area)
}



function calculateParallelogram() {
    const base = getValue('parallelogramBase');
    const height = getValue('parallelogramHeight');

    const area = base * height;
    const totalAreaParallelogram = document.getElementById('totalAreaParallelogram');
    if (base <= 0 || height <= 0) {
        totalAreaParallelogram.innerText = 'enter valid Height and Base';
    } else {
        totalAreaParallelogram.innerText = area;
    }
    addToShowCase("parallelogram", area)
}



//area of rhombus
function calculateRhombus() {
    const d1 = getValue('rhombusD1');
    const d2 = getValue('rhombusD2');

    const area = (d1 * d2) / 2;
    const totalAreaRhombus = document.getElementById('totalAreaRhombus');
    if (d1 <= 0 || d2 <= 0) {
        totalAreaRhombus.innerText = 'enter valid Height and Base';
    } else {
        totalAreaRhombus.innerText = area;
    }
    addToShowCase("rohmbus", area)
}

//area of pentagon
function calculatePentagon() {
    const side = getValue('pentagonSide');
    const apothom = getValue('pentagonApothom');

    const area = (5 / 2) * side * apothom;
    const totalAreaPentagon = document.getElementById('totalAreaPentagon');
    if (side <= 0 || apothom <= 0) {
        totalAreaPentagon.innerText = 'enter valid Side and Apothom';
    } else {
        totalAreaPentagon.innerText = area;
    }
    addToShowCase("pentagon", area)
}

//area of ellipse
function calculateEllipse() {
    const shortest = getValue('ellipseShortest');
    const longest = getValue('ellipseLongest');

    let area = Math.PI * shortest * longest;
    area = area.toFixed(2);
    const totalAreaEllipse = document.getElementById('totalAreaEllipse');
    if (shortest <= 0 || longest <= 0 || shortest > longest) {
        totalAreaEllipse.innerText = 'enter valid Side and Apothom';
    } else {
        totalAreaEllipse.innerText = area;
    }
    addToShowCase("ellipse", area)
}
//bg change
function bigImg(x) {
    x.style.backgroundColor = "tomato";
    x.style.color = "white";

    x.childNodes[1].classList.remove("bg-base-100");
}

function normalImg(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
}



//on scroll
function displayResult() {
    const resultDiv = document.getElementById('resultDiv')
    resultDiv.style.display = 'block';
}
