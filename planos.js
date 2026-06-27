function selectPlan(plan) {
  document.getElementById("modalTitle").innerText = "Plano " + plan;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}