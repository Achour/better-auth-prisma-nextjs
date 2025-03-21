"use client"
import { authClient } from "@/lib/auth-client";
import React from 'react'

export default function page() {

    async function signUp() {
        const { data, error } = await authClient.signUp.email({
            email: "achourphp@gmail.com", // user email address
            password: "12345678", // user password -> min 8 characters by default
            name: "Achour Meguenni", // user display name
        }, {
            onRequest: (ctx) => {
                //show loading
            },
            onSuccess: (ctx) => {
                alert("User created successfully");
            },
            onError: (ctx) => {
                // display the error message
                alert(ctx.error.message);
            },
        });
    }

    return (
        <div>
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}
