function desconto(valorProduto,valorPossuido){
    const desconto = (valorPossuido * 100)/valorProduto;
    console.log("O valor do desconto �: "+ desconto.toFixed(2));
}
desconto(110,50);
    