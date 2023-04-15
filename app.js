const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submitBtn");

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
