/**
 *  #####################
 *  ## Ejercicio 1    ##
 * #####################
 *
 * Crea un HTML con un H1
 * y haz desde un fichero JS
 * que vaya pintando un reloj (en el h1)
 * en este formao: HH:MM:SS
 */

"use strict";

//Creamos el h1 del body del html
const h1 = document.createElement("h1");

setInterval(() => {
  //Crear un nuevo objeto fecha cada minuto
  const fechaActual = new Date();
  const hour = fechaActual.getHours();
  const minutes = fechaActual.getMinutes();
  const seconds = fechaActual.getSeconds();

  //Añadimos el contenido al H1
  h1.textContent = `${hour}:${minutes}:${seconds}`;
}, 1000);

//Selecionamos el body y le ponemos el h1 con su contenido
document.querySelector("body").append(h1);
