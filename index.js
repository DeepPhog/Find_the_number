//variables
var submit = document.getElementById("submit");
var random = document.getElementById("random");
var start = document.getElementById("start");
var list = document.getElementById("write");
var buttonclick = document.getElementById("background");
var startbutton = document.getElementById("start");
var randomnum = Math.round(Math.random() * 100);
//Start button
start.onclick = function start() {
  buttonclick.removeAttribute("class", "hidden");
  buttonclick.setAttribute("class", "background");
  startbutton.setAttribute("class", "hidden");
  console.log(randomnum + " is the right number");
};
//random
random.onclick = function getrandomnumber() {
  // var li = document.getElementById("answer");
  // li.remove;
  document.getElementById("write").innerHTML = "";
  var number = Math.round(Math.random() * 100);
  console.log(number + " is the number you got");
  if (number != randomnum) {
    var data = [number + " did not bring you luck. Try again or write number."];
  } else if (number == randomnum) {
    var data = [number + " is the right number"];
  }
  var list = document.getElementById("write");
  data.forEach((item) => {
    var li = document.createElement("div");
    li.setAttribute("id", "answer");
    li.innerText = item;
    list.appendChild(li);
  });
};
//Enter number
submit.onclick = function getnumber() {
  document.getElementById("write").innerHTML = "";
  var number = document.getElementById("number").value;
  console.log(number + " is the number you got");
  if (number < randomnum) {
    var data = ["Write a number greater then then " + number];
  } else if (number > randomnum) {
    var data = ["Write a number lower then then " + number];
  } else {
    var data = [number + " Is the right number"];
  }

  data.forEach((item) => {
    var li = document.createElement("div");
    li.setAttribute("id", "answer");
    li.innerText = item;
    list.appendChild(li);
  });
};
