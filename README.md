# Tela de Login - React Native com Expo

## 📱 Sobre o Projeto

Este é um aplicativo de estudo desenvolvido para a faculdade, implementando uma tela de login simples usando React Native com TypeScript e Expo. O projeto simula um sistema de autenticação para a **Alientec** - uma empresa fictícia de assistência técnica criada para fins educacionais.

## Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Superset do JavaScript para tipagem estática
- **React Navigation** - Navegação entre telas

## Funcionalidades

- Tela de login com campos para usuário e senha
- Validação de credenciais
- Campo de senha com texto oculto
- Mensagens de alerta para login bem-sucedido ou falho
- Interface responsiva e intuitiva
- Logo personalizada da Alientec

## Credenciais de Teste

Para testar o aplicativo, utilize as seguintes credenciais:

- **Usuário**: `Marco`
- **Senha**: `2025`

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente (`npm install -g expo-cli`)
- App Expo Go no celular ou emulador configurado

### Passos para execução

1. **Clone o repositório**

```bash
git clone https://github.com/MarcoEngenhariaIoT/tela-Login-JSX.git
cd tela-Login-JSX
```

2. **Instale as dependências**

```bash
npm install
```

3. **Execute o projeto**

```bash
npm start
```

4. **Escaneie o QR Code** com o app Expo Go ou execute em um emulador

## Estrutura do Projeto

```
tela-Login-JSX/
├── App.tsx                 # Componente principal
├── app.json               # Configurações do Expo
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração do TypeScript
├── assets/
│   └── alientecLogo.png   # Logo da empresa fictícia
└── README.md             # Este arquivo
```

## Características da Interface

- **Logo**: Dimensões 200x200 pixels
- **Cores**:
  - Título em vermelho
  - Copyright em azul
  - Fundo branco
- **Tipografia**:
  - Título: 24px, negrito
  - Textos: 16px
  - Copyright: 12px

## Personalização

As credenciais de login podem ser alteradas no arquivo `App.tsx` nas constantes:

```typescript
const usuario = "Marco";
const senha = "2025";
```

## Notas de Desenvolvimento

- Projeto desenvolvido para fins educacionais
- Foco no aprendizado de componentes básicos do React Native
- Implementação de estados com React Hooks
- Tratamento de eventos e validações simples

## Autor

**Eng. Marco Aurélio Machado**  
_Estudante de Engenharia de software - Projeto acadêmico_

## Licença

Este projeto é para fins educacionais e de estudo, pode ser copiado e alterado livremente desde que seja refernciada minha autoria.
