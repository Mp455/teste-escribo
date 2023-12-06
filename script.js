function calcularSoma() {
  const inputNumero = document.getElementById("numero").value;

  const numero = parseInt(inputNumero);
  if (Number.isInteger(numero)) {
    let soma = 0;
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }

    document.getElementById(
      "resultado"
    ).innerText = `A soma dos múltiplos de 3 ou 5 até ${numero} é: ${soma}`;

    // Limpar o campo de entrada após o cálculo
    document.getElementById("numero").value = "";
  } else {
    document.getElementById("resultado").innerText =
      "Por favor, insira um número inteiro válido.";
  }
}
