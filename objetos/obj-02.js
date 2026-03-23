const motos = {
    nome: "CG 160",
    modelo: "Honda CG 160",
    cor: "vermelho",
    placa: "TH160",
    valor: "16.770"
}

motos.modelo = "Honda CG 160",
motos["nome"] = "CG 160",
motos.cor = "vermelho",
motos.placa = "TH160",
motos.valor = "16.770",
console.log(motos.modelo),
console.log(motos.nome),
console.log(motos.cor),
console.log(motos.placa),
console.log(motos.valor);



// for(moto in motos){console.log(moto)}