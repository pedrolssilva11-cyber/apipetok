# ApipemaPet - Landing Page

Landing page responsiva desenvolvida com Bootstrap 5 para o pet shop ApipemaPet.

## 📁 Estrutura do Projeto

```
ApipemaPet/
│
├── index.html           # Página principal
├── css/
│   └── style.css        # Estilos customizados
├── js/
│   └── script.js        # Scripts JavaScript
└── assets/
    └── images/          # Pasta para suas imagens
```

## 🖼️ Imagens Necessárias

Para que a landing page funcione perfeitamente, você precisa adicionar as seguintes imagens na pasta `assets/images/`:

### 1. Imagem de Fundo do Hero
- **Nome:** `hero-background.jpg`
- **Dimensões recomendadas:** 1920x1080px
- **Descrição:** Imagem de fundo para a seção principal (pode ser uma imagem de pets felizes, ambiente do pet shop, etc.)

### 2. Imagem da Seção "Quem Somos"
- **Nome:** `about-us.jpg`
- **Dimensões recomendadas:** 800x600px
- **Descrição:** Foto do estabelecimento, equipe ou ambiente interno do pet shop

### 3. Imagens da Galeria (6 imagens)
- **Nome:** `gallery-1.jpg` até `gallery-6.jpg`
- **Dimensões recomendadas:** 600x400px cada
- **Descrição:** Fotos de:
  - Pets atendidos
  - Serviços de banho e tosa
  - Produtos disponíveis
  - Ambiente do pet shop
  - Equipe trabalhando
  - Clientes satisfeitos com seus pets

## 🎨 Recursos Utilizados

- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Bootstrap Icons** - Ícones
- **Google Fonts** - Tipografia (Segoe UI como padrão)

## ✨ Funcionalidades

### Seções
- ✅ **Hero Section** - Seção de destaque com call-to-action
- ✅ **Quem Somos** - Apresentação do pet shop com diferenciais
- ✅ **Galeria** - Grade de fotos com efeito hover e lightbox
- ✅ **Localização** - Mapa do Google Maps e informações de contato
- ✅ **Contato** - Formulário de contato completo

### Recursos Interativos
- Menu de navegação fixo com efeito scroll
- Scroll suave entre seções
- Botão "Voltar ao Topo"
- Galeria com efeito lightbox ao clicar
- Links ativos destacados no menu conforme scroll
- Formulário de contato com validação
- Design totalmente responsivo

## 📱 Responsividade

A landing page é totalmente responsiva e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1920px+)

## 🔧 Personalizações Necessárias

Antes de publicar, você precisa atualizar os seguintes dados no arquivo `index.html`:

### 1. Informações de Contato
- Endereço completo (linhas 195-199 e 440-442)
- Telefones (linhas 207, 353, 362, 441)
- E-mail (linha 444)
- Horário de funcionamento (linhas 203-207)

### 2. Google Maps
- Substitua o `src` do iframe na linha 211 pelo link do seu endereço no Google Maps
- Para obter o código:
  1. Acesse [Google Maps](https://maps.google.com)
  2. Busque seu endereço
  3. Clique em "Compartilhar" > "Incorporar um mapa"
  4. Copie o código do iframe

### 3. Redes Sociais
- Adicione os links das suas redes sociais (linhas 432-435 e footer)

### 4. Formulário de Contato
- O formulário está configurado para validação básica
- Para enviar os dados, você precisará integrar com um backend (PHP, Node.js, etc.) ou usar serviços como:
  - [Formspree](https://formspree.io/)
  - [EmailJS](https://www.emailjs.com/)
  - [Web3Forms](https://web3forms.com/)

## 🚀 Como Usar

### Desenvolvimento Local (sem servidor):

1. **Adicione suas imagens** na pasta `assets/images/` conforme a lista acima
2. **Personalize as informações** de contato e endereço no `index.html`
3. **Atualize o iframe** do Google Maps com sua localização
4. **Abra o arquivo** `index.html` no navegador para visualizar

### Com Servidor Node.js:

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor:**
   ```bash
   npm start
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

4. **Para deploy em produção:**
   - Consulte o arquivo `DEPLOY.md` para instruções detalhadas

## 📝 Dicas de Otimização de Imagens

Para melhor performance da página:

- Use formatos modernos: **WebP** ou **JPEG otimizado**
- Comprima as imagens antes de usar (use ferramentas como TinyPNG ou ImageOptim)
- Dimensões recomendadas:
  - Hero: 1920x1080px
  - About: 800x600px
  - Gallery: 600x400px
- Mantenha o tamanho dos arquivos abaixo de 200KB cada

## 🎨 Cores do Tema

As cores principais podem ser alteradas no arquivo `css/style.css`:

```css
:root {
    --primary-color: #0d6efd;   /* Azul Bootstrap */
    --secondary-color: #6c757d;  /* Cinza */
    --dark-color: #212529;       /* Preto */
    --light-color: #f8f9fa;      /* Branco acinzentado */
}
```

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, sinta-se à vontade para modificar conforme suas necessidades.

---

**Desenvolvido com ❤️ usando Bootstrap 5**
