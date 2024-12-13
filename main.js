
    import { ParticleSystem } from './js/particles.js';
    import { MatrixEffect } from './js/matrix.js';
    import { AudioVisualizer } from './js/audioVisualizer.js';
    import { Terminal } from './js/terminal.js';

    document.addEventListener('DOMContentLoaded', () => {
      // Initialize Particle System
      const particleCanvas = document.getElementById('particleCanvas');
      const particles = new ParticleSystem(particleCanvas);

      // Initialize Matrix Effect
      const matrixCanvas = document.getElementById('matrixCanvas');
      const matrix = new MatrixEffect(matrixCanvas);
      matrix.start();

      // Initialize Audio Visualizer
      const audioCanvas = document.getElementById('audioCanvas');
      const audioVisualizer = new AudioVisualizer(audioCanvas);
      document.addEventListener('click', () => audioVisualizer.init(), { once: true });

      // Initialize Terminal
      const terminalElement = document.getElementById('terminal');
      const terminal = new Terminal(terminalElement);

      // Initialize Floating Symbols
      initializeFloatingSymbols();

      // Initialize Links
      initializeLinks();

      // Add Glitch Effect to Button
      const ctaButton = document.getElementById('ctaButton');
      ctaButton.addEventListener('mouseover', () => {
        ctaButton.classList.add('glitch-effect');
      });
      ctaButton.addEventListener('mouseout', () => {
        ctaButton.classList.remove('glitch-effect');
      });

      // Add 3D Tilt Effect to Feature Cards
      const featureCards = document.querySelectorAll('.feature-card');
      featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (centerY - y) / centerY * 10;
          const rotateY = (x - centerX) / centerX * 10;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });