let center = document.getElementById('center');
let legs_button = document.getElementById('legs-button');
let lenta_button = document.getElementById('lenta-button');
let panel_button = document.getElementById('panel-button');
let temp_button = document.getElementById('temp-button');

// Нижние кнопки
legs_button.addEventListener('click', function(){
    legs_button.style.color = 'var(--text-color)';
    legs_button.style.textShadow = '0px 0px 3px rgb(2, 50, 207), 0px 0px 10px rgb(0, 60, 255), 0px 0px 15px rgb(70, 113, 255)';
    button_back();
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
    lenta_button.style.color = 'var(--text-color)';
    lenta_button.style.textShadow = '0px 0px 3px rgb(2, 50, 207), 0px 0px 10px rgb(0, 60, 255), 0px 0px 15px rgb(70, 113, 255)';
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
    panel_button.style.color = 'var(--text-color)';
    panel_button.style.textShadow = '0px 0px 3px rgb(2, 50, 207), 0px 0px 10px rgb(0, 60, 255), 0px 0px 15px rgb(70, 113, 255)';

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
    temp_button.style.color = 'var(--text-color)';
    temp_button.style.textShadow = '0px 0px 3px rgb(2, 50, 207), 0px 0px 10px rgb(0, 60, 255), 0px 0px 15px rgb(70, 113, 255)';
});

// center.insertAdjacentHTML('<button id="button-FRT-LH" type="button-FRT-LH" class="button2 FRT LH">FRT LH</button>');
// rgb(0, 179, 96)  rgba(0,0,0,0.4)