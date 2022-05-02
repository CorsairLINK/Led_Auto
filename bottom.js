let legs_button = document.getElementById('legs-button');
let lenta_button = document.getElementById('lenta-button');
let panel_button = document.getElementById('panel-button');
let saves_button = document.getElementById('saves-button');

// Нижние кнопки
legs_button.addEventListener('click', function(){
    legs_button.style.color = 'rgb(255, 255, 255)';
    legs_button.style.textShadow = 'var(--color1)';
    listner_main();

    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    saves_button.style.color = 'rgba(0,0,0,0.4)';
    saves_button.style.textShadow = 'none';
});
lenta_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';

    lenta_button.style.color = 'rgb(255, 255, 255)';
    lenta_button.style.textShadow = 'var(--color1)';
    lenta_but();

    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    saves_button.style.color = 'rgba(0,0,0,0.4)';
    saves_button.style.textShadow = 'none';
});
panel_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgb(255, 255, 255)';
    panel_button.style.textShadow = 'var(--color1)';
    page_number = 2; // Номер страницы (Панель - 2)

    saves_button.style.color = 'rgba(0,0,0,0.4)';
    saves_button.style.textShadow = 'none';
});
saves_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    saves_button.style.color = 'rgb(255, 255, 255)';
    saves_button.style.textShadow = 'var(--color1)';
    saves_but();
    page_number = 3; // Номер страницы (Сохраненные - 3)
});

// rgb(0, 179, 96)  rgba(0,0,0,0.4)