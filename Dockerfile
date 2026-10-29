# --- Build stage ---
#
# --platform=$BUILDPLATFORM pins this stage to the machine doing the building,
# not the machine being built for. That is what makes a multi-arch image cheap
# here: `npm ci` and `vite build` run once, natively on the runner, instead of
# once per target under QEMU — and their output is static JS and CSS, identical
# whatever the target architecture.
#
# Only the serve stage below is materialised per architecture, and it has no RUN
# at all (two COPYs and a HEALTHCHECK), so nothing is ever emulated.
FROM --platform=$BUILDPLATFORM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Named paths rather than `COPY . .`, so a host node_modules or dist can never
# leak into the build and shadow what `npm ci` just installed.
COPY index.html vite.config.js ./
COPY public ./public
COPY src ./src

RUN npm run build

# --- Serve stage ---
FROM nginx:1.27-alpine

# Plain http; TLS is terminated at the reverse proxy in front of this.
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
