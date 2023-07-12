function velocidade(distancia, tempo){
    const velocidade = distancia/tempo;
    const conversao = velocidade * 3.6;
    console.log("A velocidade em km/h �: "+conversao+" km/h")
}
    
velocidade(500,10);