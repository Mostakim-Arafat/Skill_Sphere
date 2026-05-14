import Link from "next/link";

const Notfound = () => {
    return (
        <div className="text-center">
            <h1>Not found page</h1>
            <button className="btn btn-primary">
                <Link href={'/Page/HomePage'}>Go home</Link>
            </button>
        </div>
    );
};

export default Notfound;