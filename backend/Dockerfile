FROM node:20-alpine AS builder

# Instalar pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copiar lock file e package.json
COPY backend/pnpm-lock.yaml ./
COPY backend/package.json ./

# Instalar dependências
RUN pnpm config set enable-pre-post-scripts true
RUN pnpm install --frozen-lockfile --ignore-scripts=false

# Copiar código fonte e prisma
COPY backend/prisma ./prisma/
COPY backend/src ./src/
COPY backend/tsconfig.json ./

# Gerar cliente Prisma e fazer build
RUN pnpm exec prisma generate
RUN pnpm run build

# Stage de produção
FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

# Copiar lock file e package.json
COPY backend/pnpm-lock.yaml ./
COPY backend/package.json ./

# Instalar apenas dependências de produção
RUN pnpm config set enable-pre-post-scripts true
RUN pnpm install --frozen-lockfile --production --ignore-scripts=false

# Copiar arquivos gerados do builder
COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma/

EXPOSE 3333

CMD ["node", "dist/server.js"]
