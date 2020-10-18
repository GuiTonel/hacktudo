# Hackathon - Desenvelopers

## Projeto eCoop
![ecoop-1](https://user-images.githubusercontent.com/66282650/96387588-9a289d00-1179-11eb-878a-56c9bc003982.png)

### Representação grafica para o nosso modelo base de negócio
Um fluxo comum do produto desde o momento de sua venda, até a entrega para o seu comprador
![Produto_Diagrama](https://user-images.githubusercontent.com/66282650/96369471-8ad13180-1130-11eb-9758-227929fb4560.png)

### Referências de Codigo
- [Estrutura Monorepo por Rockeseat](https://github.com/rocketseat-content/youtube-monorepo)

### Bibliotecas Utilizadas
- [cors](https://www.npmjs.com/package/cors): "^2.8.5",  
- [express](https://expressjs.com/pt-br/): "^4.17.1" ,
- [hashids](https://hashids.org): "^2.2.1" ,
- [mongoose](https://mongoosejs.com): "^5.10.9",
- [pdf-creator-node](https://www.npmjs.com/package/pdf-creator-node): "^1.4.1" ,
- [qrcode](https://www.npmjs.com/package/qrcode): "^1.4.4",
- [socket.io](https://socket.io): "^2.3.0"

## Iniciando

Primeiro, para o servidor de desenvolvimento:

npm run start
or
yarn start

## Rotas
### Registrando viajante
[POST] - [http://localhost/:3333/traveller/insert](http//localhost:3333/traveller/insert)
- Corpo da requisição de Exemplo: {"traveller":{"nome": "guilherme","cpf": "01234567890","veiculo": "astra pancadao","endereco": {"rua": "teste rua","numero": 1104,"bairro": "centro","cidade": "Francisco Beltrao","estado": "pr","cep": 85660000,"complemento": ""}}}

### Registrando eContainer
[POST] - [http://127.0.0.1:3333/econtainer/insert]( http://127.0.0.1:3333/econtainer/insert)
- Corpo da requisição de Exemplo: {"eContainer":{"nome": "guilherme","cnpj": "01234567890","endereco": {"rua": "teste rua","numero": 1104,"bairro": "centro","cidade": "francisco beltrao","estado": "pr","cep": 85660000,"complemento": "","tipoUsuario": "C"}}}

- Obs: Inserir segundo registro com a cidade de sao paulo, sem caracteres especiais

### Registrando Viagem
[POST] - [http://localhost:3333/viagem/inserir/:idViajante](http://localhost:3333/viagem/inserir/5f8bfdcf9d1359390054ca26)
- Corpo da requisição de Exemplo:{"viagem":{"data": "Mon, 27 Dec 1995 13:30:00 GMT","cidadePartida": "Francisco Beltrao","cidadeChegada": "sao paulo"}}

### Registrando Transporte
[POST] - [http://localhost:3333/transporte/gerarinfos/:idVenda](http://localhost:3333/transporte/gerarinfos/577)
- Corpo da requisição de Exemplo: {"vendedor":{"nome": "claudio","endereco": {"cidade": "Francisco Beltrao"}},"comprador": {"nome": "roberta","endereco": {"cidade": "sao paulo"}},"produto": {"nome": "teste","qtd": 1,"cor": "preto","peso": 196},"dataDeposito": "Mon, 25 Dec 1995 13:30:00 GMT"}

- Obs: Retornará um PDF com o QRCode e outras informações

### Atualizar status Transporte(QR Code Request)
[PUT] - [http://localhost:3333/transporte/atualizarstatus/:hashProduto](http://localhost:3333/transporte/atualizarstatus/:hashProduto)

### Pegar informações Transporte
[GET] - [http://localhost:3333/transporte/getstatus/:hashProduto](http://localhost:3333/transporte/getstatus/:hashProduto)

### Pegar detalhes endereço de usuario
[GET] - [http://localhost:3333/endereco/selecionar/:idUsuario](http://localhost:3333/endereco/selecionar/5f8bfdcf9d1359390054ca26)
