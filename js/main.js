// генерация массива
var NUMBER_OF_OBJECTS = 8,
TYPES = ['palace', 'flat', 'house', 'bungalo'],
CHECK_TIMES = ['12:00', '13:00', '14:00'],
FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel4.jpg'];
ARR_WITH_OBJS = [],
CENTER_X_OF_MAIN_PIN = 602,
CENTER_Y_OF_MAIN_PIN = 407,
X_POINT_OF_MAIN_PIN = parseInt(document.querySelector('.map__pin--main').style.left) + 30,
Y_POINT_OF_MAIN_PIN = parseInt(document.querySelector('.map__pin--main').style.top) + 80; 

function getRandomValue(arr) {
    return arr[Math.random() * arr.length];
}

function getRandomArr(arr) {
    var resultArr = [];
    for (var i = 0; i < Math.round(Math.random() * arr.length); i++) {
        resultArr.push(arr[i]);
    }
    return resultArr; 
}

function renderArr() {

    for (var i = 0; i < NUMBER_OF_OBJECTS; i++) {
        var obj = {
            'author': {
                'avatar': 'img/avatars/user' + i + '.png'
            },
            'offer': {
                'title': 'string' + i,
                'address': 'string',
                'price': Number,
                'type': getRandomValue(TYPES),
                'rooms': Number,
                'guests': Number,
                'checkIn': getRandomValue(CHECK_TIMES),
                'checkOut': getRandomValue(CHECK_TIMES),
                'features': getRandomArr(FEATURES),
                'description': 'description' + i,
                'photos': getRandomArr(PHOTOS)
            },
            'location': {
                'x': Math.round(Math.random() * 1140) + 'px',
                'y': Math.round(Math.random() * 630) + 'px'
            }   
        };
        ARR_WITH_OBJS.push(obj);
    }

}
renderArr();

// удаление класса map--faded
document.querySelector('.map').classList.remove('map--faded');

// создание пинов
function renderPins() {
    var template = document.querySelector('#pin').content.querySelector('.map__pin');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < ARR_WITH_OBJS.length; i++) {
        var elem = template.cloneNode(true);
        elem.style.top = ARR_WITH_OBJS[i].location.x;
        elem.style.left = ARR_WITH_OBJS[i].location.y;
        fragment.appendChild(elem);
    }
    document.querySelector('.map__pins').appendChild(fragment);
}
renderPins();
// создание карточек
function renderCards() {
    var template = document.querySelector('#card').content.querySelector('.map__card');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < ARR_WITH_OBJS.length; i++) {
        var elem = template.cloneNode(true);
        elem.querySelector('.popup__title').textContent = ARR_WITH_OBJS[i].offer.title;
        elem.querySelector('.popup__text--address').textContent = ARR_WITH_OBJS[i].offer.address;
        elem.querySelector('.popup__text--price').textContent = ARR_WITH_OBJS[i].offer.price + 'р/ночь';
        elem.querySelector('.popup__type').textContent = ARR_WITH_OBJS[i].offer.type;
        elem.querySelector('.popup__text--capacity').textContent = ARR_WITH_OBJS[i].offer.rooms + ' ' + ARR_WITH_OBJS[i].offer.guests;
        elem.querySelector('.popup__text--time').textContent = 'Заезд после ' + ARR_WITH_OBJS[i].offer.checkIn + ' Выезд до ' + ARR_WITH_OBJS[i].offer.checkOut;
        elem.querySelector('.popup__features').textContent = ARR_WITH_OBJS[i].offer.features;
        elem.querySelector('.popup__description').textContent = ARR_WITH_OBJS[i].offer.description;
        elem.querySelector('.popup__photos').textContent = ARR_WITH_OBJS[i].offer.photos;
        elem.querySelector('.popup__avatar').src = ARR_WITH_OBJS[i].author.avatar;
        fragment.appendChild(elem);
    }
    document.querySelector('.map__filters-container').before(fragment);
}
renderCards();
// добавление класса
document.querySelector('.map').classList.add('map--faded');

var inputs = document.querySelector('.ad-form').children;
for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute('disabled','');
}

// валидация формы
var form = document.querySelector('.ad-form');
var addressInput = form.querySelector('#address');
addressInput.setAttribute('readonly','');
addressInput.value = CENTER_X_OF_MAIN_PIN + 'px ' + CENTER_Y_OF_MAIN_PIN + 'px';

var price = form.querySelector('#price');
var type = form.querySelector('#type');
price.placeholder = '1000';

