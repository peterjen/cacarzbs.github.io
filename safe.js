function disableClick(){
	document.onmousedown=function(event){
          if ((window.event.button == 2) || (event.button == 2) ) {
            alert('Welcome to RZBS');
            return false;
          }
        }
        document.onclick=function(event){
          if (event.button == 2) {
                alert('Welcome to RZBS');
                location.href='./index.html';
                return false;
          }
        }
}
