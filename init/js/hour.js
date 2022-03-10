const myInterval = setInterval(myTimer, 1000)
function myTimer() {
  const date = new Date();
  document.getElementById("txt0").innerHTML = `<b>${date.toLocaleTimeString().split(' ')[0]
}</b>`
}


