'use client'
import { useRouter } from 'next/navigation'

export default function NotFoundPage() {
    const router = useRouter()
    return (
        <div>
            <h1>The page is not found</h1>
            <button
                className="bg-red-600 text-white rounded-2xl"
                onClick={() => router.push('/')}
            >
                Go to homePage
            </button>
        </div>
    )
}
