# Sumat Projects Website

Simple React website that links to:

- https://www.indiebooksofdetroit.com
- https://camillia.sumat.org
- https://platy.sumat.org
- https://monster.sumat.org

## Local development

```bash
npm install
npm run dev
```

## Releases

Releases are cut by hand from the Actions tab: **Release** (`.github/workflows/release.yml`).
It picks the version (blank bumps the patch of the latest tag, or seeds `1.0.0`),
lints, builds and smoke-tests the image, then pushes it to
`ghcr.io/oumike/sumat.org` for `linux/amd64` and `linux/arm64`, tags the commit,
creates the GitHub Release, and moves `:latest` last. Tick **dry_run** to stop
after the smoke test.

**Build** (`.github/workflows/build.yml`) runs on every push and PR to `main`:
lint, site build, shellcheck, compose validation, and an image smoke test. It
never publishes anything.

## Run as a container

`docker-compose.yml` is pull-only: it runs the published image, it never builds.

On the server, with the repo checked out:

```bash
./update-container.sh                 # pull :latest and recreate
./update-container.sh --tag 1.0.1     # roll back to an exact version
./update-container.sh --git-pull      # git pull first (compose/script changes)
```

The container serves on host port `10180`; override with `HOST_PORT=9090`.

### Building it yourself

Local builds use an overlay that tags the result `sumat-org-web:local`, so a
local build can never overwrite the published image:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
# or, on the server:
./update-container.sh --build
```

The Dockerfile uses `--platform=$BUILDPLATFORM`, so local builds need BuildKit
(the `docker-buildx-plugin` package).
