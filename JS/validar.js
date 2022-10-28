var cadastro = JSON.parse(localStorage.getItem("registration")) || [];

var checkPlaca = document.getElementById("checkPlaca");
var gettingPlaca = document.querySelector(".gettingPlaca");
var nomeMorador = document.querySelector(".nomeMorador");
var vagasDisponiveis = document.querySelector(".vagasDisponiveis");
let found = false;

function validation() {
  //supondo que esse prompt seja à captura do número da placa feito pela camera na hora da entrada.
  var placaEntrada = prompt();

  //conferindo todo o array de objetos linha 1
  for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].placa1 === placaEntrada && cadastro[i].vagas > 0) {
      nomeMorador.innerHTML = cadastro[i].nome;
      cadastro[i].vagas--;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log(cadastro[i].vagas);
      found = true;

      return;
    } else if (cadastro[i].placa2 === placaEntrada && cadastro[i].vagas > 0) {
      nomeMorador.innerHTML = cadastro[i].nome;
      cadastro[i].vagas--;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log(cadastro[i].vagas);
      found = true;

      return;
    } else if (cadastro[i].placa3 === placaEntrada && cadastro[i].vagas > 0) {
      nomeMorador.innerHTML = cadastro[i].nome;
      cadastro[i].vagas--;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log(cadastro[i].vagas);
      found = true;

      return;
    } else {
      found = false;
    }
  }
}

//chamando a função e valindando vagas.
var enter = document.querySelector(".enter");
var vagasDis = document.querySelector(".vagasDisponiveis");
var entermorador = document.querySelector(".entermorador");

function openGate() {
  validation();
  if (found === true) {
    enter.innerHTML = "Entrada autorizada";
  } else {
    enter.innerHTML = "Entrada Nao autorizada";
  }
}

checkPlaca.addEventListener("click", openGate);

// -----------------------------Saída Dos Carros----------------------------

var exit = document.getElementById("exit");

exit.addEventListener("click", exiting);

function exiting() {
  //supondo que esse prompt seja à captura do número da placa feito pela camera na hora da saísa.
  var placaSaida = prompt();

  for (let i = 0; i < cadastro.length; i++) {
    if (cadastro[i].placa1 === placaSaida) {
      cadastro[i].vagas++;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log("Vagas apos a saida" + cadastro[i].vagas);
      return;
    } else if (cadastro[i].placa1 === placaSaida) {
      cadastro[i].vagas++;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log("Vagas apos a saida" + cadastro[i].vagas);
      return;
    } else if (cadastro[i].placa1 === placaSaida) {
      cadastro[i].vagas++;
      vagasDisponiveis.innerHTML = `Vagas disponíveis: ${cadastro[i].vagas}`;
      console.log("Vagas apos a saida" + cadastro[i].vagas);
      return;
    }
  }
}
