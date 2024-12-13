# PNPM Workspace Monorepo Starter

Welcome to the **PNPM Workspace Monorepo Starter** repository! This project serves as a boilerplate for setting up a monorepo using [PNPM Workspaces](https://pnpm.io/workspaces), enabling efficient development and dependency management for multi-package projects.

## Features

- **Efficient Dependency Management**: Utilize PNPM's unique linking mechanism for managing dependencies across packages efficiently.
- **Shared Configurations**: Centralize configurations (e.g., ESLint, Prettier) for consistency across all packages.
- **Modular Structure**: Organize your codebase into multiple packages for better scalability and maintainability.
- **Fast Installations**: Leverage PNPM's fast and disk-efficient installations.
- **Tooling Support**: Pre-configured scripts and tools for a seamless developer experience.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (>= 16.x)
- [PNPM](https://pnpm.io) (>= 8.x)

To install PNPM globally:

```bash
npm install -g pnpm
```

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/IamAyaanSk/pnpm-workspace-monorepo-starter.git
   cd pnpm-workspace-monorepo-starter
   ```

2. **Install Dependencies**:

   Run the following command to install all dependencies for the workspace:

   ```bash
   pnpm install
   ```

3. **Start Developing**:

   Navigate to any package or start working on the project directly.

## Repository Structure

```
.
├── packages/         # Contains individual packages
│   ├── package-1/    # Example package
│   ├── package-2/    # Example package
│   └── ...
├── .gitignore        # Git ignore file
├── pnpm-workspace.yaml # PNPM workspace configuration
├── package.json      # Root package.json
└── README.md         # This file
```

### `pnpm-workspace.yaml`

This file defines which directories are part of the workspace. Example:

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

## Scripts

I have defined some scripts in the root `package.json` for common tasks, you can update them as per your usage.
Refer the comments for clarity on what these scripts do:

```json
{
  "scripts": {
    // Scripts for all packages and apps in the workspace
    "build": "pnpm run -r build",
    "start": "pnpm run -r start",
    // The dev script should only be ran once all packages are built ( run dev:packages on another terminal to start watching for packages files for proper development experience )
    "dev": "pnpm run -parallel --filter './apps/*' dev",

    // Scripts for packages
    // The dev:packages is used to build packages sequentially and run the dev script for all packages in parallel
    "dev:packages": "pnpm run build:packages && pnpm run --parallel --filter './packages/*' dev",
    "build:packages": "pnpm run -r --filter './packages/*' build",

    // Scripts for apps
    // Please ensure packages are built before running the dev scripts
    // or run dev:packages if you want to watch for changes in packages
    "build:frontend": "pnpm run build:packages && pnpm --filter frontend build",
    "start:frontend": "pnpm --filter frontend start",
    "dev:frontend": "pnpm --filter frontend dev",

    "build:backend": "pnpm run build:packages && pnpm --filter backend build",
    "start:backend": "pnpm --filter backend start",
    "dev:backend": "pnpm --filter backend dev",

    // Linting and formatting scripts
    "format": "prettier --write .",
    "lint": "pnpm run -r --parallel lint",
    "prepare": "husky",
    "postinstall": "pnpm --filter @acme/prisma-db db:generate"
  }
}
```

### Running in dev mode

There are two scripts for starting the project in development mode, `dev:packages` and `dev`.
Run the `dev:packages` first as it builds and watch the packages, then run `dev` script which starts the apps under development mode.

```json
{
  "scripts": {
    "dev:packages": "pnpm run build:packages && pnpm run --parallel --filter './packages/*' dev",
    "dev": "pnpm run -parallel --filter './apps/*' dev"
  }
}
```

- `pnpm -r run <script>`: Runs a script in all packages recursively.

## Adding a New Package

1. Create a new directory under `packages/`.
2. Initialize a new package:

   ```bash
   pnpm init
   ```

3. Add dependencies as needed:

   ```bash
   pnpm add <dependency> --filter <package-name>
   ```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests for enhancements and bug fixes.

## Author

Ayaan Shaikh

---

Happy coding! 🚀
