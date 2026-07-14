#!/usr/bin/env bash
#
# update-container.sh rebuilds the site image and refreshes the running container.
#
#   ./update-container.sh
#   ./update-container.sh --pull
#
set -euo pipefail

cd "$(dirname "$0")"

if docker compose version >/dev/null 2>&1; then
  COMPOSE="docker compose"
elif command -v docker-compose >/dev/null 2>&1; then
  COMPOSE="docker-compose"
else
  echo "error: neither 'docker compose' nor 'docker-compose' is available" >&2
  exit 1
fi

DO_PULL=0
for arg in "$@"; do
  case "$arg" in
    --pull)
      DO_PULL=1
      ;;
    *)
      echo "error: unknown option '$arg'" >&2
      echo "usage: ./update-container.sh [--pull]" >&2
      exit 1
      ;;
  esac
done

if [[ "$DO_PULL" -eq 1 ]]; then
  echo "==> Pulling latest source"
  git pull --ff-only
fi

echo "==> Building image"
$COMPOSE build

echo "==> Recreating container"
$COMPOSE up -d

echo "==> Status"
$COMPOSE ps

echo "Done. Site is live on host port ${HOST_PORT:-10180}."
