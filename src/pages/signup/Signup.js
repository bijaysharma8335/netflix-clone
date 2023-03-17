import React from "react";
import { Link } from "react-router-dom";
import Background from "../Assets/Background.jpg";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import "./Signup.scss";
const Signup = () => {
    return (
        <div className="signup">
            <div className="signup__bg" style={{ backgroundImage: `url(${Background})` }}></div>
            <div className="signup__container">
                <div className="signup__shadow">
                    <h1 className="signup__title">Sign Up</h1>
                    <form action="POST">
                        <FormInput name="displayName" type="name" label="Name" required />
                        <FormInput name="email" type="email" label="Email" required />
                        <FormInput name="password" type="password" label="Password" required />
                        <FormInput
                            name="ConfirmPassword"
                            type="password"
                            label="Confirm Password"
                            required
                        />

                        <div className="signup__btn_container">
                            <div className="signup_btn">
                                <CustomButton type="submit">Sign Up</CustomButton>
                            </div>
                        </div>
                    </form>

                    {/* signup option  */}
                    <div className="signup__option">
                        <span className="signup__optoion--newuser">Already Signed up?</span>
                        <Link to="/signin" className="signup__option--link">
                            Login Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
