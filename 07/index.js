function simulador(po, x, t) {
    const fracao = t / 7;
    const p = po * x ** fracao;
    console.log("o total de pessoas infectadas será: " + p);
}
simulador(1000, 4, 7);