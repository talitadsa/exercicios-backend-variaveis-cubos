function calculaVolume(r){
    const volume = (4/3 * Math.PI * r**3).toFixed(2);
    console.log(`O volume de uma esfera de raio ${r} é de ${volume}.`);
}

calculaVolume(3);
