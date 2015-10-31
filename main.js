"use strict";

$(document).ready(init);

function init() {
	console.log('ready!');
	$('.block').on('click', chooseBlock);
	$('.container').on('click', selectContainer)
}

function chooseBlock () {
	event.stopPropagation();
	if ($(this).hasClass('selected')) {
				$('.block').removeClass('selected')
			} else {
				$('.block').removeClass('selected')
				$(this).addClass('selected');
			}
}

function selectContainer(event) {
	 $('.selected').appendTo(this);
}
