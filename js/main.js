'use strict';

document.querySelector('.map').classList.remove('map--faded');

var COUNT_AD = 8;
var ads = [];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var TIMES = ['12:00', '13:00', '14:00'];
var ALL_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var ALL_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var features = [];
var photos = [];

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

var renderAd = function (i) {
  var locationX = randomInteger(0, 1200);
  var locationY = randomInteger(130, 630);
  ads[i] =  {
    'author': {
      'avatar': 'img/avatars/user0' + (i + 1) + '.png'
    },
    'offer': {
      'tittle': 'Заголовок',
      'address': String(locationX) + String(locationY),
      'price': randomInteger(100, 1000),
      'type': TYPES[randomInteger(0,TYPES.length)],
      'rooms': 3,
      'guests': 5,
      'checkin': TIMES[randomInteger(0, TIMES.length)],
      'checkout': TIMES[randomInteger(0, TIMES.length)],
      'features': generateFeatures(),
      'description': 'Something about this',
      'photos' : generatePhotos()
    },
    'location': {
      'x': locationX,
      'y': locationY
    }
  };
};

var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var mapPins = document.querySelector('.map__pins');

var fragment = document.createDocumentFragment();

var generatePinElement = function (ad) {
  var pinElement = pinTemplate.cloneNode(true);
  pinElement.style.left =
  pinElement.style.left = ad.location.x - 25 + 'px';
  pinElement.style.top = ad.location.y - 70 + 'px';
  pinElement.querySelector('img').setAttribute('src', ad.author.avatar);
  pinElement.querySelector('img').setAttribute('alt', ad.offer.title);
  fragment.appendChild(pinElement);
};




for (var i = 0; i < COUNT_AD; i++) {
  renderAd(i);
  generatePinElement(ads[i]);
}

mapPins.appendChild(fragment);
