// Получение ссылок на элементы UI
let connectButton = document.getElementById('connect'); // Кнопка ПОДКЛЮЧЕНИЯ
let terminalContainer = document.getElementById('terminal'); // Окно отображения комманд
let text = document.getElementById('text'); // Текст в шапке приложения
let gear_button = document.getElementById('gear'); // Кнопка НАСТРОЙКИ и НАЗАД
let center = document.getElementById('center'); // Центральная часть

let deviceCache = null;
let characteristicCache = null;
let readBuffer = '';

let FRT_LH_R = 0;
let FRT_LH_G = 0;
let FRT_LH_B = 0;

let FRT_RH_R = 0;
let FRT_RH_G = 0;
let FRT_RH_B = 0;

let RR_LH_R = 0;
let RR_LH_G = 0;
let RR_LH_B = 0;

let RR_RH_R = 0;
let RR_RH_G = 0;
let RR_RH_B = 0;

let ALL_R = 0;
let ALL_G = 0;
let ALL_B = 0;

let page_number = 0;
/*  0 - Основная страница (ноги)
    1 - Страница с лентой
    2 - Страница с панелью
    3 - Страница с температурой
    4 - Страница с настройкой 
*/

/* Переменные ячеек сохранения */
let saves1 = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]; /* 1 ячейка сохранения */
let saves2 = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]; /* 2 ячейка сохранения */
let saves3 = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]; /* 3 ячейка сохранения */
let saves4 = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]; /* 4 ячейка сохранения */
let saves5 = [0,0,0, 0,0,0, 0,0,0, 0,0,0, 0,0,0]; /* 5 ячейка сохранения */
// Подключение к устройству при нажатии на кнопку Connect
connectButton.addEventListener('click', function() {
  connectButton.style.color = 'var(--text-color)';
  connectButton.style.textShadow = 'var(--color1)';
  connect();
});
// Запустить выбор Bluetooth устройства и подключиться к выбранному
function connect() {
  return (deviceCache ? Promise.resolve(deviceCache) :
      requestBluetoothDevice()).
      then(device => connectDeviceAndCacheCharacteristic(device)).
      then(characteristic => startNotifications(characteristic)).
      catch(error => log(error));
}
// Обработчик разъединения
function handleDisconnection(event) {
  let device = event.target;
  connectDeviceAndCacheCharacteristic(device).
      then(characteristic => startNotifications(characteristic)).
      catch(error => log(error));
}
// Подключение к определенному устройству, получение сервиса и характеристики
function connectDeviceAndCacheCharacteristic(device) {
  if (device.gatt.connected && characteristicCache) {
    return Promise.resolve(characteristicCache);
  }
  return device.gatt.connect().
      then(server => {
        return server.getPrimaryService(0xFFE0);
      }).
      then(service => {
        return service.getCharacteristic(0xFFE1);
      }).
      then(characteristic => {
        characteristicCache = characteristic;
        return characteristicCache;
      });
}
// Включение получения уведомлений об изменении характеристики
function startNotifications(characteristic) {
  return characteristic.startNotifications().
      then(() => {
        characteristic.addEventListener('characteristicvaluechanged',
            handleCharacteristicValueChanged);
      });
}
// Получение данных
function handleCharacteristicValueChanged(event) {
  let value = new TextDecoder().decode(event.target.value);
  arrData(value);
  /*log('arrData STARTED: ' + value);*/
  for (let c of value) {
    if (c === '\n') {
      let data = readBuffer.trim();
      readBuffer = '';
      if (data) {
        receive(data);
      }
    }
    else {
      readBuffer += c;
    }
  }
}
function clearData(data) {
  for (let i = 0; i < 20; i++) {
    data[i] = 0;
  }
}
// Обработка полученных данных log(data, 'in');
function receive(data) {
  none
}

