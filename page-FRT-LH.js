let slider_red = document.getElementById('myRange-red');
let output_red = document.getElementById('rangevalue-red');
let slider_green = document.getElementById('myRange-green');
let output_green = document.getElementById('rangevalue-green');
let slider_blue = document.getElementById('myRange-blue');
let output_blue = document.getElementById('rangevalue-blue');
let color = document.getElementById('color');
let R = 100;
let G = 0;
let B = 0;

output_red.innerHTML = slider_red.value;
output_green.innerHTML = slider_green.value;
output_blue.innerHTML = slider_blue.value;

slider_red.oninput = function() {
    output_red.innerHTML = this.value;
    R = this.value;
    color.style.background = 'rgb(' + R + ", " + G + ", " + B + ")";
    send('lrlr' + R );
}

slider_green.oninput = function() {
    output_green.innerHTML = this.value;
    G = this.value;
    color.style.background = 'rgb(' + R + ", " + G + ", " + B + ")";
}
slider_blue.oninput = function() {
    output_blue.innerHTML = this.value;
    B = this.value;
    color.style.background = 'rgb(' + R + ", " + G + ", " + B + ")";
}

