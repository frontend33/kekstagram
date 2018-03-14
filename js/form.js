'use strict';

(function () {
  var uploadForm=document.querySelector('.upload-form');
  var uploadField= uploadForm.querySelector('.upload-input');
  var filterForm= uploadForm.querySelector('.upload-overlay');
  var buttonClose = filterForm.querySelector('.upload-form-cancel');
  var uploadControl = uploadForm.querySelector('.upload-control');
	var onPopupEscPress=function(evt){
    	window.util.eventEsc(evt,onButtonClose);
    }
  
  var onInputChange=function(evt){
  	evt.preventDefault();
  	window.util.removeClass(filterForm,'hidden');
  	document.addEventListener('keydown',onPopupEscPress)
  	buttonClose.addEventListener('keydown', function () {
      window.util.eventEnter(evt, onButtonClose);
    });

  	
  }
 	uploadField.addEventListener('change', onInputChange);


	var onButtonClose=function(){
		window.util.addClass(filterForm,'hidden');
		// uploadForm.reset();
	}
	buttonClose.addEventListener("click",onButtonClose)


	var openPopup=function(evt){
		window.util.removeClass(filterForm,'hidden');

};

	var closePopup=function(){
		window.util.addClass(filterForm,'hidden');
		document.removeEventListener("keydown",onPopupEscPress)
};


	uploadControl.addEventListener("keydown",function(evt){
		// window.util.eventEnter(evt, openPopup);
		if (evt.keyCode===13){
			openPopup();
	}
});

	uploadControl.addEventListener('keydown',function(evt){
		if (evt.keyCode===27){
			closePopup()

	}
});




})();
