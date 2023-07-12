function montante (capital, taxa, meses){
    const m = capital * ((1 + (taxa/100))**meses) ;
    console.log("O montante é: " + m.toFixed(2));
}
    
montante(1000,12.5,5);