# Abstraction Game

This is a web-based game application built with Next.js that challenges players' abstraction skills.

## Features

- Interactive game interface
- Real-time results and feedback
- Responsive design for all devices

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Geist Font](https://vercel.com/font) - Modern font family

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following content:

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
abstraction-game/
├── public/            # Static assets
├── src/
│   ├── app/           # Application pages
│   │   ├── game/      # Game interface
│   │   ├── result/    # Results display
│   │   ├── data.ts    # Game data and logic
│   │   └── ...        # Other pages and components
├── tailwind.config.js # Tailwind CSS configuration
└── ...                # Configuration files
```

## Data Management

Game data and logic are managed in `src/app/data.ts`. This file contains:

- Game questions and answers
- Scoring logic
- Game state management

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
