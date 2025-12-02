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

### Learn 2 - React Query (TanStack Query)

**Rota:** `/learn2`

**Vídeo:** [React Query / TanStack Query - Complete Tutorial]  
**Canal:** [Cosden Solutions]  
**Link:** [https://www.youtube.com/watch?v=8K1N3fE-cDs](https://www.youtube.com/watch?v=8K1N3fE-cDs)

#### O que foi implementado:

- ✅ Configuração do `QueryClient` e `QueryClientProvider`
- ✅ `useQuery` para buscar dados (GET)
  - Gerenciamento automático de cache
  - Estados de loading
  - Query keys para identificação única
- ✅ `useMutation` para modificar dados (POST/PUT/DELETE)
  - Invalidação automática de cache após mutações
  - Callback `onSuccess`
- ✅ Busca com debounce para otimizar requisições
- ✅ Mock API com funções assíncronas
- ✅ Sistema de TODO list com:
  - Listagem de todos
  - Adição de novos todos
  - Busca/filtro em tempo real
  - Checkbox de completado (apenas local)

**Principais conceitos:**
- `QueryClient` - Gerencia cache e configurações globais
- `useQuery()` - Hook para buscar dados
- `useMutation()` - Hook para modificar dados
- `queryKey` - Identificador único para cache
- `queryFn` - Função que busca os dados
- `invalidateQueries()` - Força re-fetch de queries específicas
- `staleTime` - Tempo que dados são considerados "frescos"
- `gcTime` - Tempo que dados inativos ficam no cache (antes `cacheTime`)
- Debounce pattern com `useEffect` e `setTimeout`

**Arquivos criados:**
- `src/Demo.tsx` - Componente principal com queries e mutations
- `src/learn2/page.tsx` - Wrapper com QueryClientProvider
- `src/api/intex.ts` - Mock API com fetchTodos e addTodo
- `src/components/TodoCard.tsx` - Componente de item individual
- `src/entities/Todo.ts` - Interface TypeScript do Todo

---

### Learn 3 - Formulário Avançado com Zod + React Hook Form

**Rota:** `/learn3`

**Vídeo:** [Zod Validation in React (Complete Tutorial)]  
**Canal:** [Cosden Solutions]  
**Link:** [https://www.youtube.com/watch?v=U9PYyMhDc_k](https://www.youtube.com/watch?v=U9PYyMhDc_k)

#### O que foi implementado:

- ✅ Schema complexo do Zod com múltiplos tipos de dados:
  - String com validação mínima
  - Email com validação de formato
  - URL opcional
  - Number com validação de valor mínimo
  - Array de objetos dinâmico
  - Objetos aninhados
  - Boolean (checkbox)
- ✅ `useFieldArray` para gerenciar arrays dinâmicos
  - Adicionar novos itens ao array
  - Remover itens do array
  - Validação individual de cada item
- ✅ Conversão automática de tipos com `valueAsNumber`
- ✅ Validações customizadas do Zod:
  - `.min()` para valores mínimos
  - `.optional()` para campos opcionais
  - `.nullable()` para valores que podem ser null
  - `.or(z.literal(""))` para aceitar string vazia
- ✅ Integração completa Zod + React Hook Form via `zodResolver`
- ✅ Tratamento de erros em arrays aninhados
- ✅ Estilização com Tailwind CSS

**Principais conceitos:**
- `z.infer<>` - Extrai tipo TypeScript do schema Zod
- `useFieldArray()` - Gerencia arrays dinâmicos no formulário
- `control` - Objeto de controle do useForm necessário para useFieldArray
- `fields`, `append`, `remove` - Manipulação de itens do array
- `valueAsNumber` - Converte input string para number automaticamente
- Arrays aninhados no React Hook Form com `register(\`array.\${index}.field\`)`
- Validação de objetos complexos e aninhados com Zod

**Casos de uso demonstrados:**
- Formulário de cadastro de usuário completo
- Lista dinâmica de amigos (adicionar/remover)
- Campos opcionais vs obrigatórios
- Validação de idade mínima
- Checkbox para configurações

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
