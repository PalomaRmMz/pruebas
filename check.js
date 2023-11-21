document.addEventListener("DOMContentLoaded", function () {
  const checkboxesGRUPOSPRIORITARIOS = document.querySelectorAll(
    'input[name="grupos_prioritarios[]"]'
  );
  const noAplicaCheckbox = document.getElementById("noAplicaCheckbox");
  const form = document.getElementById("miFormulario");
  const submitButton = document.getElementById("btnEnviar");

  // -------------------
  const contenedorRadioDiscapacidad = document.getElementById(
    "contenedorRadioDiscapacidad"
  );
  const contenedorRadioIndigenas = document.getElementById(
    "contenedorRadioIndigenas"
  );
  // -------------------

  function validateForm() {
    submitButton.disabled = !form.checkValidity();
  }

  function handleCheckboxChange() {
    let checkedAnyCheckbox = false;

    checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
      if (checkGrupos.checked) {
        checkedAnyCheckbox = true;
      }
    });

    checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
      checkGrupos.required = !checkedAnyCheckbox;
    });

    validateForm();
  }

  checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
    checkGrupos.addEventListener("change", function () {
      switch (checkGrupos.id) {
        case "lgbttqiCheckbox":
          console.log("lgbttqiCheckbox SELECCIONADO");
          break;
        case "discapacidadCheckbox":
          console.log("discapacidadCheckbox SELECCIONADO");
          contenedorRadioDiscapacidad.style.display =
            discapacidadCheckbox.checked ? "block" : "none";
          break;
        case "indigenasCheckbox":
          console.log("indigenasCheckbox SELECCIONADO");
          contenedorRadioIndigenas.style.display = indigenasCheckbox.checked
            ? "block"
            : "none";
          break;
        case "jovenesCheckbox":
          console.log("jovenesCheckbox SELECCIONADO");
          break;
        case "noAplicaCheckbox":
          console.log("noAplicaCheckbox SELECCIONADO");
          checkboxesGRUPOSPRIORITARIOS.forEach((checkGrupos) => {
            if (checkGrupos !== noAplicaCheckbox) {
              checkGrupos.disabled = noAplicaCheckbox.checked;
              checkGrupos.checked = noAplicaCheckbox.checked
                ? false
                : checkGrupos.checked;
            }
          });

          if (noAplicaCheckbox.checked) {
            contenedorRadioDiscapacidad.style.display = "none";
            contenedorRadioIndigenas.style.display = "none";
          }
          break;
        default:
          break;
      }
      handleCheckboxChange();
      validateForm();
    });
  });

  handleCheckboxChange();
});
