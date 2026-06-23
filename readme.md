# 🎙️ Podcast Manager API

API REST de gerenciamento de podcasts feita com Node.js e TypeScript, sem usar nenhum framework externo. Projeto desenvolvido durante a formação da DIO.

---

## 💡 Sobre o projeto

A API permite listar episodios de podcasts e filtrar por categoria, tudo usando apenas os modulos nativos do Node.js com TypeScript.

---

## 🚀 Endpoints disponíveis

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/episodes` | Lista todos os episodios |
| GET | `/api/episodes?c=categoria` | Filtra episodios por categoria |

### Exemplos de categorias disponíveis
- `humor`
- `esporte`
- `saude`
- `tecnologia`
- `games`
- `ia`

---

## ▶️ Como rodar

Precisa ter o **Node.js** instalado.

```bash
# clone o repositorio
git clone https://github.com/seu-usuario/podcast-manager

# entra na pasta
cd podcast-manager

# instala as dependencias
npm install

# roda o servidor
npm start
```

O servidor sobe em `http://localhost:3333`

---

## 🧪 Testando a API

Abra o navegador ou use o Thunder Client / Insomnia:

```
# todos os episodios
GET http://localhost:3333/api/episodes

# filtrar por categoria
GET http://localhost:3333/api/episodes?c=tecnologia
GET http://localhost:3333/api/episodes?c=saude
```

---

## 📁 Estrutura do projeto

```
podcast-manager/
│
├── src/
│   ├── controllers/
│   │   └── podcast-controller.ts
│   ├── models/
│   │   └── podcast-model.ts
│   ├── repositories/
│   │   ├── podcast-repository.ts
│   │   └── podcasts.json
│   ├── services/
│   │   └── podcast-service.ts
│   └── server.ts
│
├── package.json
├── tsconfig.json
└── readme.md
```

---

## 🛠️ Tecnologias usadas

- Node.js (modulo http nativo)
- TypeScript
- ts-node

---

## 🔗 Links úteis

- [Repositorio original - DIO](https://github.com/felipeAguiarCode/node-ts-webapi-without-frameworks-podcast-menager)
- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [DIO](https://dio.me)

---

Feito com 💙 durante a formação Node.js da DIO
