

document.addEventListener("DOMContentLoaded", function () {

  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  const imc = document.getElementById("imc");
  const feedback = document.getElementById("feedback-imc");
  const envergadura = document.getElementById("envergadura");

  if (peso && altura && imc && feedback) {

    function calcularIMC() {
      if (!peso.value || !altura.value) {
        feedback.innerText = "Informe seu peso e altura para calcular o IMC";
        imc.value = "";
        return;
      }

      const alturaMetros = altura.value / 100;
      const resultado = peso.value / (alturaMetros * alturaMetros);
      imc.value = resultado.toFixed(2);

      if (resultado < 18.5) {
        feedback.innerText = "Abaixo do peso";
      } 
      else if (resultado < 25) {
        feedback.innerText = "Peso normal";
      } 
      else if (resultado < 30) {
        feedback.innerText = "Sobrepeso";
      }
      else {
        feedback.innerText = "Obesidade";
      }
    }

    peso.addEventListener("input", calcularIMC);
    altura.addEventListener("input", calcularIMC);
  }

  function salvarDadosAntropometria() {

    if (peso && peso.value) {
      localStorage.setItem("proesp_peso", peso.value);
    }

    if (altura && altura.value) {
      localStorage.setItem("proesp_altura", altura.value);
    }

    if (envergadura && envergadura.value) {
      localStorage.setItem("proesp_envergadura", envergadura.value);
    }

    if (imc && imc.value) {
      localStorage.setItem("proesp_imc", imc.value);
    }
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function () {
      salvarDadosAntropometria();
    });
  }

});

const formIdentificacao = document.getElementById("form-identificacao");

if (formIdentificacao) {
  formIdentificacao.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value;
    const sexo = document.getElementById("sexo").value;
    const turma = document.getElementById("turma").value.trim();

    if (!nome || !idade || !sexo || !turma) {
      alert("Preencha todos os campos!");
      return;
    }

    if (idade > 17) {
      alert("A idade máxima permitida é 17 anos.");
      return;
    }


    localStorage.setItem("avaliacao_nome", nome);
    localStorage.setItem("avaliacao_idade", idade);
    localStorage.setItem("avaliacao_sexo", sexo);
    localStorage.setItem("avaliacao_turma", turma);

    window.location.href = "antropomeria.html";
  });
}

