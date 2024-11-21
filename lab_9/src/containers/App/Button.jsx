import React from 'react';

const Button = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            View more
        </button>
    );
};

export default Button;

