const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const data = document.getElementById ("data");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const cpfValue = cpf.value;
  const dataValue = data.value;
  const passwordValue = password.value;
  const passwordtwoValue = passwordtwo.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "O CPF é inválido");
  } else if (cpfValue.length < 11){
    setErrorFor(cpf, "Complete o CPF, apenas números")
  } else {
    setSuccessFor(cpf);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordtwoValue === "") {
    setErrorFor(passwordtwo, "A confirmação de senha é obrigatória.");
  } else if (passwordtwoValue !== passwordValue) {
    setErrorFor(passwordtwo, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordtwo);
  }

  const formControls = form.querySelectorAll("form-control");

  const formIsValid = [...formControls].every((formControls) => {
    return formControls.className === "form-control success";
  });

  if (formIsValid) {
    console.log("Cadastro realizado com sucesso");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  
  small.innerText = message;

  
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}