import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    // at this point we introcuded the JS userRouter to push to user back afer 3 seconds
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1) this would take the user back 1 page
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Ooopss..</h1>
            <h2>Questa pagina non esiste</h2>
            <p>Torna indietro <Link href="/">Homepage</Link></p>
        </div>
    );
}

export default NotFound;