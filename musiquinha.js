let musica;

function preload(){
  musica = loadSound("Disney.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}