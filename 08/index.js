function calculaComprimento(R){
    const C = 2 * Math.PI * R;
    return C.toFixed(2);
}
function calculaArea(R){
    const A = Math.PI * R**2
    return A;
}
function exibeResultado(R){
    const C = calculaComprimento(R);
    console.log(`O comprimento do círculo é: ${C}.`);
    const A = calculaArea(R);
    console.log(`A área do círculo é: ${A}.`);
}
exibeResultado(1);
