let slider_red = document.getElementById('myRange-red');
let output_red = document.getElementById('rangevalue-red');
let slider_green = document.getElementById('myRange-green');
let output_green = document.getElementById('rangevalue-green');
let slider_blue = document.getElementById('myRange-blue');
let output_blue = document.getElementById('rangevalue-blue');
let color = document.getElementById('color');
let FRT_RH_R = 0;
let FRT_RH_G = 0;
let FRT_RH_B = 0;

output_red.innerHTML = slider_red.value;
output_green.innerHTML = slider_green.value;
output_blue.innerHTML = slider_blue.value;

slider_red.oninput = function() {
    output_red.innerHTML = this.value;
    FRT_RH_R = this.value;
    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
    send('lfrr' + FRT_RH_R );
}
slider_green.oninput = function() {
    output_green.innerHTML = this.value;
    FRT_RH_G = this.value;
    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
    send('lfrg' + FRT_RH_G );
}
slider_blue.oninput = function() {
    output_blue.innerHTML = this.value;
    FRT_RH_B = this.value;
    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
    send('lfrb' + FRT_RH_B );
}

