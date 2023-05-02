// Let's start with a basic example, you can try this directly in the console.

console.log("WARNING! In exactly five seconds something will explode");

function theExplosion() {
  console.log("BOOM!");
}

setTimeout(theExplosion, 5000);

