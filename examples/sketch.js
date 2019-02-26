var recorder;

let yoff = 0.0;

function setup(){
    recorder = new P5Recorder({gifLength: 100, framerate: 30});
    createCanvas(400, 400);
    frameRate(60);
}

function draw(){
    background(51);

    fill(255);
    beginShape();

    let xoff = 0;
    for (let x = 0; x <= width; x += 10) {
        let y = map(noise(xoff, yoff), 0, 1, 200, 300);
        vertex(x, y);
        xoff += 0.05;
    }

    yoff += 0.01;

    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);

    recorder.capture(frameCount);
}
