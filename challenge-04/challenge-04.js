var isTruthy = function (a) {
    return !!a
}

// console.log(isTruthy(null));
// console.log(isTruthy(undefined));
// console.log(isTruthy(0));
// console.log(isTruthy(-0));
// console.log(isTruthy(''));
// console.log(isTruthy(NaN));

// console.log(isTruthy(true));
// console.log(isTruthy(1));
// console.log(isTruthy("Kiria"));
// console.log(isTruthy([]));
// console.log(isTruthy({}));
// console.log(isTruthy(function () { }));

var carro = {
    marca: "toyota",
    modelo: "etios",
    placa: "abc-1234",
    ano: 2013,
    cor: "preto",
    quantasPortas: 0,
    assentos: 5,
    quantidadePessoas: 0,
};

carro.mudarCor = function(cor){
    carro.cor = cor;
}
carro.obterCor = function(){
    return carro.cor;
}
carro.obterModelo =  function(){
    return carro.modelo;
}
carro.obterMarca = function(){
    return carro.marca;
}
carro.obterMarcaModelo = function(){
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}

carro.adicionaPessoa = function(numPessoas){

    var totalPessoas = carro.quantidadePessoas + numPessoas;

    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return 'o carro já está lotado'
    }
    if(totalPessoas > carro.assentos){
        var qtsPesssoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralSingular = qtsPesssoasCabem === 1 ? 'pessoa' : 'pessoas'
        return `Só cabem mais ${qtsPesssoasCabem} ${pluralSingular}!`
    }
    carro.quantidadePessoas += numPessoas;
    return `Já temos ${totalPessoas} pessoas no carro!`
}

// console.log(carro.adicionaPessoa(0))
// console.log(carro.adicionaPessoa(2))
// console.log(carro.adicionaPessoa(2))
// console.log(carro.adicionaPessoa(1))


// Qual a cor atual do carro?
// console.log(carro.obterCor());

// Mude a cor do carro para vermelho.

// console.log(carro.mudarCor('vermelho'));
// E agora, qual a cor do carro
// console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
// console.log(carro.mudarCor('verde musgo'));

// E agora, qual a cor do carro
// console.log(carro.obterCor());

// Qual a marca e modelo do carro
// console.log(carro.obterMarcaModelo())

// Adicione 2 pessoas no carro.
console.log(carro.adicionaPessoa(2)) //Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionaPessoa(4)) //Só cabem mais 3 pessoas!

// Faça o carro encher.
console.log(carro.adicionaPessoa(3)) //Já temos 5 pessoas no carro!

// Tire 4 pessoas do carro.
console.log(carro.adicionaPessoa(-3)) //Já temos 2 pessoas no carro!

// Adicione 10 pessoas no carro.
console.log(carro.adicionaPessoa(10)) //Só cabem mais 3 pessoas!

// Quantas pessoas temos no carro
console.log(carro.quantidadePessoas) //2

