function calculaComprimento(R){
    const C = 2 * 3.14 * R;
    return C.toFixed(2);
}
function calculaArea(R){
    const A = 3.14 * R**2
    return A;
}
function exibeResultado(R){
    const C = calculaComprimento(R);
    console.log(`O comprimento do círculo é: ${C}.`);
    const A = calculaArea(R);
    console.log(`A área do círculo é: ${A}.`);
}
exibeResultado(1);