function typeInputHandler() {
    if (type.value === 'bungalo') {
        price.placeholder = '0';
    } else if (type.value === 'flat') {
        price.placeholder = '1000';
    } else if (type.value === 'house') {
        price.placeholder = '5000';
    } else {
        price.placeholder = '10000';
    }
};

type.addEventListener('change', typeInputHandler);

var roomAmount = form.querySelector('#room_number');
var guestAmount = form.querySelector('#capacity');
guestAmount.value = '1';

function roomAmountInputHandler() {
    if (roomAmount.value === '1') {
        for (var i = 0; i < guestAmount.children.length; i++) {
            if (+guestAmount.children[i].value > 1 || guestAmount.children[i].value === '0') {
                guestAmount.children[i].setAttribute('disabled', '');
                guestAmount.value = '1';
            } else {
                guestAmount.children[i].removeAttribute('disabled', '');
            }
        }
        guestAmount.value = '1';
    } else if (roomAmount.value === '2') {
        for (var i = 0; i < guestAmount.children.length; i++) {
            if (+guestAmount.children[i].value > 2 || guestAmount.children[i].value === '0') {
                guestAmount.children[i].setAttribute('disabled', '');
                guestAmount.value = '2';
                console.log(+guestAmount.children[i].value);
            } else {
                guestAmount.children[i].removeAttribute('disabled', '');
            }
        }
    } else if (roomAmount.value === '3') {
        for (var i = 0; i < guestAmount.children.length; i++) {
            if (+guestAmount.children[i].value > 4 || guestAmount.children[i].value === '0') {
                guestAmount.children[i].setAttribute('disabled', '');
                guestAmount.value = '3';
            } else {
                guestAmount.children[i].removeAttribute('disabled', '');
            }
        }
    } else {
        guestAmount.value = '0';
        for (var i = 0; i < guestAmount.children.length; i++) {
            guestAmount.children[i].setAttribute('disabled', '');
            if (guestAmount.children[i].value === '0') {
                guestAmount.children[i].removeAttribute('disabled', '');
            }
        }

    }
}

roomAmount.addEventListener('change', roomAmountInputHandler);

var timeIn = form.querySelector('#timein');
var timeOut = form.querySelector('#timeout');

function timeChangeHandler() {
    if (timeIn.value === '12:00') {
        timeOut.value = '12:00';
    } else if (timeIn.value === '13:00') {
        timeOut.value = '13:00';
    } else {
        timeOut.value = '14:00';
    }
}

timeIn.addEventListener('change', timeChangeHandler);
timeOut.addEventListener('change', timeChangeHandler);


// переход в активное состояние
var mainPin = document.querySelector('.map__pin--main');
mainPin.setAttribute('tabindex', '0');

function mainPinClickHandler() {
    document.querySelector('.map').classList.remove('map--faded');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].removeAttribute('disabled','');
    }
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    addressInput.value = X_POINT_OF_MAIN_PIN + 'px ' + Y_POINT_OF_MAIN_PIN + 'px';
}

function mainPinPressHandler(evt) {
    if (evt.keyCode === 13) {
        mainPinClickHandler();
    }
}

mainPin.addEventListener('mousedown', mainPinClickHandler);
document.addEventListener('keydown', mainPinPressHandler);

// показ карточек
var cards = document.querySelectorAll('.map__card');
var pins = document.querySelectorAll('.map__pin:not(.map__pin--main)');

pins.forEach(function(item, i) {
    item.setAttribute('tabindex','0');

    function pinClickHandler() {
        cards[i].style.visibility = 'visible';
    }

    function pinPressHandler(evt) {
        if (evt.keyCode === 13 || document.querySelector('.map').classList.contains('map--faded')) {
            cards[i].style.visibility = 'visible';
        }
    }

    function pinPressCloseHandler(evt) {
        if (evt.keyCode === 27) {
            cards[i].style.visibility = 'hidden';
        }
    }

    item.addEventListener('mousedown', pinClickHandler);
    item.addEventListener('keydown', pinPressHandler);
    document.removeEventListener('keydown', pinPressHandler);
    
    document.addEventListener('keydown', pinPressCloseHandler);
    //document.removeEventListener('keydown', pinPressCloseHandler);
});

// for (var i = 0; i < pins.length; i++) {
//     pins[i].addEventListener('click', function() {
//         cards[i].style.visibility = 'visible';
//     })
// }

cards.forEach(function(item, i) {
    item.style.visibility = 'hidden';
    function btnClickHandler() {
        cards[i].style.visibility = 'hidden';
    }
    item.querySelector('.popup__close').addEventListener('mousedown', btnClickHandler);
});


