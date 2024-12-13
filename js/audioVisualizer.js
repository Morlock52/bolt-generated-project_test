
    export class AudioVisualizer {
      constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        this.isPlaying = false;
      }

      async init() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const source = this.audioContext.createMediaStreamSource(stream);
          source.connect(this.analyser);
          this.animate();
        } catch (error) {
          console.error('Audio initialization failed:', error);
        }
      }

      animate() {
        this.ctx.fillStyle = '