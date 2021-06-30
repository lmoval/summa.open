// this function runs at build time
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const Data = await res.json();

    return {
        props: { contacts: Data }
    };

}

const contactus = ({ contacts }) => {
    return (
        <div>
            <h1>Filipp's Environment</h1>
            {contacts.map(contacts => (
                <div key={contacts.id}>
                    <a>
                        <h3> {contacts.phone} </h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default contactus;

