/* Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word Wilson-2 one character at a time 
(one letter per second). Once the word is written on the screen clear the interval. */

let message = "Wilson-2";
let index = 0;
let colors = ["red", "blue", "green", "grey", "orange", "purple"];

let messageContainer = document.createElement("div");
messageContainer.classList.add("wilson");
document.body.appendChild(messageContainer);

let messageInterval = setInterval(typewriter, 1000);

function typewriter() {
  if (index < message.length) {
    messageContainer.textContent += message.charAt(index);
    messageContainer.style.color = colors[index % colors.length];
    index++;
  } else {
    clearInterval(messageInterval);
  }
}
typewriter();


function displaySeconds() {
  let seconds = 0;
  const messagePage = " minutes se sont écoulées";
  const timerDiv = document.createElement("div");
  timerDiv.id = "timer";
  document.body.appendChild(timerDiv);

  setInterval(function () {
    seconds++;

    if (seconds % 60 === 0) {
      const minutes = seconds / 60;
      const message = minutes + messagePage;
      timerDiv.innerHTML = message;
      timerDiv.classList.add("move");
      setTimeout(function () {
        timerDiv.classList.remove("move");
      }, 1000);
    } else {
      timerDiv.innerHTML = seconds + " secondes se sont écoulées";
    }
  }, 1500);
}
displaySeconds();
