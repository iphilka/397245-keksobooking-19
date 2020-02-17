'use strict';
var COUNT_AD = 8;
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var TIMES = ['12:00', '13:00', '14:00'];
var ALL_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var ALL_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

var randomInteger = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var generateFeatures = function () {
  for (var i = 0; i < randomInteger(0, 6); i++) {
    features[i] = ALL_FEATURES[i];
  }
  return features;
};

var generatePhotos = function () {
  for (var i = 0; i < randomInteger(0, 3); i++) {
    photos[i] = ALL_PHOTOS[i];
  }
  return photos;
};

var renderAd = function () {
  var locationX = randomInteger(0, 1200);
  var locationY = randomInteger(130, 630);
  return {
    author: {
      avatar: 'img/avatars/user{{xx}}.png'
    },
    offer: {
      tittle: 'Заголовок',
      address: locationX + ', ' + locationY,
      price: randomInteger(100, 1000),
      type: TYPES[randomInteger(0,TYPES.length)],
      rooms: 3,
      guests: 5,
      checkin: TIMES[randomInteger(0, TIMES.length)],
      checkout: TIMES[randomInteger(0, TIMES.length)],
      features: ['wifi', 'dishwasher'],
      description: 'Something about this',
      photos : ['http://o0.github.io/assets/images/tokyo/hotel1.jpg']
    },
    location: {
      x: locationX,
      y: locationY
    }
  }
};
