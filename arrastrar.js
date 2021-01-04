// Clase para gestionar el movimiento de cualquier elemento
Movimiento = function(objeto)
{
	// Estas variables obtienen la diferencia en pixels entre el punto del raton
	// pulsado dentro del objeto y el top y left del elemento. Es para que cuando 
	// realizemos el movimiento, el cursor del raton siempre este en la misma
	// posición dentro del objeto que mueve.
	difX=0;
	difY=0;
 
	// Creamos el evento en el objeto para controlar la pulsación sobre el elemento
	// cuando se pulsa sobre el elemento se ejecuta la funcion inicio()
	objeto.addEventListener('touchstart', inicio, false);
 
	// Iniciamos el arrastre
	function inicio(e)
	{
        e.preventDefault();
		// Obtenemos la posición del raton
		var eX=e.changedTouches[0].pageX;
		var eY=e.changedTouches[0].pageY;
		// Obtenemos los valores de la posicion left y top del elemento
		var oX=parseInt(objeto.style.left);
		var oY=parseInt(objeto.style.top);
		// Calculamos la diferencia entre la posicion del objeto con la del raton.
		difX = oX - eX;
		difY = oY - eY;
 
		// Cremos los eventos mousemove y mouseup
		document.addEventListener('touchmove', mover, false);
		document.addEventListener('touchend', soltar, false);
	}
 
	// Movemos el elemento por la pantalla cada vez que se mueve el cursor
	function mover(e)
	{
		var tY = e.changedTouches[0].pageY + difY + 'px';
		var tX = e.changedTouches[0].pageX + difX + 'px';
		objeto.style.top=tY;
		objeto.style.left=tX;
	}
 
	// Funcion que se ejecuta el botón del ratón
	function soltar(e)
	{
        e.preventDefault();
		// Eliminamos los eventos creados en la funcion inicio
		document.removeEventListener('touchmove', mover, false);
		document.removeEventListener('touchend', soltar, false);
	}
}