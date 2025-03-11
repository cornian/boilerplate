# Next.js 15 & React 18 Boilerplate with FSD

Modern web application boilerplate built with Next.js 15 and React 18, implementing Feature-Sliced Design (FSD) architecture for scalable and maintainable development.

## Tech Stack

- **Framework:** Next.js 15.2.1
- **Language:** TypeScript
- **UI Library:** React 18.3
- **Architecture:** Feature-Sliced Design (FSD)
- **Linting:** ESLint

## Project Structure

The project follows Feature-Sliced Design methodology with the following structure:

```
src/
├── app/                  # Application initialization layer
├── entities/            # Business entities layer
├── features/            # User interactions layer
├── pages/               # Pages/Routing layer
├── widgets/             # Composite components layer
└── shared/              # Reusable infrastructure layer
    ├── api/            # API integration
    ├── config/         # Configuration
    ├── constants/      # Global constants
    ├── lib/            # Utility functions
    ├── types/          # TypeScript types
    └── ui/             # UI components
```

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 9.0 or later

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Runs the development server with Turbopack
- `npm run build` - Creates a production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code linting

## Project Features

- 🚀 Next.js 15 with App Router
- 📝 TypeScript for type safety
- 🏗️ Feature-Sliced Design architecture
- 🔍 ESLint for code linting
- 🔄 Fast Refresh for quick iterations
- 🛠️ Turbopack for faster development

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
