<<<<<<< HEAD
function disableClick(){
	
	document.onmousedown=function(event){
          if ((window.event.button == 2) || (event.button == 2) ) {
            alert('Welcome to RZBS 1');
	    location.href='http://www.google.com';
            return false;
          }
	  event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-keys' + event.keyCode );
            return false;
          }
        }

        document.onclick=function(event){
          if (event.button == 2) {
                alert('Welcome to RZBS 2');
                location.href='http://www.google.com';
                return false;
          }

        }
	document.onkeypress = function (event) {
          event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-12'+ event.keyCode );
            return false;
          }	
	}
	document.onkeydown = function (event) {
          event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-keys' + event.keyCode );
            return false;
          }
          if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85 || event.keyCode === 117 || event.keycode === 17 || event.keycode === 85)) {//ctrl+u Alt+c, Alt+v will also be disabled sadly.
            alert('not allowed'+ event.keyCode);
          }
          return false;	
	}
}
=======
function disableClick(){
	
	document.onmousedown=function(event){
          if ((window.event.button == 2) || (event.button == 2) ) {
            alert('Welcome to RZBS 1');
	    location.href='http://www.google.com';
            return false;
          }
	  event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-keys' + event.keyCode );
            return false;
          }
        }

        document.onclick=function(event){
          if (event.button == 2) {
                alert('Welcome to RZBS 2');
                location.href='http://www.google.com';
                return false;
          }

        }
	document.onkeypress = function (event) {
          event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-12'+ event.keyCode );
            return false;
          }	
	}
	document.onkeydown = function (event) {
          event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F-keys' + event.keyCode );
            return false;
          }
          if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85 || event.keyCode === 117 || event.keycode === 17 || event.keycode === 85)) {//ctrl+u Alt+c, Alt+v will also be disabled sadly.
            alert('not allowed'+ event.keyCode);
          }
          return false;	
	}
}
>>>>>>> 7edddd83d73ad097fd5767442387df682c1e7037
