# React Form + Query + Zod - Aprendizado

Este repositório foi criado para estudar e praticar **React Hook Form**, **React Query** e **Zod** através de exemplos práticos.

## 📚 Estrutura do Projeto

O projeto está organizado em rotas (`/learn1`, `/learn2`, etc.), onde cada rota corresponde a um vídeo tutorial diferente. Cada seção explora conceitos específicos dessas bibliotecas de forma incremental.

## 🛠️ Tecnologias Utilizadas

- **React** + **TypeScript**
- **Vite** (build tool)
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **React Query** - Gerenciamento de estado assíncrono
- **React Router DOM** - Navegação entre rotas
- **Tailwind CSS v4** - Estilização

## 🚀 Como Executar

```bash
cd meu-projeto
npm install
npm run dev
```

Acesse `http://localhost:5173` para ver o projeto rodando.

## 📖 Conteúdo de Aprendizado

### Learn 1 - Fundamentos do React Hook Form

**Rota:** `/learn1`

**Vídeo:** [React Hook Form - Complete Tutorial (with Zod)]  
**Canal:** [Cosden Solutions]  
**Link:** [https://www.youtube.com/watch?v=cc_xmawJ8Kg](https://www.youtube.com/watch?v=cc_xmawJ8Kg)

#### O que foi implementado:

- ✅ Configuração básica do `useForm`
- ✅ Registro de campos com `register`
- ✅ Validações inline:
  - Campo obrigatório (`required`)
  - Validação de email com regex (pattern)
  - Validação de tamanho mínimo (`minLength`)
- ✅ Exibição de mensagens de erro customizadas
- ✅ Estado de submissão (`isSubmitting`)
- ✅ Tratamento de erros assíncronos com `setError`
- ✅ Simulação de delay e erro de "email já cadastrado"
- ✅ Valores padrão com `defaultValues`
- ✅ Desabilitação do botão durante submissão

**Principais conceitos:**
- `useForm()` hook
- `register()` para conectar inputs
- `handleSubmit()` para processar o formulário
- `formState.errors` para acessar erros de validação
- `setError()` para erros customizados (como erros de API)

---

### Learn 2 - [A definir]

**Rota:** `/learn2`

**Vídeo:** [Nome do Vídeo]  
**Canal:** [Nome do Canal]  
**Link:** [URL do vídeo]

_Conteúdo a ser adicionado..._

---

### Learn 3 - [A definir]

**Rota:** `/learn3`

**Vídeo:** [Nome do Vídeo]  
**Canal:** [Nome do Canal]  
**Link:** [URL do vídeo]

_Conteúdo a ser adicionado..._

---

## 📝 Notas

- Cada rota é independente e focada em conceitos específicos
- O código contém comentários explicativos em português
- Exemplos práticos com casos de uso reais (validação de email, senhas, etc.)

## 🔗 Links Úteis

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/)
