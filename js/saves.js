
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

    button_saves2.addEventListener('click', function() {
        /* 1 сектор */
        saves2[0] = FRT_LH_R;
        send('loa21r' + FRT_LH_R);
        log('Saves2 load 5%');
        saves2[1] = FRT_LH_G;
        setTimeout(() => {  send('loa21g' + FRT_LH_G); }, 150);
        log('Saves2 load 10%');
        saves2[2] = FRT_LH_B;
        setTimeout(() => {  send('loa21b' + FRT_LH_B); }, 300);
        log('Saves2 load 15%');
        saves2_color1.style.background = 'rgb(' + saves2[0] + ", " + saves2[1] + ", " + saves2[2] + ")";
        log('Saves2 load 20%');
        /* 2 сектор */
        saves2[3] = FRT_RH_R;
        setTimeout(() => {  send('loa22r' + FRT_RH_R); }, 450);
        log('Saves2 load 25%');
        saves2[4] = FRT_RH_G;
        setTimeout(() => {  send('loa22g' + FRT_RH_G); }, 600);
        log('Saves2 load 30%');
        saves2[5] = FRT_RH_B;
        setTimeout(() => {  send('loa22b' + FRT_RH_B); }, 750);
        log('Saves2 load 35%');
        saves2_color2.style.background = 'rgb(' + saves2[3] + ", " + saves2[4] + ", " + saves2[5] + ")";
        log('Saves2 load 40%');
        /* 3 сектор */
        saves2[6] = RR_LH_R;
        setTimeout(() => {  send('loa23r' + RR_LH_R); }, 900);
        log('Saves2 load 45%');
        saves2[7] = RR_LH_G;
        setTimeout(() => {  send('loa23g' + RR_LH_G); }, 1050);
        log('Saves2 load 50%');
        saves2[8] = RR_LH_B;
        setTimeout(() => {  send('loa23b' + RR_LH_B); }, 1200);
        log('Saves2 load 55%');
        saves2_color3.style.background = 'rgb(' + saves2[6] + ", " + saves2[7] + ", " + saves2[8] + ")";
        log('Saves2 load 60%');
        /* 4 сектор */
        saves2[9] = RR_RH_R;
        setTimeout(() => {  send('loa24r' + RR_RH_R); }, 1350);
        log('Saves2 load 65%');
        saves2[10] = RR_RH_G;
        setTimeout(() => {  send('loa24g' + RR_RH_G); }, 1500)
        log('Saves2 load 70%');
        saves2[11] = RR_RH_B;
        setTimeout(() => {  send('loa24b' + RR_RH_B); }, 1650);
        log('Saves2 load 75%');
        saves2_color4.style.background = 'rgb(' + saves2[9] + ", " + saves2[10] + ", " + saves2[11] + ")";
        log('Saves2 load 80%');
        /* 5 сектор */
        saves2[12] = LENTA_R;
        setTimeout(() => {  send('loa25r' + LENTA_R); }, 1650);
        log('Saves2 load 85%');
        saves2[13] = LENTA_G;
        setTimeout(() => {  send('loa25g' + LENTA_G); }, 1800);
        log('Saves2 load 90%');
        saves2[14] = LENTA_B;
        setTimeout(() => {  send('loa25b' + LENTA_B); }, 1950);
        log('Saves2 load 95%');
        saves2_color5.style.background = 'rgb(' + saves2[12] + ", " + saves2[13] + ", " + saves2[14] + ")";
        log('Saves2 load 100% !!!');
    });

    button_saves2_load.addEventListener('click', function() {
        FRT_LH_R = saves2[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 150);
        log('Saves2 set 1%');
        FRT_LH_G = saves2[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 300);
        log('Saves2 set 2%');
        FRT_LH_B = saves2[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 450);
        log('Saves2 set 3%');
        saves1_color1.style.background = 'rgb(' + saves2[0] + ", " + saves2[1] + ", " + saves2[2] + ")";
        FRT_RH_R = saves2[3];
        setTimeout(() => {  send('lfrr' + FRT_RH_R ); }, 600);
        log('Saves2 set 4%');
        FRT_RH_G = saves2[4];
        setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 750);
        log('Saves2 set 5%');
        FRT_RH_B = saves2[5];
        setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 900);
        log('Saves2 set 6%');
        saves1_color2.style.background = 'rgb(' + saves2[3] + ", " + saves2[4] + ", " + saves2[5] + ")";
        RR_LH_R = saves2[6];
        setTimeout(() => {  send('lrlr' + RR_LH_R ); }, 1050);
        log('Saves2 set 7%');
        RR_LH_G = saves2[7];
        setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 1200);
        log('Saves2 set 8%');
        RR_LH_B = saves2[8];
        setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 1350);
        log('Saves2 set 9%');
        saves1_color3.style.background = 'rgb(' + saves2[6] + ", " + saves2[7] + ", " + saves2[8] + ")";
        RR_RH_R = saves2[9];
        setTimeout(() => {  send('lrrr' + RR_RH_R ); }, 1500);
        log('Saves2 set 10%');
        RR_RH_G = saves2[10];
        setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 1650);
        log('Saves2 set 11%');
        RR_RH_B = saves2[11];
        setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 1800);
        log('Saves2 set 12%');
        saves1_color4.style.background = 'rgb(' + saves2[9] + ", " + saves2[10] + ", " + saves2[11] + ")";
        LENTA_R = saves2[12];
        setTimeout(() => {  send('lenr' + LENTA_R ); }, 1950);
        log('Saves2 set 13%');
        LENTA_G = saves2[13];
        setTimeout(() => {  send('leng' + LENTA_G ); }, 2100);
        log('Saves2 set 14%');
        LENTA_B = saves2[14];
        setTimeout(() => {  send('lenb' + LENTA_B ); }, 2250);
        log('Saves2 set 15% !!!');
        saves1_color5.style.background = 'rgb(' + saves2[12] + ", " + saves2[13] + ", " + saves2[14] + ")";
    });

    button_saves3.addEventListener('click', function() {
        /* 1 сектор */
        saves3[0] = FRT_LH_R;
        send('loa31r' + FRT_LH_R);
        log('Saves3 load 5%');
        saves3[1] = FRT_LH_G;
        setTimeout(() => {  send('loa31g' + FRT_LH_G); }, 150);
        log('Saves3 load 10%');
        saves3[2] = FRT_LH_B;
        setTimeout(() => {  send('loa31b' + FRT_LH_B); }, 300);
        log('Saves3 load 15%');
        saves3_color1.style.background = 'rgb(' + saves3[0] + ", " + saves3[1] + ", " + saves3[2] + ")";
        log('Saves3 load 20%');
        /* 2 сектор */
        saves3[3] = FRT_RH_R;
        setTimeout(() => {  send('loa32r' + FRT_RH_R); }, 450);
        log('Saves3 load 25%');
        saves3[4] = FRT_RH_G;
        setTimeout(() => {  send('loa32g' + FRT_RH_G); }, 600);
        log('Saves3 load 30%');
        saves3[5] = FRT_RH_B;
        setTimeout(() => {  send('loa32b' + FRT_RH_B); }, 750);
        log('Saves3 load 35%');
        saves3_color2.style.background = 'rgb(' + saves3[3] + ", " + saves3[4] + ", " + saves3[5] + ")";
        log('Saves3 load 40%');
        /* 3 сектор */
        saves3[6] = RR_LH_R;
        setTimeout(() => {  send('loa33r' + RR_LH_R); }, 900);
        log('Saves3 load 45%');
        saves3[7] = RR_LH_G;
        setTimeout(() => {  send('loa33g' + RR_LH_G); }, 1050);
        log('Saves3 load 50%');
        saves3[8] = RR_LH_B;
        setTimeout(() => {  send('loa33b' + RR_LH_B); }, 1200);
        log('Saves3 load 55%');
        saves3_color3.style.background = 'rgb(' + saves3[6] + ", " + saves3[7] + ", " + saves3[8] + ")";
        log('Saves3 load 60%');
        /* 4 сектор */
        saves3[9] = RR_RH_R;
        setTimeout(() => {  send('loa34r' + RR_RH_R); }, 1350);
        log('Saves3 load 65%');
        saves3[10] = RR_RH_G;
        setTimeout(() => {  send('loa34g' + RR_RH_G); }, 1500)
        log('Saves3 load 70%');
        saves3[11] = RR_RH_B;
        setTimeout(() => {  send('loa34b' + RR_RH_B); }, 1650);
        log('Saves3 load 75%');
        saves3_color4.style.background = 'rgb(' + saves3[9] + ", " + saves3[10] + ", " + saves3[11] + ")";
        log('Saves3 load 80%');
        /* 5 сектор */
        saves3[12] = LENTA_R;
        setTimeout(() => {  send('loa35r' + LENTA_R); }, 1650);
        log('Saves3 load 85%');
        saves3[13] = LENTA_G;
        setTimeout(() => {  send('loa35g' + LENTA_G); }, 1800);
        log('Saves3 load 90%');
        saves3[14] = LENTA_B;
        setTimeout(() => {  send('loa35b' + LENTA_B); }, 1950);
        log('Saves3 load 95%');
        saves3_color5.style.background = 'rgb(' + saves3[12] + ", " + saves3[13] + ", " + saves3[14] + ")";
        log('Saves3 load 100% !!!');
    });

    button_saves3_load.addEventListener('click', function() {
        FRT_LH_R = saves3[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 150);
        log('Saves3 set 1%');
        FRT_LH_G = saves3[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 300);
        log('Saves3 set 2%');
        FRT_LH_B = saves3[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 450);
        log('Saves3 set 3%');
        saves1_color1.style.background = 'rgb(' + saves3[0] + ", " + saves3[1] + ", " + saves3[2] + ")";
        FRT_RH_R = saves3[3];
        setTimeout(() => {  send('lfrr' + FRT_RH_R ); }, 600);
        log('Saves3 set 4%');
        FRT_RH_G = saves3[4];
        setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 750);
        log('Saves3 set 5%');
        FRT_RH_B = saves3[5];
        setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 900);
        log('Saves3 set 6%');
        saves1_color2.style.background = 'rgb(' + saves3[3] + ", " + saves3[4] + ", " + saves3[5] + ")";
        RR_LH_R = saves3[6];
        setTimeout(() => {  send('lrlr' + RR_LH_R ); }, 1050);
        log('Saves3 set 7%');
        RR_LH_G = saves3[7];
        setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 1200);
        log('Saves3 set 8%');
        RR_LH_B = saves3[8];
        setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 1350);
        log('Saves3 set 9%');
        saves1_color3.style.background = 'rgb(' + saves3[6] + ", " + saves3[7] + ", " + saves3[8] + ")";
        RR_RH_R = saves3[9];
        setTimeout(() => {  send('lrrr' + RR_RH_R ); }, 1500);
        log('Saves3 set 10%');
        RR_RH_G = saves3[10];
        setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 1650);
        log('Saves3 set 11%');
        RR_RH_B = saves3[11];
        setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 1800);
        log('Saves3 set 12%');
        saves1_color4.style.background = 'rgb(' + saves3[9] + ", " + saves3[10] + ", " + saves3[11] + ")";
        LENTA_R = saves3[12];
        setTimeout(() => {  send('lenr' + LENTA_R ); }, 1950);
        log('Saves3 set 13%');
        LENTA_G = saves3[13];
        setTimeout(() => {  send('leng' + LENTA_G ); }, 2100);
        log('Saves3 set 14%');
        LENTA_B = saves3[14];
        setTimeout(() => {  send('lenb' + LENTA_B ); }, 2250);
        log('Saves3 set 15% !!!');
        saves1_color5.style.background = 'rgb(' + saves3[12] + ", " + saves3[13] + ", " + saves3[14] + ")";
    });

    button_saves4.addEventListener('click', function() {
        /* 1 сектор */
        saves4[0] = FRT_LH_R;
        send('loa41r' + FRT_LH_R);
        log('Saves4 load 5%');
        saves4[1] = FRT_LH_G;
        setTimeout(() => {  send('loa41g' + FRT_LH_G); }, 150);
        log('Saves4 load 10%');
        saves4[2] = FRT_LH_B;
        setTimeout(() => {  send('loa41b' + FRT_LH_B); }, 300);
        log('Saves4 load 15%');
        saves4_color1.style.background = 'rgb(' + saves4[0] + ", " + saves4[1] + ", " + saves4[2] + ")";
        log('Saves4 load 20%');
        /* 2 сектор */
        saves4[3] = FRT_RH_R;
        setTimeout(() => {  send('loa42r' + FRT_RH_R); }, 450);
        log('Saves4 load 25%');
        saves4[4] = FRT_RH_G;
        setTimeout(() => {  send('loa42g' + FRT_RH_G); }, 600);
        log('Saves4 load 30%');
        saves4[5] = FRT_RH_B;
        setTimeout(() => {  send('loa42b' + FRT_RH_B); }, 750);
        log('Saves4 load 35%');
        saves4_color2.style.background = 'rgb(' + saves4[3] + ", " + saves4[4] + ", " + saves4[5] + ")";
        log('Saves4 load 40%');
        /* 3 сектор */
        saves4[6] = RR_LH_R;
        setTimeout(() => {  send('loa43r' + RR_LH_R); }, 900);
        log('Saves4 load 45%');
        saves4[7] = RR_LH_G;
        setTimeout(() => {  send('loa43g' + RR_LH_G); }, 1050);
        log('Saves4 load 50%');
        saves4[8] = RR_LH_B;
        setTimeout(() => {  send('loa43b' + RR_LH_B); }, 1200);
        log('Saves4 load 55%');
        saves4_color3.style.background = 'rgb(' + saves4[6] + ", " + saves4[7] + ", " + saves4[8] + ")";
        log('Saves4 load 60%');
        /* 4 сектор */
        saves4[9] = RR_RH_R;
        setTimeout(() => {  send('loa44r' + RR_RH_R); }, 1350);
        log('Saves4 load 65%');
        saves4[10] = RR_RH_G;
        setTimeout(() => {  send('loa44g' + RR_RH_G); }, 1500)
        log('Saves4 load 70%');
        saves4[11] = RR_RH_B;
        setTimeout(() => {  send('loa44b' + RR_RH_B); }, 1650);
        log('Saves4 load 75%');
        saves4_color4.style.background = 'rgb(' + saves4[9] + ", " + saves4[10] + ", " + saves4[11] + ")";
        log('Saves4 load 80%');
        /* 5 сектор */
        saves4[12] = LENTA_R;
        setTimeout(() => {  send('loa45r' + LENTA_R); }, 1650);
        log('Saves4 load 85%');
        saves4[13] = LENTA_G;
        setTimeout(() => {  send('loa45g' + LENTA_G); }, 1800);
        log('Saves4 load 90%');
        saves4[14] = LENTA_B;
        setTimeout(() => {  send('loa45b' + LENTA_B); }, 1950);
        log('Saves4 load 95%');
        saves4_color5.style.background = 'rgb(' + saves4[12] + ", " + saves4[13] + ", " + saves4[14] + ")";
        log('Saves4 load 100% !!!');
    });

    button_saves4_load.addEventListener('click', function() {
        FRT_LH_R = saves4[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 150);
        log('Saves4 set 1%');
        FRT_LH_G = saves4[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 300);
        log('Saves4 set 2%');
        FRT_LH_B = saves4[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 450);
        log('Saves4 set 3%');
        saves1_color1.style.background = 'rgb(' + saves4[0] + ", " + saves4[1] + ", " + saves4[2] + ")";
        FRT_RH_R = saves4[3];
        setTimeout(() => {  send('lfrr' + FRT_RH_R ); }, 600);
        log('Saves4 set 4%');
        FRT_RH_G = saves4[4];
        setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 750);
        log('Saves4 set 5%');
        FRT_RH_B = saves4[5];
        setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 900);
        log('Saves4 set 6%');
        saves1_color2.style.background = 'rgb(' + saves4[3] + ", " + saves4[4] + ", " + saves4[5] + ")";
        RR_LH_R = saves4[6];
        setTimeout(() => {  send('lrlr' + RR_LH_R ); }, 1050);
        log('Saves4 set 7%');
        RR_LH_G = saves4[7];
        setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 1200);
        log('Saves4 set 8%');
        RR_LH_B = saves4[8];
        setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 1350);
        log('Saves4 set 9%');
        saves1_color3.style.background = 'rgb(' + saves4[6] + ", " + saves4[7] + ", " + saves4[8] + ")";
        RR_RH_R = saves4[9];
        setTimeout(() => {  send('lrrr' + RR_RH_R ); }, 1500);
        log('Saves4 set 10%');
        RR_RH_G = saves4[10];
        setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 1650);
        log('Saves4 set 11%');
        RR_RH_B = saves4[11];
        setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 1800);
        log('Saves4 set 12%');
        saves1_color4.style.background = 'rgb(' + saves4[9] + ", " + saves4[10] + ", " + saves4[11] + ")";
        LENTA_R = saves4[12];
        setTimeout(() => {  send('lenr' + LENTA_R ); }, 1950);
        log('Saves4 set 13%');
        LENTA_G = saves4[13];
        setTimeout(() => {  send('leng' + LENTA_G ); }, 2100);
        log('Saves4 set 14%');
        LENTA_B = saves4[14];
        setTimeout(() => {  send('lenb' + LENTA_B ); }, 2250);
        log('Saves4 set 15% !!!');
        saves1_color5.style.background = 'rgb(' + saves4[12] + ", " + saves4[13] + ", " + saves4[14] + ")";
    });

    button_saves5.addEventListener('click', function() {
        /* 1 сектор */
        saves5[0] = FRT_LH_R;
        send('loa51r' + FRT_LH_R);
        log('Saves5 load 5%');
        saves5[1] = FRT_LH_G;
        setTimeout(() => {  send('loa51g' + FRT_LH_G); }, 150);
        log('Saves5 load 10%');
        saves5[2] = FRT_LH_B;
        setTimeout(() => {  send('loa51b' + FRT_LH_B); }, 300);
        log('Saves5 load 15%');
        saves5_color1.style.background = 'rgb(' + saves5[0] + ", " + saves5[1] + ", " + saves5[2] + ")";
        log('Saves5 load 20%');
        /* 2 сектор */
        saves5[3] = FRT_RH_R;
        setTimeout(() => {  send('loa52r' + FRT_RH_R); }, 450);
        log('Saves5 load 25%');
        saves5[4] = FRT_RH_G;
        setTimeout(() => {  send('loa52g' + FRT_RH_G); }, 600);
        log('Saves5 load 30%');
        saves5[5] = FRT_RH_B;
        setTimeout(() => {  send('loa52b' + FRT_RH_B); }, 750);
        log('Saves5 load 35%');
        saves5_color2.style.background = 'rgb(' + saves5[3] + ", " + saves5[4] + ", " + saves5[5] + ")";
        log('Saves5 load 40%');
        /* 3 сектор */
        saves5[6] = RR_LH_R;
        setTimeout(() => {  send('loa53r' + RR_LH_R); }, 900);
        log('Saves5 load 45%');
        saves5[7] = RR_LH_G;
        setTimeout(() => {  send('loa53g' + RR_LH_G); }, 1050);
        log('Saves5 load 50%');
        saves5[8] = RR_LH_B;
        setTimeout(() => {  send('loa53b' + RR_LH_B); }, 1200);
        log('Saves5 load 55%');
        saves5_color3.style.background = 'rgb(' + saves5[6] + ", " + saves5[7] + ", " + saves5[8] + ")";
        log('Saves5 load 60%');
        /* 4 сектор */
        saves5[9] = RR_RH_R;
        setTimeout(() => {  send('loa54r' + RR_RH_R); }, 1350);
        log('Saves5 load 65%');
        saves5[10] = RR_RH_G;
        setTimeout(() => {  send('loa54g' + RR_RH_G); }, 1500)
        log('Saves5 load 70%');
        saves5[11] = RR_RH_B;
        setTimeout(() => {  send('loa54b' + RR_RH_B); }, 1650);
        log('Saves5 load 75%');
        saves5_color4.style.background = 'rgb(' + saves5[9] + ", " + saves5[10] + ", " + saves5[11] + ")";
        log('Saves5 load 80%');
        /* 5 сектор */
        saves5[12] = LENTA_R;
        setTimeout(() => {  send('loa55r' + LENTA_R); }, 1650);
        log('Saves5 load 85%');
        saves5[13] = LENTA_G;
        setTimeout(() => {  send('loa55g' + LENTA_G); }, 1800);
        log('Saves5 load 90%');
        saves5[14] = LENTA_B;
        setTimeout(() => {  send('loa55b' + LENTA_B); }, 1950);
        log('Saves5 load 95%');
        saves5_color5.style.background = 'rgb(' + saves5[12] + ", " + saves5[13] + ", " + saves5[14] + ")";
        log('Saves5 load 100% !!!');
    });

    button_saves5_load.addEventListener('click', function() {
        FRT_LH_R = saves5[0];
        setTimeout(() => {  send('lflr' + FRT_LH_R ); }, 150);
        log('Saves5 set 1%');
        FRT_LH_G = saves5[1];
        setTimeout(() => {  send('lflg' + FRT_LH_G ); }, 300);
        log('Saves5 set 2%');
        FRT_LH_B = saves5[2];
        setTimeout(() => {  send('lflb' + FRT_LH_B ); }, 450);
        log('Saves5 set 3%');
        saves1_color1.style.background = 'rgb(' + saves5[0] + ", " + saves5[1] + ", " + saves5[2] + ")";
        FRT_RH_R = saves5[3];
        setTimeout(() => {  send('lfrr' + FRT_RH_R ); }, 600);
        log('Saves5 set 4%');
        FRT_RH_G = saves5[4];
        setTimeout(() => {  send('lfrg' + FRT_RH_G ); }, 750);
        log('Saves5 set 5%');
        FRT_RH_B = saves5[5];
        setTimeout(() => {  send('lfrb' + FRT_RH_B ); }, 900);
        log('Saves5 set 6%');
        saves1_color2.style.background = 'rgb(' + saves5[3] + ", " + saves5[4] + ", " + saves5[5] + ")";
        RR_LH_R = saves5[6];
        setTimeout(() => {  send('lrlr' + RR_LH_R ); }, 1050);
        log('Saves5 set 7%');
        RR_LH_G = saves5[7];
        setTimeout(() => {  send('lrlg' + RR_LH_G ); }, 1200);
        log('Saves5 set 8%');
        RR_LH_B = saves5[8];
        setTimeout(() => {  send('lrlb' + RR_LH_B ); }, 1350);
        log('Saves5 set 9%');
        saves1_color3.style.background = 'rgb(' + saves5[6] + ", " + saves5[7] + ", " + saves5[8] + ")";
        RR_RH_R = saves5[9];
        setTimeout(() => {  send('lrrr' + RR_RH_R ); }, 1500);
        log('Saves5 set 10%');
        RR_RH_G = saves5[10];
        setTimeout(() => {  send('lrrg' + RR_RH_G ); }, 1650);
        log('Saves5 set 11%');
        RR_RH_B = saves5[11];
        setTimeout(() => {  send('lrrb' + RR_RH_B ); }, 1800);
        log('Saves5 set 12%');
        saves1_color4.style.background = 'rgb(' + saves5[9] + ", " + saves5[10] + ", " + saves5[11] + ")";
        LENTA_R = saves5[12];
        setTimeout(() => {  send('lenr' + LENTA_R ); }, 1950);
        log('Saves5 set 13%');
        LENTA_G = saves5[13];
        setTimeout(() => {  send('leng' + LENTA_G ); }, 2100);
        log('Saves5 set 14%');
        LENTA_B = saves5[14];
        setTimeout(() => {  send('lenb' + LENTA_B ); }, 2250);
        log('Saves5 set 15% !!!');
        saves1_color5.style.background = 'rgb(' + saves5[12] + ", " + saves5[13] + ", " + saves5[14] + ")";
    });
}