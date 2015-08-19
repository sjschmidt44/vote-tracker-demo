//clientID:61a923689f757b4
//Secret: 280fe12c982df8f955b81741eca43d9d427bbb13
//Authorization: Client-ID YOUR_CLIENT_ID

//https://api.imgur.com/3/album/DDoWy
//Authorization Client-ID 61a923689f757b4

'use strict';
 $( document ).ready(function() {
var photoArray = [];
var randInt1;
var randInt2;
var pics;

$.ajax({
    url: 'https://api.imgur.com/3/album/DDoWy',
    method: 'GET',
    headers: {
        'Authorization': 'Client-ID 61a923689f757b4'
    }
})

.done(function(res){
    pics = res.data.images;
    console.log(pics);
    populateArray();
    track1.displayPhotos();
})

.fail(function(err){
    console.log(err);
})

var Photo = function(fileLocation, votes){ //constructor
	this.path = fileLocation;
	this.votes = 1;
}

//var displayPic = '<img src="' + pics[rand].link+'">';'

//instances of your photos
//data.images[3].link
function populateArray(){
var photo0 = new Photo(pics[0].link, 1);
var photo1 = new Photo(pics[1].link, 1);
var photo2 = new Photo(pics[2].link, 1);
var photo3 = new Photo(pics[3].link, 1);
var photo4 = new Photo(pics[4].link, 1);
var photo5 = new Photo(pics[5].link, 1);
var photo6 = new Photo(pics[6].link, 1);
var photo7 = new Photo(pics[7].link, 1);
var photo8 = new Photo(pics[8].link, 1);
var photo9 = new Photo(pics[9].link, 1);
var photo10 = new Photo(pics[10].link, 1);
var photo11 = new Photo(pics[11].link, 1);
var photo12 = new Photo(pics[12].link, 1);
var photo13 = new Photo(pics[13].link, 1);

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
}

//console.log(photoArray)

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
	$("#leftPhoto").attr("src", photoArray[randInt1].path);
	$("#rightPhoto").attr("src", photoArray[randInt2].path);

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

var chooseLeft = $('#leftPhotoDiv');
chooseLeft.click(track1.displayWinnerLeft);
var chooseRight = $('#rightPhotoDiv');
chooseRight.click(track1.displayWinnerRight);

$("#nextButton").click(track1.displayPhotos);
$("#nextButton").hide();
 });
