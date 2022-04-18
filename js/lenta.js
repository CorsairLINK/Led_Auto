let LENTA_R = 0;
let LENTA_G = 0;
let LENTA_B = 0;

function lenta_but () {
    text.innerHTML = 'Lenta';
    page_number = 1; // Номер страницы (Лента - 1)

    center.innerHTML = '';
	center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{LENTA_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{LENTA_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{LENTA_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
    gear_button.innerHTML = '<i class="fa fa-cog"></i>';
    gear_button.addEventListener('click', function() {
        gear();
    });
    let slider_red = document.getElementById('myRange-red');
	let output_red = document.getElementById('rangevalue-red');
	let slider_green = document.getElementById('myRange-green');
	let output_green = document.getElementById('rangevalue-green');
	let slider_blue = document.getElementById('myRange-blue');
	let output_blue = document.getElementById('rangevalue-blue');
	let color = document.getElementById('color');
    let reset = document.getElementById('reset');
	reset.addEventListener('click', function() {
        LENTA_R = 0;
        LENTA_G = 0;
        LENTA_B = 0;
        output_red.innerHTML = LENTA_R;
        slider_red.value = LENTA_R;
        output_green.innerHTML = LENTA_G;
        slider_green.value = LENTA_G;
        output_blue.innerHTML = LENTA_B;
        slider_blue.value = LENTA_B;
        color.style.background = 'rgb(' + LENTA_R + ", " + LENTA_G + ", " + LENTA_B + ")";
        send('lenr' + LENTA_R );
        setTimeout(() => {  send('leng' + LENTA_G ); }, 75);
		setTimeout(() => {  send('lenb' + LENTA_B ); }, 75);
        log('reset color');
    });

    output_red.innerHTML = LENTA_R;
	slider_red.value = LENTA_R;
	output_green.innerHTML = LENTA_G;
	slider_green.value = LENTA_G;
	output_blue.innerHTML = LENTA_B;
	slider_blue.value = LENTA_B;

    color.style.background = 'rgb(' + LENTA_R + ", " + LENTA_G + ", " + LENTA_B + ")";

    slider_red.oninput = function() {
        output_red.innerHTML = this.value;
        LENTA_R = this.value;
        color.style.background = 'rgb(' + LENTA_R + ", " + LENTA_G + ", " + LENTA_B + ")";
        log('out: lenr' + LENTA_R );
        send('lenr' + LENTA_R );
    }
    slider_green.oninput = function() {
        output_green.innerHTML = this.value;
        LENTA_G = this.value;
        color.style.background = 'rgb(' + LENTA_R + ", " + LENTA_G + ", " + LENTA_B + ")";
        log('out: leng' + LENTA_G );
        send('leng' + LENTA_G );
    }
    slider_blue.oninput = function() {
        output_blue.innerHTML = this.value;
        LENTA_B = this.value;
        color.style.background = 'rgb(' + LENTA_R + ", " + LENTA_G + ", " + LENTA_B + ")";
        log('out: lenb' + LENTA_B );
        send('lenb' + LENTA_B );
    }
}