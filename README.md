# Mobile E-Commerce

This project is a React application for purcharsing mobile phones.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Main Dependencies](#main-dependencies)
- [Development Dependencies](#development-dependencies)
- [Project Structure](#project-structure)
- [Running the test suite](#running-the-test-suite)
- [Production](#production)

---

## Installation

Follow these steps to set up the project:

1. Clone the repository:

```
git clone https://github.com/PabloCaDa/mobile-ecommerce.git
cd mobile-ecommerce
```

2. Install the dependencies:

```
yarn install
```

3. Environment variables setting

Set the following variables in your .env

```
VITE_API_KEY=<api key>
VITE_API_BASE_URL=<api base url>
NODE_ENV='development'
```

4. Start the development server:

```
yarn run dev
```

---

## Available Scripts

In the `package.json` file, the following scripts are defined:

| Script             | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| `yarn run dev`     | Starts the development server with Vite.                                |
| `yarn run build`   | Compiles the project using TypeScript and generates an optimized build. |
| `yarn run lint`    | Runs ESLint to analyze the code for errors or bad practices.            |
| `yarn run preview` | Serves the generated build locally for previewing.                      |
| `yarn run test`    | Runs tests using Jest with custom configuration.                        |

---

## Main Dependencies

These are the main libraries used in this project:

- **React**: ^19.0.0 - Primary library for building user interfaces.
- **React Query**: ^5.66.9 - Efficient handling of asynchronous state.
- **Axios**: ^1.8.1 - HTTP client for making API requests.
- **TailwindCSS**: ^4.0.6 - CSS framework for fast and customizable styling.
- **React Router DOM**: 6 - Router for managing application navigation.

---

## Development Dependencies

The project includes several tools to enhance the development experience:

- **Vite**: ^6.1.0 - Fast build tool for modern applications.
- **TypeScript**: ~5.7.2 - Static type checking for JavaScript.
- **ESLint**: ^9.19.0 - Linter for maintaining clean and consistent code.
- **Prettier**: 3.5.2 - Code formatter.
- **Jest**: ^29.7.0 - Framework for unit testing.
- **Testing Library**: Set of tools for testing React components.

## Project Structure

The basic structure of the project is as follows:

```
├── src/
│ ├── components/ # Reusable components
│ ├── config/ # Help out reading variables from env
│ ├── constants/ # Text constatns of the app
│ ├── contexts/ # Contexts to manage data across components
│ ├── pages/ # Main pages
│ ├── hooks/ # Custom hooks
│ ├── layouts/ # Templates
│ ├── libs/ # Utilities, auxiliary functions and api files
│ ├── setupTests.ts # Initial setup for Jest
│ ├── types/ # Interfaces and types from the app
├── public/ # Public static files
├── package.json # Project configuration and dependencies
├── tsconfig.json # TS configuration
├── vite.config.ts # Vite configuration

```

## Running the test suite

In order to run the test suite execute the following command:

```
yarn test
```

## Production

The app can be build and preview through the following commands:

```
yarn run build
yarn run preview
```
