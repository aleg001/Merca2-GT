

// Funcion para mostrar la contraseña
const showPsw =() => {
    const x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

