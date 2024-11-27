import React from "react";
import './Catalog.css';

function Filter({ filterName, options, onChange }) {
    return (
        <div>
            <select className="catalog__filter" name={filterName} onChange={(e) => onChange(e.target.value)} defaultValue="">
                <option value="" disabled>
                    {filterName}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filter;
