$(document).ready(function(){
	$('.bajar').click(function(e){
		e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 750);

	return false;

	})

	$('.subir').click(function(e){
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 750);

		return false;
	});

	$('.facebook').click(function(e){
		e.preventDefault();

		return false;
	});

	$('.whatsapp').click(function(e){
		e.preventDefault();
		// $(this).hide();
		// $('#numero').show();

		return false;
	});

	$('#numero').click(function(e){
		e.preventDefault();
		// $(this).hide();
		// $('.whatsapp').show();
	});

	$('.precio').click(function(e){
		e.preventDefault();

		return false;
	});



});
