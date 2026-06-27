function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");

  document.getElementById("btnLogin").classList.add("active");
  document.getElementById("btnRegister").classList.remove("active");
}

function showRegister() {
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");

  document.getElementById("btnRegister").classList.add("active");
  document.getElementById("btnLogin").classList.remove("active");
}

/* LOGIN SIMPLES (FRONTEND) */
function login(event) {
  event.preventDefault();

  document.getElementById("modalTitle").innerText = "Login realizado";
  document.getElementById("modalText").innerText = "Bem-vindo de volta!";

  document.getElementById("modal").style.display = "flex";
}

/* CADASTRO SIMPLES (FRONTEND) */
function register(event) {
  event.preventDefault();

  document.getElementById("modalTitle").innerText = "Conta criada";
  document.getElementById("modalText").innerText = "Cadastro realizado com sucesso!";

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}