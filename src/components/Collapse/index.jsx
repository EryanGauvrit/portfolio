import { useState } from "react";
const chevron = <i className="fa-solid fa-chevron-up"></i>;

function Collapse({ title, content }) {

    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    return (
        <article className={`collapse ${isActive && "active"}`}>
            <div className="collapse-title" onClick={handleToggle}>
                <h3>{title}</h3>
                {chevron}
            </div>
            <div className="collapse-content">
                {content}
            </div>
        </article>
    )
}

export default Collapse;