# Projeto 01 - App Tematizado com Supabase (Persistência de Dados)

Projeto voltado para a integração entre **React Native** e o banco de dados **Supabase**, com foco em **autenticação**, **persistência de dados** e **listagem dinâmica**.

Neste projeto, você irá criar um aplicativo funcional com um **tema específico** (ex: Gerenciador de Medicamentos, Fila de Espera, Controle de Coleções). Não será aceito um sistema genérico de "inserção e exibição"; a interface e as tabelas devem seguir o tema escolhido.

---

## Estrutura mínima

O projeto deve conter pelo menos as seguintes telas:

- **Tela 1 – Login/Cadastro:** Autenticação via Supabase (sem necessidade de confirmação de e-mail).
- **Tela 2 – Dashboard (Tabs ou Drawer):**
  - **Aba 1 – Home:** Listagem dos dados cadastrados no banco.
  - **Aba 2 – Perfil:** Exibição do nome do usuário logado e botão de sair.
- **Tela 3 – Cadastro de Dados:** Formulário para inserção de novas informações no Supabase.

---

## Observações

- O login e cadastro devem ser realizados via **Supabase Auth**.
- Os dados exibidos na lista devem ser consumidos via **Supabase Database**.
- Deve existir **separação de arquivos** (serviços do supabase, telas e componentes).
- As telas devem possuir **personalização visual coerente com o tema**.
- Quaisquer criações feitas com **código base de IA receberão decremento na nota**.

---

## Funcionalidades obrigatórias (Pontuação Padrão - N1)

### Autenticação
- Criação de conta e login.
- Persistência simples (o usuário deve ver seu nome no perfil após logar).

### Banco de Dados
- Criar uma tabela no Supabase relacionada ao tema.
- Implementar a função de **Insert** (cadastrar dado).
- Implementar a função de **Select** (exibir dados usando `.map`).

### Navegação
- Utilizar **Stack Navigator** para o fluxo de login.
- Utilizar **Tab** ou **Drawer** para a aplicação logada.

---

## Desafio (Pontuação Adicional - N2)

### Privacidade e Filtros
- **Vínculo por Usuário:** O sistema deve filtrar os dados para que o usuário veja apenas o que ele cadastrou.
- **Opção Público/Privado:** Adicionar um campo "Público" (boolean) ao cadastrar.
  - Se for **Privado**: Apenas o dono do dado o visualiza.
  - Se for **Público**: Todos os usuários do app podem visualizar esse item na lista geral.

---

## Sugestão de temas

- **App de Farmácia:** Cadastro de remédios (Privado: meus remédios | Público: farmácias próximas).
- **Lista de Espera:** (Privado: minha posição na fila | Público: status geral da fila).
- **Catálogo de Colecionador:** (Privado: valor de compra | Público: fotos da coleção).

---

## Critérios de avaliação

### 1. Integração Supabase (3 pts)
- Autenticação funcionando.
- Insert e Select via banco de dados.

### 2. Fluxo e Navegação (2 pts)
- Transição correta entre Login e App.
- Uso de Tabs ou Drawer.

### 3. Organização e Lógica (2 pts)
- Código limpo e separado por arquivos.
- Uso correto do `.map` para renderizar a lista.

### 4. Design e Tema (3 pts)
- Criatividade na escolha do tema.
- Interface organizada e amigável.

---

## Janela de entrega

- **Desenvolvimento:** Até terça-feira (19/05).
- **Método de correção:** Estrela no repositório = Projeto Visualizado. As notas serão atribuídas e informadas aos alunos em uma planilha postada posteriormente no README deste repositório.

---

## Instruções de entrega

- Crie um repositório com o nome: `projeto-01-supabase-react-native`.
- Adicione os arquivos do seu projeto.
- O README do seu repositório deve conter o tema escolhido e se o desafio N2 foi implementado.

---

## Configuração do Ambiente

No terminal, crie o seu projeto:
```bash
npx create-expo-app --template
```
Escolha a template "**Blank**" e insira o nome do projeto OU digite um `.` para criar o projeto na raiz da pasta em que você abriu o vscode.
_Caso tenha criado o projeto com uma nova pasta, utilize `cd nome_projeto` para navegar até a pasta do projeto._
Instale as dependências do **android web** para rodar seu projeto local sem emuladores ou dispositivos externos: 
```bash
npx expo install react-dom react-native-web
```
Instale também as seguintes dependências :
React Navigation
```bash
npx expo install @react-navigation/native react-native-screens react-native-safe-area-context
```
```bash
npm install @react-navigation/native-stack @react-navigation/drawer @react-navigation/bottom-tabs
```
Supabase
```bash
npx expo install @supabase/supabase-js
```
Rode seu projeto na web com `npm run web` ou em um android ou emulador com `npm run android`.

---

## Projeto de Exemplo
Você pode utilizar o projeto a seguir como base.
> [Banquinho](https://github.com/sudosamm/banquinho-3ds)
