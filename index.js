// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
function comprobar(numeroIf){ 
    if(numeroIf>0){
        console.log(`${numeroIf} es positivo`)
    }else if(numeroIf<0){
        console.log(`${numeroIf} es negataivo`)
    }else{
        console.log(`0 es neutro`)
    }
}
comprobar(2);
//


// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
// Incrementar el valor de la variable en uno cada vez que se ejecute.
// Mostrarlo por pantalla cada vez que se ejecute.
function checkWhile(numeroWhile){
  while(numeroWhile<10){
		numeroWhile++;
		console.log(numeroWhile);
	}
}
checkWhile(3);




// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

function doWhile(num){
	do {
		num++;
		return console.log(num)
	}while(num<10)
}
doWhile(1) 




// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.
function iterar(){
	for(let numeroFor=0;numeroFor<=3;numeroFor++){
		console.log(numeroFor)
	}
}
iterar();




// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.


function seasons(estacion){
	switch(estacion){
		case  "VERANO":
		case "verano":
			console.log("Es Verano");
			break;
		case "INVIERNO":
		case "invierno":
			console.log("Es Invierno");
			break;
		case "OTOÑO":
		case "otoño":
			console.log("Es Otoño");
			break;
		case "PRIMAVERA":
		case "primavera":
			console.log("Es Primavera");
			break;
		default:
			console.log("Volve a escribir otra respuesta por favor.")
	}
}

seasons("verano");