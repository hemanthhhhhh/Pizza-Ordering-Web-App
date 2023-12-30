"use client"
import { useSession } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "../../components/layout/UserTabs";
import EditableImage from "../../components/layout/EditableImage";
import UserForm from "../../components/layout/UserForm";

export default function ProfilePage() {
    const session = useSession();
    const [saved, setSaved] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    const [isAdmin, setIsAdmin] = useState('')
    const [profileFetched, setProfileFetched] = useState(false)
    const {status} = session
    const [user, setUser] = useState(null)

    useEffect(() => {
        if(status === 'authenticated') {
            
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setUser(data)
                    setIsAdmin(data.admin)
                    setProfileFetched(true)
                })
            })
        }
    }, [session, status])

    async function handleProfileInfoUpdate(ev, data) {
        ev.preventDefault();
        setSaved(false)
        setIsSaving(true)


            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data),
            })
        setIsSaving(false)
        if(response.ok) {
            setSaved(true)
        }
    }

    if(status === 'loading' || !profileFetched) {
        return 'Loading...'
    }

    if(status === "unauthenticated") {
        return redirect('/login')
    }
    const userImage = session.data.user.image

    return (
        <section className="mt-8">
            <UserTabs isAdmin={isAdmin}/>
            
            <div className="max-w-2xl mx-auto mt-8">
                {saved && (
                    <h2 className="text-center bg-green-100 p-4 rounded-lg border border-green-300">Profile saved!</h2>
             )}
                {isSaving && (
                    <h2 className="text-center bg-blue-100 p-4 rounded-lg border border-blue-300">Saving...</h2>
                )} 
                <UserForm user={user} onSave={handleProfileInfoUpdate}/>
            </div>
        </section>
    )
}