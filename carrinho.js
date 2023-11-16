document.querySelectorAll('.quantidade').forEach((elm) =>{
    elm.value = null;
});

function alterarQuantidade(valor, elementoID, precoID, precoBase) {
    let quantidadeInput = document.getElementById(elementoID);
    let precoInput = document.getElementById(precoID);
    let total =0;
    
    novoValor = parseInt(quantidadeInput.value) || 0;
    
    novoValor+=valor;
    total = novoValor * precoBase;

    console.log(`preço atual:${novoValor}*${precoBase}`);
    console.log(`T== ${total}`);

    if (novoValor > 0) {
        quantidadeInput.value = novoValor;
        precoInput.textContent=total.toFixed(2);
    }
    if (novoValor === 0) {
        quantidadeInput.value = null;
        precoInput.textContent = precoBase.toFixed(2);
    }
}