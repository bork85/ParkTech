FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY .npmrc ./

RUN pnpm install --frozen-lockfile

COPY prisma ./prisma/
COPY src ./src/
COPY tsconfig.json ./
COPY prisma.config.js ./

ENV DATABASE_URL=postgresql://placeholder:placeholder@localhost:5432/placeholder
RUN pnpm exec prisma generate
RUN pnpm run build

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY .npmrc ./
COPY prisma.config.js ./
COPY prisma ./prisma/

RUN pnpm install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist/

EXPOSE 3333

CMD ["sh", "-c", "pnpm exec prisma migrate deploy && node dist/server.js"]
