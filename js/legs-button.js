let FRT_LH_R = 0;
let FRT_LH_G = 0;
let FRT_LH_B = 0;

let FRT_RH_R = 0;
let FRT_RH_G = 0;
let FRT_RH_B = 0;

let RR_LH_R = 0;
let RR_LH_G = 0;
let RR_LH_B = 0;

let RR_RH_R = 0;
let RR_RH_G = 0;
let RR_RH_B = 0;

let ALL_R = 0;
let ALL_G = 0;
let ALL_B = 0;

let slp = 20;
let flag_din = 0;

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const color = rootStyles.getPropertyValue('--text-color');

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function button_back () {
	let gear_button = document.getElementById('gear');
	let text = document.getElementById('text');
	gear_button.innerHTML = '<i class="fa fa-cog"></i>';

	center.innerHTML = '';
	center.innerHTML = '<!-- Фронт левый --><button id="button-FRT-LH" type="button-FRT-LH" class="button-center FRT LH"><div class="textButton">FRT LH</div></button><!-- Фронт правый --><button id="button-FRT-RH" type="button-FRT-LH" class="button-center FRT RH"><div class="textButton">FRT RH</div></button><!-- Тыл левый --><button id="button-RR-LH" type="button-FRT-LH" class="button-center RR LH"><div class="textButton">RR LH</div></button><!-- Тыл правый --><button id="button-RR-RH" type="button-FRT-LH" class="button-center RR RH"><div class="textButton">RR RH</div></button><!-- Все --><button id="button-ALL" type="button-ALL" class="button-center ALL"><div class="textButton2">ALL</div></button><!-- Режим --><button id="button-DIN" type="button-DIN" class="button-center DIN"><div class="textButton3">din</div></button><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';

	text.innerHTML = 'Car Light';
	listner_main();
}
function listner_main () {
	let button_FRT_LH = document.getElementById('button-FRT-LH');
	let button_FRT_RH = document.getElementById('button-FRT-RH');
	let button_RR_LH = document.getElementById('button-RR-LH');
	let button_RR_RH = document.getElementById('button-RR-RH');
	let gear_button = document.getElementById('gear');
	let button_ALL = document.getElementById('button-ALL');
	let text = document.getElementById('text');
	let button_DIN = document.getElementById('button-DIN');

	button_FRT_LH.addEventListener('click', function(){
	    center.innerHTML = '';
	    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
	    gear_button.innerHTML = '<i class="fa fa-reply"></i>';

	    gear_button.addEventListener('click', function(){
	    	button_back();
	    });
	    let slider_red = document.getElementById('myRange-red');
		let output_red = document.getElementById('rangevalue-red');
		let slider_green = document.getElementById('myRange-green');
		let output_green = document.getElementById('rangevalue-green');
		let slider_blue = document.getElementById('myRange-blue');
		let output_blue = document.getElementById('rangevalue-blue');
		let color = document.getElementById('color');
		let text = document.getElementById('text');
		text.innerHTML = 'FRT LH';
	    output_red.innerHTML = FRT_LH_R;
	    slider_red.value = FRT_LH_R;
	    output_green.innerHTML = FRT_LH_G;
	    slider_green.value = FRT_LH_G;
	    output_blue.innerHTML = FRT_LH_B;
	    slider_blue.value = FRT_LH_B;

	    color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";

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
	});
	button_FRT_RH.addEventListener('click', function(){
	    center.innerHTML = '';
	    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
	    gear_button.innerHTML = '<i class="fa fa-reply"></i>';

	    gear_button.addEventListener('click', function(){
	    	button_back();
	    });

	    let slider_red = document.getElementById('myRange-red');
		let output_red = document.getElementById('rangevalue-red');
		let slider_green = document.getElementById('myRange-green');
		let output_green = document.getElementById('rangevalue-green');
		let slider_blue = document.getElementById('myRange-blue');
		let output_blue = document.getElementById('rangevalue-blue');
		let color = document.getElementById('color');
		let text = document.getElementById('text');
		text.innerHTML = 'FRT RH';
		output_red.innerHTML = FRT_RH_R;
	    slider_red.value = FRT_RH_R;
	    output_green.innerHTML = FRT_RH_G;
	    slider_green.value = FRT_RH_G;
	    output_blue.innerHTML = FRT_RH_B;
	    slider_blue.value = FRT_RH_B;

	    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";

		slider_red.oninput = function() {
		    output_red.innerHTML = this.value;
		    FRT_RH_R = this.value;
		    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
		    send('lrrr' + FRT_RH_R );
		}
		slider_green.oninput = function() {
		    output_green.innerHTML = this.value;
		    FRT_RH_G = this.value;
		    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
		    send('lrrg' + FRT_RH_G );
		}
		slider_blue.oninput = function() {
		    output_blue.innerHTML = this.value;
		    FRT_RH_B = this.value;
		    color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
		    send('lrrb' + FRT_RH_B );
		}
	});	
	button_RR_LH.addEventListener('click', function(){
	    center.innerHTML = '';
	    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
	    gear_button.innerHTML = '<i class="fa fa-reply"></i>';
	    gear_button.addEventListener('click', function(){
	    	button_back();
	    });
	    let slider_red = document.getElementById('myRange-red');
		let output_red = document.getElementById('rangevalue-red');
		let slider_green = document.getElementById('myRange-green');
		let output_green = document.getElementById('rangevalue-green');
		let slider_blue = document.getElementById('myRange-blue');
		let output_blue = document.getElementById('rangevalue-blue');
		let color = document.getElementById('color');
		let text = document.getElementById('text');
		text.innerHTML = 'RR LH';
	    output_red.innerHTML = RR_LH_R;
	    slider_red.value = RR_LH_R;
	    output_green.innerHTML = RR_LH_G;
	    slider_green.value = RR_LH_G;
	    output_blue.innerHTML = RR_LH_B;
	    slider_blue.value = RR_LH_B;

	    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
	    slider_red.oninput = function() {
		    output_red.innerHTML = this.value;
		    RR_LH_R = this.value;
		    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
		    send('lrrr' + RR_LH_R );
		}
		slider_green.oninput = function() {
		    output_green.innerHTML = this.value;
		    RR_LH_G = this.value;
		    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
		    send('lrrg' + RR_LH_G );
		}
		slider_blue.oninput = function() {
		    output_blue.innerHTML = this.value;
		    RR_LH_B = this.value;
		    color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
		    send('lrrb' + RR_LH_B );
		}
	});
	button_RR_RH.addEventListener('click', function(){
	    center.innerHTML = '';
	    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
	    gear_button.innerHTML = '<i class="fa fa-reply"></i>';
	    gear_button.addEventListener('click', function(){
	    	button_back();
	    });
	    let slider_red = document.getElementById('myRange-red');
		let output_red = document.getElementById('rangevalue-red');
		let slider_green = document.getElementById('myRange-green');
		let output_green = document.getElementById('rangevalue-green');
		let slider_blue = document.getElementById('myRange-blue');
		let output_blue = document.getElementById('rangevalue-blue');
		let color = document.getElementById('color');
		let text = document.getElementById('text');
		text.innerHTML = 'RR RH';
	    output_red.innerHTML = RR_RH_R;
	    slider_red.value = RR_RH_R;
	    output_green.innerHTML = RR_RH_G;
	    slider_green.value = RR_RH_G;
	    output_blue.innerHTML = RR_RH_B;
	    slider_blue.value = RR_RH_B;

	    color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
	    slider_red.oninput = function() {
		    output_red.innerHTML = this.value;
		    RR_RH_R = this.value;
		    color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
		    send('lrrr' + RR_RH_R );
		}
		slider_green.oninput = function() {
		    output_green.innerHTML = this.value;
		    RR_RH_G = this.value;
		    color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
		    send('lrrg' + RR_RH_G );
		}
		slider_blue.oninput = function() {
		    output_blue.innerHTML = this.value;
		    RR_RH_B = this.value;
		    color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
		    send('lrrb' + RR_RH_B );
		}
	});
	button_ALL.addEventListener('click', function(){
		center.innerHTML = '';
	    center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Блок вывода информации --><div id="terminal" class="terminal"></div>';
	    gear_button.innerHTML = '<i class="fa fa-reply"></i>';
	    gear_button.addEventListener('click', function(){
	    	button_back();
	    });
	    let slider_red = document.getElementById('myRange-red');
		let output_red = document.getElementById('rangevalue-red');
		let slider_green = document.getElementById('myRange-green');
		let output_green = document.getElementById('rangevalue-green');
		let slider_blue = document.getElementById('myRange-blue');
		let output_blue = document.getElementById('rangevalue-blue');
		let color = document.getElementById('color');
		let text = document.getElementById('text');
		text.innerHTML = 'ALL';

		FRT_LH_R = 0;
		FRT_LH_G = 0;
		FRT_LH_B = 0;

		FRT_RH_R = 0;
		FRT_RH_G = 0;
		FRT_RH_B = 0;

		RR_LH_R = 0;
		RR_LH_G = 0;
		RR_LH_B = 0;

		RR_RH_R = 0;
		RR_RH_G = 0;
		RR_RH_B = 0;

	    output_red.innerHTML = ALL_R;
	    slider_red.value = ALL_R;
	    output_green.innerHTML = ALL_G;
	    slider_green.value = ALL_G;
	    output_blue.innerHTML = ALL_B;
	    slider_blue.value = ALL_B;

	    color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
	    slider_red.oninput = function() {
		    output_red.innerHTML = this.value;
		    ALL_R = this.value;
		    color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
		    send('lrrr' + ALL_R );
			sleep(slp);
			send('lrlr' + ALL_R );
			sleep(slp);
			send('lfrr' + ALL_R );
			sleep(slp);
			send('lflr' + ALL_R );
			FRT_LH_R = ALL_R;
			FRT_RH_R = ALL_R;
			RR_LH_R = ALL_R;
			RR_RH_R = ALL_R;
		}
		slider_green.oninput = function() {
		    output_green.innerHTML = this.value;
		    ALL_G = this.value;
		    color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
		    send('lrrg' + ALL_G );
			sleep(slp);
			send('lrlg' + ALL_G );
			sleep(slp);
			send('lfrg' + ALL_G );
			sleep(slp);
			send('lflg' + ALL_G );
			FRT_LH_G = ALL_G;
			FRT_RH_G = ALL_G;
			RR_LH_G = ALL_G;
			RR_RH_G = ALL_G;
		}
		slider_blue.oninput = function() {
		    output_blue.innerHTML = this.value;
		    ALL_B = this.value;
		    color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
		    send('lrrb' + ALL_B );
			sleep(slp);
			send('lrlb' + ALL_B );
			sleep(slp);
			send('lfrb' + ALL_B );
			sleep(slp);
			send('lflb' + ALL_B );
			FRT_LH_B = ALL_B;
			FRT_RH_B = ALL_B;
			RR_LH_B = ALL_B;
			RR_RH_B = ALL_B;
		}
	});
	gear_button.addEventListener('click', function(){
		center.innerHTML = '';
		center.innerHTML = '<!-- Кнопка настройки --><button id="color1" type="button" class="button color1"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color2" type="button" class="button color2"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color3" type="button" class="button color3"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color4" type="button" class="button color4"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color5" type="button" class="button color5"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color6" type="button" class="button color6"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color7" type="button" class="button color7"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color8" type="button" class="button color8"><i class="fa fa-cog"></i></button>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function() {
			button_back();
		});
		let color1 = document.getElementById('color1');
		let color2 = document.getElementById('color2');
		let color3 = document.getElementById('color3');
		let color4 = document.getElementById('color4');
		let color5 = document.getElementById('color5');
		let color6 = document.getElementById('color6');
		let color7 = document.getElementById('color7');
		let color8 = document.getElementById('color8');
		/* rgb(0, 179, 96) rgb(30, 150, 200) rgb(245, 91, 91) rgb(240, 91, 245) rgb(165, 70, 253) rgb(253, 137, 70) rgb(90, 239, 250) rgb(198, 201, 54)*/
		color1.addEventListener('click', function () {
			root.style.setProperty('--text-color', 'rgb(0, 179, 96)');
		});
		color2.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(30, 150, 200)');
		});
		color3.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(245, 91, 91)');
		});
		color4.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(240, 91, 245)');
		});
		color5.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(165, 70, 253)');
		});
		color6.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(253, 137, 70)');
		});
		color7.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(90, 239, 250)');
		});
		color8.addEventListener('click', function () {
			
			root.style.setProperty('--text-color', 'rgb(198, 201, 54)');
		});
	});
	button_DIN.addEventListener('click', function(){
		if (flag_din === 1) {
			button_DIN.style.color = 'rgba(0,0,0,0.4)';
			button_DIN.innerHTML = 'off';
			send('nofnd');
			flag_din = 0;
			
		}
		else if (flag_din === 0) {
			button_DIN.style.color = 'red';
			button_DIN.innerHTML = 'on';
			send('fnd');
			flag_din = 1;
		}
	});
}

listner_main();