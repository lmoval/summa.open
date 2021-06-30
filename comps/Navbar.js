import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1> <Link href="/">Summa</Link> </h1>
            </div>
            <Link href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdcg7FWPU2X0WTiHS9qULmIwsKN0dIHZ34FseXsCig8yJCjqQ/viewform?embedded=true"><a>Suggerisci una gara</a></Link>
            {/* <Link href="/contactus"><a>Contattaci </a></Link> */}
            {/* <Link href= "/summa"><a>Manifesto </a></Link> */}
        </nav>
    );
};


export default Navbar;
