document.addEventListener("DOMContentLoaded", function () {
  const cpfField = document.createElement("input");
  cpfField.setAttribute("type", "text");
  cpfField.setAttribute("name", "attributes[cpf]");
  cpfField.setAttribute("placeholder", "CPF");
  cpfField.setAttribute("style", "margin-bottom: 12px; padding: 10px; width: 100%; border: 1px solid #ccc;");

  const form = document.querySelector("form.edit_checkout");
  if (form) {
    form.insertBefore(cpfField, form.firstChild);
  }
});
