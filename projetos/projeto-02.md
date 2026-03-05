# Projeto 02 - Sistema de Loja Mobile

Projeto voltado para fixação dos conteúdos de **React Native**, **useEffect** e **AsyncStorage**.
Neste projeto você irá criar um **mini sistema de loja**, com usuários, produtos e carrinho de compras.

O objetivo é aprender a **armazenar dados localmente no dispositivo**, simulando o funcionamento básico de um aplicativo de e-commerce.

Caso você queira trabalhar um **tema livre de loja** (ex: loja de jogos, loja de roupas, loja de livros, loja de comida, etc), lembre-se de manter **todas as funcionalidades solicitadas**.

## Estrutura mínima

O projeto deve conter pelo menos as seguintes telas:

- Tela 1 – Login
- Tela 2 – Cadastro de clientes
- Tela 3 – Área do dono da loja (admin)
- Tela 4 – Lista de produtos
- Tela 5 – Carrinho de compras

## Observações

- O sistema deve possuir **uma conta fixa de administrador (dono da loja)**.
- O administrador será responsável por **cadastrar os produtos da loja**.
- Clientes devem ser capazes de **criar contas diretamente na tela de cadastro**.
- Os dados devem ser **armazenados utilizando AsyncStorage**.
- Cada cliente deve possuir **seu próprio carrinho de compras**.
- Após o login, o usuário deve ser direcionado para a área correspondente (admin ou cliente).
- Deve existir opção de **logout (sair da conta)**.
- As telas devem possuir **personalização visual criada pelo próprio aluno**.
- Quaisquer criações feitas com **código base de IA receberão decremento na nota**.

## Funcionalidades obrigatórias
### Sistema de login
- Login com usuário e senha
- Conta fixa de administrador
- Cadastro de novos clientes
### Administração da loja
O dono da loja deve ser capaz de:
- Adicionar novos produtos
- Informar:
  - nome do produto
  - descrição
  - preço
  - imagem (link ou imagem simples)
- Exibir lista de produtos cadastrados
### Área do cliente
Clientes devem ser capazes de:
- Visualizar os produtos da loja
- Adicionar produtos ao carrinho
- Escolher a quantidade desejada
- Visualizar os itens do carrinho
- Realizar compra
### Persistência de dados
- Usuários devem ser salvos no AsyncStorage
- Produtos devem ser salvos no AsyncStorage
- Carrinhos devem ser salvos no AsyncStorage
- Os dados **não devem desaparecer ao fechar o aplicativo**.

## Desafio (Funcionalidades extras)
### Sistema de estoque
O administrador poderá informar:
- quantidade disponível de cada produto

Ao realizar uma compra:
- a quantidade comprada deve diminuir do estoque original

### Compra direta
O cliente poderá:
- comprar diretamente na tela de produtos

Ou
- adicionar ao carrinho e finalizar a compra depois

## Critérios de avaliação

O projeto valerá 10 pontos no total.

1. Design da aplicação (2 pts)

Avaliação da interface do aplicativo:
- organização visual
- legibilidade
- uso de cores
- disposição dos elementos na tela

### 2. Funcionalidade do sistema (2 pts)

Avaliação do funcionamento geral:
- login funcionando
- cadastro funcionando
- criação de produtos
- visualização de produtos
- carrinho funcionando
- compra funcionando

### 3. Organização do código (2 pts)

Avaliação da estrutura do projeto:
- separação em arquivos
- nomes de variáveis claros
- organização do código
- uso correto de componentes

### 4. Apresentação do projeto (2 pts)

Durante a apresentação o aluno deve ser capaz de:
- explicar como funciona o login
- explicar como os produtos são salvos
- explicar como o carrinho funciona
- mostrar onde o AsyncStorage está sendo utilizado

## Tempo de entrega e pontuação

### O projeto possui prazo escalonado de entrega.

| Data          | Pontuação máxima |
|---------------|------------------|
| 05/03 a 12/03 | até 2,0 pontos   |
| 13/03 a 16/03 | até 1,5 pontos   |
| 17/03 a 18/03 | até 1,0 ponto    |

A pontuação de prazo será **somada à nota da apresentação**.

## Instruções de entrega

- Dê estrela no repositório atual
- Acesse seu projeto no Snack Expo
- Clique no botão Download no canto superior direito
- Extraia todos os arquivos do projeto
- Crie um repositório no GitHub com o nome:
`projeto 02 sistema de loja mobile`
- Envie todos os arquivos para o repositório
- Adicione no campo Website do repositório o link do seu projeto no Snack Expo

## Diagrama do Fluxo de Telas

```mermaid
graph TD

subgraph Autenticação
A[Tela de Login]
B[Cadastro de Cliente]
end

subgraph Área do Administrador
C[Painel do Administrador]
D[Criar Produto]
E[Gerenciar Produtos]
end

subgraph Área do Cliente
F[Lista de Produtos]
G[Adicionar ao Carrinho]
H[Carrinho]
I[Finalizar Compra]
end

A -->|Login Admin| C
A -->|Login Cliente| F
A -->|Cadastrar| B

B --> A

C --> D
D --> E
E --> C

C -->|Logout| A

F --> G
G --> H
F --> I

H --> I
I --> F

F -->|Logout| A
```

## Exemplos 
Utilize como exemplo o seu projeto 01 e o seguinte arquivo:
- [Exemplo 05 (useEffect, AsyncStorage e await)](https://snack.expo.dev/@samuel.ps/aula-exemplo-05)
