alert("js added");
// window.onload = ()=>{
//     alert("page loaded");
// }
const SpeedUp = document.getElementById("SpeedUp");
const SpeedDown = document.getElementById("SpeedDown");
const Volumeup = document.getElementById("Volumeup");
const volumedown = document.getElementById("volumedown");
const speedhandler = function () {
  alert("Speed Up");
};
SpeedUp.addEventListener("click", speedhandler);
SpeedDown.addEventListener("click", () => {
  alert("Speed Down");
});
