"use client"
import { useState } from "react"
import Image from "next/image"
import {signIn} from "next-auth/react";
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../api/auth/[...nextauth]/route";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress,setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true)
        
        await signIn('credentials', {email, password, callbackUrl: '/'})

        setLoginInProgress(false)
    }

     return (
        <section className="mt-8">
             <h1 className="text-center text-primary text-4xl mb-4">
                Login
             </h1>
             <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" name="email" disabled={loginInProgress} placeholder="Email"  value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" name="password" disabled={loginInProgress} placeholder="Password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button disabled={loginInProgress} type="submit">Login</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center"
                 >
                    <Image src={'/google.png'} alt={''} height={24} width={24}/>
                    Login with google
                </button>
             </form>
        </section>
    )
}
