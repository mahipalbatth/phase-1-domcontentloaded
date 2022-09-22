// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.querySelector('p').innerHTML = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
// const element = document.createElement('p');
// element.id = "text";
// element.innerHTML = "JavaScript is so cool. It lets me add text to my page programmatically.This is really cool!";

