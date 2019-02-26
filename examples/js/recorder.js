class P5Recorder {
  constructor({
      gifLength = 50,
      framerate = 30
  }) {
    this.gifLength = gifLength;
    this.framerate = framerate;

    this.capturer = new CCapture({
      format: 'gif',
      framerate: this.framerate,
      workersPath: './js/',
    });
    this.capturer.start();
    this.createLog();
  }

  createLog() {
    var log = document.createElement('div');
    log.innerText = "";
    log.id = "log";
    log.style = "position:absolute;top:10;left:10;padding:5px 10px;background-color:green;color:#fff;";
    document.body.append(log);
  }

  updateLog(text) {
    window.document.getElementById("log").innerText = text;
  }

  capture(frameCount) {
    if (frameCount <= this.gifLength) {
      this.updateLog(`capturing: ${frameCount}/${this.gifLength}`);
      this.capturer.capture(document.getElementById('defaultCanvas0'));
    } else if (frameCount === this.gifLength + 1) {
      this.updateLog('rendering...');
      this.capturer.stop();
      this.capturer.save();
    }
  }
}

