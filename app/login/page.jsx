"use client"
import React from 'react'
import { authClient } from "@/lib/auth-client";

export default function page() {

    async function signIn() {
        const { data, error } = await authClient.signIn.email({
            /**
             * The user email
             */
            email: "achourphp@gmail.com",
            /**
             * The user password
             */
            password: "12345678",
            /**
             * a url to redirect to after the user verifies their email (optional)
             */
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
        }, {
            onRequest: (ctx) => {
                //show loading
            },
            onSuccess: (ctx) => {
                alert("Logged In successfully");
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
        })
    }
    return (
        <div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}
