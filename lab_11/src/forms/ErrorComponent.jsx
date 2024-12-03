import React from "react";
import PropTypes from "prop-types";
import "./ErrorComponent_styles.css";

const ErrorComponent = ({ errors }) => {
    if (!errors || Object.keys(errors).length === 0) {
        return null;
    }

    return (
        <div className="error-summary">
            <h3 className="error-summary__title">Please fix the following errors:</h3>
            <ul className="error-summary__list">
                {Object.entries(errors).map(([field, message]) => (
                    <li key={field} className="error-summary__item">
                        {message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

ErrorComponent.propTypes = {
    errors: PropTypes.object.isRequired,
};

export default ErrorComponent;
