var cars = [];
var i = 0;
var text = "";

function getNumbers(m){
	while (cars.length < m) {
		var x = Math.floor((Math.random() * m +1));
		if (cars.indexOf(x)<0){
			cars.push(x);
		}
	}
}


function myFunction(b) {
    i++;
    var x = cars[i];
    ii='<img src=".\\level '+b+'T\\Slide'+x+'.JPG" >';
    document.getElementById('show1').innerHTML = ii;
}

function disableClick(){
	document.onmousedown=function(event){
          if ((window.event.button == 2) || (event.button == 2) ) {
            alert('RZBS');
            return false;
          }
        }
        document.onclick=function(event){
          if (event.button == 2) {
                alert('RZBS');
                location.href='./index.html';
                return false;
          }
        }
}
