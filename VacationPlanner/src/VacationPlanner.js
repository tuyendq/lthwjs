'use strict';

var name = window.prompt("Hello! Please enter your name");

var greeting = document.getElementById("greeting");

greeting.innerHTML += ", " + name;

var enterDays = document.getElementById("enterDays");

enterDays.onclick = calculateDays;

function calculateDays(){
    var daysInput = document.getElementById("days");
    var days = daysInput.value;
    var daysMessage = document.getElementById("daysMessage");
    if(days < 4){
        daysMessage.innerHTML = "Short trips are always worth it!";
    }
    else if(days < 7){
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else{
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }
    
    var hours = days * 24;
}


var images = ["images/new-zealand-96410_1920.jpg", "images/new-zealand-2380693_1920.jpg", "images/new-zealand-2380693_1920.jpg", "images/sea-2480836_1920.jpg" ];

setInterval(changeImage, 3000);

var currentImage = 0;

function changeImage(){
    currentImage++;
    if(currentImage > images.length - 1){
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}