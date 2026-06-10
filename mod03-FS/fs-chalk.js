const fs = require('fs')
const path = require('path')
const chalk = require('chalk').default

try{
     const caminho = path.resolve(__dirname, 'REDME.md')
    const arquivo = fs.readFileSync(caminho, 'utf-8')
    console.log(chalk.bgGray.green('arquivo carregar com sucesso'))
    console.log(arquivo)

    console.log(arquivo)
}catch ( error){
    console.log(chalk.bgBlue.yellow('falha ao carregar o arquivo, tente novamente mais tarde'))
    console.log(chalk.bgRed.bold('erro interno de leitura de arquivo:\n', error.message))
}
   