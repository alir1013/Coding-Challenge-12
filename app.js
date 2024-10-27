// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById("drawingApplication");
const drawingContext = canvas.getContext("2d");

let toolSelector = "line";
let color = document.getElementById("colorSelector").value;

document.getElementsByName("tool").forEach(radio => {
    radio.addEventListener("change", (event) => toolSelector = event.target.value);  //Chooes the tool
});

document.getElementById("colorSelector").addEventListener("input", (event) => {     //Selects the color
    color = event.target.value; 
    drawingContext.strokeStyle = color; 
    drawingContext.fillStyle = color; 
});

let drawing = false;
let initialX, initialY;

canvas.addEventListener("mousedown", (event) => {      //detects cursor movement
    drawing = true;
    initialX = event.offsetX;
    initialY = event.offsetY;
});

canvas.addEventListener("mousemove", (event) => {       //detects cursor movement
    if (drawing) {
        drawingContext.clearRect(0, 0, canvas.width, canvas.height); 
        drawShape(toolSelector, initialX, initialY, event.offsetX, event.offsetY);
    }
});

canvas.addEventListener("mouseup", () => {              //detects cursor movement
    drawing = false; 
});



