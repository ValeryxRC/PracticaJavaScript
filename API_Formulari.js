//    AAKRITI LA MEJOR
//a. Validació amb JS bàsic
// i. Cóm accedim als elements d’un formulari segons el name?
    /*Para poder acceder a un elemento de un formulario mediante el nombre,
    primero debemos crearlo en el HTML, a éste le pondremos el atributo "name".
    Después, en el archivo .js acceder al formulario utilizando el método "document.getElementByName()"
    dónde entre los préntesis indicamos el monbre del formulario.
    Este método obtendrá todos los elementos con el nombre indicado*/

    //EJ:
    document.getElementById("button").addEventListener("click", function() {
    let form = document.forms["myForm"];
    let name = form["name"].value;
    console.log(name);
    document.getElementById("namer").innerHTML = "Nombre: " + name;
    })

// ii. Cóm podem validar un input a mesura que l’usuari vagi escrivint
    /*Para validad un input a medida que el usuario va escribiendo, hemos de añadir el atributo "novalidate"
    al formulario.*/
    //EJ:
    document.getElementById("name").addEventListener("input", function() {
        nameValidation();
    });

    function nameValidation() {
        let form = document.forms["myForm"];
        let name = form["name"].value;
        
        var nomInput = document.getElementById("name");
        var errorSpan = document.getElementById("nameError");
      
        // Ejemplo de validación simple: el nombre no puede ser vacío
        if (nomInput.value.trim() === "") {
          errorSpan.textContent = "El nom no pot ser buit";
        } else {
          errorSpan.textContent = "";
        }
      } 
// iii. Cóm podem validar un input al perdre el “focus”
    /*onBlur / onFocus: quan es perd o es guanya el “focus”*/
// iv. Cóm evitem enviar un formulari si hi ha algun error?
    /*invalid*/
// v. Cóm funcionen les expressions regulars amb JS i quina relació tenen amb la
// validació de formularis?




// Valery LA MEJOR ESQUIZO
// b. API JS Formulari
// i. A on indiquem les restriccions dels inputs del formulari?
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Verificar restricciones antes de enviar el formulario
    var emailInput = document.getElementById("email");
    //Metodo de la API JS
    if (!emailInput.checkValidity()) {
      alert("Por favor, introduce un correo electrónico válido.");
      event.preventDefault(); // Evitar el envío del formulario si hay errores
    }
});
  
  
// ii. Cóm podem saber amb JS si un input incompleix alguna restricció?

//Con el método checkValidity() comprueba si las restricciones definidas se cumplen en ese caso si es formato email y no es espacio vacio


// iii. Cóm podem saber amb JS si un input incompleix una restricció en concret?



// iv. Cóm podem saber amb JS si tot el formulari està correcte?



// v. Què hem de fer per modificar el text d’error d’un input?

