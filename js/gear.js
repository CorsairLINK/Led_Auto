function gear () {
    text.innerHTML = 'Settings';
    center.innerHTML = '';
    center.innerHTML = '<!-- Кнопка настройки --><button id="color1" type="button" class="button color1"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color2" type="button" class="button color2"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color3" type="button" class="button color3"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color4" type="button" class="button color4"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color5" type="button" class="button color5"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color6" type="button" class="button color6"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color7" type="button" class="button color7"><i class="fa fa-cog"></i></button><!-- Кнопка настройки --><button id="color8" type="button" class="button color8"><i class="fa fa-cog"></i></button><!-- Блок вывода информации -->';
    gear_button.innerHTML = '<i class="fa fa-reply"></i>';

    gear_button.addEventListener('click', function() {
        if (page_number === 0) {
            listner_main();
        }
        if (page_number === 1) {
            lenta_but();
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
}