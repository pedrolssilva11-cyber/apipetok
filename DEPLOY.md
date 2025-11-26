# 🚀 Guia de Deploy - ApipemaPet

Este guia mostra como publicar a landing page do ApipemaPet em diferentes plataformas de hospedagem.

## 📋 Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm ou yarn
- Conta em uma plataforma de hospedagem (opcional)

## 🔧 Instalação Local

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar o Servidor em Desenvolvimento

```bash
npm start
```

Ou com auto-reload (nodemon):

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

---

## 🌐 Deploy em Plataformas Cloud

### 🟦 1. Vercel (Recomendado - Grátis)

**Mais fácil e rápido!**

#### Via CLI:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer deploy
vercel
```

#### Via GitHub:

1. Crie um repositório no GitHub
2. Faça push do código
3. Acesse [vercel.com](https://vercel.com)
4. Conecte seu repositório GitHub
5. Deploy automático!

**Configuração necessária:**
- Crie um arquivo `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "app.js"
    }
  ]
}
```

---

### 🟪 2. Heroku (Grátis com limitações)

```bash
# Instalar Heroku CLI
# Baixe em: https://devcenter.heroku.com/articles/heroku-cli

# Login no Heroku
heroku login

# Criar app
heroku create apipemapet

# Deploy
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

**Configuração necessária:**
- Crie um arquivo `Procfile`:

```
web: node app.js
```

---

### 🟩 3. Railway (Grátis - Simples)

1. Acesse [railway.app](https://railway.app)
2. Conecte com GitHub
3. Selecione o repositório
4. Deploy automático!

**Não precisa de configuração extra!**

---

### 🟧 4. Render (Grátis)

1. Acesse [render.com](https://render.com)
2. Crie um novo Web Service
3. Conecte com GitHub
4. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Deploy!

---

### ⚡ 5. Netlify (Apenas para sites estáticos)

**Não recomendado para este projeto** (usa servidor Node.js)

Para usar Netlify, você precisaria usar apenas os arquivos HTML/CSS/JS sem o app.js

---

## 🐳 Deploy com Docker

### Criar Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

### Criar .dockerignore:

```
node_modules
npm-debug.log
.env
.git
.gitignore
README.md
```

### Build e Run:

```bash
# Build
docker build -t apipemapet .

# Run
docker run -p 3000:3000 apipemapet
```

---

## 🔐 Variáveis de Ambiente

Antes de fazer deploy, configure as variáveis de ambiente:

### Localmente:

Copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações.

### Em Produção:

Configure as variáveis de ambiente na plataforma escolhida:

- **PORT** - Porta do servidor (geralmente definida automaticamente)
- **NODE_ENV** - `production`
- Outras variáveis específicas (email, API keys, etc.)

---

## 📊 Monitoramento

### Health Check:

Acesse: `https://seu-site.com/health`

Retorno esperado:
```json
{
  "status": "OK",
  "uptime": 12345.67,
  "timestamp": "2024-11-24T10:30:00.000Z"
}
```

---

## 🎯 Checklist de Deploy

Antes de publicar, verifique:

- [ ] Todas as imagens foram adicionadas
- [ ] Informações de contato atualizadas
- [ ] Google Maps configurado
- [ ] Links de redes sociais adicionados
- [ ] Variáveis de ambiente configuradas
- [ ] Dependências instaladas (`npm install`)
- [ ] Testado localmente
- [ ] .gitignore configurado
- [ ] README atualizado

---

## 🔧 Solução de Problemas

### Erro: "Cannot find module"
```bash
npm install
```

### Porta já em uso:
```bash
# Mude a porta no .env
PORT=3001
```

### Servidor não inicia:
```bash
# Verifique os logs
npm start
```

---

## 📱 Domínio Personalizado

### Após deploy, você pode:

1. **Comprar um domínio** (ex: GoDaddy, Registro.br, Namecheap)
2. **Configurar DNS** apontando para sua hospedagem
3. **SSL/HTTPS** - geralmente incluído grátis (Let's Encrypt)

### Exemplos de domínios:
- `apipemapet.com.br`
- `petshopapipema.com`
- `apipemapet.com`

---

## 💡 Dicas de Performance

1. **Comprimir imagens** antes do upload
2. **Habilitar cache** (já configurado no app.js)
3. **Usar CDN** para assets estáticos
4. **Monitorar uptime** com serviços como UptimeRobot
5. **Configurar domínio próprio** para melhor SEO

---

## 📞 Suporte

Para problemas de deploy:

- Vercel: https://vercel.com/docs
- Heroku: https://devcenter.heroku.com
- Railway: https://docs.railway.app
- Render: https://render.com/docs

---

**✅ Após seguir estes passos, seu site estará no ar!**
