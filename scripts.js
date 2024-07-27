function main() {
  document.getElementById("playButton").addEventListener("click", () => {
    sound = true;
  });

  const date = new Date();
  const seg = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  const secAngulo = (seg / 60) * 360;
  const minAngulo = (min / 60) * 360 + (seg / 60) * 6;
  const hourAngulo = ((hour / 12) % 12) * 360 + (min / 60) * 30;
  document.getElementById("seg").style.transform = `rotate(${secAngulo}deg)`;
  document.getElementById("min").style.transform = `rotate(${minAngulo}deg)`;
  document.getElementById("hour").style.transform = `rotate(${hourAngulo}deg)`;

  if (sound) {
    const audio = new Audio("tic-tac.mp3");
    audio.play();
  }
}
let sound = false;
setInterval(main, 1000);
main();
