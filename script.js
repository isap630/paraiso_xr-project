window.onload = function() {

  document.getElementById("button").onclick = function() {
    document.getElementById("modal").style.display = "none";
    document.querySelectorAll('.beach-sound').forEach(soundEntity => {
      soundEntity.components.sound.playSound();
  });
  };
};