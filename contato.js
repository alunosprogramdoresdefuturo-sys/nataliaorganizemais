function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("modal").style.display = "flex";

  // limpa formulário
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}