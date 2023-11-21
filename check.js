document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("btnEnviar");

  function validateForm() {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
    if (isValid) {
      console.log("VALIDO");
    } else {
      console.log("INVALIDO");
    }
  }

  validateForm();

  form.addEventListener("input", validateForm);
});
