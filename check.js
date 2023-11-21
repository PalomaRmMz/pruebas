document.addEventListener("DOMContentLoaded", function () {
  const checkboxesGRUPOSPRIORITARIOS = document.querySelectorAll(
    'input[name="grupos_prioritarios[]"]'
  );
  const noAplicaCheckbox = document.getElementById("noAplicaCheckbox");
  const form = document.getElementById("miFormulario");
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

  function handleDiscapacidadChange() {
    const contenedorRadioDiscapacidad = document.getElementById(
      "contenedorRadioDiscapacidad"
    );
    const docDiscapacidadInput = document.getElementById("doc_discapacidad");

    contenedorRadioDiscapacidad.style.display = discapacidadCheckbox.checked
      ? "block"
      : "none";

    // Si contenedorRadioDiscapacidad es visible, se agrega el atributo required al input, de lo contrario se quita
    if (contenedorRadioDiscapacidad.style.display === "block") {
      docDiscapacidadInput.setAttribute("required", "");
    } else {
      docDiscapacidadInput.removeAttribute("required");
      docDiscapacidadInput.value = ""; // Esto limpia el valor del input
    }
  }

  checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
    checkGrupos.addEventListener("change", handleCheckboxChange);
  });

  noAplicaCheckbox.addEventListener("change", handleNoAplicaChange);
  discapacidadCheckbox.addEventListener("change", handleDiscapacidadChange);

  handleCheckboxChange();
});
