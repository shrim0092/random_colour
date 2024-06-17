function randomColour() {
  let r=Math.trunc(Math.random(1)*255);
  let g=Math.trunc(Math.random(1)*255);
  let b=Math.trunc(Math.random(1)*255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.getElementById("colour_code").innerHTML = `<b>(${r}, ${g}, ${b})</b>`;
}
