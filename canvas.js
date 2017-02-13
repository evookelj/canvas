var b = document.getElementById("clear");
var c = document.getElementById("slate");
var ctx = c.getContext("2d");

b.addEventListener('click',
		   function(e) {
		       ctx.clearRect(0,0,500,300);
		   });


