(function() {
    var form = document.querySelector('.ad-form');
    var addressInput = form.querySelector('#address');
    addressInput.setAttribute('readonly','');
    addressInput.value = window.globalValues.CENTER_X_OF_MAIN_PIN + 'px ' + window.globalValues.CENTER_Y_OF_MAIN_PIN + 'px';
    
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
})()
