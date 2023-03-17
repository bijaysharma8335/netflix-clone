import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Background from "../../Assets/Background.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import "./Signin.css";
const Signin = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const { email, password } = credentials;
    const handleSubmit = () => {};
    const handleChange = () => {};
    return (
        <div className="signin">
            <div className="signin__bg" style={{ backgroundImage: `url(${Background})` }} />
            <div className="signin__container">
                <div className="signin__shadow">
                    <h1 className="signin__title">Sign In</h1>

                    <form action="POST" autoComplete="new-password" onSubmit={handleSubmit}>
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

                        <div className="signin__btn-container">
                            <div className="signin__btn">
                                <CustomButton type="submit" signin>
                                    Sign In
                                </CustomButton>
                                <CustomButton>
                                    <FaGoogle className="signin__google-icon" />
                                    Sign In With Google
                                </CustomButton>
                            </div>
                        </div>
                    </form>
                    <div className="signin__option">
                        <span className="signin__option--newuser">New to Netflix?</span>
                        <Link to="/signup" className="signin__option--link">
                            Sign up now.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
