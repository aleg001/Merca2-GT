// Funcion para mostrar la contraseña
const showPsw = () => {
  const x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
};

const verify = () => {
  const username = document.getElementById("user").value;
  const password = document.getElementById("psw").value;

  if (username === "") {
    alert("Debes ingresar tu nombre de usuario!");
  }

  if (password === "") {
    alert("Debes ingresar tu contraseña!");
  } else {
    const a_id = document.getElementById("ingresar-boton");
    a_id.click();
  }
};
