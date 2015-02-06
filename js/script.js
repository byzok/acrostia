$(function () {
	var elWrap = $('#slider'),
		el =  elWrap.find('p'),
		indexP = 1,
		indexMax = el.length,
		phase = 3000;
	
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexP+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexP++;
		if(indexP > indexMax) {
			indexP = 1;
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
		indexP++;
		if(indexP > indexMax) {
			indexP = 1;
		}
		change ();
	});
	btnPrev.click(function() {
		indexP--;
		if(indexP < 1) {
			indexP = indexMax;
		}
		change ();
	});	
});
