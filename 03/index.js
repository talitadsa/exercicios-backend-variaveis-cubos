function desconto(valorProduto,valorPossuido){
    const desconto = (valorPossuido * 100)/valorProduto;
    console.log("O valor do desconto é: "+ desconto.toFixed(2));
}
desconto(110,50);
    