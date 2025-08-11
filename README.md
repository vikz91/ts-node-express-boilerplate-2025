# 🚀 Node.js Express TypeScript Boilerplate

[![Node.js](https://img.shields.io/badge/Node.js-22.18.0-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-black.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red.svg)](LICENSE)
[![Code Style](https://img.shields.io/badge/Code%20Style-Prettier-orange.svg)](https://prettier.io/)
[![Linting](https://img.shields.io/badge/Linting-ESLint-yellow.svg)](https://eslint.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)

A modern, production-ready Node.js Express TypeScript boilerplate for building REST APIs with best practices, code quality tools, and Docker support.

## ✨ Features

- **🔄 TypeScript 5.9.2** - Full TypeScript support with strict type checking
- **🚀 Express 5.1.0** - Latest Express.js framework with modern middleware
- **🛡️ Security First** - Helmet.js for security headers and CORS protection
- **📝 Logging & Debug** - Morgan for HTTP logging and debug module
- **🎯 Code Quality** - ESLint + Prettier with perfectionist rules
- **🐕 Husky** - Git hooks for pre-commit linting and formatting
- **🐳 Docker Ready** - Multi-stage Docker build with Node.js 22 Alpine
- **📁 Path Aliases** - Clean imports with `@/*` path mapping
- **🔧 Hot Reload** - Development server with TSX watch mode
- **📦 Yarn** - Fast, reliable package management
- **🎨 Modern Tooling** - Latest Node.js 22 LTS support

## 🚀 Quick Start

### Prerequisites

- **Node.js** 22.18.0+ ([Install via NVM](https://github.com/nvm-sh/nvm))
- **Yarn** package manager
- **Docker** (optional, for containerized development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd blog-gq
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp example.env .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   yarn dev
   ```

Your API will be running at `http://localhost:3000` 🎉

## 📋 Available Commands

### Development

```bash
yarn dev          # Start development server with hot reload
yarn build        # Build TypeScript to JavaScript
yarn start        # Start production server
yarn type-check   # Type check without building
```

### Code Quality

```bash
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint issues automatically
yarn format       # Format code with Prettier
yarn format:check # Check code formatting
```

### Git Hooks

```bash
yarn prepare      # Install Husky git hooks
```

## 🏗️ Project Structure

```
src/
├── config.ts          # Environment configuration
├── index.ts           # Main application entry point
└── routes/            # API route definitions
    ├── _meta.ts       # Meta routes (health, etc.)
    ├── article.ts     # Article-related routes
    └── index.ts       # Route aggregator
```

## 🐳 Docker Support

### Development with Docker Compose

```bash
docker-compose up --build
```

### Production Build

```bash
docker build -t your-app-name .
docker run -p 3000:3000 your-app-name
```

## ⚙️ Configuration

The application uses environment variables for configuration:

```env
NODE_ENV=development  # Environment (development/production)
PORT=3000            # Server port
```

## 🔧 Development Tools

- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **lint-staged** - Run linters on staged files
- **tsc-alias** - TypeScript path alias resolution

## 📚 API Endpoints

- `GET /` - Health check and meta information
- `GET /article` - Article-related endpoints

## 🚀 Deployment

### Build for Production

```bash
yarn build
yarn start
```

### Environment Variables

Make sure to set appropriate environment variables for production:

- `NODE_ENV=production`
- `PORT` (if different from 3000)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is [UNLICENSED](LICENSE).

## 🙏 Acknowledgments

- Built with [Express.js](https://expressjs.com/)
- TypeScript configuration based on [@tsconfig/node22](https://github.com/tsconfig/bases)
- Code quality tools: ESLint, Prettier, Husky

---

**Happy Coding! 🎉**

_Built with ❤️ using modern Node.js and TypeScript_
