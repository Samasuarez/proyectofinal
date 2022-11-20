const servicios = [
  {
    id: 1,
    nombre: "El mundo de sofia",
    categoria: "novela",
    autor: "Jostein Gaarder",
    precio: 1200,
    img: "ElMundoDs.jpg",
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
    autor: "Nietzsche. filosofia",
    precio: 1900,
    img: ".jpeg",
  },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
  {
    id: 10,
    nombre: "Asi hablo zaratustra",
    categoria: "filosofia",
    autor: "Nietzsche. filosofia",
    precio: 1900,
    img: ".jpeg",
  },
  {
    id: 11,
    nombre: "El anticristo",
    categoria: "filosofia",
    autor: "Nietzsche. filosofia",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 12,
    nombre: "Mas alla del bien y el mal",
    categoria: "filosofia",
    autor: "Nietzsche. filosofia",
    precio: 1000,
    img: ".jpeg",
  },
  {
    id: 13,
    nombre: "De la muerte de Dios",
    categoria: "filosofia",
    autor: "Nietzsche. filosofia",
    precio: 2000,
    img: ".jpeg",
  },
  {
    id: 14,
    nombre: "Ecce homo",
    categoria: "filosofia",
    autor: "Nietzsche. filosofia",
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
console.log(servicios);
function servicio(id, nombre, categoria, autor, precio, img) {
  this.id = id;
  this.nombre = nombre;
  this.categoria = categoria;
  this.autor = autor;
  this.precio = precio;
  this.img = img;
}
const nuevoServicio = new servicio(Apologia de Socrates, filosofia, platon, 2000, img.jpg)
function cargarServicio(arr, valor) {
  arr.push(valor);
}

// const almacenados = [];
//    const formulario = document.querySelector("form"),
//   checkbox = document.getElementById("check"),
//   email = document.getElementById("email"),
//   password = document.getElementById("password"),
//   p = document.querySelector("p");

//   function guardarLS(valor){
//     let user={usuario:email.value, pass: password.value};
//     if(user.usuario=="" || user.pass==""){
//       p.innerText= "Todos los campos son requeridos";
//       return;
//     }else{
//       if(valor=== "localStorage"){
//         localStorage.setItem('item',JSON.stringify(user))
//       }
//       if(valor==="sessionStorage"){
//         sessionStorage.setItem('item',JSON.stringify(user))
//       }
//     }
//     return user
//   }
//Crear la funcion que traiga los datos

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //CÓDIGO A EJECUTAR
//   if(checkbox.checked){
//     guardarLS("localStorage")++
//   }else{
//     guardarLS('sessionStorage')
//   }

// });

//Setear claves y valores
// localStorage.setItem('saludo', 'Hola tarola');
// localStorage.setItem('numero', 1);
// localStorage.setItem('esValido', true);

//Traer los valores de Storage
// let mensaje= localStorage.getItem('saludo');
// let num= localStorage.getItem('numero');
// let valido= localStorage.getItem('esValido');
/* console.log(typeof mensaje);
console.log(typeof num);
console.log(typeof valido);
 */
//sessionStorage
// sessionStorage.setItem('email', "mail@mail.com")
// sessionStorage.setItem('select', [1,2,3,4,5,6,7,8]);

// let numeros= sessionStorage.getItem('select').split(',')
//console.log(numeros);

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
