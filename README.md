# Store
This is a project made with my custom framework, [Stric](https://github.com/bunsvr).

For more info about the test, see [Notion](https://mindxschool.notion.site/X-Career-Level-3-Test-239ac6279efd43a9a8ee3072d2815a7e).

## Requirement
You need Bun to run the project.

To install Bun, use:
```bash
# MacOS, Linux, WSL2
curl -fsSL https://bun.sh/install | bash
```

If you are using Windows you can set up and run a Docker container or use WSL2.

## Start
To install dependencies:
```bash
bun install
```

To run:
```bash
bun run index.ts
```

Server will listen at `http://localhost:8080` by default. 

You can change that by modifying the `PORT` in [`.env`](./.env).

To run the test suite:
```
bun test
```

This project was created using `bun init` in Bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# Q&A

## Why Bun?
It makes things simpler and faster. SQLite built-in, Bcrypt and Argon2 built-in, ...

## Why not MongoDB?
There is no real reason you want to use MongoDB in production.

