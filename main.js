"use strict";

$(document).ready(init);

var counter = 0;
var isPlaying = false;
function init() {
	$('#moveCount').text(counter)
	$('.block').on('click', chooseBlock);
	$('.container').on('click', selectContainer);
	isPlaying = true;
}

function chooseBlock () {
	event.stopPropagation();
	console.log($('.selected').data('size'));
	if ($(this).hasClass('selected')){
		$(this).removeClass('selected')
	}
	if ($(this).is(':first-child')){
		$('.block').removeClass('selected');
		$(this).addClass('selected');
	}
}

function selectContainer(event) {
	if (isPlaying){
		var put = $('.selected').data('size');
		var next = $(this).find(':first-child').data("size");
		if (next === undefined || next > put){
			$('.selected').prependTo(this);
			console.log(this.childNodes.length);
		}
	if ($('#container3')[0].childNodes.length === 3) {
		counter++;
		$('#moveCount').text(counter)
		// $('#winText').text("YOU WON!")
		$('#container1').text("YOU")
		$('#container2').text("WIN!")
		$('.block').empty();
		isPlaying = false;
	} else {
		counter++;
		$('#moveCount').text(counter)
	}
}
}
