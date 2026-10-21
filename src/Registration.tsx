import React, { useState, useContext, type FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./UserContext";

const Registration = () => {
    const {state, dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [states, setStates] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [check, setCheck] = useState<boolean>(false);

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({ type: "SET_USER", payload: { firstName, lastName, email, password, address, city, states, zip, check } })
        navigate("/details")
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">User Registration Form</h1>
            <form className="row g-3" onSubmit={submitForm}>
                <div className="col-md-6">
                    <label htmlFor="inputFirstName4" className="form-label">First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLastName4" className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"> Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main St" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select className="form-select" value={states} onChange={(e) => setStates(e.target.value)}>
                        <option value="Choose...">Choose...</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" value={zip} onChange={(e) => setZip(e.target.value)} />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />
                        <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Registration