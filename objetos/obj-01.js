// objetos sao estruturas do tipo chave-valor
// podemos atribuir de forma dinamica, assim como em arrays
// objetos tem indices noomeados
// podemos usar (for of) ou (for in)

const carros = {
    nome: "camaro",
    modelo: "xpto Cam",
    cores : ["amarelo", "preto"],
    cidades: {}
}
carros.modelo = "fusca"
carros["nome"] = "chev"
console.log(carros.modelo)
console.log(carros.nome)

for(carro in carros){console.log(carro)}
