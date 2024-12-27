
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const colorBox = document.getElementById('color-box');
const copyButton = document.getElementById('copyButton');
const inputType = document.getElementById('inputType');


function updateColor() {
    
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    
    colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

   
    inputType.textContent = `rgb(${red}, ${green}, ${blue})`;
}


redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);


function copyToClipboard() {
    const rgbValue = inputType.textContent;

    
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = rgbValue;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    
    alert('RGB value copied to clipboard: ' + rgbValue);
}


copyButton.addEventListener('click', copyToClipboard);


updateColor();
