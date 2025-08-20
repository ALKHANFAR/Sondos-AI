# Sondos AI

<div align="center">
  <img src="./public/assets/sondos-lockup-light.png" alt="Sondos AI Logo" width="200" height="auto" />
  
  **Advanced AI-Powered Voice Agent Platform**
  
  *Never miss a call - AI voice agents that always answer*
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
  [![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
  [![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue.svg)](https://typescriptlang.org/)
</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🚀 About

Sondos AI is a cutting-edge AI-powered voice agent platform that ensures businesses never miss important calls. Our intelligent voice agents provide 24/7 availability with natural conversation capabilities, offering:

- **100% Pickup Rate** - Never miss a customer call again
- **5x Faster Response** - Instant AI-powered responses
- **90% Cost Reduction** - Significantly reduce operational costs

The platform supports both English and Arabic languages with RTL (Right-to-Left) text support, making it accessible to a diverse global audience.

## ✨ Features

### Core Features
- 🤖 **AI Voice Agents** - Advanced conversational AI that handles customer calls
- 🌍 **Multi-language Support** - English and Arabic with RTL support
- 📱 **Responsive Design** - Works seamlessly across all devices
- 🔒 **Secure Authentication** - Passport.js with session management
- 📊 **Analytics Dashboard** - Comprehensive tracking and reporting
- 🔌 **Third-party Integrations** - Connect with existing business tools

### Technical Features
- ⚡ **Real-time Communication** - WebSocket support for live interactions
- 🎨 **Modern UI Components** - Built with Radix UI and Tailwind CSS
- 📈 **Performance Optimized** - Fast loading with efficient caching
- 🛡️ **Type Safety** - Full TypeScript implementation
- 🗄️ **Database Management** - Drizzle ORM with PostgreSQL

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives
- **React Query** - Data fetching and caching
- **Wouter** - Lightweight routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe development
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Relational database
- **Passport.js** - Authentication middleware
- **WebSocket** - Real-time communication

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Drizzle Kit** - Database migrations

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **PostgreSQL** (version 12 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sondos-ai.git
   cd sondos-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Environment Setup

1. **Create environment file**
   ```bash
   cp env.example .env
   ```

2. **Configure environment variables**
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/sondos_ai"
   
   # Session
   SESSION_SECRET="your-super-secret-session-key"
   
   # API Keys (add your actual keys)
   # OPENAI_API_KEY="your-openai-api-key"
   # TWILIO_ACCOUNT_SID="your-twilio-sid"
   # TWILIO_AUTH_TOKEN="your-twilio-token"
   ```

3. **Set up the database**
   ```bash
   npm run db:push
   ```

### Development

Start the development server:

```bash
npm run dev
```

This will start both the frontend (port 5173) and backend (port 5000) servers concurrently.

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Database Studio**: `npm run db:studio` (opens Drizzle Studio)

## 📁 Project Structure

```
سندس AI 2/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   └── main.tsx       # Application entry point
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API route definitions
│   └── storage.ts        # Database connection
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema definitions
├── public/               # Static assets
└── package.json          # Project dependencies and scripts
```

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development servers (frontend + backend) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run db:push` | Push database schema |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:generate` | Generate database migrations |

## 🔌 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Voice Agent Endpoints
- `GET /api/agents` - List voice agents
- `POST /api/agents` - Create new agent
- `PUT /api/agents/:id` - Update agent
- `DELETE /api/agents/:id` - Delete agent

### Analytics Endpoints
- `GET /api/analytics/dashboard` - Dashboard metrics
- `GET /api/analytics/calls` - Call analytics
- `GET /api/analytics/performance` - Performance metrics

## 🚀 Deployment

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set production environment variables**
   ```bash
   export NODE_ENV=production
   export DATABASE_URL="your-production-database-url"
   export SESSION_SECRET="your-production-session-secret"
   ```

3. **Start the production server**
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
# Example Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions to Sondos AI! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run validate
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you need help or have questions:

- 📧 **Email**: support@sondos.ai
- 💬 **Discord**: [Join our community](https://discord.gg/sondos-ai)
- 📖 **Documentation**: [docs.sondos.ai](https://docs.sondos.ai)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/sondos-ai/issues)

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by the need for better customer communication
- Thanks to all contributors and the open-source community

---

<div align="center">
  <strong>Made with ❤️ by the Sondos AI Team</strong>
  <br>
  <em>Transforming business communication with AI</em>
</div>