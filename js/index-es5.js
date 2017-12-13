'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tTime = 100; // transition time from form in ms
var position = 0;

//home page reload
var homeButton = document.getElementById("homeButton");
var inputLabel = document.getElementById("inputLabel");
var numField = document.getElementById("numField");
var container = document.getElementById("container");
var inputProgress = document.getElementById("inputProgress");
var submit = document.getElementById("submit");

homeButton.addEventListener('click', refresh);

//function to enter fibonacci
enterFibonacciLimit();

submit.addEventListener('click', validate);
numField.addEventListener('keyup', function (_ref) {
  var keyCode = _ref.keyCode;

  if (keyCode == 13) validate();
});

// enter fibonacci limit
function enterFibonacciLimit() {
  inputLabel.innerHTML = '<span style="color:#585858"> Enter the limit for fibonacci series </span>';
  numField.value = '';
  displayQuestion();
}

// when all the questions have been answered
function done() {
  // remove the box when the limit is entered
  form.className = 'close';

  // create h1 elem to display the fibonacci number
  var h1 = document.createElement('h1');
  var res = calcFiboNth(numField.value);
  h1.appendChild(document.createTextNode("The " + ordinal(numField.value) + " Fibonacci number is: " + res));

  setTimeout(function () {
    form.parentElement.appendChild(h1);
    setTimeout(function () {
      h1.style.opacity = 1;
    }, 50);
  }, 1000);
}

//function to calcuate the fibonacci number for the given limit
function calcFiboNth(n) {
  // Do Something
  if (n >= 0) {
    var first = 0,
        second = 1,
        fib = 1;
    for (var i = 2; i <= n; i++) {
      fib = first + second;
      first = second;
      second = fib;
    }
    return fib;
  }

  return null;
};

exports.calcFiboNth = calcFiboNth;


var ordinal = function ordinal(num) {
  var ordinalInteger = num + (['st', 'nd', 'rd'][("" + num).match(/1?\d\b/) - 1] || 'th');
  return ordinalInteger;
};

function hideQuestion(callback) {
  container.style.opacity = 0;
  inputProgress.style.transition = "all 2s";
  inputProgress.style.width = 0;
  setTimeout(callback, tTime);
}

function displayQuestion(callback) {
  container.style.opacity = 1;
  inputProgress.style.transition = "all 2s";
  inputProgress.style.width = '100%';
  // setTimeout(callback, tTime);
}

// when submitting the current question
function validate() {
  // check if the pattern matches
  if (!numField.value.match(/.+/) || numField.value < 0) wrong();else ok(function () {
    hideQuestion(done());
  });
}

function ok(callback) {
  form.className = '';
  setTimeout(callback, tTime * 2);
}

function refresh() {
  location.reload();
}

function wrong() {
  form.className = 'wrong';
  $("#form").effect("shake", { times: 4 }, 1000);
}
