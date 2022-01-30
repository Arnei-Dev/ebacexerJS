
/*================================================================
Responda as perguntas de acordo com as variáveis */

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;
//
console.log(branco == cinza);
console.log(branco == "branco" ? "branco" : "preto");
console.log(carro === branco);
//
var cavalo = carro == "preto"? "cinza" : "marron"; // true
var cavalo2 = carro == "branco"? "cinza" : "marron";// false
console.log(cavalo);
console.log(cavalo2);

//

/*===============================================================
Quantas prestações são necessárias para pagar o valor do carro com uma entrada
de 3.000? Demonstre a operação? */
var valorEntrada = 3000;
function compraCarro(valorEntrada){
  let valorCarro = valor - valorEntrada;
  return valorCarro / prestacao;
}
console.log("Valor do Carro...... R$ 30.000,00 Reais\nEntrada de............. R$3000,00 Reais")
console.log("Parcelas de...... " + compraCarro(valorEntrada)+ "x de R$" + prestacao + ",00 Reais");

/*===============================================================
Somando as variáveis de cores é formada uma string de quantos caracteres? */

var totalVariaveis = branco + preto + cinza;
var totalChar = 0;
for(x = 1; x <= totalVariaveis.length; x++){
    totalChar++;
}
console.log("Total de Caráctetes das Strings cores: " + totalChar);
