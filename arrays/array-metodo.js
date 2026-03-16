const frutas = ['jaca', 'manga', 'maracuja']

frutas.push('pessego')

console.log(frutas.length)
while (frutas.length > 0) {
    frutas.pop()
    if(frutas.length == 0) {
        console.log("nao ha frutas para vender!!!")
    }
}
console.log(frutas)
console.log(frutas.length)