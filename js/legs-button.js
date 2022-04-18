let flag_din = 0;


const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const color = rootStyles.getPropertyValue('--text-color');


function listner_main () {
	text.innerHTML = 'Car Light';
	page_number = 0; // Номер страницы (Ноги - 0)

	center.innerHTML = '';
	center.innerHTML = '<!-- Фронт левый --><button id="button-FRT-LH" type="button-FRT-LH" class="button-center FRT LH"><div class="textButton">FRT LH</div></button><!-- Фронт правый --><button id="button-FRT-RH" type="button-FRT-LH" class="button-center FRT RH"><div class="textButton">FRT RH</div></button><!-- Тыл левый --><button id="button-RR-LH" type="button-FRT-LH" class="button-center RR LH"><div class="textButton">RR LH</div></button><!-- Тыл правый --><button id="button-RR-RH" type="button-FRT-LH" class="button-center RR RH"><div class="textButton">RR RH</div></button><!-- Все --><button id="button-ALL" type="button-ALL" class="button-center ALL"><div class="textButton2">ALL</div></button><!-- Режим --><button id="button-DIN" type="button-DIN" class="button-center DIN"><div class="textButton3">din</div></button>';
	
	gear_button.innerHTML = '<i class="fa fa-cog"></i>';
	gear_button.addEventListener('click', function() {
		gear();
	});

	let button_FRT_LH = document.getElementById('button-FRT-LH');
	let button_FRT_RH = document.getElementById('button-FRT-RH');
	let button_RR_LH = document.getElementById('button-RR-LH');
	let button_RR_RH = document.getElementById('button-RR-RH');
	let button_ALL = document.getElementById('button-ALL');
	let button_DIN = document.getElementById('button-DIN');

	button_FRT_LH.addEventListener('click', function(){
		text.innerHTML = 'FRT LH';
		center.innerHTML = '';
		center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{FRT_LH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function(){
			listner_main();
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
			FRT_LH_R = 0;
			FRT_LH_G = 0;
			FRT_LH_B = 0;
			output_red.innerHTML = FRT_LH_R;
			slider_red.value = FRT_LH_R;
			output_green.innerHTML = FRT_LH_G;
			slider_green.value = FRT_LH_G;
			output_blue.innerHTML = FRT_LH_B;
			slider_blue.value = FRT_LH_B;
			color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
			send('lflr' + FRT_LH_R );
			setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 25);
			setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 25);
			log('reset color');
		});
		
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
			log('out: lflr' + FRT_LH_R );
			send('lflr' + FRT_LH_R );
		}
		slider_green.oninput = function() {
			output_green.innerHTML = this.value;
			FRT_LH_G = this.value;
			color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
			log('out: lflg' + FRT_LH_G );
			send('lflg' + FRT_LH_G );
		}
		slider_blue.oninput = function() {
			output_blue.innerHTML = this.value;
			FRT_LH_B = this.value;
			color.style.background = 'rgb(' + FRT_LH_R + ", " + FRT_LH_G + ", " + FRT_LH_B + ")";
			log('out: lflb' + FRT_LH_B );
			send('lflb' + FRT_LH_B );
		}
	});
	button_FRT_RH.addEventListener('click', function(){
		text.innerHTML = 'FRT RH';
		center.innerHTML = '';
		center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="0" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function(){
			listner_main();
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
			FRT_RH_R = 0;
			FRT_RH_G = 0;
			FRT_RH_B = 0;
			output_red.innerHTML = FRT_RH_R;
			slider_red.value = FRT_RH_R;
			output_green.innerHTML = FRT_RH_G;
			slider_green.value = FRT_RH_G;
			output_blue.innerHTML = FRT_RH_B;
			slider_blue.value = FRT_RH_B;
			color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
			send('lfrr' + FRT_RH_R );
			setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 50);
			setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 75);
			log('reset color');
		});

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
			log('out: lfrr' + FRT_RH_R );
			send('lfrr' + FRT_RH_R );
		}
		slider_green.oninput = function() {
			output_green.innerHTML = this.value;
			FRT_RH_G = this.value;
			color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
			log('out: lfrg' + FRT_RH_G );
			send('lfrg' + FRT_RH_G );
		}
		slider_blue.oninput = function() {
			output_blue.innerHTML = this.value;
			FRT_RH_B = this.value;
			color.style.background = 'rgb(' + FRT_RH_R + ", " + FRT_RH_G + ", " + FRT_RH_B + ")";
			log('out: lfrb' + FRT_RH_B );
			send('lfrb' + FRT_RH_B );
		}
	});	
	button_RR_LH.addEventListener('click', function(){
		text.innerHTML = 'RR LH';
		center.innerHTML = '';
		center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_LH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function(){
			listner_main();
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
			RR_LH_R = 0;
			RR_LH_G = 0;
			RR_LH_B = 0;
			output_red.innerHTML = RR_LH_R;
			slider_red.value = RR_LH_R;
			output_green.innerHTML = RR_LH_G;
			slider_green.value = RR_LH_G;
			output_blue.innerHTML = RR_LH_B;
			slider_blue.value = RR_LH_B;
			color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
			send('lrlr' + RR_LH_R );
			setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 75);
			setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 50);
			log('reset color');
		});
		
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
			log('out: lrlr' + RR_LH_R);
			send('lrlr' + RR_LH_R );
		}
		slider_green.oninput = function() {
			output_green.innerHTML = this.value;
			RR_LH_G = this.value;
			color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
			log('out: lrlg' + RR_LH_G);
			send('lrlg' + RR_LH_G );
		}
		slider_blue.oninput = function() {
			output_blue.innerHTML = this.value;
			RR_LH_B = this.value;
			color.style.background = 'rgb(' + RR_LH_R + ", " + RR_LH_G + ", " + RR_LH_B + ")";
			log('out: lrlb' + RR_LH_B);
			send('lrlb' + RR_LH_B );
		}
	});
	button_RR_RH.addEventListener('click', function(){
		text.innerHTML = 'RR RH';
		center.innerHTML = '';
		center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{RR_RH_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function(){
			gear_button.innerHTML = '<i class="fa fa-bars"></i>';
			listner_main();
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
			RR_RH_R = 0;
			RR_RH_G = 0;
			RR_RH_B = 0;
			output_red.innerHTML = RR_RH_R;
			slider_red.value = RR_RH_R;
			output_green.innerHTML = RR_RH_G;
			slider_green.value = RR_RH_G;
			output_blue.innerHTML = RR_RH_B;
			slider_blue.value = RR_RH_B;
			color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
			send('lrrr' + RR_RH_R );
			setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 50);
			setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 100);
			log('reset color');
		});
		
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
			log('out: lrrr' + RR_RH_R);
			send('lrrr' + RR_RH_R );
		}
		slider_green.oninput = function() {
			output_green.innerHTML = this.value;
			RR_RH_G = this.value;
			color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
			log('out: lrrg' + RR_RH_G);
			send('lrrg' + RR_RH_G );
		}
		slider_blue.oninput = function() {
			output_blue.innerHTML = this.value;
			RR_RH_B = this.value;
			color.style.background = 'rgb(' + RR_RH_R + ", " + RR_RH_G + ", " + RR_RH_B + ")";
			log('out: lrrb' + RR_RH_B);
			send('lrrb' + RR_RH_B );
		}
	});
	button_ALL.addEventListener('click', function(){
		text.innerHTML = 'ALL';
		center.innerHTML = '';
		center.innerHTML = '<!-- Блок вывода цвета --><button style="background: transparent" id="color" type="color" class="color"></button><!-- Ползунок выбора КРАСНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_R}" class="slider slide-red" id="myRange-red"><output id="rangevalue-red" class="rangevalue">0</output></div><!-- Ползунок выбора ЗЕЛЕНОГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_G}" class="slider slide-green" id="myRange-green"><output id="rangevalue-green" class="rangevalue">0</output></div><!-- Ползунок выбора СИНЕГО цвета --><div class="slidecontainer"><input type="range" min="0" max="255" value="{ALL_B}" class="slider slide-blue" id="myRange-blue"><output id="rangevalue-blue" class="rangevalue">0</output></div><!-- Кнопка сброса --><div id="reset" class="reset">R</div>';
		gear_button.innerHTML = '<i class="fa fa-reply"></i>';
		gear_button.addEventListener('click', function(){
			listner_main();
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
			ALL_R = 0;
			ALL_G = 0;
			ALL_B = 0;
			output_red.innerHTML = ALL_R;
			slider_red.value = ALL_R;
			output_green.innerHTML = ALL_G;
			slider_green.value = ALL_G;
			output_blue.innerHTML = ALL_B;
			slider_blue.value = ALL_B;
			color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
			send('allr' + ALL_R );
			setTimeout(() => {  send('allg' + ALL_G ); }, 50);
			setTimeout(() => {  send('allb' + ALL_B ); }, 50);
			log('reset color');
		});
		
		FRT_LH_R = ALL_R;
		FRT_LH_G = ALL_G;
		FRT_LH_B = ALL_B;

		FRT_RH_R = ALL_R;
		FRT_RH_G = ALL_G;
		FRT_RH_B = ALL_B;

		RR_LH_R = ALL_R;
		RR_LH_G = ALL_G;
		RR_LH_B = ALL_B;

		RR_RH_R = ALL_R;
		RR_RH_G = ALL_G;
		RR_RH_B = ALL_B;
		
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
			log('out: allr' + ALL_R);
			send('allr' + ALL_R );
			
			FRT_LH_R = ALL_R;
			FRT_RH_R = ALL_R;
			RR_LH_R = ALL_R;
			RR_RH_R = ALL_R;
		}
		slider_green.oninput = function() {
			output_green.innerHTML = this.value;
			ALL_G = this.value;
			color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
			log('out: allg' + ALL_G);
			send('allg' + ALL_G );

			FRT_LH_G = ALL_G;
			FRT_RH_G = ALL_G;
			RR_LH_G = ALL_G;
			RR_RH_G = ALL_G;
		}
		slider_blue.oninput = function() {
			output_blue.innerHTML = this.value;
			ALL_B = this.value;
			color.style.background = 'rgb(' + ALL_R + ", " + ALL_G + ", " + ALL_B + ")";
			log('out: allb' + ALL_B);
			send('allb' + ALL_B );
			FRT_LH_B = ALL_B;
			FRT_RH_B = ALL_B;
			RR_LH_B = ALL_B;
			RR_RH_B = ALL_B;
		}
	});
	button_DIN.addEventListener('click', function(){
		if (flag_din === 1) {
			button_DIN.style.color = 'rgba(0,0,0,0.4)';
			button_DIN.innerHTML = 'off';
			log('Dinamic OFF');
			send('dinf');
			flag_din = 0;
		}
		else if (flag_din === 0) {
			button_DIN.style.color = 'red';
			button_DIN.innerHTML = 'on';
			log('Dinamic ON');
			send('dino');
			flag_din = 1;
		}
	});
}
listner_main();