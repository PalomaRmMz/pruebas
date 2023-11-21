document.addEventListener("DOMContentLoaded", function () {
  const checkboxesGRUPOSPRIORITARIOS = document.querySelectorAll(
    'input[name="grupos_prioritarios[]"]'
  );
  const noAplicaCheckbox = document.getElementById("noAplicaCheckbox");
  const form = document.getElementById("myForm");
  const submitButton = document.getElementById("btnEnviar");

  function validateForm() {
    submitButton.disabled = !form.checkValidity();
  }

  function handleCheckboxChange() {
    const checkedCheckboxesGRUPOSPRIORITARIOS = [
      ...checkboxesGRUPOSPRIORITARIOS,
    ].some((checkGrupos) => checkGrupos.checked);
    checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
      checkGrupos.required = !checkedCheckboxesGRUPOSPRIORITARIOS;
    });
    validateForm();
  }

  function handleNoAplicaChange() {
    checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
      if (checkGrupos !== noAplicaCheckbox) {
        checkGrupos.disabled = noAplicaCheckbox.checked;
        checkGrupos.checked = noAplicaCheckbox.checked
          ? false
          : checkGrupos.checked;
      }
    });
    handleCheckboxChange();
  }

  checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
    checkGrupos.addEventListener("change", handleCheckboxChange);
  });

  noAplicaCheckbox.addEventListener("change", handleNoAplicaChange);

  handleCheckboxChange();
});
