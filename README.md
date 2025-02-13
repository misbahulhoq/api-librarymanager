# ts-node-starter

A basic starter project for Node.js with TypeScript.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/ts-node-starter.git
   cd ts-node-starter
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Project

To start the development server, run:

```sh
npm run dev
```

The server will start at `http://localhost:3000` and you should see "Hello World" when you visit this URL in your browser.

### Available Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm run dev`: Starts the development server with hot-reloading.
- `npm start`: Starts the compiled JavaScript code.

### Project Structure

```
ts-node-starter/
├── src/
│   └── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- `src/index.ts`: The main entry point of the application.
- `.gitignore`: Specifies files to be ignored by Git.
- `package.json`: Contains project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.
- `README.md`: Project documentation.
