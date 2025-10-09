# MFE Boilerplate - Project Overview

## Project Summary

This is a production-grade Micro-Frontend (MFE) monorepo using Webpack 5 Module Federation with both React and Angular remotes. The architecture allows for independent development, deployment, and scaling of different frontend applications while maintaining a unified user experience through a central shell application.

## Architecture

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
| HabitTracking |  | QuoteGeneration|  | DecisionJournal |  | Admin   |
| (React) |  | (Angular)| | (React) |  | (Angular)|
| :5174   |  | :5175   |  | :5176   |  | :5177   |
+---------+  +---------+  +---------+  +---------+
```

## Project Structure

```
mfe-boilerplate/
├── apps/
│   ├── decisionJournal/          # React remote application
│   ├── admin/            # Angular remote application
│   ├── habitTracking/          # React remote application
│   ├── quoteGeneration/         # Angular remote application
│   └── shell/            # Main React shell application
├── packages/
│   ├── auth-sdk/         # Shared authentication library
│   ├── design-tokens/    # Shared design tokens
│   ├── logger/           # Shared logging utility
│   └── types/            # Shared TypeScript types
├── .github/workflows/    # CI/CD pipelines
└── ...
```

## Technologies Used

### Core Technologies

- **Monorepo Management**: pnpm with workspaces
- **Build System**: TurboRepo for task orchestration
- **Module Federation**: Webpack 5 Module Federation for React, Angular Architects Module Federation for Angular
- **Shell Framework**: React with React Router
- **Remote Frameworks**: React (Vite) and Angular (Angular CLI)

### Development Tools

- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier/q
- **Git Hooks**: Husky with lint-staged
- **Commit Linting**: Commitlint
- **Testing**: Jest (not fully configured in boilerplate)

## Applications

### Shell (React)

- **Port**: 5173
- **Framework**: React with Vite
- **Purpose**: Central application that loads all remote modules and provides the main layout (header, sidebar, footer)

### HabitTracking (React)

- **Port**: 5174
- **Framework**: React with Vite
- **Purpose**: Product habitTracking application

### QuoteGeneration (Angular)

- **Port**: 5175
- **Framework**: Angular with Angular CLI
- **Purpose**: Quote generation process

### DecisionJournal (React)

- **Port**: 5176
- **Framework**: React with Vite
- **Purpose**: User decision journal management

### Admin (Angular)

- **Port**: 5177
- **Framework**: Angular with Angular CLI
- **Purpose**: Administrative dashboard

## Shared Packages

### @mfe/auth-sdk

- Shared authentication library that can be used by both React and Angular applications
- Provides hooks for React and services for Angular

### @mfe/design-tokens

- Shared design tokens for consistent styling across all applications

### @mfe/logger

- Shared logging utility for consistent logging across all applications

### @mfe/types

- Shared TypeScript types for consistent type definitions across all applications

## Development Workflow

### Running the Project

```bash
# Install dependencies
pnpm install

# Run all applications in development mode
pnpm dev
```

### Building the Project

```bash
# Build all applications
pnpm build
```

### Code Quality

```bash
# Run linter
pnpm lint

# Run tests (if configured)
pnpm test
```

## Adding New Remotes

To add a new remote application:

1. Create the application using Vite (React) or Angular CLI (Angular) in the `apps/` directory
2. Configure Module Federation in the application's build configuration
3. Expose the main component or routes in the remote's module federation configuration
4. Add the remote to the shell application's configuration
5. Add a route in the shell application to load the remote
6. Update the CI/CD pipeline to build and test the new application

## Deployment

- Each application has its own Dockerfile for containerization
- Nginx is used as the web server to serve static assets
- Cache headers are configured appropriately:
  - `remoteEntry.js`: no-cache
  - Static assets (js, css, etc.): long cache
- CI/CD pipelines are defined in `.github/workflows/`

## Issues and Recommendations

1. **Build Issues**: The project currently has build issues that need to be resolved:
   - TypeScript configuration inconsistencies across packages
   - Module federation import path issues
   - React import issues in shared packages

2. **Recommended Fixes**:
   - Standardize TypeScript configurations across all packages
   - Fix module federation import paths in the shell application
   - Correct React imports in shared packages
   - Add proper error boundaries for remote module loading

3. **Testing**: The project lacks comprehensive testing configuration which should be added for production use.

## Future Enhancements

1. Implement comprehensive testing strategy with Jest and React Testing Library/Cypress
2. Add more shared utilities to packages
3. Implement feature flags for remote modules
4. Add performance monitoring and error tracking
5. Implement internationalization support
