document.addEventListener('DOMContentLoaded', function() {
  // Your centaur slider code
  const centaurRange = document.getElementById('centaurRange');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  function updateCentaur() {
    const value = parseFloat(centaurRange.value);
    if (value <= 1) {
      const alpha = value;
      image1.style.opacity = 1 - alpha;
      image2.style.opacity = alpha;
      image3.style.opacity = 0;
    } else {
      const alpha = value - 1;
      image1.style.opacity = 0;
      image2.style.opacity = 1 - alpha;
      image3.style.opacity = alpha;
    }
  }

  centaurRange.addEventListener('input', updateCentaur);
  updateCentaur();

  // Toggle music code
  const bgMusic = document.getElementById('bgMusic');
  const toggleMusic = document.getElementById('toggleMusic');

  toggleMusic.textContent = bgMusic.paused ? "Play Music" : "Pause Music";

  toggleMusic.addEventListener('click', function() {
    if (bgMusic.paused) {
      bgMusic.play();
      this.textContent = "Pause Music";
    } else {
      bgMusic.pause();
      this.textContent = "Play Music";
    }
  });
});
