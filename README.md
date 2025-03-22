# Next.js + Better Auth + Prisma Starter Kit

A practical starter kit combining Next.js with Better Auth for authentication and Prisma for database management. This template is designed to help beginners get started quickly with a solid foundation for web application development.

## Features

- **Next.js App Router** - Modern React framework with server components and improved routing
- **Better Auth Integration** - Simple, secure authentication system
- **Prisma ORM** - Type-safe database client for JavaScript
- **Credentials Authentication** - Email and password authentication
- **Ready-to-use Auth Pages** - Pre-built login and registration pages
- **Database Setup** - Pre-configured Prisma schema and migrations

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- A database (PostgreSQL, MySQL, SQLite, etc.)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Achour/better-auth-prisma-nextjs.git
cd nextjs-better-auth-prisma
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env.local`
   - Update the variables with your own values:

```
# Database connection string
DATABASE_URL="your-database-connection-string"

# Better Auth config
BETTER_AUTH_SECRET=your-secret-key-at-least-32-chars
BETTER_AUTH_URL=http://localhost:3000
```

4. Set up the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Authentication

This starter kit uses Better Auth for authentication with a credentials provider. Users can sign up and login using their email and password.

### Authentication Flow

1. User registers with email and password
2. User logs in with credentials
3. Better Auth creates and manages sessions
4. Protected routes check for authenticated status

## Database

This starter kit uses Prisma as an ORM to interact with your database. The schema includes a basic user model that works with Better Auth.

## Deployment

This project can be deployed on any platform that supports Next.js:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- Self-hosted with Node.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Created with ❤️ to help developers focus on building features rather than setting up infrastructure.
