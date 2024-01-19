//a. Validació amb JS bàsic

// i. Cóm accedim als elements d’un formulari segons el name?

  /*Hemos de utilitzar el document.forms y acceder al formulario por el atributo name.*/
    //EJ:
    document.getElementById("name").addEventListener("change", function() {
    let name = document.forms["myForm"]["name"].value;
    console.log(name);
    document.getElementById("namer").innerHTML = name ;
    })

// ii. Cóm podem validar un input a mesura que l’usuari vagi escrivint

    /*Hemos de añadir el atributo "novalidate" al formulario y con el evento onInput o onChange validamos*/ 
    //EJ:
    let form = document.forms["myForm"];

    form.addEventListener("submit", function (event) {
      if(!form.checkValidity()){
        event.preventDefault();
        alert("No se ha enviado el formulario. Rellene todos los datos")
      }
    })

// iii. Cóm podem validar un input al perdre el “focus”
    
  /*Utilizamos el evento onBlur o onFocus*/
    //EJ:
    let surnames = document.forms["myForm"]["surnames"];

    surnames.addEventListener("blur", function(){
      let surnames_data = surnames.value;

      if (surnames_data == "") {
        document.getElementById("surnamesr").innerHTML = "Rellena el campo";
      } else {
        document.getElementById("surnamesr").innerHTML = "";
      }
    });

// iv. Cóm evitem enviar un formulari si hi ha algun error?

    /*Con el evento onsubmit o addEventListener evitamos enviar un formulario si tiene errores.*/
    //EJ (onSubmit):
    function validation(){
      if (document.forms["myForm"]["email"].value !="ex@ex.com") {
        document.getElementById("emailr").innerHTML = "Formato inválido" ;
        return false;
      }
    }

// v. Cóm funcionen les expressions regulars amb JS i quina relació tenen amb la validació de formularis?
  
  /* */
    //EJ:
    let email = document.forms["myForm"]["email"];

    email.addEventListener("change", function(){
      let email_data = email.value
      let pattern = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/");
      if (!pattern.test(email_data)) {
        document.getElementById("emailr").innerHTML = "Formato inválido" ;
      }else{
        document.getElementById("emailr").innerHTML = " " ;
      }
    })


// b. API JS Formulari
// i. A on indiquem les restriccions dels inputs del formulari?
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Verificar restricciones antes de enviar el formulario
    let emailInput = document.getElementById("email");
    let edadInput = document.getElementById("year");
    //Metodo de la API JS
    //Use CheckValidate
    if (!emailInput.checkValidity()) {
      alert("Por favor, introduce un correo electrónico válido.");
      event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
    //Use Validate
    if (edadInput.validity.rangeOverflow) {
    alert("Por favor, introduce una edad real.");
    }
});
  
  
// ii. Cóm podem saber amb JS si un input incompleix alguna restricció?

/*Con el método checkValidity() comprueba si las restricciones definidas se cumplen,
en ese caso si es formato email y no es espacio vacio (ejemplo anterior)*/

// iii. Cóm podem saber amb JS si un input incompleix una restricció en concret?

/*Con validate de la api de Javascript, en este caso  la propiedad rangeOverflow de validate,
comprueba si el número del campo de entrada es mayor (ejemplo anterior)*/

// iv. Cóm podem saber amb JS si tot el formulari està correcte?
/*Condicionando el evento de enviar el formulario con el metodo CheckValidity() */

// v. Què hem de fer per modificar el text d’error d’un input?
document.getElementById("myForm").addEventListener("invalid", function(event) {
  // Modificar el texto de error para el campo específico
  let invalidField = event.target;
  let customErrorMessage = "Por favor, completa este campo correctamente.";

  switch (invalidField.id) {
      case "email":
          customErrorMessage = "Por favor, introduce un correo electrónico válido.";
          break;
      case "year":
          customErrorMessage = "Por favor, introduce una edad real.";
          break;
  }
  // Establece el mensaje de error personalizado
  invalidField.setCustomValidity(customErrorMessage);
});

document.getElementById("myForm").addEventListener("input", function(event) {
  // Limpiar el mensaje de error personalizado cuando el usuario comienza a corregir el campo
  event.target.setCustomValidity("");
});

