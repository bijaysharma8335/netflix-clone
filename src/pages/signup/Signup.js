import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../Assets/Background.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import "./Signup.css";

const Signup = () => {
    const [credentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { displayName, email, password, confirmPassword } = credentials;
    const handleSubmit = () => {};
    const handleChange = () => {};


    return (
        <div className="signup">
            <div className="signup__bg" style={{ backgroundImage: `url(${Background})` }} />
            <div className="signup__container">
                <div className="signup__shadow">
                    <h1 className="signup__title">Sign Up</h1>

                    <form action="POST" onSubmit={handleSubmit}>
                        <FormInput
                            name="displayName"
                            type="name"
                            value={displayName}
                            handleChange={handleChange}
                            label="Name"
                            required
                        />

                        <FormInput
                            name="email"
                            type="email"
                            value={email}
                            handleChange={handleChange}
                            label="Email"
                            required
                        />

                        <FormInput
                            name="password"
                            type="password"
                            value={password}
                            handleChange={handleChange}
                            label="Password"
                            required
                        />

                        <FormInput
                            name="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            handleChange={handleChange}
                            label="Confirm Password"
                            required
                        />

                        <div className="signup__btn-container">
                            <div className="signup__btn">
                                <CustomButton type="submit"> Sign Up </CustomButton>
                            </div>
                        </div>
                    </form>
                    <div className="signup__option">
                        <span className="signup__option--newuser">Already signed up?</span>
                        <Link to="/signin" className="signup__option--link">
                            Log in now.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
