import React from "react";
import './custom-button.css';

const CustomButton = ({ children, isGoogleSign, ...otherProps }) => {
    return (
        <button className={`${isGoogleSign ? 'google_sign_in' : ''} custom__button`} {...otherProps}>{children}</button>
    )
}

export default CustomButton;