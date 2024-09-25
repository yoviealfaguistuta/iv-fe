import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <div className="container">
            <button>
                <Link to={'/data-table'}>Data Tabel</Link>
            </button>
        </div>
    )
};