/*
Funciones de verificación de cuenta
Autor: Alejandro Gómez
Fecha de creación: 24/02/2022
Última modificación: 24/02/2022
*/

/*
Función de verificación de información 
ingresada por usuario
*/

const verifyInfo = () => {
  // Información del usuario

  const name = document.getElementById("name").value;
  const last_name = document.getElementById("lastname").value;

  // Unión de nombre y apellido para mostrarlo
  const name_lastname = name + " " + last_name;

  // Contraseñas
  const password = document.getElementById("pass").value;
  const rptPass = document.getElementById("passrpt").value;

  // Correo
  const user_email1 = document.getElementById("user_email").value;

  // LOG solo de testeo
  //console.log(password);
  //console.log(rptPass);
  //console.log(user_email1);

  // Se verifica que no esté vacía la contraseña
  if (password === "") {
    alert("Tu contraseña no puede estar vacía!");
    return false;
  }

  // Se verifica que no esté vacía la repetición de contraseña
  if (rptPass === "") {
    alert("Debes ingresar nuevamente tu contraseña");
    return false;
  }

  // Se verifica la cantidad de caracteres en la contraseña
  if (password.length < 8) {
    alert("Tu contraseña debe tener 8 caracteres mínimo!");
    return false;
  }

  // Se verifica que las contraseñas sean iguales
  if (password != rptPass) {
    alert("Las contraseñas no coinciden!");
  }

  // Se verifica que la contraseña no sea muy larga
  if (password.length > 20) {
    alert("Tu contreña no puede ser tan larga!!");
  }

  // Cuenta creada con éxito
  if (password == rptPass && user_email1 != "") {
    alert(`Bienvenido ${name_lastname}. Cuenta creada exitosamente!`);
  }

  // Se verifica que el usuario haya ingresado su correo
  if (user_email1 === "") {
    alert("Tu correo no puede estar vacío!");
  }

  // Se verifica que se cumplan todos los parámetros
  if (
    user_email1 != "" &&
    password.length > 8 &&
    password.length < 20 &&
    rptPass != "" &&
    password != ""
  ) {
    alert(`Bienvenido ${name_lastname}. Cuenta creada exitosamente!`);
  }

  // Almacenamiento en JSON de la información
  let infoForm = {
    fname: document.getElementById("name").value,
    flast: document.getElementById("lastname").value,
    pwd: document.getElementById("pass").value,
    email: document.getElementById("user_email").value,
    username: document.getElementById("username").value,
  };
  localStorage.setItem("infoForm", JSON.stringify(infoForm));

  console.log("info", localStorage.getItem("infoForm"));
};
