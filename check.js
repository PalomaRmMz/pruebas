document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    'input[name="grupos_prioritarios[]"]'
  );
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("btnEnviar");

  function validateForm() {
    const isValid = form.checkValidity();
    submitButton.disabled = !isValid;
  }

  function handleCheckboxChange() {
    const checkedCheckboxes = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    checkboxes.forEach((checkbox) => {
      checkbox.required = !checkedCheckboxes;
    });
    validateForm();
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });

  // Verificar si al menos uno está seleccionado al cargar la página
  handleCheckboxChange();
});
