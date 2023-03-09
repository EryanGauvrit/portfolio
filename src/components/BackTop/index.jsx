import React from "react";

function BackTop() {

    return (
        <React.Fragment>
            <div id="backTop-anchor"></div>
            <a href="#backTop-anchor" className='backTop'>
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </React.Fragment>
    )
}

export default BackTop;