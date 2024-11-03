import React from 'react';

const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button className="view-all__button" onClick={handleClick}>
            View more
        </button>
    );
};

export default Button;
