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
userDialog.classList.remove('hidden');

//Отрисуем в блок pictures.
var similarListElement=document.querySelector('.pictures');

var similarWizardTemplate=document.querySelector('#picture-template').content;



var renderWizard=function(element){ 
//Копируем шаблон 15 раз, вместе со всем содержимым поэтому использую глубокое копирование 
	var wizardElement=similarWizardTemplate.cloneNode(true);
	//Теперь заменяем textContent каждого из картинок на содержимое массива с ключом name
  // wizardElement.querySelector('#searchSrc').textContent=element.url;
  wizardElement.querySelector('img').src = element.url;
	wizardElement.querySelector('.picture-likes').textContent=element.comments;
	wizardElement.querySelector('.picture-comments').textContent=element.likes;
	return wizardElement;
	}


	
//Отрисовываем сгенерированные DOM-элементы в блок .pictures
var fragment=document.createDocumentFragment();

for (var i=0;i<pictures.length;i++){
	//Во fragment добавляем наших картинок
	fragment.appendChild(renderWizard(pictures[i]));

}
//И потом добавляем наш фрагмент в список  картинок 

similarListElement.appendChild(fragment);

// Создал функкцию Gallery что бы перезаписать dom элемент с классом gallery-overlay
// на нужные мне значения с массива
var Gallery=function(element){
  var firstArrayImg=document.querySelector('.gallery-overlay').querySelector('img').src=element.url;
  var firstArrayLikes=document.querySelector('.likes-count').textContent=element.likes;
  var firstArrayComments=document.querySelector('.comments-count').textContent=element.comments;
  // return GalleryElement
};

// Решил что бы рандомно выбрасывал один объект с массива
var item = pictures[Math.floor(Math.random()*pictures.length)];

Gallery(item);
