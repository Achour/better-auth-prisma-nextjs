"use client"
import React, { useState } from 'react';
import { ArrowLeft, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate authentication process
        setTimeout(() => {
            setIsLoading(false);
            // Handle authentication logic here
            console.log('Login attempt with:', { email, password, rememberMe });
        }, 1500);
    };

    async function handleLogin(e) {
        e.preventDefault();
        const { data, error } = await authClient.signIn.email({
            /**
             * The user email
             */
            email: email,
            /**
             * The user password
             */
            password: password,
            /**
             * a url to redirect to after the user verifies their email (optional)
             */
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: rememberMe
        }, {
            onRequest: (ctx) => {
                setIsLoading(true);
            },
            onSuccess: (ctx) => {
                alert("Logged In successfully");
                setIsLoading(false);
            },
            onError: (ctx) => {
                // display the error message
                setError(ctx.error.message);
                setIsLoading(false);
            },
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex flex-col">
            {/* Header */}
            <header className="container mx-auto px-4 py-6">
                <a href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors w-fit">
                    <ArrowLeft size={20} />
                    <span>Back to home</span>
                </a>
            </header>

            {/* Login Form Section */}
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-xl">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-600/20 p-3 rounded-full">
                                <Lock size={28} className="text-blue-400" />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
                        <p className="text-slate-400 text-center mb-6">Sign in to your account</p>

                        {/* show the error message */}
                        {error && (

                            <div className='bg-red-500/50 border border-red-500 px-4 py-2 rounded mb-2'>
                                Invalide email or password
                            </div>
                        )}
                        <form onSubmit={handleLogin}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail size={18} className="text-slate-500" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-slate-900 block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock size={18} className="text-slate-500" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="current-password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="bg-slate-900 block w-full pl-10 pr-10 py-2 border border-slate-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                                            placeholder="••••••••"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="text-slate-400 hover:text-slate-300 focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-900"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300">
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isLoading ? (
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        ) : null}
                                        {isLoading ? 'Signing in...' : 'Sign in'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-slate-400">
                                Don't have an account?{' '}
                                <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                                    Sign up
                                </a>
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <div className="flex justify-center space-x-4">
                                <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md text-sm transition-colors">
                                    Continue with Google
                                </button>
                                <button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md text-sm transition-colors">
                                    Continue with GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 py-4">
                <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>© 2025 NextJS Starter Kit. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LoginPage;