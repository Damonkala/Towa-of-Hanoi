"use strict";

$(document).ready(init);

function init() {
	console.log('ready!');
	$('.block').on('click', chooseBlock);
	$('.container').on('click', selectContainer)
	var winner = false;
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
// if(data === 1){
// 	$('#one').addClass('selected');
// 	console.log($('#container1').data('size'));
// }
}

function selectContainer(event) {

	var put = $('.selected').data('size');
	var next = $(this).find(':first-child').data("size");

	if (next === undefined || next > put){
		$('.selected').prependTo(this);
		console.log(this.childNodes.length);
	}
if ($('#container3')[0].childNodes.length === 3) {
	console.log("You're Winner");

}

	}
