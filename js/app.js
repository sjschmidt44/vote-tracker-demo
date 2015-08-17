'use strict';

var photoArray = [];

var Photo = function(fileLocation){ //constructor
	this.path = fileLocation;
	this.votes;
}

//instances of your photos
var photo0 = new Photo('img/kittens/0.jpg');
var photo1 = new Photo('img/kittens/1.jpg');
var photo2 = new Photo('img/kittens/2.jpg');
var photo3 = new Photo('img/kittens/3.jpg');
var photo4 = new Photo('img/kittens/4.jpg');
var photo5 = new Photo('img/kittens/5.jpg');
var photo6 = new Photo('img/kittens/6.jpg');
var photo7 = new Photo('img/kittens/7.jpg');
var photo8 = new Photo('img/kittens/8.jpg');
var photo9 = new Photo('img/kittens/9.jpg');
var photo10 = new Photo('img/kittens/10.jpg');
var photo11 = new Photo('img/kittens/11.jpg');
var photo12 = new Photo('img/kittens/12.jpg');
var photo13 = new Photo('img/kittens13.jpg');

photoArray.push(photo0, photo0.votes);
photoArray.push(photo1, photo1.votes);
photoArray.push(photo2, photo2.votes);
photoArray.push(photo3, photo3.votes);
photoArray.push(photo4, photo4.votes);
photoArray.push(photo5, photo5.votes);
photoArray.push(photo6, photo6.votes);
photoArray.push(photo7, photo7.votes);
photoArray.push(photo8, photo8.votes);
photoArray.push(photo9, photo9.votes);
photoArray.push(photo10, photo10.votes);
photoArray.push(photo11, photo11.votes);
photoArray.push(photo12, photo12.votes);
photoArray.push(photo13, photo13.votes);

var Tracker = function(){
	this.leftPhoto;
	this.rightPhoto;

}

Tracker.prototype.displayWinnerRight = function(){
	document.getElementById("rightPhoto").style.cssText = "border: 5px solid #A786CF";
	document.getElementById("nextButton").style.cssText = "visibility: visible;";
    //updateChart/votes
}

Tracker.prototype.displayWinnerLeft = function(){
	document.getElementById("leftPhoto").style.cssText = "border: 5px solid #EF6CCD";
	document.getElementById("nextButton").style.cssText = "visibility: visible;";
    //updateChart/votes
}


Tracker.prototype.displayPhotos = function(){
	document.getElementById("nextButton").style.cssText = "visibility: hidden;";
	document.getElementById("leftPhoto").style.cssText = "border: none";
	document.getElementById("rightPhoto").style.cssText = "border: none";
	var randInt1 = Math.floor(Math.random() * 14);
	var randInt2 = Math.floor(Math.random() * 14);
	while(randInt1 == randInt2){
		randInt2 = Math.floor(Math.random() * 14);
	};
	var leftPhoto = document.getElementById('leftPhoto');
	var rightPhoto = document.getElementById('rightPhoto');
	document.getElementById("leftPhoto").src = "img/kittens/" + randInt1 + ".jpg";
	document.getElementById("rightPhoto").src = "img/kittens/" + randInt2 + ".jpg";
	
}

var track1 = new Tracker();
track1.displayPhotos();
var chooseLeft = document.getElementById('leftPhotoDiv');
chooseLeft.addEventListener('click', track1.displayWinnerLeft);
var chooseRight = document.getElementById('rightPhotoDiv');
chooseRight.addEventListener("click", track1.displayWinnerRight);

document.getElementById("nextButton").addEventListener('click', track1.displayPhotos);
document.getElementById("nextButton").style.cssText = "visibility: hidden;";

this.Pie = function(data,options){

        chart.Pie.defaults = {
            segmentShowStroke : true,
            segmentStrokeColor : "#fff",
            segmentStrokeWidth : 2,
            animation : true,
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            animateScale : false,
            onAnimationComplete : null
        };      

        var config = (options)? mergeChartConfig(chart.Pie.defaults,options) : chart.Pie.defaults;

        return new Pie(data,config,context);                
    };

var data = [

        {
            value: 1,
            color:"#EF6CCD"
        },
        {
            value : 1,
            color : "#A786CF"
        }

    ];
    var canvas = document.getElementById("catChart");
    var catChart = canvas.getContext("2d");
    new Chart(catChart).Pie(data);