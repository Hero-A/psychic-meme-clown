img="";

function preload(){
    img = loadImage('wolfdog.jpg')
}

function setup(){
    canvas = createCanvas(456, 450);
    canvas.center();
}

function draw(){
    image(img, 0, 0, 456, 450);
    fill('red');
    text("Wolf Dog 87.5 wolf, 8.6 huskey, 3.9 german shepard", 45, 75);
    noFill();
    stroke("green");
    rect(30, 84, 350, 345);
    strokeWeight(4);
}