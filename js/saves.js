
function saves_but () {
    text.innerHTML = 'Saves';
    page_number = 3; // Номер страницы (Сохраненные - 3)

    center.innerHTML = '';
    center.innerHTML = '<!-- Ячейка сохранения 1 --><button id="button-saves1" class="button-center2 saves1"><div class="textButton">1</div></button><div id="saves1-color1" class="button-center3 saves1color savescolor1" style="background: transparent"></div><div id="saves1-color2" class="button-center3 saves1color savescolor2" style="background: transparent"></div><div id="saves1-color3" class="button-center3 saves1color savescolor3" style="background: transparent"></div><div id="saves1-color4" class="button-center3 saves1color savescolor4" style="background: transparent"></div><div id="saves1-color5" class="button-center3 saves1color savescolor5" style="background: transparent"></div><button id="button-saves1-load" class="button-center2 saves1-load"><i class="fa fa-cloud-download"></i></button><!-- Ячейка сохранения 2 --><button id="button-saves2" class="button-center2 saves2"><div class="textButton">2</div></button><div id="saves2-color1" class="button-center3 saves2color savescolor1" style="background: transparent"></div><div id="saves2-color2" class="button-center3 saves2color savescolor2" style="background: transparent"></div><div id="saves2-color3" class="button-center3 saves2color savescolor3" style="background: transparent"></div><div id="saves2-color4" class="button-center3 saves2color savescolor4" style="background: transparent"></div><div id="saves2-color5" class="button-center3 saves2color savescolor5" style="background: transparent"></div><button id="button-saves2-load" class="button-center2 saves2-load"><i class="fa fa-cloud-download"></i></button><!-- Ячейка сохранения 3 --><button id="button-saves3" class="button-center2 saves3"><div class="textButton">3</div></button><div id="saves3-color1" class="button-center3 saves3color savescolor1" style="background: transparent"></div><div id="saves3-color2" class="button-center3 saves3color savescolor2" style="background: transparent"></div><div id="saves3-color3" class="button-center3 saves3color savescolor3" style="background: transparent"></div><div id="saves3-color4" class="button-center3 saves3color savescolor4" style="background: transparent"></div><div id="saves3-color5" class="button-center3 saves3color savescolor5" style="background: transparent"></div><button id="button-saves3-load" class="button-center2 saves3-load"><i class="fa fa-cloud-download"></i></button><!-- Ячейка сохранения 4 --><button id="button-saves4" class="button-center2 saves4"><div class="textButton">4</div></button><div id="saves4-color1" class="button-center3 saves4color savescolor1" style="background: transparent"></div><div id="saves4-color2" class="button-center3 saves4color savescolor2" style="background: transparent"></div><div id="saves4-color3" class="button-center3 saves4color savescolor3" style="background: transparent"></div><div id="saves4-color4" class="button-center3 saves4color savescolor4" style="background: transparent"></div><div id="saves4-color5" class="button-center3 saves4color savescolor5" style="background: transparent"></div><button id="button-saves4-load" class="button-center2 saves4-load"><i class="fa fa-cloud-download"></i></button><!-- Ячейка сохранения 5 --><button id="button-saves5" class="button-center2 saves5"><div class="textButton">5</div></button><div id="saves5-color1" class="button-center3 saves5color savescolor1" style="background: transparent"></div><div id="saves5-color2" class="button-center3 saves5color savescolor2" style="background: transparent"></div><div id="saves5-color3" class="button-center3 saves5color savescolor3" style="background: transparent"></div><div id="saves5-color4" class="button-center3 saves5color savescolor4" style="background: transparent"></div><div id="saves5-color5" class="button-center3 saves5color savescolor5" style="background: transparent"></div><button id="button-saves5-load" class="button-center2 saves5-load"><i class="fa fa-cloud-download"></i></button>';
    gear_button.innerHTML = '<i class="fa fa-cog"></i>';
    gear_button.addEventListener('click', function() {
        gear();
    });

    let button_saves1 = document.getElementById('button-saves1');
    let button_saves2 = document.getElementById('button-saves2');
    let button_saves3 = document.getElementById('button-saves3');
    let button_saves4 = document.getElementById('button-saves4');
    let button_saves5 = document.getElementById('button-saves5');

    let button_saves1_load = document.getElementById('button-saves1-load');
    let button_saves2_load = document.getElementById('button-saves2-load');
    let button_saves3_load = document.getElementById('button-saves3-load');
    let button_saves4_load = document.getElementById('button-saves4-load');
    let button_saves5_load = document.getElementById('button-saves5-load');

    let saves1_color1 = document.getElementById('saves1-color1');
    let saves1_color2 = document.getElementById('saves1-color2');
    let saves1_color3 = document.getElementById('saves1-color3');
    let saves1_color4 = document.getElementById('saves1-color4');
    let saves1_color5 = document.getElementById('saves1-color5');

    let saves2_color1 = document.getElementById('saves2-color1');
    let saves2_color2 = document.getElementById('saves2-color2');
    let saves2_color3 = document.getElementById('saves2-color3');
    let saves2_color4 = document.getElementById('saves2-color4');
    let saves2_color5 = document.getElementById('saves2-color5');

    let saves3_color1 = document.getElementById('saves3-color1');
    let saves3_color2 = document.getElementById('saves3-color2');
    let saves3_color3 = document.getElementById('saves3-color3');
    let saves3_color4 = document.getElementById('saves3-color4');
    let saves3_color5 = document.getElementById('saves3-color5');

    let saves4_color1 = document.getElementById('saves4-color1');
    let saves4_color2 = document.getElementById('saves4-color2');
    let saves4_color3 = document.getElementById('saves4-color3');
    let saves4_color4 = document.getElementById('saves4-color4');
    let saves4_color5 = document.getElementById('saves4-color5');

    let saves5_color1 = document.getElementById('saves5-color1');
    let saves5_color2 = document.getElementById('saves5-color2');
    let saves5_color3 = document.getElementById('saves5-color3');
    let saves5_color4 = document.getElementById('saves5-color4');
    let saves5_color5 = document.getElementById('saves5-color5');

    send('saves');
    saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
	log('Saves1_color1 set');

    button_saves1.addEventListener('click', function() {
        saves1[0] = FRT_LH_R;
        send('loa11r' + FRT_LH_R);
        log('Saves1 load 5%');
        saves1[1] = FRT_LH_G;
        setTimeout(() => {  send('loa11g' + FRT_LH_G); }, 70);
        log('Saves1 load 10%');
        saves1[2] = FRT_LH_B;
        setTimeout(() => {  send('loa11b' + FRT_LH_B); }, 70);
        log('Saves1 load 15%');
        saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
        log('Saves1 load 100% !!!');
    });
    
    button_saves1_load.addEventListener('click', function() {
        FRT_LH_R = saves1[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 70);
        FRT_LH_G = saves1[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 70);
        FRT_LH_B = saves1[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 70);
        log('Saves1 set!!!');
    });
}