FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm config set enable-pre-post-scripts true
RUN pnpm install --frozen-lockfile --ignore-scripts=false

COPY prisma ./prisma/
COPY src ./src/
COPY tsconfig.json ./
COPY prisma.config.ts ./

RUN pnpm exec prisma generate
RUN pnpm run build

FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm config set enable-pre-post-scripts true
RUN pnpm install --frozen-lockfile --production --ignore-scripts=false

COPY --from=builder /app/dist ./dist/
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma/
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma/

RUN pnpm exec prisma generate

EXPOSE 3333

CMD ["node", "dist/server.js"]
