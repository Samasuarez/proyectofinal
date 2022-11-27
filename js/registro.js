const registro = document.querySelector(".register");
nombre = document.querySelector("#nombre");
usuarioReg = document.querySelector("#usuarioReg");
emailReg = document.querySelector("#emailReg");
passwordReg = document.querySelector("#passwordReg");
btn1 = document.querySelector("#registrarme");
let usuarios;
if (localStorage.getItem("usarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [];
}

class Usuario {
  constructor(nombre, usuario, email, password) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.email = email;
    this.password = password;
  }
}

const button1 = document.getElementById("btnRegistro");
const textoRegistro = document.getElementById("textoRegistro");
const btn1 = document.getElementById("btn1");

console.log(btn1);
console.log("textoRegistro", textoRegistro);

btnRegistro.onclick = () => textoRegistro.setAttribute("class", "displayNone");

console.log("textoRegistro", textoRegistro);
function guardarLS(valor) {
  let user = { usuario: email.value, pass: password.value };

  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Todos los campos son requeridos";
    return;
  } else {
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}
guardarLS("localStorage");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkbox.checked) {
    guardarLS("localStorage");
  } else {
    guardarLS("sessionStorage");
  }
});
guardarLS()
// console.log('button', button1)

// button.addEventListener('click', (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });
