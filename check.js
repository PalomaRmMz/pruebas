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
  const docDiscapacidad = document.getElementById("doc_discapacidad");
  const docIndigena = document.getElementById("doc_indigena");
  const radiosOpcionDiscapacidad = document.querySelectorAll(
    'input[name="opcion_discapacidad"]'
  );
  const radiosOpcionIndigenas = document.querySelectorAll(
    'input[name="opcion_indigenas"]'
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

          if (discapacidadCheckbox.checked) {
            docDiscapacidad.setAttribute("required", "");
            radiosOpcionDiscapacidad.forEach((radio) => {
              radio.setAttribute("required", "");
            });
          } else {
            docDiscapacidad.removeAttribute("required");
            docDiscapacidad.value = "";
            radiosOpcionDiscapacidad.forEach((radio) => {
              radio.removeAttribute("required");
            });
          }
          break;
        case "indigenasCheckbox":
          console.log("indigenasCheckbox SELECCIONADO");
          contenedorRadioIndigenas.style.display = indigenasCheckbox.checked
            ? "block"
            : "none";

          if (indigenasCheckbox.checked) {
            docIndigena.setAttribute("required", "");
            radiosOpcionIndigenas.forEach((radio) => {
              radio.setAttribute("required", "");
            });
          } else {
            docIndigena.removeAttribute("required");
            docIndigena.value = "";
            radiosOpcionIndigenas.forEach((radio) => {
              radio.removeAttribute("required");
            });
          }
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
            docDiscapacidad.removeAttribute("required");
            docDiscapacidad.value = "";
            docIndigena.removeAttribute("required");
            docIndigena.value = "";
            radiosOpcionDiscapacidad.forEach((radio) => {
              radio.removeAttribute("required");
            });
            radiosOpcionIndigenas.forEach((radio) => {
              radio.setAttribute("required", "");
            });
          }
          break;
        default:
          break;
      }
      handleCheckboxChange();
      validateForm();
    });
  });

  docDiscapacidad.addEventListener("change", function () {
    validateForm();
  });

  docIndigena.addEventListener("change", function () {
    validateForm();
  });

  radiosOpcionDiscapacidad.forEach((radio) => {
    radio.addEventListener("change", function () {
      validateForm();
    });
  });

  radiosOpcionIndigenas.forEach((radio) => {
    radio.addEventListener("change", function () {
      validateForm();
    });
  });
  handleCheckboxChange();
});
