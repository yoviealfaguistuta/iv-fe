import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="container">
        <button>
            <Link to={'/profile'}>Profile</Link>
        </button>
    </div>
    )
};
export default Profile;