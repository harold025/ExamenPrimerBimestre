let respuesta = prompt ("¿Qué bebida o comida deseas?");

let message = (respuesta == 'Cerveza') ? 'Vaya a barra' :
              (respuesta == 'Vino' ) ? 'Vaya a barra' :
              (respuesta == 'Agua') ? 'Vaya a la tienda' :
                
alert(message);