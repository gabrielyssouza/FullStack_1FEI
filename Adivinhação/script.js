const botaoChutar = document.getElementById("botaoChutar");
const entradaChute = document.getElementById("entradaChute");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const historicoTexto = document.getElementById("historico");

let numeroSecreto = Math.floor(Math.random() * 101); // número de 0 a 100
let tentativas = 0;
let historico = []; // aqui armazenamos os palpites

botaoChutar.addEventListener("click", () => {
    const chute = Number(entradaChute.value);

    if (!chute && chute !== 0) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um número válido!";
        return;
    }

    tentativas++;
    historico.push(chute); // guarda o palpite
    tentativasTexto.textContent = `Tentativas: ${tentativas}`;
    historicoTexto.textContent = `Palpites: ${historico.join(", ")}`;

    if (chute === numeroSecreto) {
        mensagem.style.color = "#ff3399";
        mensagem.textContent = "✨ Parabéns! Você acertou! ✨";
    } else if (chute < numeroSecreto) {
        mensagem.style.color = "red";
        mensagem.textContent = "⬆ O número é maior";
    } else if (chute > numeroSecreto) {
        mensagem.style.color = "red";
        mensagem.textContent = "⬇ O número é menor";
    }

    entradaChute.value = "";
    entradaChute.focus();
});

