$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('span'),
		indexP = 1,
		indexMax = el.length,
		phase = 3000;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexSpan+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexSpan++;
		if(indexSpan > indexMax) {
			indexSpan = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoCange, phase);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoCange, phase);
	});
	
	elWrap.append('<span class="next"></span><span class="prev"></span>');
	var	btnNext = $('span.next'),
		btnPrev = $('span.prev');
		
	btnNext.click(function() {
		indexSpan++;
		if(indexSpan > indexMax) {
			indexSpan = 1;
		}
		change ();
	});
	btnPrev.click(function() {
		indexSpan--;
		if(indexSpan < 1) {
			indexSpan = indexMax;
		}
		change ();
	});	
});
