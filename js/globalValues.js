(function(){
    window.globalValues = {
        NUMBER_OF_OBJECTS: 8,
        TYPES : ['palace', 'flat', 'house', 'bungalo'],
        CHECK_TIMES : ['12:00', '13:00', '14:00'],
        FEATURES : ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        PHOTOS : ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg', 'http://o0.github.io/assets/images/tokyo/hotel4.jpg'
        ],
        ARR_WITH_OBJS : [],
        CENTER_X_OF_MAIN_PIN : 602,
        CENTER_Y_OF_MAIN_PIN : 407,
        X_POINT_OF_MAIN_PIN : parseInt(document.querySelector('.map__pin--main').style.left) + 30,
        Y_POINT_OF_MAIN_PIN : parseInt(document.querySelector('.map__pin--main').style.top) + 80
    }
})()