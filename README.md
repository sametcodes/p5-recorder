## p5-recoder
p5-recorder is a deadly simple class that be able to create gif from `canvas` for [p5.js](https://p5js.org/). Depends on [CCapture.all.js](https://github.com/spite/ccapture.js/blob/master/build/CCapture.all.min.js) and [gif.worker.js](https://github.com/jnordberg/gif.js/blob/master/dist/gif.worker.js)

### Usage
```javascript
var recorder;

function setup(){
    recorder = new P5Recorder({gifLength: 100});
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    //draw something on canvas...
    recorder.capture(frameCount);
}
```

Don't forget to include the dependencies.
```html

<script src="js/p5.js"></script>
<script src="js/CCapture.all.min.js"></script>
<script src="js/gif.worker.js"></script>
<script src="js/recorder.js"></script>

<script src="js/sketch.js"></script>
``` 

### Example
https://selmansamet.github.io/p5-recorder/examples/
