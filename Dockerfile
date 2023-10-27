FROM oven/bun:1.0.7

WORKDIR /app

COPY . .
RUN bun install && bun prepare-db

EXPOSE 3000
ENTRYPOINT ["bun", "index.ts"]
