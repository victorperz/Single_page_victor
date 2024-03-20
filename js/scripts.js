
 // Función para validar el código introducido
 document.addEventListener("DOMContentLoaded", function() {
    function validarCodigo() {
        var codigo = document.getElementById("codigo").value;

        // Expresión regular para validar el código alfanumérico
        var regex = /^(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9]{8,10}$/;

        if (regex.test(codigo)) {

            Swal.fire({
                title: 'Opération réussie!',
                text: `Code valide ${codigo} . Vous pouvez échanger le produit !`,
                icon: 'success'
            });
            limpiar(document.getElementById("codigo"));
        } else {

            Swal.fire({
                title: 'Oops...',
                text: 'Code invalide. Entrez un code valide pour utiliser le produit.',
                icon: 'error'
            });
          limpiar(document.getElementById("codigo"));
        }
    }

    // Función para limpiar el valor de un campo
    function limpiar(elemento) {
        elemento.value = "";
    }

    // Asociar la función validarCodigo al evento onsubmit del formulario
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe
        validarCodigo(); // Validar el código
    });
   });