import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ( {className} ) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/catalog');
    };

    return (
        <button className={className} onClick={handleClick}>
            View more
        </button>
    );
};

export default Button;


