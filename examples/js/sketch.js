var recorder;

let x = 0;
let y = 0;

function setup(){
    recorder = new P5Recorder({gifLength: 40});
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(51);

    x = lerp(x, mouseX, 0.05);
    y = lerp(y, mouseY, 0.05);

    fill(255);
    stroke(255);
    ellipse(x, y, 66, 66);

    recorder.capture(frameCount);
}
