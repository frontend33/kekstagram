(function () {
	var ESC_KEYCODE = 27;
	var ENTER_KEYCODE = 13;

// Мы создаем объект util и запиливаем функции которые в дальнейшем можем вызывать
 // в разных js файлах, что бы не писать один код по 100 раз
	window.util = {
		addClass: function(element, className){
			element.classList.add(className);
		},
		removeClass: function (element, className) {
  		// gallery.classList.remove('hidden');
  			element.classList.remove(className);
  		},
  		EventEsc: function(evt,action){
  			if (evt.keyCode===ESC_KEYCODE){
    			action(); 
  		}

	}



})();
