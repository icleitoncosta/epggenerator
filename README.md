# Para que serve?
Esse xml.epg, pode ser usado para registrar canais personalizados dentro do XUI.ONE, e servir programação em canais que não tenham o EPG completo dando mais organização aos seus canais.

# Como usar?
Você pode usar o arquivo atual, é só cadastrar como epg o seguinte URL no XUI `https://raw.githubusercontent.com/icleitoncosta/epggenerator/refs/heads/main/epg.xml`
Porém, pode alterar e fazer como preferir.

# Como alterar? 
1. Para poder utilizar esse projeto clone ele localmente
`git clone https://github.com/icleitoncosta/epggenerator`

2. Faça as alterações dentro do arquivo `channels.json` de acordo com os canais personalizados que voce deseja criar.

3. Instale o projeto
`npm install`

4. Execute-o
`npm run start`

Ele irá executar o arquivo, hospede-o em algum local, ou faça como nesse projeto, crie um fork para seu github, faça as alterações, e deixe ele executando de forma automática e use a URL do github :) 