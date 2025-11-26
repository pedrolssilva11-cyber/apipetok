// ==================== APIPEMAPET SERVER ====================
// Servidor Node.js com Express para hospedar a landing page

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

// Inicializar o app Express
const app = express();

// Configuração da porta
const PORT = process.env.PORT || 3000;

// ==================== MIDDLEWARES ====================

// Helmet para segurança (headers HTTP seguros)
app.use(helmet({
    contentSecurityPolicy: false, // Desabilitado para permitir CDNs do Bootstrap
    crossOriginEmbedderPolicy: false
}));

// Compressão GZIP para melhor performance
app.use(compression());

// Parse de JSON e URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname), {
    maxAge: '1d', // Cache de 1 dia para arquivos estáticos
    etag: true
}));

// Logging de requisições
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// ==================== ROTAS ====================

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o formulário de contato (POST)
app.post('/contato', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    
    // Log dos dados recebidos
    console.log('=== NOVA MENSAGEM DE CONTATO ===');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Assunto:', subject);
    console.log('Mensagem:', message);
    console.log('================================');
    
    // Aqui você pode implementar:
    // 1. Envio de email usando nodemailer
    // 2. Salvar no banco de dados
    // 3. Integração com CRM
    // 4. Envio para webhook
    
    res.json({ 
        success: true, 
        message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.' 
    });
});

// Rota de health check (verificação se o servidor está funcionando)
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// Rota 404 - Página não encontrada
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Página não encontrada</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body class="bg-light">
            <div class="container">
                <div class="row min-vh-100 align-items-center justify-content-center">
                    <div class="col-md-6 text-center">
                        <h1 class="display-1 fw-bold text-primary">404</h1>
                        <h2 class="mb-4">Página não encontrada</h2>
                        <p class="lead mb-4">A página que você procura não existe.</p>
                        <a href="/" class="btn btn-primary btn-lg">Voltar para Home</a>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Tratamento de erros
app.use((err, req, res, next) => {
    console.error('ERRO:', err.stack);
    res.status(500).json({ 
        error: 'Algo deu errado no servidor!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// ==================== INICIAR SERVIDOR ====================

app.listen(PORT, () => {
    console.log('\n=================================');
    console.log('🐾 APIPEMAPET SERVER INICIADO 🐾');
    console.log('=================================');
    console.log(`🌐 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📅 Data/Hora: ${new Date().toLocaleString('pt-BR')}`);
    console.log(`⚙️  Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log('=================================\n');
    console.log('Pressione Ctrl+C para parar o servidor\n');
});

// Tratamento de encerramento gracioso
process.on('SIGTERM', () => {
    console.log('\n🛑 Sinal SIGTERM recebido. Encerrando servidor...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n\n🛑 Servidor encerrado pelo usuário.');
    process.exit(0);
});
