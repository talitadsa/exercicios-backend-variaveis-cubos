function calculaArea(R,H){
    const area = (aT = 2* Math.PI * R * (R+H)).toFixed(2);
    console.log(`A área total de um cilindro de raio ${R} e altura ${H} é de ${area}.`)
}

calculaArea(3,1);
