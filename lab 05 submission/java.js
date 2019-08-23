var canvas=document.getElementById('mycvs');
		var ctx=canvas.getContext("2d");

		function drawOnLoad() {}
		var x = 0, xSpeed = 2;	

		function drawRect() {
			ctx.fillStyle = "rgb(0,0,255)";
			ctx.fillRect(x,100,10,10);
		}

		function update() {
			ctx.clearRect(0,0,canvas.width,canvas.height);
			drawRect();
			ctx.fillStyle = "rgba(255,0,0,0.5)";
			ctx.beginPath();
			ctx.arc(120,50,10,0,2*Math.PI);
			ctx.fill();
			x+=xSpeed;
			if(x+10>=canvas.width|| x<=0) {
				xSpeed=-xSpeed; }

			}
		update();
		setInterval(update,1000/60);