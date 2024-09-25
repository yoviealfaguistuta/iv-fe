import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="container">
        <button>
            <Link to={'/contact'}>Contact</Link>
        </button>
    </div>
    )
};
export default Contact;