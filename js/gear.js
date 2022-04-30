function gear () {
    text.innerHTML = 'Settings';
    center.innerHTML = '';
    center.innerHTML = '<!-- Кнопка настройки --><button id="color1" type="button" class="button color1"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color2" type="button" class="button color2"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color3" type="button" class="button color3"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color4" type="button" class="button color4"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color5" type="button" class="button color5"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color6" type="button" class="button color6"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color7" type="button" class="button color7"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color8" type="button" class="button color8"><i class="fa fa-cog"></i></button>';
    gear_button.innerHTML = '<i class="fa fa-reply"></i>';

    gear_button.addEventListener('click', function() {
        if (page_number === 0) {
            listner_main();
        }
        if (page_number === 1) {
            lenta_but();
        }
        if (page_number === 3) {
            saves_but();
        }
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
        root.style.setProperty('--color1', '0px 0px 3px rgb(19, 207, 2), 0px 0px 10px rgb(9, 255, 0), 0px 0px 15px rgb(86, 255, 70)');
        color1.style.borderColor = 'rgb(255, 255, 255)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color2.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(2, 50, 207), 0px 0px 10px rgb(0, 60, 255), 0px 0px 15px rgb(70, 113, 255)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgb(255, 255, 255)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color3.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(200, 30, 30), 0px 0px 10px rgb(200, 15, 25), 0px 0px 15px rgb(200, 15, 20)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgb(255, 255, 255)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color4.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(207, 2, 190), 0px 0px 10px rgb(255, 0, 212), 0px 0px 15px rgb(255, 70, 200)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgb(255, 255, 255)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color5.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(165, 70, 253), 0px 0px 10px rgb(150, 0, 255), 0px 0px 15px rgb(150, 70, 255)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgb(255, 255, 255)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color6.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(253, 137, 70), 0px 0px 10px rgb(253, 137, 70), 0px 0px 15px rgb(253, 137, 70)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgb(255, 255, 255)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color7.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(90, 239, 250), 0px 0px 10px rgb(90, 239, 250), 0px 0px 15px rgb(90, 239, 250)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgb(255, 255, 255)';
        color8.style.borderColor = 'rgba(0,0,0,0.4)';
    });
    color8.addEventListener('click', function () {
        root.style.setProperty('--color1', '0px 0px 3px rgb(198, 201, 54), 0px 0px 10px rgb(198, 201, 54), 0px 0px 15px rgb(198, 201, 54)');
        color1.style.borderColor = 'rgba(0,0,0,0.4)';
        color2.style.borderColor = 'rgba(0,0,0,0.4)';
        color3.style.borderColor = 'rgba(0,0,0,0.4)';
        color4.style.borderColor = 'rgba(0,0,0,0.4)';
        color5.style.borderColor = 'rgba(0,0,0,0.4)';
        color6.style.borderColor = 'rgba(0,0,0,0.4)';
        color7.style.borderColor = 'rgba(0,0,0,0.4)';
        color8.style.borderColor = 'rgb(255, 255, 255)';
    });
}