
function saves_but () {
    send('sav');
    log('saves');
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

    /*send('saves');
    saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
	log('Saves1_color1 set');*/

    saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
    saves1_color2.style.background = 'rgb(' + saves1[3] + ", " + saves1[4] + ", " + saves1[5] + ")";
    saves1_color3.style.background = 'rgb(' + saves1[6] + ", " + saves1[7] + ", " + saves1[8] + ")";
    saves1_color4.style.background = 'rgb(' + saves1[9] + ", " + saves1[10] + ", " + saves1[11] + ")";
    saves1_color5.style.background = 'rgb(' + saves1[12] + ", " + saves1[13] + ", " + saves1[14] + ")";
    
    saves2_color1.style.background = 'rgb(' + saves2[0] + ", " + saves2[1] + ", " + saves2[2] + ")";
    saves2_color2.style.background = 'rgb(' + saves2[3] + ", " + saves2[4] + ", " + saves2[5] + ")";
    saves2_color3.style.background = 'rgb(' + saves2[6] + ", " + saves2[7] + ", " + saves2[8] + ")";
    saves2_color4.style.background = 'rgb(' + saves2[9] + ", " + saves2[10] + ", " + saves2[11] + ")";
    saves2_color5.style.background = 'rgb(' + saves2[12] + ", " + saves2[13] + ", " + saves2[14] + ")";
    
    saves3_color1.style.background = 'rgb(' + saves3[0] + ", " + saves3[1] + ", " + saves3[2] + ")";
    saves3_color2.style.background = 'rgb(' + saves3[3] + ", " + saves3[4] + ", " + saves3[5] + ")";
    saves3_color3.style.background = 'rgb(' + saves3[6] + ", " + saves3[7] + ", " + saves3[8] + ")";
    saves3_color4.style.background = 'rgb(' + saves3[9] + ", " + saves3[10] + ", " + saves3[11] + ")";
    saves3_color5.style.background = 'rgb(' + saves3[12] + ", " + saves3[13] + ", " + saves3[14] + ")";

    saves4_color1.style.background = 'rgb(' + saves4[0] + ", " + saves4[1] + ", " + saves4[2] + ")";
    saves4_color2.style.background = 'rgb(' + saves4[3] + ", " + saves4[4] + ", " + saves4[5] + ")";
    saves4_color3.style.background = 'rgb(' + saves4[6] + ", " + saves4[7] + ", " + saves4[8] + ")";
    saves4_color4.style.background = 'rgb(' + saves4[9] + ", " + saves4[10] + ", " + saves4[11] + ")";
    saves4_color5.style.background = 'rgb(' + saves4[12] + ", " + saves4[13] + ", " + saves4[14] + ")";

    saves5_color1.style.background = 'rgb(' + saves5[0] + ", " + saves5[1] + ", " + saves5[2] + ")";
    saves5_color2.style.background = 'rgb(' + saves5[3] + ", " + saves5[4] + ", " + saves5[5] + ")";
    saves5_color3.style.background = 'rgb(' + saves5[6] + ", " + saves5[7] + ", " + saves5[8] + ")";
    saves5_color4.style.background = 'rgb(' + saves5[9] + ", " + saves5[10] + ", " + saves5[11] + ")";
    saves5_color5.style.background = 'rgb(' + saves5[12] + ", " + saves5[13] + ", " + saves5[14] + ")";

    button_saves1.addEventListener('click', function() {
        /* 1 сектор */
        saves1[0] = FRT_LH_R;
        send('loa11r' + FRT_LH_R);
        log('Saves1 load 1%');
        saves1[1] = FRT_LH_G;
        setTimeout(() => {  send('loa11g' + FRT_LH_G); }, 150);
        log('Saves1 load 2%');
        saves1[2] = FRT_LH_B;
        setTimeout(() => {  send('loa11b' + FRT_LH_B); }, 300);
        log('Saves1 load 3%');
        saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
        log('Saves1 load 4%');
        /* 2 сектор */
        saves1[3] = FRT_RH_R;
        setTimeout(() => {  send('loa12r' + FRT_RH_R); }, 450);
        log('Saves1 load 5%');
        saves1[4] = FRT_RH_G;
        setTimeout(() => {  send('loa12g' + FRT_RH_G); }, 600);
        log('Saves1 load 6%');
        saves1[5] = FRT_RH_B;
        setTimeout(() => {  send('loa12b' + FRT_RH_B); }, 750);
        log('Saves1 load 7%');
        saves1_color2.style.background = 'rgb(' + saves1[3] + ", " + saves1[4] + ", " + saves1[5] + ")";
        log('Saves1 load 8%');
        /* 3 сектор */
        saves1[6] = RR_LH_R;
        setTimeout(() => {  send('loa13r' + RR_LH_R); }, 900);
        log('Saves1 load 9%');
        saves1[7] = RR_LH_G;
        setTimeout(() => {  send('loa13g' + RR_LH_G); }, 1050);
        log('Saves1 load 10%');
        saves1[8] = RR_LH_B;
        setTimeout(() => {  send('loa13b' + RR_LH_B); }, 1200);
        log('Saves1 load 11%');
        saves1_color3.style.background = 'rgb(' + saves1[6] + ", " + saves1[7] + ", " + saves1[8] + ")";
        log('Saves1 load 12%');
        /* 4 сектор */
        saves1[9] = RR_RH_R;
        setTimeout(() => {  send('loa14r' + RR_RH_R); }, 1350);
        log('Saves1 load 13%');
        saves1[10] = RR_RH_G;
        setTimeout(() => {  send('loa14g' + RR_RH_G); }, 1500)
        log('Saves1 load 14%');
        saves1[11] = RR_RH_B;
        setTimeout(() => {  send('loa14b' + RR_RH_B); }, 1650);
        log('Saves1 load 15%');
        saves1_color4.style.background = 'rgb(' + saves1[9] + ", " + saves1[10] + ", " + saves1[11] + ")";
        log('Saves1 load 16%');
        /* 5 сектор */
        saves1[12] = LENTA_R;
        setTimeout(() => {  send('loa15r' + LENTA_R); }, 1650);
        log('Saves1 load 17%');
        saves1[13] = LENTA_G;
        setTimeout(() => {  send('loa15g' + LENTA_G); }, 1800);
        log('Saves1 load 18%');
        saves1[14] = LENTA_B;
        setTimeout(() => {  send('loa15b' + LENTA_B); }, 1950);
        log('Saves1 load 19%');
        saves1_color5.style.background = 'rgb(' + saves1[12] + ", " + saves1[13] + ", " + saves1[14] + ")";
        log('Saves1 load 20% !!!');
    });
    
    button_saves1_load.addEventListener('click', function() {
        FRT_LH_R = saves1[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 150);
        log('Saves1 set 1%');
        FRT_LH_G = saves1[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 300);
        log('Saves1 set 2%');
        FRT_LH_B = saves1[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 450);
        log('Saves1 set 3%');
        saves1_color1.style.background = 'rgb(' + saves1[0] + ", " + saves1[1] + ", " + saves1[2] + ")";
        FRT_RH_R = saves1[3];
        setTimeout(() => {  send('lfrr' + FRT_RH_R ); }, 600);
        log('Saves1 set 4%');
        FRT_RH_G = saves1[4];
        setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 750);
        log('Saves1 set 5%');
        FRT_RH_B = saves1[5];
        setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 900);
        log('Saves1 set 6%');
        saves1_color2.style.background = 'rgb(' + saves1[3] + ", " + saves1[4] + ", " + saves1[5] + ")";
        RR_LH_R = saves1[6];
        setTimeout(() => {  send('lrlr' + RR_LH_R ); }, 1050);
        log('Saves1 set 7%');
        RR_LH_G = saves1[7];
        setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 1200);
        log('Saves1 set 8%');
        RR_LH_B = saves1[8];
        setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 1350);
        log('Saves1 set 9%');
        saves1_color3.style.background = 'rgb(' + saves1[6] + ", " + saves1[7] + ", " + saves1[8] + ")";
        RR_RH_R = saves1[9];
        setTimeout(() => {  send('lrrr' + RR_RH_R ); }, 1500);
        log('Saves1 set 10%');
        RR_RH_G = saves1[10];
        setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 1650);
        log('Saves1 set 11%');
        RR_RH_B = saves1[11];
        setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 1800);
        log('Saves1 set 12%');
        saves1_color4.style.background = 'rgb(' + saves1[9] + ", " + saves1[10] + ", " + saves1[11] + ")";
        LENTA_R = saves1[12];
        setTimeout(() => {  send('lenr' + LENTA_R ); }, 1950);
        log('Saves1 set 13%');
        LENTA_G = saves1[13];
        setTimeout(() => {  send('leng' + LENTA_G ); }, 2100);
        log('Saves1 set 14%');
        LENTA_B = saves1[14];
        setTimeout(() => {  send('lenb' + LENTA_B ); }, 2250);
        log('Saves1 set 15% !!!');
        saves1_color5.style.background = 'rgb(' + saves1[12] + ", " + saves1[13] + ", " + saves1[14] + ")";
    });
}