function arrData(data) {
  if (data[0] === 's') {
    if (data[1] === '1') {
      /* Сектор 1 */
      if (data[2] === '1') {
        if (data[3] === 'r') {
          saves1[0] = data[4];
          saves1[0] += data[5];
          saves1[0] += data[6];
          /*clearData(data);*/
          log('saves11 red load 1% - ' + data);
        }
        if (data[3] === 'g') {
          saves1[1] = data[4];
          saves1[1] += data[5];
          saves1[1] += data[6];
          /*clearData(data);*/
          log('saves11 green load 2% - ' + data);
        }
        if (data[3] === 'b') {
          saves1[2] = data[4];
          saves1[2] += data[5];
          saves1[2] += data[6];
          /*clearData(data);*/
          log('saves11 blue load 3% - ' + data);
        }
      }
      /* Сектор 2 */
      if (data[2] === '2') {
        if (data[3] === 'r') {
          saves1[3] = data[4];
          saves1[3] += data[5];
          saves1[3] += data[6];
          /*clearData(data);*/
          log('saves12 red load 4% - ' + data);
        }
        if (data[3] === 'g') {
          saves1[4] = data[4];
          saves1[4] += data[5];
          saves1[4] += data[6];
          /*clearData(data);*/
          log('saves12 green load 5% - ' + data);
        }
        if (data[3] === 'b') {
          saves1[5] = data[4];
          saves1[5] += data[5];
          saves1[5] += data[6];
          /*clearData(data);*/
          log('saves12 blue load 6% - ' + data);
        }
      }
      /* Сектор 3 */
      if (data[2] === '3') {
        if (data[3] === 'r') {
          saves1[6] = data[4];
          saves1[6] += data[5];
          saves1[6] += data[6];
          /*clearData(data);*/
          log('saves13 red load 7% - ' + data);
        }
        if (data[3] === 'g') {
          saves1[7] = data[4];
          saves1[7] += data[5];
          saves1[7] += data[6];
          /*clearData(data);*/
          log('saves13 green load 8% - ' + data);
        }
        if (data[3] === 'b') {
          saves1[8] = data[4];
          saves1[8] += data[5];
          saves1[8] += data[6];
          /*clearData(data);*/
          log('saves13 blue load 9% - ' + data);
        }
      }
      /* Сектор 4 */
      if (data[2] === '4') {
        if (data[3] === 'r') {
          saves1[9] = data[4];
          saves1[9] += data[5];
          saves1[9] += data[6];
          /*clearData(data);*/
          log('saves14 red load 10% - ' + data);
        }
        if (data[3] === 'g') {
          saves1[10] = data[4];
          saves1[10] += data[5];
          saves1[10] += data[6];
          /*clearData(data);*/
          log('saves14 green load 11% - ' + data);
        }
        if (data[3] === 'b') {
          saves1[11] = data[4];
          saves1[11] += data[5];
          saves1[11] += data[6];
          /*clearData(data);*/
          log('saves14 blue load 12% - ' + data);
        }
      }
      /* Сектор 5 */
      if (data[2] === '5') {
        if (data[3] === 'r') {
          saves1[12] = data[4];
          saves1[12] += data[5];
          saves1[12] += data[6];
          /*clearData(data);*/
          log('saves15 red load 13% - ' + data);
        }
        if (data[3] === 'g') {
          saves1[13] = data[4];
          saves1[13] += data[5];
          saves1[13] += data[6];
          /*clearData(data);*/
          log('saves15 green load 14% - ' + data);
        }
        if (data[3] === 'b') {
          saves1[14] = data[4];
          saves1[14] += data[5];
          saves1[14] += data[6];
          /*clearData(data);*/
          log('saves15 blue load 15% - ' + data);
        }
      }
    }
  }
}
// Вывод в терминал
function log(data, type = '') {
  /*terminalContainer.insertAdjacentHTML('beforeend',
      '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>');*/
  terminalContainer.style.color = 'rgb(255, 255, 255)';
	terminalContainer.style.fontSize = '14px';
  terminalContainer.innerHTML = data;
}
/* Вывод полученого значения в temp
function get_temp(data) {
  temp.innerHTML = String(data);
} */
// Отключиться от подключенного устройства
function disconnect() {
  if (deviceCache) {
    deviceCache.removeEventListener('gattserverdisconnected',
        handleDisconnection);
    if (deviceCache.gatt.connected) {
      deviceCache.gatt.disconnect();
    }
  }

  if (characteristicCache) {
    characteristicCache.removeEventListener('characteristicvaluechanged',
        handleCharacteristicValueChanged);
    characteristicCache = null;
  }

  deviceCache = null;
}
// Отправить данные подключенному устройству
function send(data) {
  data = String(data);
  if (!data || !characteristicCache) {
    return;
  }
  data += '\n';
  if (data.length > 20) {
    let chunks = data.match(/(.|[\r\n]){1,20}/g);
    writeToCharacteristic(characteristicCache, chunks[0]);
    for (let i = 1; i < chunks.length; i++) {
      setTimeout(() => {
        writeToCharacteristic(characteristicCache, chunks[i]);
      }, i * 20);
    }
  }
  else {
    writeToCharacteristic(characteristicCache, data);
  }
}
// Записать значение в характеристику
function writeToCharacteristic(characteristic, data) {
  characteristic.writeValue(new TextEncoder().encode(data));
}
// Запрос выбора Bluetooth устройства
function requestBluetoothDevice() {
  log('Requesting bluetooth device...'); 
  return navigator.bluetooth.requestDevice({
    filters: [{services: [0xFFE0]}],
  }).
      then(device => {
        log('"' + device.name + '" bluetooth device selected');
        deviceCache = device;
        deviceCache.addEventListener('gattserverdisconnected',
            handleDisconnection);
        return deviceCache;
      });
}


// rgb(0, 179, 96)  rgba(0,0,0,0.4)