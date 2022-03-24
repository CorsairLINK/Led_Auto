// Получение ссылок на элементы UI
let connectButton = document.getElementById('connect');
let terminalContainer = document.getElementById('terminal');
let sendForm = document.getElementById('send-form');
let inputField = document.getElementById('input');

let temp = document.getElementById('temp');


let buttonFRTLHRED = document.getElementById('buttonFRTLHRED');
let buttonFRTLHBLUE = document.getElementById('buttonFRTLHBLUE');

let deviceCache = null;
let characteristicCache = null;
let readBuffer = '';



// Подключение к устройству при нажатии на кнопку Connect
connectButton.addEventListener('click', function() {
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
// Обработка полученных данных log(data, 'in');
function receive(data) {
  get_temp(data);
}
// Вывод в терминал
function log(data, type = '') {
  terminalContainer.insertAdjacentHTML('beforeend',
      '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>');
}
// Вывод полученого значения в temp
function get_temp(data) {
  temp.innerHTML = String(data);
}
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
      }, i * 100);
    }
  }
  else {
    writeToCharacteristic(characteristicCache, data);
  }
  log(data, 'out');
}
// Записать значение в характеристику
function writeToCharacteristic(characteristic, data) {
  characteristic.writeValue(new TextEncoder().encode(data));
}
