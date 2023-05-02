/* Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word Wilson-2 one character at a time 
(one letter per second). Once the word is written on the screen clear the interval. */

let message = "Wilson-2";
let index = 0;
let colors = ["red", "blue", "green", "grey", "orange", "purple"];

// Créer la div pour afficher le message
let messageContainer = document.createElement("div");
messageContainer.classList.add("wilson");
document.body.appendChild(messageContainer);

function typewriter() {
  if (index < message.length) {
    // cahrAt() renvoie une chaîne caractère par caractère
    messageContainer.textContent += message.charAt(index);
    // change à chaque itération la couleur
    messageContainer.style.color = colors[index % colors.length];
    index++;
  } else {
    clearInterval(messageInterval);
  }
}
let messageInterval = setInterval(typewriter, 1000);

/* Write a function that displays every second that has passed on 
the page since it was opened. The display should be refreshed every second. 
If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have 
passed" (for 120 seconds and more), etc.
Feel free to once again, add a transition effect! ( a different one 
this time of course) */

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
