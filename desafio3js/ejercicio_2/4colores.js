var divAzul = document.getElementById('azul');
divAzul.addEventListener('click', pintarNegro);
var divRojo = document.getElementById('rojo');
divRojo.addEventListener('click', pintarNegro);
var divVerde = document.getElementById('verde');
divVerde.addEventListener('click', pintarNegro);
var divAmarillo = document.getElementById('amarillo');
divAmarillo.addEventListener('click', pintarNegro);
 
   function pintarNegro(){
    this.style.backgroundColor = 'black';
   }
   