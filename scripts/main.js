var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/FVV_Logo_ohne_Rahmen.png') {
      myImage.setAttribute ('src','images/FVV_Logo.jpg');
    } else {
      myImage.setAttribute ('src','images/FVV_Logo_ohne_Rahmen.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function SetUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ford ist cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  SetUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ford ist cool, ' + storedName;
}

myButton.onclick = function() {
  SetUserName();
}