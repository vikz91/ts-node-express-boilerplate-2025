# LLM Project Context & Architecture Guide

## 🏗️ Project Overview
This is a modern Node.js Express TypeScript boilerplate for building REST APIs. The project follows enterprise-grade patterns with emphasis on code quality, security, and developer experience.

## 🏛️ Architecture Patterns

### 1. **Layered Architecture**
- **Routes Layer**: HTTP request handling and validation
- **Service Layer**: Business logic (to be implemented)
- **Data Layer**: Database operations (to be implemented)
- **Config Layer**: Environment and application configuration

### 2. **Middleware Pattern**
- Security middleware (Helmet, CORS)
- Logging middleware (Morgan)
- Body parsing middleware
- Error handling middleware
- Custom route middleware

### 3. **Route Organization**
- Modular route files in `src/routes/`
- Central route aggregator in `src/routes/index.ts`
- Meta routes for health checks and system info
- Feature-based route organization

## 🛠️ Technology Stack

### **Core Technologies**
- **Runtime**: Node.js 22.18.0 (LTS)
- **Language**: TypeScript 5.9.2
- **Framework**: Express.js 5.1.0
- **Package Manager**: Yarn

### **Security & Middleware**
- **Helmet.js**: Security headers and protection
- **CORS**: Cross-origin resource sharing
- **Body Parser**: Request body parsing
- **Morgan**: HTTP request logging

### **Development Tools**
- **ESLint**: Code linting with TypeScript rules
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit quality checks
- **TSX**: TypeScript execution with hot reload

### **Build & Deployment**
- **TypeScript Compiler**: Strict type checking
- **tsc-alias**: Path alias resolution
- **Docker**: Multi-stage containerization
- **Docker Compose**: Development environment

## 📁 Project Structure

```
src/
├── config.ts          # Environment configuration & app settings
├── index.ts           # Application entry point & server setup
└── routes/            # API route definitions
    ├── _meta.ts       # System routes (health, status)
    ├── article.ts     # Article-related endpoints
    └── index.ts       # Route aggregation & mounting
```

## 🔧 Configuration & Environment

### **Environment Variables**
- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 3000)

### **TypeScript Configuration**
- Extends `@tsconfig/node22` for Node.js 22 compatibility
- Path aliases: `@/*` maps to `./src/*`
- Output directory: `./dist`
- Strict type checking enabled

### **Code Quality Rules**
- ESLint with TypeScript support
- Prettier for consistent formatting
- Husky pre-commit hooks
- lint-staged for staged file processing

## 📝 Coding Standards & Rules

### **1. TypeScript Best Practices**
- Use strict type checking
- Prefer interfaces over types for object shapes
- Use path aliases (`@/`) for imports
- Avoid `any` type - use proper typing
- Export types and interfaces from dedicated files

### **2. Express.js Patterns**
- Use async/await for asynchronous operations
- Implement proper error handling middleware
- Use middleware composition for route protection
- Keep route handlers thin - delegate to services
- Use HTTP status codes correctly

### **3. Code Organization**
- One route per file in `src/routes/`
- Centralized error handling
- Consistent middleware ordering
- Clear separation of concerns
- Use descriptive variable and function names

### **4. Security Guidelines**
- Always use Helmet.js for security headers
- Implement CORS properly for production
- Validate and sanitize all inputs
- Use environment variables for sensitive data
- Implement rate limiting (to be added)

### **5. Error Handling**
- Global error handler in `src/index.ts`
- Proper HTTP status codes
- Development vs production error details
- Structured error responses
- Log errors appropriately

## 🚀 Development Workflow

### **Available Scripts**
- `yarn dev`: Development server with hot reload
- `yarn build`: TypeScript compilation
- `yarn start`: Production server
- `yarn type-check`: Type checking only
- `yarn lint`: Code linting
- `yarn lint:fix`: Auto-fix linting issues
- `yarn format`: Code formatting
- `yarn format:check`: Format validation

### **Git Workflow**
- Husky pre-commit hooks
- Automatic linting and formatting
- Type checking on staged files
- Consistent code quality enforcement

## 🔍 AI Assistant Guidelines

### **When Adding New Features:**
1. **Routes**: Add to appropriate route file in `src/routes/`
2. **Services**: Create in `src/services/` directory
3. **Types**: Define in `src/types/` or co-located
4. **Middleware**: Add to `src/middleware/` directory
5. **Utils**: Place in `src/utils/` directory

### **Code Generation Rules:**
- Always use TypeScript with proper types
- Follow existing naming conventions
- Include error handling
- Add appropriate JSDoc comments
- Use path aliases for imports
- Follow ESLint and Prettier rules

### **File Naming Conventions:**
- **Files**: kebab-case (e.g., `user-service.ts`)
- **Directories**: kebab-case (e.g., `src/services/`)
- **Classes**: PascalCase (e.g., `UserService`)
- **Functions/Variables**: camelCase (e.g., `getUserById`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_RETRY_COUNT`)

### **Import/Export Patterns:**
```typescript
// Prefer named exports
export { UserService } from './user-service'
export type { User, CreateUserRequest } from './types'

// Use path aliases
import { config } from '@/config'
import { UserService } from '@/services/user-service'
```

## 🐳 Docker Architecture

### **Multi-Stage Build**
1. **Builder Stage**: Install dependencies and build TypeScript
2. **Runner Stage**: Lightweight production image
3. **Alpine Linux**: Minimal footprint
4. **Port Exposure**: 3000 for HTTP traffic

### **Development vs Production**
- **Development**: Volume mounting for hot reload
- **Production**: Optimized build with minimal dependencies

## 🔮 Future Enhancements

### **Planned Features**
- Database integration (PostgreSQL/MongoDB)
- Authentication & authorization
- API documentation (Swagger/OpenAPI)
- Testing framework (Jest/Vitest)
- CI/CD pipeline
- Monitoring and logging
- Rate limiting and caching

### **Scalability Considerations**
- Horizontal scaling with load balancers
- Database connection pooling
- Redis for session/cache management
- Microservices architecture preparation
- API versioning strategy

## 📚 Reference Links

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)

---

**Note for AI Assistants**: This project follows modern Node.js/TypeScript best practices. Always maintain type safety, follow the established patterns, and ensure code quality through proper linting and formatting. When suggesting changes, consider the overall architecture and maintain consistency with existing code patterns.
