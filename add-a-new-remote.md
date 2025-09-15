# How to add a new remote

This guide explains how to add a new remote application to the monorepo.

1.  **Create the application**

    You can use Vite for React or Angular CLI for Angular to create a new application in the `apps` directory.

2.  **Configure Module Federation**
    - For React (Vite), add the `@originjs/vite-plugin-federation` plugin and configure it in `vite.config.ts`.
    - For Angular, add the `@angular-architects/module-federation` package and configure it.

3.  **Expose the application**
    - In the remote's module federation configuration, expose the main component or the routes.

4.  **Add the remote to the shell**
    - In the `shell` application, add the new remote to the `vite.config.ts` file.
    - Add a route in `src/App.tsx` to load the remote.

5.  **Update the CI/CD pipeline**
    - Add a new job to the GitHub Actions workflow to build and test the new application.
