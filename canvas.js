var b = document.getElementById("clear");
var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
ctx.beginPath();

b.addEventListener('click',
		   function() {
		       ctx.clearRect(0,0,canvas.width,canvas.height);
		       ctx.beginPath()
		   });


//HW2
canvas.addEventListener('click',
			function(event) {
			    var rect = canvas.getBoundingClientRect();
			    var x = event.clientX - rect.left;
			    var y = event.clientY - rect.top;
			    ctx.lineTo(x,y);
			    ctx.stroke();
			    circle(x,y);
			});

var circle = function(x,y) {
    ctx.beginPath();
    ctx.moveTo(x+10,y);
    ctx.arc(x,y,10,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.stroke();
    ctx.fill();
}

var hw1 = function(event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(0, 0, x, y);
}
