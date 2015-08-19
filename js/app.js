'use strict';
 $( document ).ready(function() {
var photoArray = [];
var randInt1;
var randInt2;

var Photo = function(fileLocation, votes){ //constructor
	this.path = fileLocation;
	this.votes = 1;
}

//instances of your photos
var photo0 = new Photo('img/kittens/0.jpg', 1);
var photo1 = new Photo('img/kittens/1.jpg', 1);
var photo2 = new Photo('img/kittens/2.jpg', 1);
var photo3 = new Photo('img/kittens/3.jpg', 1);
var photo4 = new Photo('img/kittens/4.jpg', 1);
var photo5 = new Photo('img/kittens/5.jpg', 1);
var photo6 = new Photo('img/kittens/6.jpg', 1);
var photo7 = new Photo('img/kittens/7.jpg', 1);
var photo8 = new Photo('img/kittens/8.jpg', 1);
var photo9 = new Photo('img/kittens/9.jpg', 1);
var photo10 = new Photo('img/kittens/10.jpg', 1);
var photo11 = new Photo('img/kittens/11.jpg', 1);
var photo12 = new Photo('img/kittens/12.jpg', 1);
var photo13 = new Photo('img/kittens13.jpg', 1);

photoArray.push(photo0);
photoArray.push(photo1);
photoArray.push(photo2);
photoArray.push(photo3);
photoArray.push(photo4);
photoArray.push(photo5);
photoArray.push(photo6);
photoArray.push(photo7);
photoArray.push(photo8);
photoArray.push(photo9);
photoArray.push(photo10);
photoArray.push(photo11);
photoArray.push(photo12);
photoArray.push(photo13);
console.log(photoArray)

var Tracker = function(){
	this.leftPhoto;
	this.rightPhoto;

}

Tracker.prototype.displayWinnerRight = function(){
	$("#rightPhoto").css("border", "5px solid #A786CF");
	$("#nextButton").show();
    photoArray[randInt2].votes = photoArray[randInt2].votes + 1;
    console.log("This cat has " + photoArray[randInt2].votes + " votes");
    //updateChart/votes
}

Tracker.prototype.displayWinnerLeft = function(){
	$("#leftPhoto").css("border","5px solid #EF6CCD");
	$("#nextButton").show();
    photoArray[randInt1].votes = photoArray[randInt1].votes + 1;
    console.log("This cat has " + photoArray[randInt1].votes + " votes");
    //updateChart/votes
}


Tracker.prototype.displayPhotos = function(){
	$("#nextButton").hide();
	$("#leftPhoto").css("border", "none");
	$("#rightPhoto").css("border", "none");
	randInt1 = Math.floor(Math.random() * 14);
	randInt2 = Math.floor(Math.random() * 14);
	while(randInt1 == randInt2){
		randInt2 = Math.floor(Math.random() * 14);
	};
	var leftPhoto = $('leftPhoto');
	var rightPhoto = $('rightPhoto');
	$("#leftPhoto").attr("src", "img/kittens/" + randInt1 + ".jpg");
	$("#rightPhoto").attr("src", "img/kittens/" + randInt2 + ".jpg");

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
                percentageInnerCutout : 50,
                onAnimationComplete : null

            };      

            var config = (options)? mergeChartConfig(chart.Pie.defaults,options) : chart.Pie.defaults;

            return new Pie(data,config,context);                
        };

    var data = [

            {
                value: photoArray[randInt1].votes,
                color:"#EF6CCD"
            },
            {
                value : photoArray[randInt2].votes,
                color : "#A786CF"
            }

        ];
        var canvas = $("#catChart")[0];
        var catChart = canvas.getContext("2d");
        new Chart(catChart).Pie(data);
	
}

var track1 = new Tracker();
track1.displayPhotos();
var chooseLeft = $('#leftPhotoDiv');
chooseLeft.click(track1.displayWinnerLeft);
var chooseRight = $('#rightPhotoDiv');
chooseRight.click(track1.displayWinnerRight);

$("#nextButton").click(track1.displayPhotos);
$("#nextButton").hide();
 });
