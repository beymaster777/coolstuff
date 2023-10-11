canvas=document.getElementById('myCanvas')
canvas.addEventListener("mousedown", my_mousedown);
var last_position_of_x
var last_position_of_y
var color
var current_position_of_mouse_x
var current_position_of_mouse_y
var width_of_line
tasty=canvas.getContext("2d")
function my_mousedown(e)

{
    //color=document.getElementById("color").value;
    //width_of_line= document.getElementById("width_of_line").value;
    color="red";
    width_of_line=3;

    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)

{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove)

function my_mousemove(e)
{

    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY- canvas.offsetTop;

    if(mouseEvent="mouseDown")
    {
        tasty.beginPath();
        tasty.strokeStyle=color;
        tasty.lineWidth= width_of_line;

        console.log("Last position of x and y coordinates= ")
        console.log("x=" +last_position_of_x+ "y="+last_position_of_y);
        tasty.moveTo(last_position_of_x, last_position_of_y);


        console.log("Current position of x and y cordinates=");
        console.log("x=" +last_position_of_x+ "y="+current_position_of_mouse_y);
        tasty.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        tasty.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        tasty.stroke();

    
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}