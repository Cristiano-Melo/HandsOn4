# HandsOn#4 - GamaXP#43 - Parrot - A sua rede social!

A rede social Parrot é um sistema white label (ou seja, um sistema modelo criado por
uma empresa que pode ser reutilizado por outras, apenas modificando informações
como logo e marca) do qual condomínios podem contratar para incentivar a interação
entre os moradores.

## 🚀 Começando

Este projeto possuem duas formas de serem testados. A primeira forma, seria através da API publicada online através do serviço da @heroku através do link abaixo:

https://handson4-parrot.herokuapp.com

Para testar a aplicação será necessário o usu do Insomnia (Instalado na máquina) através do botão abaixo: 
<p align = 'center'><a href="https://insomnia.rest/run/?label=api-parrot&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCristiano-Melo%2FHandsOn4%2Fmaster%2Fdocs%2FInsomnia_2022-09-08.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></p>

A segunda opção é rodar a aplicação localmente na sua máquina, seguindo os seguintes requisitos:

    1. Banco de Dados Mysql instalado e configurado no ambiente a ser testado.
    2. Uma framework client para testes de API. Recomendado ( Insomnia ), para interação com a API.
    3. Um editor de texto, para alteração do arquivo de conexão com o Banco de Dados ( Recomendado VSCODE).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

    1. MySql.
    2. Insomnia ( Recomendado) ou similar.
    3. VsCode ( Recomendado) ou similar.

### 🔧 Instalação
    - Após clonar o repositório, acesse via terminal a pasta do projeto e executar o comando "npm install" para instalar todas as dependências do projeto.
    - Necessário alterar credenciais do banco de dados .env
    - Criar banco de dados dentro do MySql com o seguinte nome: api_parrot.
    - Executar o seguinte comando no seu mySql (Onde no campo 'password' digite sua senha do root: 
              ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
              flush privileges;
    - Executar o seguinte comando no terminal do VSCode para gerar as migrations:
            migration:generate (ENTER)
            migration:run (ENTER)
    - Após executar as migrations, iniciar o servidor da API via script, acesse o terminal e execute o seguinte comando: npm run dev
    
    
## 📦 Documentação da API

Para acessar a documentação da API, será necessário executar um live server através do VSCODE no arquivo /docs/index.html.

## ⚙️ Executando os testes

    - Atraves do botão abaixo, você será redirecionado para o insomnia para realização dos testes, com todas as rotas já pré-configuradas:
 
 <p align = 'center'><a href="https://insomnia.rest/run/?label=api-parrot&uri=https%3A%2F%2Fraw.githubusercontent.com%2FCristiano-Melo%2FHandsOn4%2Fmaster%2Fdocs%2Fapi_parrot-local.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></a></p>

## ✒️ Autores

*⌨️ com ❤️ por **Cristiano Melo** - *Node.JS - Documentação* - [Cristiano Melo](https://github.com/Cristiano-Melo)<br>
*⌨️ com ❤️ por **Leonardo Maia** - *Node.JS - Documentação* - [Leonardo Maia](https://github.com/LeoMPG)

## 🎁 Expressões de gratidão

* Projeto realizado após muito esforço e dedicação, Esperamos que gostem! 📢
* Obrigado [Paulo Jefferson](https://www.linkedin.com/in/paulo-jefferson-mendes-96609b74) Pelos ensinamentos, macetes e principalmente pela paciência em nos ensinar 🤓.
* Obrigado [Francis Oliveira](https://www.linkedin.com/in/franciscpd/) Foram dicas valiosas, que salvaram nossa pele aqui do Back-end🤓.

