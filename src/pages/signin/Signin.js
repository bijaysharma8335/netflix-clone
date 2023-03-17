import React from "react";
import { Link } from "react-router-dom";
import Background from "../../Assets/Background.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import "./Signin.scss";
const Signin = () => {
    return (
        <div className="signin">
            <div className="signin__bg" style={{ backgroundImage: `url(${Background})` }} />

            <div className="signin__container">
                <div className="signin__shadow">
                    <h1 className="signin__title">sign In</h1>
                    <form action="POST" autocomplete="new-password">
                        <FormInput name="email" type="email" label="Email" required />
                        <FormInput name="password" type="password" label="Password" required />
                        <div className="signin__btn-container">
                            <div className="signin__btn">
                                <CustomButton>Sign In</CustomButton>

                                <CustomButton className="signin__google-icon">
                                    Sign In with Google
                                </CustomButton>
                            </div>
                        </div>
                    </form>

                    <div className="signin__options">
                        <span className="signin__option--newuser">New to Netflix?</span>
                        <Link to="/signup " className="signin__option--link">
                            Signup Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
