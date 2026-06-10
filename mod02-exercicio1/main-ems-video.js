import * as filme from "./mod-ems-video.js"

console.log(filme.alugarFilme('Piratas do Caribe', '02-04-2026',
     'R$20,00'))

console.log(filme.devolverFilme('Piratas do Caribe', '5-04-2026'))

console.log(filme.alugarFilme('Transformers', 
    '30-11-2026', 'R$50,00'))

console.log(filme.devolverFilme('Transformers',
     '10-12-2026'))