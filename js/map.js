(function () {
  document.querySelector('.map').classList.add('map--faded');

  var inputs = document.querySelector('.ad-form').children;
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].setAttribute('disabled', '');
  }
  var mainPin = document.querySelector('.map__pin--main');
  mainPin.setAttribute('tabindex', '0');

  function mainPinClickHandler() {
    document.querySelector('.map').classList.remove('map--faded');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute('disabled', '');
    }
    document.querySelector('.ad-form').classList.remove('ad-form--disabled');
    var addressInput = document.querySelector('#address');
    addressInput.value = window.globalValues.X_POINT_OF_MAIN_PIN + 'px ' + window.globalValues.Y_POINT_OF_MAIN_PIN + 'px';
  }

  function mainPinPressHandler(evt) {
    if (evt.keyCode === 13) {
      mainPinClickHandler();
    }
  }

  mainPin.addEventListener('mousedown', mainPinClickHandler);
  document.addEventListener('keydown', mainPinPressHandler);
})()
