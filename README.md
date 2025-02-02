# NestJS Application

This is a scalable and maintainable NestJS project (supports debugging) configured with **Prettier**, **ESLint**, **MySQL**, and **Docker** to streamline development and deployment processes.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 20.x)
- npm (comes with Node.js)
- Docker (for containerized deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment file and update it as needed:
   ```bash
   cp .env.example .env
   ```

## Folder Structure

```
├── src
│   ├── config         # Application configuration files
│   ├── modules        # Application modules
│   ├── common         # Common utilities, guards, interceptors
│   ├── migrations     # Migration files
│   ├── shared         # Reuseable constants, functions,...
│   ├── app.module.ts  # Root application module
│   └── main.ts        # Application entry point
├── test               # Unit and integration tests
├── .dockerignore      # Files ignored by Docker
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── Dockerfile         # Docker build instructions
├── docker-compose.yml # Docker Compose configuration
└── README.md          # Project documentation
```

### Key Directories

- **src/config:** Configuration files (e.g., TypeORM, environment management).
- **src/modules:** Feature modules encapsulating business logic.
- **src/common:** Shared decorators, pipes, guards, interceptors,...
- **src/shared:** Shared constants, function utilities.
- **test:** Contains unit and integration tests.

## Development

### Running the Application

Start the development server:

```bash
npm run start:dev
```

Navigate to `http://localhost:APP_PORT` to access the application.

### Production Build

```bash
npm run build
npm run start:prod
```

## Linting and Formatting

### Run Linter

```bash
npm run lint
```

### Fix Linter Errors

```bash
npm run lint:fix
```

### Code Formatting

```bash
npm run format
```

## Environment Configuration

Environment variables are defined in `.env` files. An example configuration is provided in `.env.example`.

| Variable      | Description       |
| ------------- | ----------------- |
| `NODE_ENV`    | Environment mode  |
| `APP_PORT`    | Application port  |
| `DB_HOST`     | Database host     |
| `DB_PORT`     | Database port     |
| `DB_USERNAME` | Database username |
| `DB_PASSWORD` | Database password |
| `DB_NAME`     | Database name     |

## Docker Support

### Build and Run Docker Container

```bash
docker-compose up --build
```

### Stop Containers

```bash
docker-compose down
```

### Accessing Logs

```bash
docker-compose logs -f
```

## Scripts

| Script                  | Description                      |
| ----------------------- | -------------------------------- |
| `npm run start`         | Start the application            |
| `npm run start:dev`     | Start in development mode        |
| `npm run build`         | Build the application            |
| `npm run format`        | Format code using Prettier       |
| `npm run lint`          | Run ESLint for linting           |
| `npm run lint:fix`      | Automatically fix linting issues |
| `npm run migration:run` | Run migration                    |

## Star the Project ⭐

If you find this project useful, feel free to give it a star! ⭐

Your support helps this project get more visibility and helps the community! Thank you!

## License

This project is licensed under the MIT License.
