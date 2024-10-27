
// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.getElementById("drawingApplication");
const drawingContext = canvas.getContext("2d");

let toolSelector = "line";
let color = document.getElementById("colorSelector").value;

document.getElementsByName("tool").forEach(radio => {
    radio.addEventListener("change", (event) => {
        toolSelector = event.target.value;  // Chooses the tool
    });
});

document.getElementById("colorSelector").addEventListener("input", (event) => {  // Selects the color
    color = event.target.value; 
    drawingContext.strokeStyle = color; 
    drawingContext.fillStyle = color; 
});

let drawing = false;
let initialX, initialY;

canvas.addEventListener("mousedown", (event) => {  // detects mouse down
    drawing = true;
    initialX = event.offsetX;
    initialY = event.offsetY;
});

canvas.addEventListener("mousemove", (event) => {  // detects mouse movement
    if (drawing) {
        drawingContext.clearRect(0, 0, canvas.width, canvas.height); 
        drawShape(toolSelector, initialX, initialY, event.offsetX, event.offsetY);
    }
});

canvas.addEventListener("mouseup", () => {  // detects mouse up
    drawing = false; 
});

// Task 3: Implement Shape Drawing Logic
function drawShape(tool, startX, startY, mouseX, mouseY) {
    drawingContext.clearRect(0, 0, canvas.width, canvas.height);  // Clear canvas before each draw
    if (tool === "line") {            //Selecting the tool "line"

        drawingContext.beginPath();
        drawingContext.moveTo(startX, startY);
        drawingContext.lineTo(mouseX, mouseY);
        drawingContext.stroke();

    } else if (tool === "circle") {  //Selecting the tool "circle"
 
        const radius = Math.sqrt((mouseX - startX) * (mouseX - startX) + (mouseY - startY) * (mouseY - startY));
        drawingContext.beginPath();
        drawingContext.arc(startX, startY,radius, 0, 2 * Math.PI);
        drawingContext.stroke();
    

} else if (tool === "rectangle") {    //Selecting the tool "rectangle"

    drawingContext.beginPath();
    drawingContext.rect(startX, startY, mouseX - startX, mouseY - startY);
    drawingContext.stroke();

}}

//Task 4: Add Color Selection and Canvas Clearing

const clearButton = document.getElementById("clearTheCanvas");   //Clear Canvas Button
clearButton.addEventListener("click", () => {
    drawingContext.clearRect(0, 0, canvas.width, canvas.height); 
});
