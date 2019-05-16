$(document).ready(function(){
	$('.elemento').draggable();//Mover elemento por la pagina
	//solo necesita el archivo jquery-ui.js

	//REdimencionar

	$('.elemento').resizable();//modificar su tamaño
	//requieren tres enlaces css

//Selecionar elementos y ordernar
	//$('.lista-seleccionable').selectable();
	$('.lista-seleccionable').sortable({
		update: function(event, ui){
			console.log("ha cambiado la lista");
		}
	});

	//Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("Has soltado algo dentro del area");
		}
	});

	//Efectos

	$("#mostrar").click(function(){
		//$(".caja-efectos").toggle("fade");
		//$(".caja-efectos").effect("explode");
		//$(".caja-efectos").toggle("explode");
		//$(".caja-efectos").toggle("blind");
		//$(".caja-efectos").toggle("slide");
		//$(".caja-efectos").toggle("drop");
		//$(".caja-efectos").toggle("fold");	
		$(".caja-efectos").toggle("scale", "slow");
	});

	//
	$(document).tooltip();


	$("#lanzar-popup").click(function(){
		$("#popup").dialog();	
	});

	$("#calendario").datepicker();

	$("#pestanas").tabs();
	

});