# 🚀 Guia de Deploy GitHub Pages - HaliPixel

## ✅ Configuração Completa
Todas as configurações necessárias já foram feitas:
- ✅ Pacote `gh-pages` instalado
- ✅ Scripts de deploy configurados
- ✅ Vite configurado para GitHub Pages
- ✅ GitHub Actions workflow criado
- ✅ Build testado e funcionando

## 📋 Próximos Passos

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Nome do repositório: `HaliPixel`
4. Deixe como **público** (necessário para GitHub Pages gratuito)
5. **NÃO** inicialize com README (já temos um)
6. Clique em **"Create repository"**

### 2. Conectar Projeto Local ao GitHub

No terminal, execute estes comandos na pasta do projeto:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Primeiro commit
git commit -m "🚀 Primeiro deploy do HaliPixel"

# Conectar ao repositório remoto (substitua [SEU-USUARIO])
git remote add origin https://github.com/[SEU-USUARIO]/HaliPixel.git

# Enviar para o GitHub
git push -u origin main
```

### 3. Configurar GitHub Pages

1. No seu repositório GitHub, vá em **"Settings"**
2. No menu lateral, clique em **"Pages"**
3. Em **"Source"**, selecione **"GitHub Actions"**
4. Pronto! O deploy automático está ativado

### 4. Deploy Automático

- ✨ Sempre que você fizer `git push`, o site será atualizado automaticamente
- 🕐 O deploy demora 1-3 minutos
- 🌐 Seu site estará em: `https://[SEU-USUARIO].github.io/HaliPixel/`

## 🛠 Commands Úteis

```bash
# Para desenvolver localmente
npm run dev

# Para testar o build
npm run build

# Para visualizar o build
npm run preview

# Deploy manual (se necessário)
npm run deploy
```

## 🚨 Resolução de Problemas

### GitHub Actions falha
- Verifique se o repositório é público
- Verifique se GitHub Actions está habilitado

### Site não carrega CSS/JS
- Verifique se o nome do repositório está correto no `vite.config.ts`
- Deve ser: `base: '/HaliPixel/'`

### 404 na página
- Verifique se GitHub Pages está configurado como "GitHub Actions"
- Aguarde alguns minutos após o deploy

## 📞 Precisa de Ajuda?

Se tiver dúvidas, verifique:
1. **Actions** tab no GitHub para ver o status do deploy
2. **Settings → Pages** para confirmar a configuração
3. Console do navegador para erros específicos

---

✅ **Tudo configurado!** Agora é só seguir os passos e seu site estará online!

## 📞 Contato HaliPixel
- **Instagram**: [@halipixel](https://instagram.com/halipixel)
- **Email**: halipixel@hotmail.com
- **Telefone**: +55 (73) 99153-8093
- **Localização**: Jequié - BA
