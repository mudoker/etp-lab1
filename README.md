# Frontend for HCMC Metro Operation Web Application (OPWA)

The Operator Web Application (OPWA) for the Ho Chi Minh City (HCMC) Metro System is built using React 19, Vite, and Tailwind CSS. This document provides an overview of the setup process and system requirements.

## 🚀 Quick Start

### Prerequisites

- pnpm (v8 or later recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Metro-System-Application/OPWA-FE.git
   cd OPWA-FE
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

## 🛠️ Development

### Available Scripts

You can run:

- `pnpm dev` - Starts the development server
- `pnpm start` - Alias for `pnpm dev`
- `pnpm build` - Builds the app for production
- `pnpm lint` - Lints the codebase
- `pnpm format` - Formats code using Prettier
- `pnpm preview` - Previews the production build locally

### Continuous Integration

This project uses GitHub Actions for CI/CD. Every push and pull request to the main branch triggers:

- Dependency installation
- Code building process

## 🪝 Husky

This project uses Husky to enforce code quality through Git hooks. Husky automatically runs checks before commits and pushes to ensure code quality standards are maintained.

### Setup

Husky is installed and configured automatically when you run `pnpm install` thanks to the `prepare` script in package.json.

### Available Hooks

- **Pre-commit**: Runs linting and type checking before allowing commits
- **Pre-push**: Ensures all tests pass before allowing code to be pushed

To modify hooks or add new ones, edit the files in the `.husky` directory.

## 📝 ESLint Configuration

This project uses ESLint for code quality. To enable type-aware lint rules, update the configuration:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or for stricter rules: ...tseslint.configs.strictTypeChecked,
    // For stylistic rules: ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

For React-specific lint rules, you can install additional plugins:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## 📄 License

None
