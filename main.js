const boton = document.getElementById('nikemenusvg');
const menudesplegable = document.getElementById('menudes');
const botoncerrado = document.querySelector('.clickclose-icon');

boton.addEventListener('click', () => {
  menudesplegable.classList.toggle('activado');
})
botoncerrado.addEventListener('click', () => {
  menudesplegable.classList.toggle('activado');
})

const botoncoleccion = document.querySelector('.a11');
const coleccionmenu = document.querySelector('.coleccionesextendido');



botoncoleccion.addEventListener('click', () => {
  coleccionmenu.classList.toggle('coleccionesextendidoactivo');
  
})



