
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "bootstrap/dist/css/bootstrap.min.css";

const UserDetails = () => {
    const context = useContext(UserContext);
    const navigate = useNavigate();

    if (!context?.state) {
        return null   
    }

    const details = context.state;

    return (
        <div className="container mt-5">
            <div className="card mt-5 mb-5">
                <div className="card-header bg-success text-white">
                    <h2>Submitted Data</h2>
                </div>
                <div className="card-body">
                    <p>First Name: {details.firstName}</p>
                    <p>Last Name: {details.lastName}</p>
                    <p>Email: {details.email}</p>
                    <p>Password:{details.password} </p>
                    <p>Address: {details.address}</p>
                    <p>City: {details.city}</p>
                    <p>State: {details.states}</p>
                    <p>Zip: {details.zip}</p>
                    <p>Check:{details.check ? "Checked" : "Not Checked"}</p>
                    <button className="btn btn-primary" onClick={() => navigate("/")}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;