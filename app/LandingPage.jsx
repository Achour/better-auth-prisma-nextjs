import React from 'react';
import { ArrowRight, Code, Lock, Database, Github, Download, CheckCircle } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Header */}
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Code size={24} className="text-blue-400" />
                    <span className="font-bold text-xl">NextJS Starter Kit</span>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
                    <a href="#installation" className="hover:text-blue-400 transition-colors">Installation</a>
                    <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                    <a
                        href="https://github.com/Achour/better-auth-prisma-nextjs"
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={18} />
                        GitHub
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Next.js + Better Auth + Prisma <br />
                    <span className="text-blue-400">Starter Kit</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
                    A production-ready foundation for your web applications.
                    Authentication, database, and modern React - all configured and ready to build upon.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="https://github.com/Achour/better-auth-prisma-nextjs"
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md flex items-center gap-2 text-lg font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Download size={20} />
                        Clone Repository
                    </a>
                    <a
                        href="/signup"
                        className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-md flex items-center gap-2 text-lg font-medium transition-colors"
                    >
                        Try Demo
                        <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-slate-800/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                            <Code size={48} className="text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Next.js</h3>
                            <p className="text-slate-300">
                                The React framework for production that gives you the best developer experience with all the features you need.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                            <Lock size={48} className="text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Better Auth</h3>
                            <p className="text-slate-300">
                                A simple, flexible authentication solution that works with any Next.js application and provides a great user experience.
                            </p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                            <Database size={48} className="text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Prisma</h3>
                            <p className="text-slate-300">
                                Next-generation ORM for Node.js and TypeScript that makes database access easy with an auto-generated query builder.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="container mx-auto px-4 py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Authentication Ready</h3>
                            <p className="text-slate-300">
                                Complete authentication flow with login, registration, and profile management. Protected routes included.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Database Setup</h3>
                            <p className="text-slate-300">
                                Prisma schema with user models and relationships. Migrations ready to run and seed data included.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">TypeScript Support</h3>
                            <p className="text-slate-300">
                                Fully typed codebase with TypeScript configuration optimized for developer experience.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Modern UI Components</h3>
                            <p className="text-slate-300">
                                Clean, responsive UI with customizable components to build your application quickly.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">API Routes</h3>
                            <p className="text-slate-300">
                                Pre-configured API routes with examples of protected endpoints and database integration.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <CheckCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold mb-2">Environment Setup</h3>
                            <p className="text-slate-300">
                                Environment variables configuration for development and production environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Installation Section */}
            <section id="installation" className="bg-slate-800/50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Getting Started</h2>
                    <div className="bg-slate-900 p-6 rounded-lg max-w-3xl mx-auto mb-8">
                        <pre className="text-blue-400 overflow-x-auto">
                            <code>git clone https://github.com/Achour/better-auth-prisma-nextjs.git</code>
                        </pre>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ol className="space-y-4 text-slate-300">
                            <li className="flex gap-2">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                                <div>
                                    <h4 className="font-bold">Clone the repository</h4>
                                    <p>Get your own copy of the starter kit using the command above.</p>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                                <div>
                                    <h4 className="font-bold">Install dependencies</h4>
                                    <p>Run <code className="bg-slate-800 px-2 py-1 rounded">npm install</code> or <code className="bg-slate-800 px-2 py-1 rounded">yarn</code> to install all required packages.</p>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                                <div>
                                    <h4 className="font-bold">Configure environment variables</h4>
                                    <p>Copy <code className="bg-slate-800 px-2 py-1 rounded">.env.example</code> to <code className="bg-slate-800 px-2 py-1 rounded">.env</code> and fill in your details.</p>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                                <div>
                                    <h4 className="font-bold">Run database migrations</h4>
                                    <p>Execute <code className="bg-slate-800 px-2 py-1 rounded">npx prisma migrate dev</code> to set up your database.</p>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                                <div>
                                    <h4 className="font-bold">Start the development server</h4>
                                    <p>Run <code className="bg-slate-800 px-2 py-1 rounded">npm run dev</code> or <code className="bg-slate-800 px-2 py-1 rounded">yarn dev</code> and visit <code className="bg-slate-800 px-2 py-1 rounded">http://localhost:3000</code>.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About This Starter Kit</h2>
                    <p className="text-slate-300 mb-8">
                        This starter kit was created to help developers quickly bootstrap their Next.js applications
                        with authentication and database functionality already configured. It's perfect for beginners
                        who want to focus on building features rather than setting up infrastructure.
                    </p>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                        <h3 className="text-xl font-bold mb-4">Contribute</h3>
                        <p className="text-slate-300 mb-4">
                            This project is open source and contributions are welcome. Whether it's bug fixes, new features,
                            or documentation improvements, feel free to submit a pull request.
                        </p>
                        <a
                            href="https://github.com/Achour/better-auth-prisma-nextjs/issues"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Report issues or request features
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 py-8">
                <div className="container mx-auto px-4 text-center text-slate-400">
                    <p className="mb-4">
                        Created with ❤️ for the developer community
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">License</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;