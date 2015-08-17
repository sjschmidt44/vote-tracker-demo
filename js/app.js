'use strict';

var photoArray; //array of photo objects that carry the path and the vote tally and perhaps the name, too

//[{photo}, {photo}, {photo}...]

var Photo = function(fileLocation){ //constructor
	this.path = fileLocation;
	this.votes = 1;
	this.index = //where it lives in photoArray, may not use
}

//instances of your photos
var photo1 = new Photo('img/photo1.jpg');

var Tracker = function(){
	this.leftPhoto;
	this.rightPhoto;

}

Tracker.prototype.highlight = function(){
	//highlight the phote after it is clicked
};

Tracker.prototype.waitingForVote = function(){
	//receive the click
	//increment the vote count
	//event listener on each photo, eventlistener bubble up to div
	//call highlight()?
	//drawTheChart()?
	//giveUserOptionToVoteAgain()?
};

Tracker.prototype.getRandomInt = function(){
	//generates a random number to select an image from photoArray
};

Tracker.prototype.displayPhotos = function(){
	//displays the randomly selected photos
	//prevent picking same photo twice
	//if(photo1 == photo2) then re-roll
};

Tracker.prototype.waitingForVote = function(){
	//getRandomInt()
	//displayPhotos()
	//receiveVote() "takes us to display winner"
}

Tracker.protype.displayWinner = function(){
	//highlightPhoto()
	//updateChart()
	//clickNextButton()
}

////////////////////////////////////////////////////////////////////////////////
//some 'document.getElementById' variables to access and manipulate the document

//Two States
//1. Waiting for vote
//		click on a 'Vote' picture/button
//2. Displaying winner
//		click on the 'Next' button