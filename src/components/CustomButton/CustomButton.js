import React from "react";
import "./CustomButton.scss";
const CustomButton = ({ children, signin, ...props }) => {
    return (
        <button className={`${signin ? `signin` : null} custom-button`} {...props}>
            {children}
        </button>
    );
};

export default CustomButton;
