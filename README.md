<h1 align="center">Boas-vindas ao repositório do Trybers and Dragons!</h1>

<br/>

## Objetivo

<strong>Trybers and Dragons</strong> é um projeto baseado na estrutura de jogos de interpretação de papéis (RPG). Foi implementado os princípios da arquitetura SOLID e de programação orientada a objetos (POO).

## O que foi desenvolvido?

<strong>Trybe and Dragons</strong> é uma aplicação de jogo de RPG que permite criar personagens com raças e classes diferentes, cada um com suas próprias características, aumentar seu nível e melhorar seus atributos para ficar mais forte. É possível também criar dragões e monstros para simular batalhas entre personagens e contra monstros.

O ambiente de desenvolvimento foi preparado com o Node.js usando o Docker, e o código foi escrito em TypeScript, uma linguagem com tipagem estática e forte.

## Linguagens e ferramentas:
- Docker
- Node.js
- Typescript

## Instalação e execução com Docker:

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/trybers-and-dragons.git
```

### 2 - Entre no repositório:
```
cd trybers-and-dragons
```

### 3 - Inicie o container:
```
docker compose up -d
```

### 4 - Entre no container do node:
```
docker exec -it trybers_and_dragons sh
```

### 5 - Instale as dependências:
```
npm install
```

### 6 - Inicie a aplicação:
```
npm start
```

<strong>O container vai executar o node na porta 3000.</strong>
<br/>
➜ http://localhost:3000/