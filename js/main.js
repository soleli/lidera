function redsocial(expr,id){ 
    switch (expr) {
      case 3:

        window.plugins.socialsharing.shareViaTwitter('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id);
            
        break;
      case 2:
        window.plugins.socialsharing.shareViaFacebook('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      case 1:
            window.plugins.socialsharing.shareViaWhatsApp('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      default:
        console.log(id);
    }
} 		
function init() 
{
	i=0;
	archivoValidacion = "http://www.tiempopopular.com.ar/json/carusel.php?jsoncallback=?"


	$.getJSON( archivoValidacion, {id:1})

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			if(i==0)
				{
					$(".carousel-inner").append(
					
						"<div class='item active'>"+
						"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
							"<img  src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
							"<div class='carousel-caption'>"+
									"<h1>"+data2.titulo+"</h1>"+
							"</div> </a></div>"
					);
				}
			else{
					$(".carousel-inner").append(
				
						"<div class='item'>"+
							"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
						"<img  class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
						"<div class='carousel-caption'>"+
								"<h1>"+data2.titulo+"</h1>"+
								
						"</div></a></div>"
					);
				}
			
			i++;
		});
		$("#cargando").css("display","none");
		
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
				archivoValidacion = "http://tiempopopular.com.ar/json/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message})
	            .done(function(data) 
	{
	$("#alertaco").css("display","block");
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      } 
	

                 
		
		
  
		 
		
		
	
			
		
	