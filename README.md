## The setTimeout() and The setInterval() function

The setTimeout function allows you to execute a function in the future. This function takes two arguments:

The function to execute

The time, in milliseconds (thousandths of a second), the timer should wait before the specified function or code is executed.

## Example

```javascript
function theExplosion() {
  alert("BOOM!");
}

const button = document.createElement("button");
button.textContent = "WARNING";
button.addEventListener("click", () => {
  // this will delay the event by 5 seconds
  setTimeout(theExplosion, 5000);
});
document.body.appendChild(button);
```

The setInterval is another way to call a function multiple times. It works exactly like setTimeout except, the function is called repetitively.

Simple example
The previous "hey you" example can be rewritten like this:

## Example

```javascript
let times = 0;
function heyYou() {
  console.log("Hey! You! I called you " + times + " times!");
  times++;
}

setInterval(heyYou, 1000);
```

## Exercices

#### Exercice 1

Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word Wilson-2 one character at a time (one letter per second). Once the word is written on the screen clear the interval.

If you care about making it pretty, add a transition effect on the character apparition

#### Exercise 2

Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

Feel free to, once again, add a transition effect! ( a different one this time of course)