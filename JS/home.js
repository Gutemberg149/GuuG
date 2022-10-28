//Quarda os dados na memoria do computador

var cadastro = JSON.parse(localStorage.getItem("registration")) || [];

var btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", () => {
  var nameOwner = document.querySelector(".inputName").value;
  var unity = document.querySelector(".inputUnity").value;
  var qtdVeiculos = document.querySelector(".inputQtdVeiculos").value;
  var bloco = document.querySelector(".bloco").value;
  const placa01 = document.querySelector(".inputPlaca1").value;
  const placa02 = document.querySelector(".inputPlaca2").value;
  const placa03 = document.querySelector(".inputPlaca3").value;

  //   verificação se os dados inseridos estão corretos.
  if (
    isNaN(unity) ||
    unity == "" ||
    isNaN(qtdVeiculos) ||
    qtdVeiculos == "" ||
    nameOwner == "" ||
    placa1 == "" ||
    bloco == ""
  ) {
    alert("Valor inválido");
    return;
  } else if (parseInt(qtdVeiculos) === 0 || parseInt(qtdVeiculos) > 3) {
    alert("Quantidade de veículos invalido. Deve ser de 1 a 3.");
    return;
  } else {
    //inserindo as informações dos moradores no cadastro.
    cadastro.push({
      nome: nameOwner,
      vagas: 2,
      unidade: unity,
      bloco: bloco,
      qtdVeiculo: qtdVeiculos,
      placa1: placa01,
      placa2: placa02,
      placa3: placa03,
    });
  }
  var cadastroStringfy = JSON.stringify(cadastro);
  clearRegistration();
  localStorage.setItem("registration", cadastroStringfy);
  console.log(placa1);
  console.log(cadastro);
});

//Função para limpar os inputs
function clearRegistration() {
  document.querySelector(".inputName").value = "";
  document.querySelector(".inputUnity").value = "";
  document.querySelector(".inputQtdVeiculos").value = "";
  document.querySelector(".inputPlaca1").value = "";
  document.querySelector(".inputPlaca2").value = "";
  document.querySelector(".inputPlaca3").value = "";
}

// ------------------------------------------------------------------------
