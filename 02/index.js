function conversor(grausFahrenheit){
    const grausCelsius = grausFahrenheit - 32 * (5/9);
    return grausCelsius.toFixed(2);
}
function exibirGrausCelsius(grausFahrenheit){
    const grausCelsius = conversor(grausFahrenheit);
    console.log(`A temperatura em graus Celsius é de: ${grausCelsius} graus.`);
}
    
const grausFahrenheit = 32;
exibirGrausCelsius(grausFahrenheit);