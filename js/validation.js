'use strict';

(function () {
  var MAX_LENGTH_HESHTAG = 20;
  var MIN_LENGTH_HESHTAG = 2;
  var MAX_NUMBER_HESHTAG = 5;


// Ищем поле с хештегами
  var hashtagField = document.querySelector('.upload-form-hashtags');

  var getCustomValidity = function (tagsField) {

  	//Список куда будем пушить ошибки
   var errorMessages = [];
    // Удалим при помоще метода trim пробелы с начала и конца строки, при помощи метода toLowerCase нижний регистр
    // split(s), который позволяет превратить строку в массив, разбив ее по разделителю s , в нашем случае пробел превращает
    //все теги на запятые, и все текстовое поле tagsField разбивается на отдельные теги
    var hashtags = tagsField.trim().toLowerCase().split(' ');
// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// Вернет новый массив  где tag не равен пробелу
    hashtags = hashtags.filter(function (tag) {
      return tag !== '';
    });
// Проверка на колличество тегов
    if (hashtags.length > MAX_NUMBER_HESHTAG) {
      errorMessages.push('Вы превысили максимальное число хештегов! Максимум ' + MAX_NUMBER_HESHTAG + '. Сейчас хештегов: ' + hashtags.length + '.');
    }
// Цикл который перебирает каждый тег и проверяем на длину тега ,на минимальную длину тега, и на первый символ тега
    hashtags.forEach(function (tag) {
      if (tag.length > MAX_LENGTH_HESHTAG) {
        errorMessages.push('Количество символов в хештеге не должно превышать ' + MAX_LENGTH_HESHTAG + '. Сейчас символов: ' + tag.length + '.');
      } else if (tag.length < MIN_LENGTH_HESHTAG) {
        errorMessages.push('Количество символов в хештеге не должно быть меньше ' + MIN_LENGTH_HESHTAG + '. Сейчас символов: ' + tag.length + '.');
      } else if (tag[0] !== '#') {
        errorMessages.push('Хештег должен начинаться с "#"!, а не с ' + tag[0] + '.');
      }
    });




// Функция проверяет на наличие повторяющихся тегов
    var isDuplicate = function (item, i, array) {
      return ~array.indexOf(item, i + 1);
    };

    if (hashtags.some(isDuplicate)) {
      errorMessages.push('Хештеги не должны повторяться.');
    }

    if (errorMessages.length !== 0) {
      hashtagField.setCustomValidity(errorMessages[0]);
      hashtagField.style.borderColor = 'red';
    } else {
      hashtagField.setCustomValidity('');
      hashtagField.style.borderColor = 'rgb(238, 238, 238)';
    }
}
// При нажатии на инпут сработает событие
 hashtagField.addEventListener('input', function (evt) {
    getCustomValidity(evt.target.value);
  });
})();
