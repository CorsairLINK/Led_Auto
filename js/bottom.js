let center = document.getElementById('center');
let legs_button = document.getElementById('legs-button');
let lenta_button = document.getElementById('lenta-button');
let panel_button = document.getElementById('panel-button');
let temp_button = document.getElementById('temp-button');

// Нижние кнопки
legs_button.addEventListener('click', function(){
    legs_button.style.color = 'rgb(0, 179, 96)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
});
lenta_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgb(0, 179, 96)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
});
panel_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgb(0, 179, 96)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
});
temp_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgb(0, 179, 96)';
    temp_center();
});



function temp_center() {
    center.innerHTML = '';
    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue-red">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue-green">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue-blue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
    
    let slider_red = document.getElementById('myRange-red');
let output_red = document.getElementById('rangevalue-red');
let slider_green = document.getElementById('myRange-green');
let output_green = document.getElementById('rangevalue-green');
let slider_blue = document.getElementById('myRange-blue');
let output_blue = document.getElementById('rangevalue-blue');
let color = document.getElementById('color');
let FRT_LH_R = 0;
let FRT_LH_G = 0;
let FRT_LH_B = 0;

output_red.innerHTML = slider_red.value;
output_green.innerHTML = slider_green.value;
output_blue.innerHTML = slider_blue.value;

slider_red.oninput = function() {
    output_red.innerHTML = this.value;
    FRT_LH_R = this.value;
    color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
    send('lrlr' + FRT_LH_R );
}
slider_green.oninput = function() {
    output_green.innerHTML = this.value;
    FRT_LH_G = this.value;
    color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
    send('lrlg' + FRT_LH_G );
}
slider_blue.oninput = function() {
    output_blue.innerHTML = this.value;
    FRT_LH_B = this.value;
    color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
    send('lrlb' + FRT_LH_B );
}
}
// center.insertAdjacentHTML('<button id="button-FRT-LH" type="button-FRT-LH" class="button2 FRT LH">FRT LH</button>');
// rgb(0, 179, 96)  rgba(0,0,0,0.4)