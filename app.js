const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submitBtn");
const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav");
const bg = document.querySelector("#square");

function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  if (regex.test(email)) {
    alert("Verifique o código de acesso que enviamos para seu e-mail!");
    return true;
  } else {
    alert("Endereço de e-mail inválido!");
    return false;
  }
}

submitBtn.addEventListener("click", () => {
  validarEmail(input.value);
  input.value = "";
});

menu.addEventListener("click", () => {
  bg.classList.toggle("removebg");
  menu.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});
