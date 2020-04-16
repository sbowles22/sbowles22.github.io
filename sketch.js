// Used the video provided to write this code
// https://www.youtube.com/watch?v=L-Lsfu4ab74

var data = []


// Initialize line vars
var m = 1;
var b = 0.5;

function setup() {
    createCanvas(400, 400);
}

function gradientDescent() {
    var learning_rate = 0.1;
    for (var i = 0; i < data.length; i++) {
        var x = data[i].x;
        var y = data[i].y;
        var guess = m * x + b;
        var error = y - guess;
        m = m + (error * x) * learning_rate;
        b = b + error * learning_rate;
    }
}

// Draw the current line
function LineDrawing() {
    var x1 = 0;
    var y1 = m * x1 + b;
    var x2 = 1;
    var y2 = m * x2 + b;

    x1 = map(x1, 0, 1, 0, width);
    y1 = map(y1, 0, 1, height, 0);
    x2 = map(x2, 0, 1, 0, width);
    y2 = map(y2, 0, 1, height, 0);

    stroke(255);
    strokeWeight(2);
    line(x1, y1, x2, y2);
    stroke(200, 0, 0);
    line(m * x1 ^ 2 + b * x1 + c, y1, m * x2 ^ 2 + b * x2 + c, y2);
}

function pressMouse() {
    //This function adds data points to the list every time the mouse is clicked.
    var x = map(mouseX, 0, width, 0, 1);
    var y = map(mouseY, 0, height, 1, 0);
    var dot = createVector(x, y);
    data.push(dot);
}

function draw() {
    background(30);
    for (var i = 0; i < data.length; i++) {
        var x = map(data[i].x, 0, 1, 0, width);
        var y = map(data[i].y, 0, 1, height, 0);
        fill(255);
        stroke(255);
        ellipse(x, y, 5, 5);
    }

    if (data.length > 1) {
        gradientDescent();
        LineDrawing();
    }
}