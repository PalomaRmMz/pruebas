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

  function handleDiscapacidadChange() {
    const contenedorRadioDiscapacidad = document.getElementById(
      "contenedorRadioDiscapacidad"
    );
    contenedorRadioDiscapacidad.style.display = discapacidadCheckbox.checked
      ? "block"
      : "none";
    handleCheckboxChange();
  }

  function handleIndigenasChange() {
    const contenedorRadioIndigenas = document.getElementById(
      "contenedorRadioIndigenas"
    );
    contenedorRadioIndigenas.style.display = indigenasCheckbox.checked
      ? "block"
      : "none";
    handleCheckboxChange();
  }

  function handleNoAplicaChange() {
    const contenedorRadioDiscapacidad = document.getElementById(
      "contenedorRadioDiscapacidad"
    );
    const contenedorRadioIndigenas = document.getElementById(
      "contenedorRadioIndigenas"
    );

    contenedorRadioDiscapacidad.style.display = "none";
    contenedorRadioIndigenas.style.display = "none";

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

  discapacidadCheckbox.addEventListener("change", handleDiscapacidadChange);
  indigenasCheckbox.addEventListener("change", handleIndigenasChange);
  noAplicaCheckbox.addEventListener("change", handleNoAplicaChange);

  handleDiscapacidadChange();
  handleIndigenasChange();
  handleNoAplicaChange();
});
