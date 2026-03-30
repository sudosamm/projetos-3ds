# Projeto 03 - Mini App com Navegação e Perfis

Projeto voltado para fixação dos conteúdos de **React Native** e **React Navigation**, com foco em **fluxo de telas**, **organização de componentes** e **uso de parâmetros (params)**.

Neste projeto você irá criar um **mini aplicativo com login e navegação por abas**, simulando a estrutura de aplicativos reais.

Escolha um **tema livre** (ex: app de jogos, músicas, estudos, etc) e mantenha todas as funcionalidades obrigatórias. Não será contabilizado uma aplicação simplificada que apenas possua as funcionalidades base solicitadas.

---

## Estrutura mínima

O projeto deve conter pelo menos as seguintes telas:

- Tela 1 – Login  
- Tela 2 – Aplicação principal com abas (Tabs ou Drawer)
  - Aba 1 – Home
  - Aba 2 – Perfil

---

## Observações

- O login deve ser validado com:
  - Usuário e senha fixos
- Após o login, o usuário deve ser direcionado para a aplicação principal (Tabs ou Drawer)
- O usuário deve conseguir fazer logout (sair da conta)
- Deve existir **separação de arquivos** (App.js, Login.js, Tabs.js, etc)
- As telas devem possuir **personalização visual criada pelo próprio aluno**
- O projeto deve utilizar **React Navigation**
- Quaisquer criações feitas com **código base de IA receberão decremento na nota**

---

## Funcionalidades obrigatórias

### Sistema de login
- Campo(s) de entrada (usuário/senha)
- Validação simples
- Navegação para a aplicação após login

---

### Navegação
- Utilizar **Stack Navigator**
- Utilizar **Tab Navigator** ou **Drawer Navigator**
- Estrutura correta:
```
Stack
├── Login
└── Tabs/Drawer
  ├── Home
  └── Perfil
```

---

### Tela Home
- Exibir mensagem de boas-vindas
- Exibir dado do usuário (nome)
- Exibir botão para acessar perfil

---

### Tela Perfil
- Exibir informações predefinidas do usuário (foto de perfil, data de aniversário, email)
- Botão de logout

---

### Fluxo do sistema
- Login → Tabs/Drawer → Home/Perfil  
- Logout → retorna para Login  

---

## Desafio (0,5 pts)

### Navegação avançada ✔
- Adicionar uma terceira aba (Configurações)

---

### Interface dinâmica ✔
- Mudar cor do header baseado no usuário

---

### Header inteligente ✔
- Mostrar **nome** do usuário no título da tela

---

### Extra (pontuação adicional)
- Criar lista de mensagens motivacionais e exibir uma aleatória ao usuário quando entrar

---

## Sugestão de temas

- App de aluno (Home = notas, Perfil = dados)
- App de jogos (Home = menu, Perfil = jogador)
- App de música (Home = playlists, Perfil = usuário)

---

## Critérios de avaliação

### 1. Navegação (1 pts)
- Stack funcionando
- Tabs/Drawer funcionando

### 2. Fluxo (2 pts)
- Login → App
- Logout → Login

### 3. Uso de dados (1 pts)
- Envio de parâmetros (params)
- Exibição correta dos dados

### 4. Organização (3 pts)
- Separação em arquivos
- Código organizado

### 5. Design (3 pts)
- Interface organizada
- Legibilidade
- Uso de cores

---

## Janela de entrega

- Até dia 05/04 para desenvolvimento
- Apresentações dia 06/04 (ou posterior caso seja dia de prova)

---

## Instruções de entrega para projetos no Expo

- Dê estrela no repositório atual
- Acesse seu projeto no Snack Expo
- Clique no botão Download no canto superior direito
- Extraia os arquivos
- Crie um repositório com o nome:
  `projeto 03 app com navegacao e perfis`
- Envie todos os arquivos
- Adicione o link do Snack Expo no campo **Website**

---

## Instruções para criar o projeto localmente:
No terminal execute os comandos:

```bash
npx create-expo-app --template
```
- Escolha a template "**Blank**" e insira o nome do projeto.
- `cd nome_projeto` para navegar até a pasta do projeto.
- Instale as dependências do **android web** para rodar seu projeto local sem emuladores ou dispositivos extras: 
```bash
npx expo install react-dom react-native-web
```
- Outras dependências:
```bash
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context
```
```bash
npm install @react-navigation/native-stack @react-navigation/drawer @react-navigation/bottom-tabs
```
- Rode seu projeto na web com `npm run web` ou em um android ou emulador com `npm run android`.

---

## Projeto de Exemplo
Você pode utilizar o projeto abaixo como base. Posteriormente terá um repositório próprio:
[Exemplo Navigation](https://github.com/sudosamm/projetos-3ds/tree/main/aulas/exemplo-navigation/)
