document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("btnEnviar");

  function validateForm() {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
  }

  form.addEventListener("input", validateForm);

  // Llama a la función de validación al cargar la página
  validateForm();
});
