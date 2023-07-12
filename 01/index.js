function calcularIMC(peso,altura) {
  const imc = peso/(altura**2);
  return imc.toFixed(2);
}
function exibirIMC(peso, altura) {
  const imc = calcularIMC(peso,altura);
  console.log(`O IMC calculado é: ${imc}`);
}
const peso = 65;
const altura = 1.65;
exibirIMC(peso, altura);


