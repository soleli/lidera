	
function init() 
{

	archivoValidacion = "http://www.wabes.com.ar/lidera/novedades.php?jsoncallback=?"


	$.getJSON( archivoValidacion)

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			
					$("#alerta_novedades").append(
					"<button type='button' class='close' data-dismiss='alert' aria-label='Close' style='  width: 20%;    top: 0;'>"+
					"<span aria-hidden='true' style='   font-size: 18px;'>×</span>"+
				  "</button>"+
						"<p>"+data2.mensaje+"</p>"+
					"<a href='#novedades' onclick='novedades()'> Ver más</a>"
					);
				$("#alerta_novedades").css("display","block");
			
		});
		
	})
	
	.error( function(data2) { 
	$("#cargando").html("");
	$("#cargando").append("<p>Error al cargar. </p>"); 
	$("#cargando").append("<p>Compruebe su conexion a internet.</p>"); 
	$("#cargando").append("<button type='button' class='btn btn-success' onclick='init()'>Intertar de Nuevo</button>"); 
	} )


	
	}
		
function novedades() 
{
 $(".novedades").html (" "); 
	archivoValidacion = "http://www.wabes.com.ar/lidera/novedades_todas.php?jsoncallback=?"


	$.getJSON( archivoValidacion)

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			
					$(".novedades").append(
					"<table class='table table-condensed'>"+  
					"<td><p>"+data2.fecha+"</p>"+
					"<td><p>"+data2.mensaje+"</p></td>"+
					"</table>"
					);
				$("#alerta_novedades").css("display","block");
			
		});
		
	})
	
	.error( function(data2) { 
	$("#cargando").html("");
	$("#cargando").append("<p>Error al cargar. </p>"); 
	$("#cargando").append("<p>Compruebe su conexion a internet.</p>"); 
	$("#cargando").append("<button type='button' class='btn btn-success' onclick='init()'>Intertar de Nuevo</button>"); 
	} )


	
	}

 function enviarcorreo(){
             
             	var number = $("#nombre").val();
             	var message = $("#mensaje").val();
				var tel = $("#tel").val();
				archivoValidacion = "http://wabes.com.ar/lidera/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message,tel:tel})
	            .done(function(data) 
	{
	$("#alertaco").css("display","block");
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      } 
	

                 
		
		
  
		 
		
		
	
			
		
	