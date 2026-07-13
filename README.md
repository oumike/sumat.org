# Sumat Projects Website

Simple React website that links to:

- https://www.indiebooksofdetroit.com
- https://camillia.sumat.org
- https://plumeria.sumat.org

## Local development

```bash
npm install
npm run dev
```

## Docker

Build and run with Compose:

```bash
docker compose up -d --build
```

By default, the container serves on host port `10180`.
You can change it with:

```bash
HOST_PORT=9090 docker compose up -d --build
```

## Update script

Use the included script to rebuild and refresh the container:

```bash
./update-container.sh
```

Optional flags:

- `--pull`: run `git pull --ff-only` before rebuild
- `--no-prune`: skip dangling image prune

Examples:

```bash
./update-container.sh --pull
./update-container.sh --no-prune
```
