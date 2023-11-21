document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    'input[name="grupos_prioritarios[]"]'
  );
  const noAplicaCheckbox = document.getElementById("noAplicaCheckbox");
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

  function handleNoAplicaChange() {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== noAplicaCheckbox) {
        checkbox.disabled = noAplicaCheckbox.checked;
        if (noAplicaCheckbox.checked) {
          checkbox.checked = false;
        }
      }
    });
    handleCheckboxChange();
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });

  noAplicaCheckbox.addEventListener("change", handleNoAplicaChange);

  handleCheckboxChange();
});
