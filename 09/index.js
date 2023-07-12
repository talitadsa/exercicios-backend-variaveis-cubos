function calculaSoma(n){
    const S = (n - 2) * 180;
    return S.toFixed(2);
}
function calculaAngulo(n){
    const S = calculaSoma(n);
    const a = S/n;
    return a.toFixed(2); 
}
function exibeResultado(n){
        const S = calculaSoma(n);
        const a = calculaAngulo(n);
        console.log(`A soma dos ângulos internos é ${S} e cada ãngulo vale ${a}.`);
}
exibeResultado(6);