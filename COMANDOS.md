# 🖥️ Guia de Comandos - ApipemaPet

## 📦 Instalação

### Instalar todas as dependências:
```bash
npm install
```

### Instalar dependências de desenvolvimento:
```bash
npm install --save-dev
```

---

## 🚀 Execução

### Iniciar servidor (produção):
```bash
npm start
```

### Iniciar com auto-reload (desenvolvimento):
```bash
npm run dev
```

### Usar script de inicialização (Windows):
```bash
start.bat
```

---

## 🧪 Testes

### Testar se o servidor está funcionando:
```bash
# Em outro terminal
curl http://localhost:3000/health
```

Ou abra no navegador: `http://localhost:3000/health`

---

## 📁 Estrutura de Arquivos

```
ApipemaPet/
│
├── app.js                 # Servidor Node.js/Express
├── package.json           # Dependências e scripts
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── vercel.json            # Configuração Vercel
├── Procfile               # Configuração Heroku
├── start.bat              # Script de inicialização (Windows)
│
├── index.html             # Página principal
│
├── css/
│   └── style.css          # Estilos customizados
│
├── js/
│   └── script.js          # Scripts JavaScript
│
├── assets/
│   └── images/            # Imagens do site
│       └── LEIA-ME.md     # Guia de imagens
│
├── README.md              # Documentação principal
├── DEPLOY.md              # Guia de deploy
└── COMANDOS.md            # Este arquivo
```

---

## 🔧 Comandos Úteis

### Verificar versão do Node.js:
```bash
node --version
```

### Verificar versão do npm:
```bash
npm --version
```

### Limpar cache do npm:
```bash
npm cache clean --force
```

### Reinstalar dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Atualizar dependências:
```bash
npm update
```

### Verificar vulnerabilidades:
```bash
npm audit
```

### Corrigir vulnerabilidades:
```bash
npm audit fix
```

---

## 🌐 URLs do Servidor Local

Quando o servidor estiver rodando:

- **Home:** http://localhost:3000
- **Health Check:** http://localhost:3000/health
- **Contato (POST):** http://localhost:3000/contato

---

## 🐛 Debug

### Modo verbose:
```bash
npm start --verbose
```

### Ver logs em tempo real:
```bash
npm start | tee logs.txt
```

---

## 🔐 Variáveis de Ambiente

### Criar arquivo .env:
```bash
cp .env.example .env
```

### Editar variáveis:
```bash
notepad .env  # Windows
nano .env     # Linux/Mac
```

---

## 📦 Build e Deploy

### Build para produção:
```bash
npm run build  # Se configurado
```

### Deploy na Vercel:
```bash
vercel
```

### Deploy no Heroku:
```bash
git push heroku main
```

---

## 🧹 Limpeza

### Remover node_modules:
```bash
rm -rf node_modules  # Linux/Mac
rmdir /s node_modules  # Windows
```

### Limpar todos os arquivos temporários:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
```

---

## 📊 Monitoramento

### Ver processos Node rodando:
```bash
# Windows
tasklist | findstr node

# Linux/Mac
ps aux | grep node
```

### Matar processo na porta 3000:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número_do_pid] /F

# Linux/Mac
lsof -ti:3000 | xargs kill
```

---

## 🎯 Atalhos Úteis

Durante a execução do servidor:

- **Ctrl + C** - Parar o servidor
- **Ctrl + Z** - Suspender (não recomendado)

---

## 📚 Documentação Adicional

- [Node.js Docs](https://nodejs.org/docs/)
- [Express.js Docs](https://expressjs.com/)
- [npm Docs](https://docs.npmjs.com/)

---

**✨ Dica:** Adicione este arquivo aos favoritos para referência rápida!
