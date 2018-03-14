'use strict';

(function () {
  var stepUpload=25;
  var stepMin=25;
  var stepMax=100;

  var uploadValue =document.querySelector(".upload-resize-controls-value");
  // resizeField Блок в котором будем реагировать на событие
  var resizeField = document.querySelector('.upload-resize-controls');
  var uploadImg =document.querySelector(".effect-image-preview");

// Функция позволяет взять текущее значение с инпута uploadValue
// и добавить трансформацию через transform: scale(0.75)
  var resizePhoto = function (photo) {
  	// Преобразовываем при помощи parseInt строку в целое число
    var currentValue = parseInt(uploadValue.value, 10);
    // для transform:scale округляем до сотой части
    var scale = currentValue / 100;
    photo.style.transform = 'scale(' + scale + ')';
  }


// Создаем функцию увеличения значения изображения
  var increasePhoto=function(photo){
    // Берем текущее значения value с элемента uploadValue
    // И пилим условие, если текущее значение меньше 100 тогда 
    // прибавь 25, после изменения нашего значения вызываем
    // resizePhoto и по нему изменяем масштаб нашего изображение
    var currentValue = parseInt(uploadValue.value, 10);
    if (currentValue<stepMax){
      uploadValue.value=currentValue+stepUpload+"%"
      resizePhoto(photo)
    }
    return currentValue;
  }

  var decreasePhoto=function(photo){
    var currentValue = parseInt(uploadValue.value, 10);
    if (currentValue>stepMin){
       uploadValue.value=currentValue-stepUpload+"%"
        resizePhoto(photo)
    }
    return currentValue;
  }


  var onResizeClick = function (evt, photo) {
  	// Выбираем таргет на котором произошло событие если - то вызываем decreasePhoto(photo)
    var currentTarget = evt.target;
      if (currentTarget.classList.contains('upload-resize-controls-button-dec')) {
        decreasePhoto(photo);
    }
  //Если кнопка + вызываем функцию increasePhoto
      if(currentTarget.classList.contains('upload-resize-controls-button-inc')){
        increasePhoto(photo);
      };
  };

// Вешаем событие при клике на uploadEffect
	// uploadEffect.addEventListener("click",onResizeClick)
  resizeField.addEventListener('click', function (evt) {
   onResizeClick(evt, uploadImg);
  });


  window.resize = onResizeClick;
})();
