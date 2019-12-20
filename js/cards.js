(function () {
  // генерация массива

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

    for (var i = 0; i < window.globalValues.NUMBER_OF_OBJECTS; i++) {
      var obj = {
        'author': {
          'avatar': 'img/avatars/user' + i + '.png'
        },
        'offer': {
          'title': 'string' + i,
          'address': 'string',
          'price': Number,
          'type': getRandomValue(window.globalValues.TYPES),
          'rooms': Number,
          'guests': Number,
          'checkIn': getRandomValue(window.globalValues.CHECK_TIMES),
          'checkOut': getRandomValue(window.globalValues.CHECK_TIMES),
          'features': getRandomArr(window.globalValues.FEATURES),
          'description': 'description' + i,
          'photos': getRandomArr(window.globalValues.PHOTOS)
        },
        'location': {
          'x': Math.round(Math.random() * 1140) + 'px',
          'y': Math.round(Math.random() * 630) + 'px'
        }
      };
      window.globalValues.ARR_WITH_OBJS.push(obj);
    }

  }
  renderArr();

  function renderPins() {
    var template = document.querySelector('#pin').content.querySelector('.map__pin');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.globalValues.ARR_WITH_OBJS.length; i++) {
        var elem = template.cloneNode(true);
        elem.style.top = window.globalValues.ARR_WITH_OBJS[i].location.x;
        elem.style.left = window.globalValues.ARR_WITH_OBJS[i].location.y;
        fragment.appendChild(elem);
    }
    document.querySelector('.map__pins').appendChild(fragment);
}
renderPins();
// создание карточек
function renderCards() {
    var template = document.querySelector('#card').content.querySelector('.map__card');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.globalValues.ARR_WITH_OBJS.length; i++) {
        var elem = template.cloneNode(true);
        elem.querySelector('.popup__title').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.title;
        elem.querySelector('.popup__text--address').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.address;
        elem.querySelector('.popup__text--price').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.price + 'р/ночь';
        elem.querySelector('.popup__type').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.type;
        elem.querySelector('.popup__text--capacity').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.rooms + ' ' + window.globalValues.ARR_WITH_OBJS[i].offer.guests;
        elem.querySelector('.popup__text--time').textContent = 'Заезд после ' + window.globalValues.ARR_WITH_OBJS[i].offer.checkIn + ' Выезд до ' + window.globalValues.ARR_WITH_OBJS[i].offer.checkOut;
        elem.querySelector('.popup__features').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.features;
        elem.querySelector('.popup__description').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.description;
        elem.querySelector('.popup__photos').textContent = window.globalValues.ARR_WITH_OBJS[i].offer.photos;
        elem.querySelector('.popup__avatar').src = window.globalValues.ARR_WITH_OBJS[i].author.avatar;
        fragment.appendChild(elem);
    }
    document.querySelector('.map__filters-container').before(fragment);
}
renderCards();

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

})();
