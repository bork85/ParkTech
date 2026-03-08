# 🚗 ParkTech - Sistema de Gestão de Estacionamento

<p align="center">
  Sistema completo para gerenciamento de estacionamentos com controle de entrada/saída de veículos, precificação dinâmica e gestão de usuários.
</p>

## ✨ Características

- 🚗 **Gestão de Veículos**: Cadastro, edição e controle de entrada/saída
- 💰 **Precificação Dinâmica**: Configuração flexível de valores e frações de tempo
- 👥 **Gestão de Usuários**: Sistema de autenticação com diferentes níveis de acesso
- 📊 **Dashboard**: Visualização em tempo real dos veículos no estacionamento
- 🔒 **Autenticação**: Sistema seguro com JWT e persistência de sessão
- 📱 **Responsivo**: Interface adaptativa para desktop e mobile
- 🎨 **UI Moderna**: Design clean com Tailwind CSS e componentes shadcn/ui

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Framework CSS
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Axios** - Cliente HTTP
- **React Router DOM** - Roteamento
- **Sonner** - Notificações toast
- **shadcn/ui** - Componentes UI

### Backend

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Tipagem estática
- **Prisma** - ORM
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **Bcrypt** - Hash de senhas
- **Zod** - Validação de dados

## 📁 Estrutura do Projeto

```bash
ParkTech/
├── backend/                 # API REST
│   ├── prisma/             # Schema e migrations do banco
│   ├── src/
│   │   ├── controllers/    # Controladores das rotas
│   │   ├── services/       # Lógica de negócio
│   │   ├── routes/         # Definição de rotas
│   │   ├── schemas/        # Validações Zod
│   │   ├── middlewares/    # Middlewares Express
│   │   └── utils/          # Funções utilitárias
│   └── Dockerfile
│
├── frontend/               # Interface React
│   ├── src/
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # Chamadas API
│   │   ├── schemas/        # Validações de formulários
│   │   ├── providers/      # Context providers
│   │   ├── routes/         # Configuração de rotas
│   │   └── utils/          # Funções auxiliares
│   └── Dockerfile
│
└── internal-docs/          # Documentação técnica
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- pnpm (recomendado)

### Para o Backend

```bash
cd backend

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# Executar migrations
pnpm prisma migrate dev

# Iniciar servidor de desenvolvimento
pnpm dev
```

O backend estará rodando em `http://localhost:3000`

### Para o Frontend

```bash
cd frontend

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com a URL da API

# Iniciar servidor de desenvolvimento
pnpm dev
```

O frontend estará rodando em `http://localhost:5173`

## 📋 Funcionalidades Principais

### 🚗 Gestão de Veículos

- Cadastro de veículos (placa, modelo, cor)
- Registro de entrada no estacionamento
- Cálculo automático de valores
- Registro de saída com cobrança
- Edição de dados do veículo

### 💰 Gestão de Preços

- Configuração de valor da primeira hora
- Configuração de valor de horas adicionais
- Frações de tempo permitidas (5, 10, 15, 30 minutos)
- Histórico de tabelas de preços
- Ativação/desativação de tabelas

### 👥 Gestão de Usuários

- Autenticação com email e senha
- Níveis de acesso (ADMIN, OPERATOR)
- Persistência de sessão
- Recuperação de senha

### 📊 Dashboard

- Visualização de veículos no estacionamento
- Status em tempo real
- Filtros e busca
- Skeleton loading states

## 🎨 Componentes UI

O projeto utiliza componentes do shadcn/ui customizados:

- Button
- Dialog
- Input
- Select
- Table
- Skeleton
- Toast (Sonner)
- Label

## 🔐 Autenticação

O sistema utiliza JWT para autenticação:

- Token armazenado no localStorage
- Refresh automático de sessão
- Proteção de rotas privadas
- Logout com limpeza de sessão

## 📱 Páginas

- `/login` - Autenticação de usuários
- `/register` - Cadastro de novos usuários
- `/remind` - Recuperação de senha
- `/vehicles` - Gestão de veículos
- `/prices` - Gestão de precificação
- `/settings` - Configurações gerais

## 🐳 Docker

O projeto inclui Dockerfiles para backend e frontend:

```bash
# Backend
docker build -t parktech-backend ./backend
docker run -p 3000:3000 parktech-backend

# Frontend
docker build -t parktech-frontend ./frontend
docker run -p 5173:5173 parktech-frontend
```

## 📝 Variáveis de Ambiente

### Backend (.env)

```env
DATABASE_URL="postgresql://user:password@localhost:5432/parktech"
JWT_SECRET="your-secret-key"
PORT=3000
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:3000
```

## 🧪 Scripts Disponíveis

### No Backend

- `pnpm dev` - Servidor de desenvolvimento
- `pnpm build` - Build para produção
- `pnpm start` - Iniciar produção

### No Frontend

- `pnpm dev` - Servidor de desenvolvimento
- `pnpm build` - Build para produção
- `pnpm preview` - Preview do build
- `pnpm lint` - Executar linter

## 📄 Licença

© 2025 - ParkTech - Todos os direitos reservados

## ✉️ Contato

**Desenvolvedor**: Daniel Bork  
**E-mail**: me chame em mailto:daniel.bork@yahoo.com.br

---

**Versão**: 1.0.0  
**Data**: Janeiro 2025  
**Idioma**: Português (Brasil)

Feito com ❤️ para facilitar a gestão de estacionamentos
