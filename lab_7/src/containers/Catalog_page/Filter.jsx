import React from "react";
import './Catalog.css'

function Filter({filterName}) {
    return (
        <div>
            <select className="catalog__filter" name="Filter 1">
                <option value="" disabled selected>
                    {filterName}
                </option>
                <option value="option_1">Item 1</option>
                <option value="option_2">Item 2</option>
                <option value="option_3">Item 3</option>
                <option value="option_4">Item 4</option>
            </select>
        </div>
    );
}

export default Filter;
