'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function profile() {
    const router = useRouter()
    const pathName = usePathname()
    console.log(pathName)

    const handleClick = () => {
        router.push('/')
    }
    console.log(router)

    return (
        <>
            <h1>profile-page</h1>
            <button onClick={handleClick}>home page</button>
        </>
    )
}
