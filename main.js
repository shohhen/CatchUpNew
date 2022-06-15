var button = document.querySelector("#btn");
var distance = document.querySelector("#distance");

button.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#onFoot").textContent = `${(
    distance.value / 3.6
  ).toFixed(1)} hours`;
  document.querySelector("#bike").textContent = `${(
    distance.value / 20.1
  ).toFixed(1)} hours`;
  document.querySelector("#car").textContent = `${(distance.value / 70).toFixed(
    1
  )} soat`;
  document.querySelector("#plane").textContent = `${(
    distance.value / 800
  ).toFixed(1)} hours`;
});
