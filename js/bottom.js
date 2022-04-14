let legs_button = document.getElementById('legs-button');
let lenta_button = document.getElementById('lenta-button');
let panel_button = document.getElementById('panel-button');
let temp_button = document.getElementById('temp-button');

// Нижние кнопки
legs_button.addEventListener('click', function(){
    legs_button.style.color = 'rgb(255, 255, 255)';
    legs_button.style.textShadow = 'var(--color1)';
    listner_main();

    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.textShadow = 'none';
});
lenta_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';

    lenta_button.style.color = 'rgb(255, 255, 255)';
    lenta_button.style.textShadow = 'var(--color1)';
    lenta_but();

    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.textShadow = 'none';
});
panel_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgb(255, 255, 255)';
    panel_button.style.textShadow = 'var(--color1)';
    page_number = 2; // Номер страницы (Панель - 2)

    temp_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.textShadow = 'none';
});
temp_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    legs_button.style.textShadow = 'none';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.textShadow = 'none';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.textShadow = 'none';
    temp_button.style.color = 'rgb(255, 255, 255)';
    temp_button.style.textShadow = 'var(--color1)';
    page_number = 3; // Номер страницы (Температура - 3)
});

// rgb(0, 179, 96)  rgba(0,0,0,0.4)