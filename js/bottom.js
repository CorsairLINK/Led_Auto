let center = document.getElementById('center');
let legs_button = document.getElementById('legs-button');
let lenta_button = document.getElementById('lenta-button');
let panel_button = document.getElementById('panel-button');
let temp_button = document.getElementById('temp-button');

// Нижние кнопки
legs_button.addEventListener('click', function(){
    legs_button.style.color = 'rgb(0, 179, 96)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';
    
});
lenta_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgb(0, 179, 96)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';

});
panel_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgb(0, 179, 96)';
    temp_button.style.color = 'rgba(0,0,0,0.4)';

});
temp_button.addEventListener('click', function(){
    legs_button.style.color = 'rgba(0,0,0,0.4)';
    lenta_button.style.color = 'rgba(0,0,0,0.4)';
    panel_button.style.color = 'rgba(0,0,0,0.4)';
    temp_button.style.color = 'rgb(0, 179, 96)';

});

// center.insertAdjacentHTML('<button id="button-FRT-LH" type="button-FRT-LH" class="button2 FRT LH">FRT LH</button>');
// rgb(0, 179, 96)  rgba(0,0,0,0.4)