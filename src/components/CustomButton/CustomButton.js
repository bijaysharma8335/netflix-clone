import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, signin, ...otherProps }) => {
    return (
        <button className={`${signin ? `signin` : null} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};
export default CustomButton;
