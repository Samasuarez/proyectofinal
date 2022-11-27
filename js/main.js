const productos = [
  {
    id: 1,
    nombre: "El mundo de sofia",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 1200,
    img: "elMundoDeS.webp",
  },
  {
    id: 2,
    nombre: "El misterio del solitario",
    categoria: "novela",
    precio: 2000,
    img: ".jpg",
  },
  {
    id: 3,
    nombre: "Siruela",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 2000,
    img: ".jpg",
  },
  {
    id: 4,
    nombre: "Memorias de un Geisha",
    categoria: "novela",
    autor: "Arthur Golden",
    precio: 1500,
    img: ".webp",
  },
  {
    id: 5,
    nombre: "Roma soy yo",
    categoria: "novela/historia",
    autor: "Santiago Posteguillo",
    precio: 1200,
    img: ".webp",
  },
  {
    id: 6,
    nombre: "La Gaya ciencia",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: ".jpeg",
  },
  {
    id: 7,
    nombre: "",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: ".jpeg",
  },
  {
    id: 8,
    nombre: "El cuervo",
    precio: 800,
    img: ".png",
  },
  {
    id: 9,
    nombre: "",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: ".jpeg",
  },
  {
    id: 10,
    nombre: "Asi hablo zaratustra",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: ".jpeg",
  },
  {
    id: 11,
    nombre: "El anticristo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 12,
    nombre: "Mas alla del bien y el mal",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1000,
    img: ".jpeg",
  },
  {
    id: 13,
    nombre: "De la muerte de Dios",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 14,
    nombre: "Ecce homo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 15,
    nombre: "La nausea",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 16,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 17,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
  },
];
// console.log(productos);
function producto(id, nombre, categoria, autor, precio, img) {
  this.id = id;
  this.nombre = nombre;
  this.categoria = categoria;
  this.autor = autor;
  this.precio = precio;
  this.img = img;
}

const nuevoProducto = new producto(
  "Apologia de Socrates",
  "filosofia",
  "platon",
  2000,
  "img.jpg",
);
function cargarProducto(arr, valor) {
  arr.push(valor);
}
let filtrarPorPrecio = (arr, filtro) =>
 arr.filter((producto) => producto.precio <= filtro);

 function buscarProducto(arr, filtro) {
  const encontrado = arr.find((producto) => {
    return producto.nombre.includes(filtro);
  });
  return encontrado;
}
const compras = [];
let calcularPrecio = compras.reduce((acc, el) => {
  return acc + el.precio;
}, 0);
console.log(calcularPrecio);

cargarProducto(productos, nuevoProducto);
const formulario = document.querySelector("form"),
checkbox = document.getElementById("check"),
email = document.getElementById("email"),
password = document.getElementById("password"),
p = document.querySelector("p");


let contenedor = document.querySelector(".contenedor");
function crearHtml(arr) {
  let html;
  arr.forEach((el) => {
const {nombre, precio, img}= el

    html = ` <div class="card2">
  <img src="./img/${img}" alt="">
  <hr>
  <h3>${nombre}</h3>
  <p>$${precio}</p>
 
  </div>`;
    contenedor.innerHTML += html;
  });
}
crearHtml(productos)

//  let contenedor = document.querySelector(".contenedor");
//  function crearHtml(arr) {
//    let html;
//    arr.forEach((el) => {
//  const {nombre, precio, img}= el
 
//      html = ` <div class="card">
//    <img src="./img/${img}" alt="">
//    <hr>
//    <h3>${nombre}</h3>
//    <p>$${precio}</p>
  
//    </div>`;
//      contenedor.innerHTML += html;
//    });
//  }
//  crearHtml(servicios)

//recorrer el storage
// for (let i = 0; i < localStorage.length; i++) {
//   let clave= localStorage.key(i)
//console.log(clave);
//console.log(clave + ' '+localStorage.getItem(clave));}

//eliminar datos storage
// localStorage.removeItem('esValido');
// localStorage.clear()
// sessionStorage.clear()

//////////
/* const serv= {nombre: "Encerado", precio: 2500};
const servLS=JSON.stringify(serv)
console.log(servLS);

localStorage.setItem('servicio', servLS);

const servAObj= JSON.parse(localStorage.getItem('servicio'));

console.log(servAObj);
function filtrar(arr, filtro){
  return arr.filter(el=> el.nombre.includes(filtro))
}
function encontrar(arr, filtro){
  return arr.find(el=> el.nombre.includes(filtro))
}
let filtrado= filtrar(servicios, "ma")
console.log(filtrado);
const encontrado= encontrar(servicios, email.value)
almacenados.push(encontrado)
localStorage.setItem("fitrado", JSON.stringify(almacenados)) */

const linkRegistro = document.getElementById('btnRegistro');
// const btnConfirmar = document.getElementById('btnConfirmar');

// const btn1 = document.getElementById('btn1');

// console.log(btn1)

// btnRegistrarse.onclick = () => console.log("btnRegistrarse")

// linkRegistro.addEventListener('click', () => {
//   btnConfirmar.value  = "Registrate";
// });