# Book Management API

This is a simple Book Management API built with Node.js, Express, and MongoDB. It allows you to perform CRUD operations on books and also borrow.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or pnpm/yarn) installed on your machine. You also need to have MongoDB installed and running.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/misbahulhoq/api-librarymanager.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   pnpm install
   ```

### Running the application

To run the application in development mode, use the following command:

```sh
npm run dev
```

To build the application, use the following command:

```sh
npm run build
```

To run the application in production mode, use the following command:

```sh
npm run start
```

## API Endpoints

The following are the available API endpoints:

**Books**

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a single book by ID
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

**Borrows**

- `POST /api/borrows` - Borrow a book
- `GET /api/borrows` - Get all borrowed book

## Dependencies

- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [cors](https://www.npmjs.com/package/cors) - Node.js CORS middleware.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js.
- [mongodb](https://www.npmjs.com/package/mongodb) - The official MongoDB driver for Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

## Dev Dependencies

- [@eslint/js](https://www.npmjs.com/package/@eslint/js) - The ESLint core rules and plugins.
- [@types/cookie-parser](https://www.npmjs.com/package/@types/cookie-parser) - This package contains type definitions for cookie-parser.
- [@types/cors](https://www.npmjs.com/package/@types/cors) - This package contains type definitions for cors.
- [@types/express](https://www.npmjs.com/package/@types/express) - This package contains type definitions for Express.
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) - An ESLint plugin which provides lint rules for TypeScript codebases.
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - An ESLint parser which allows for parsing TypeScript code.
- [eslint](https://www.npmjs.com/package/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript.
- [globals](https://www.npmjs.com/package/globals) - Global identifiers for ESLint.
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - It restarts target node process when any of required files changes (as nodemon) but shares Typescript compilation process between restarts.
- [typescript](https://www.npmjs.com/package/typescript) - TypeScript is a language for application-scale JavaScript.
- [typescript-eslint](https://www.npmjs.com/package/typescript-eslint) - Monorepo for all the tooling which enables ESLint to support TypeScript.
