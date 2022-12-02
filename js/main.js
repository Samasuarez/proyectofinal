const productos = [
  {
    id: 1,
    nombre: "El mundo de sofia",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 1200,
    // img: "elMundoDeS.webp",
    estado: "En proceso/Adquirido",
  },
  {
    id: 2,
    nombre: "El misterio del solitario",
    categoria: "novela",
    precio: 2000,
    img: ".jpg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 3,
    nombre: "Siruela",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 2000,
    img: ".jpg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 4,
    nombre: "Memorias de un Geisha",
    categoria: "novela",
    autor: "Arthur Golden",
    precio: 1500,
    img: ".webp",
    estado: "En proceso/Adquirido",
  },
  {
    id: 5,
    nombre: "Roma soy yo",
    categoria: "novela/historia",
    autor: "Santiago Posteguillo",
    precio: 1200,
    img: ".webp",
    estado: "En proceso/Adquirido",
  },
  {
    id: 6,
    nombre: "La Gaya ciencia",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 7,
    nombre: "Humano demasiado humano",
    categoria: "filosofia",
    autor: "Nietzsche ",
    precio: 1900,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 8,
    nombre: "El cuervo",
    precio: 800,
    img: ".png",
    estado: "En proceso/Adquirido",
  },
  {
    id: 9,
    nombre: "La geneologia de la moral",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 10,
    nombre: "Asi hablo zaratustra",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1900,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 11,
    nombre: "El anticristo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 12,
    nombre: "Mas alla del bien y el mal",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 1000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 13,
    nombre: "De la muerte de Dios",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 14,
    nombre: "Ecce homo",
    categoria: "filosofia",
    autor: "Nietzsche",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 15,
    nombre: "La nausea",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 16,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
  },
  {
    id: 17,
    nombre: "El ser y la nada",
    categoria: "filosofia",
    autor: "Jean paul sartre",
    precio: 2000,
    img: ".jpeg",
    estado: "En proceso/Adquirido",
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
  "img.jpg"
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
    const { nombre, precio, img } = el;

    html = `
  <div class="card2">
  <img src="./img/${img}" alt="">
  <hr>
  <h3>${nombre}</h3>
  <p>$${precio}</p>
  <div class="btnComprar"><input id="btnComprar" type="submit" value= "comprar"></div>
 
  </div>`;
    contenedor.innerHTML += html;
  });
}
