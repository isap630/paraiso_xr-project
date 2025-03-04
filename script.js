window.onload = function() {

  document.getElementById("button").onclick = function() {
    document.getElementById("modal").style.display = "none";
    const soundEntity = document.getElementById('beach-sounds');
    soundEntity.components.sound.playSound();
  };
};

    