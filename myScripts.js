var penColor;

/* Sets the color of the pen.
 * 
 * color is the color to which to set the pen
 */
function setPenColor(color)
{
	penColor = color;
}

/* Draws an arc.
 *
 * (x, y) is the location of the center of the arc in the canvas  
 * radius is the radius of the arc
 *
 * start is where the arc starts; 0 is at 3 0'clock
 *
 * end is where the arc ends; should be entered as a multiple of Math.PI
 *     where Math.PI is a 180 degree arc ending at 9 o'clock                                
 *
 * if solid is true, the circle will be solid                        
 */
function drawArc(x, y, radius, start, stop, solid)
{
  	var ctx = document.getElementById("canvas").getContext("2d");
  		
	ctx.beginPath();
	ctx.arc(x, y, radius, start, stop, true);
	draw(ctx, solid);
}

/* Draws a circle.
 *
 * (x, y) is the location of the center of the circle in the canvas  
 *
 * radius is the radius of the circle                                
 *
 * if solid is true, the circle will be solid                        
 */
function drawCircle(x, y, radius, solid)
{
  	var ctx = document.getElementById("canvas").getContext("2d");
		
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
	draw(ctx, solid);
}

/* Draws a rectangle
 * 
 * (x, y) is the upper left corner of the rectangle
 *
 * width is the width of the rectangle
 *
 * height is the height of the rectangle
 *
 * if solid is true, the rectangle will be solid
 */
function drawRectangle(x, y, width, height, solid) 
{
  	var ctx = document.getElementById("canvas").getContext("2d");

	if(solid)
	{
		ctx.fillStyle = penColor;
		ctx.fillRect (x, y, width, height);
		ctx.fill();
	}
	else
	{
	    ctx.strokeStyle = penColor;
		ctx.strokeRect (x, y, width, height);
		ctx.stroke();
	}
		
	//draw(ctx, solid);
}

/* Draws a triangle.
 * 
 * (x1, y1), (x2, y2), and (x3, y3) are the vertices of the triangle.
 *
 * if solid is true, the triangle will be filled.
 */
function drawTriangle(x1, y1, x2, y2, x3, y3, solid) 
{
  	var ctx = document.getElementById("canvas").getContext("2d");
		
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x1, y1);
	draw(ctx, solid);
}

/* Draws the given context.
 *
 * ctx is the context
 *
 * solid is true, the context will be solid
 */
function draw(ctx, solid)
{
	if (solid)
	{
		ctx.fillStyle = penColor;
		ctx.fill();
	}
	else
	{
		ctx.strokeStyle = penColor;
		ctx.stroke();
	}
}