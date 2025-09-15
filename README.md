# MFE Boilerplate

This is a production-grade Micro-Frontend (MFE) monorepo using Webpack 5 Module Federation with both React and Angular remotes.

## Architecture Diagram

```
+----------------------------------------------------+
|                        Shell (React)               |
| (localhost:5173)                                   |
| +------------------------------------------------+ |
| | Header                                         | |
| +------------------------------------------------+ |
| | Sidebar                                        | |
| +------------------------------------------------+ |
| | Main Content                                   | |
| | +--------------------------------------------+ | |
| | | Remote App (loaded based on route)         | | |
| | +--------------------------------------------+ | |
| +------------------------------------------------+ |
| | Footer                                         | |
| +------------------------------------------------+ |
+----------------------------------------------------+
       |         |         |         |
       |         |         |         |
+------v--+  +----v----+  +---v-----+  +----v----+
| Catalog |  | Checkout|  | Account |  | Admin   |
| (React) |  | (Angular)| | (React) |  | (Angular)|
| :5174   |  | :5175   |  | :5176   |  | :5177   |
+---------+  +---------+  +---------+  +---------+

```

## Local Development

To run all applications in development mode, run the following command:

```bash
pnpm dev
```

This will start the shell and all remotes on the following ports:

- `shell`: http://localhost:5173
- `catalog`: http://localhost:5174
- `checkout`: http://localhost:5175
- `account`: http://localhost:5176
- `admin`: http://localhost:5177

## How to add a new MFE

See [add-a-new-remote.md](add-a-new-remote.md).

## Deployment Guide

Deployment is handled by Docker and Nginx. Each application has its own Dockerfile. The Nginx server is configured to serve the static assets and the `remoteEntry.js` files with the correct cache headers.

The CI/CD pipeline is defined in the `.github/workflows` directory.

### Cache Rules

- `remoteEntry.js`: no-cache
- Static assets (js, css, etc.): long cache
