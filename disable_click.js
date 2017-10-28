	document.onmousedown=function(event){
          if ((window.event.button == 2) || (event.button == 2) ) {
            alert('Window is now closing (Error Code 1 : invalid operation)');
	    open(location, '_self').close();
	    //location.href='http://www.google.com';
            //return false;
          }
	  event = (event || window.event);
          if (event.keyCode == 123) {
            alert('No F12-key ' + event.keyCode );
	    open(location, '_self').close();
            return false;
          }
        }

        document.onclick=function(event){
          if (event.button == 2) {
		alert('Window is now closing (Error Code 2 : invalid operation)');
		open(location, '_self').close();
                //location.href='http://www.google.com';
                return false;
          }

        }
	document.onkeypress = function (event) {
          event = (event || window.event);
          if (event.keyCode == 123) {
 	    alert('No F12-key ' + event.keyCode );
            return false;
          }	
	}
	document.onkeydown = function (event) {
          event = (event || window.event);

          if (event.keyCode == 123) {
            alert('No F12-key ' + event.keyCode );
            return false;
          }
          //if (event.ctrlKey && (event.keyCode === 67 || event.keyCode === 86 || event.keyCode === 85 || event.keyCode === 117 || event.keycode === 17 || event.keycode === 85)) {//ctrl+u Alt+c, Alt+v will also be disabled sadly.
	  if (event.ctrlKey){
            alert('No Ctrl Key '+ event.keyCode);
          }
	  if(event.altKey){
            alert('No Alt Key  '+ event.keyCode);
          }
          return false;	
	}