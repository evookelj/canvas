var b = document.getElementById("clear");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

b.addEventListener('click',
		   function() {
		       ctx.clearRect(0,0,canvas.width,canvas.height);
		   });

canvas.addEventListener('click',
		   function(event) {
		       var rect = canvas.getBoundingClientRect();
		       var x = event.clientX - rect.left;
		       var y = event.clientY - rect.top;
		       ctx.fillStyle = '#ffff00';
		       ctx.fillRect(0, 0, x, y);
		   });
