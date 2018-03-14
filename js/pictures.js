'use strict'

var RandomValues=function getUnique(items) {
  // Make a copy of the array
  var tmp = items.slice(items);
  var ret = [];
  var count=4
  for (var i = 0; i < count; i++) {
    var index = Math.floor(Math.random() * tmp.length);
    var removed = tmp.splice(index, 1);
    // Since we are only removing one element
    ret.push(removed[0]);
  }
  return ret;  
}
//Создаем единый массив с которого будем манипулировать DOM объектами
var pictures = [{
  "likes": 32,
  "comments": 33,
  "url": "photos/1.jpg"
}, {
  "likes": 43,
  "comments": 23,
  "url": "photos/2.jpg"
}, {
  "likes": 41,
  "comments": 4,
  "url": "photos/3.jpg"
}, {
  "likes": 125,
  "comments": 2,
  "url": "photos/4.jpg"
}, {
  "likes": 220,
  "comments": 48,
  "url": "photos/5.jpg"
}, {
  "likes": 43,
  "comments": 21,
  "url": "photos/6.jpg"
}, {
  "likes": 356,
  "comments": 9,
  "url": "failed.jpg"
}, {
  "likes": 242,
  "comments": 39,
  "url": "photos/8.jpg"
}, {
  "likes": 199,
  "comments": 1,
  "url": "photos/9.jpg"
}, {
  "likes": 394,
  "comments": 56,
  "url": "photos/10.jpg"
}, {
  "likes": 216,
  "comments": 13,
  "url": "photos/11.jpg"
}, {
  "likes": 228,
  "comments": 18,
  "url": "photos/12.jpg"
}, {
  "likes": 1,
  "comments": 5,
  "url": "photos/13.jpg"
}, {
  "likes": 145,
  "comments": 1,
  "url": "photos/14.jpg"
}];


var comments=["Всё отлично!","В целом всё неплохо. Но не всё.","Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.","Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.","Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.","Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!" ]


var userDialog=document.querySelector('.gallery-overlay')
//Удаляем класс hidden что бы показать окно с картинок
// userDialog.classList.remove('hidden');

//Отрисуем в блок pictures.
var similarListElement=document.querySelector('.pictures');

var similarWizardTemplate=document.querySelector('#picture-template').content;



var renderWizard=function(element){ 
//Копируем шаблон 15 раз, вместе со всем содержимым поэтому
 // использую глубокое копирование 
	var wizardElement=similarWizardTemplate.cloneNode(true);
	//Теперь заменяем textContent каждого из картинок на содержимое массива с ключом name
  // wizardElement.querySelector('#searchSrc').textContent=element.url;
  	wizardElement.querySelector('img').src = element.url;
	wizardElement.querySelector('.picture-likes').textContent=element.comments;
	wizardElement.querySelector('.picture-comments').textContent=element.likes;

	return wizardElement;
	}

// Отрисовка фото, создаем фрагмент и идем по циклу массива
// Записываем во fragment все изображения 
var drawElementPhoto = function (array) {
  var fragment = document.createDocumentFragment();
  var similarPhotoList = document.querySelector('.pictures');

  for (var i = 0; i < array.length; i++) {
    fragment.appendChild(renderWizard(array[i]));
  }
// После того как записали все изображения во фрагмент переносим в блок pictures разом
  return similarPhotoList.appendChild(fragment);
  };

// Из массива вытаскиваем фото
var successHandler = function (data) {
  var dataPicture = pictures;
  drawElementPhoto(dataPicture);
  };

successHandler(pictures);

/*
// Вешаем события
// Создали функцию addClass которая добавляет класс hidden в наше окно
var addClass= function (element, className) {
  // gallery.classList.add('hidden');
  element.classList.add(className);
}


// Удаляем класс hidden в нашем окне
var removeClass= function (element, className) {
  // gallery.classList.remove('hidden');
  element.classList.remove(className);
    }
*/


// 								Galery
// Находим нашу галерею
var gallery = document.querySelector('.gallery-overlay');
// Находим наш крестик
var galleryClose = gallery.querySelector('.gallery-overlay-close');
// Находим блок с картинками
var picturesField = document.querySelector('.pictures');
// Пишем функцию которая закроет картинку по ESC
var onPopupEscPress=function(evt){
    window.util.eventEsc(evt,closePopupReview);
  // if (evt.keyCode===ESC_KEYCODE){
  //   closePopupReview(); 

};
//Создаем обзор картинок
var createPictureReview = function (picture, targetPicture) {
    picture.querySelector('img').src = targetPicture.querySelector('img').src;
    picture.querySelector('.likes-count').textContent = targetPicture.querySelector('.picture-likes');
    picture.querySelector('.likes-count').textContent = targetPicture.querySelector('.picture-likes').textContent;
    picture.querySelector('.comments-count').textContent = targetPicture.querySelector('.picture-comments').textContent;
  };


// Написал функцию которая открывает текущую картинку при клике на нее
var openPictureReview = function (evt) {
    // Мы используем event.target что бы получить элемент на котором произошло событие(Делигирование)
    // Внутри обработчика мы должны разобраться в каком именно '.picture' был клик
    // для этого и нужен метод closest
  var targetPicture = evt.target.closest('.picture');
  if (targetPicture) {
    // document.addEventListener('keydown', onReviewEscKeydown);
    // Добавляем событие закрытия окна при помощи клавиши ESC 
    document.addEventListener("keydown",onPopupEscPress)
    window.util.removeClass(gallery,'hidden');
    createPictureReview(gallery, targetPicture);
    }
  };

// Вызываем функцию которая закрывает выбранную картинку
var closePopupReview = function () {
    window.util.addClass(gallery, 'hidden');
    // Добавляем удаления событие закрытия окна при помощи клавиши ESC так как уже все закрыто
    document.removeEventListener("keydown",onPopupEscPress) 
    // document.removeEventListener('keydown', onReviewEscKeydown);
  };

// Добавляем событие при клике на изображение в блоке pictures  
picturesField.addEventListener('click', function (evt) {
  evt.preventDefault();
  // Вызываем функцию которая открывает выбранное изображение
  openPictureReview(evt);
  });
// Закрываем событие при клике на крестик
galleryClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopupReview();
  });

galleryClose.addEventListener('keydown',function(evt){
  window.util.eventEnter(evt,closePopupReview)

});