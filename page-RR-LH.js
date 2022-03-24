let slider_red = document.getElementById('myRange-red');
let output_red = document.getElementById('rangevalue-red');
let slider_green = document.getElementById('myRange-green');
let output_green = document.getElementById('rangevalue-green');
let slider_blue = document.getElementById('myRange-blue');
let output_blue = document.getElementById('rangevalue-blue');
let color = document.getElementById('color');
let RR_LH_R = 0;
let RR_LH_G = 0;
let RR_LH_B = 0;

output_red.innerHTML = slider_red.value;
output_green.innerHTML = slider_green.value;
output_blue.innerHTML = slider_blue.value;

slider_red.oninput = function() {
    output_red.innerHTML = this.value;
    RR_LH_R = this.value;
    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
    send('lflr' + RR_LH_R );
}
slider_green.oninput = function() {
    output_green.innerHTML = this.value;
    RR_LH_G = this.value;
    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
    send('lflg' + RR_LH_G );
}
slider_blue.oninput = function() {
    output_blue.innerHTML = this.value;
    RR_LH_B = this.value;
    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
    send('lflb' + RR_LH_B );
}

