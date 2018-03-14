'use strict';

(function () {
  // Добавляем переменные классы

  var chrome="upload-effect-chrome"
  var sepia="effect-sepia"
  var marvin= "effect-marvin"
  var phobos="effect-phobos"
  var heat="effect-heat"


  var imagePreview=document.querySelector(".effect-image-preview")
  var uploadOverlay=document.querySelector(".upload-effect-controls");
  var effectChrome=uploadOverlay.querySelector("upload-effect-chrome");
  var effectSepia=document.querySelector("upload-effect-label-sepia");
  var effectMarvin=uploadOverlay.querySelector("upload-effect-label-marvin");
  var effectPhobos=uploadOverlay.querySelector("upload-effect-label-phobos");
  var effectHeat=uploadOverlay.querySelector("upload-effect-label-heat");

  var effectControlsField = document.querySelector('.upload-effect-controls');

  // uploadOverlay.addEventListener('change', function (evt) {
  //     imagePreview.classList.add("effect-sepia");
  //   };


// Добавим класс в зависимости от фильтра
// Берем значения с targetInput.value и добавляем класс с фильтрацией 
// в зависимости от значения
  var onChangeEffect = function (evt, photo) {
    var targetInput = evt.target.closest('input[type=radio]');
    photo.classList.remove(photo.classList[1]);
    if (targetInput){
      if (targetInput.value==="none"){
        return targetInput
      }
      else{
        imagePreview.classList.add("effect-"+targetInput.value+'');
      }
    
    }

  }



    uploadOverlay.addEventListener('change', function (evt) {
    onChangeEffect(evt, imagePreview);
  });


})();
