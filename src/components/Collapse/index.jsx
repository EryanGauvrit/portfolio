import { useState } from "react";
const chevron = <i className="fa-solid fa-chevron-up chevron-up"></i>;

function Collapse({ title, content, icontitle }) {

    const [isActive, setActive] = useState(false);

    const handleToggle = (event) => {
        setActive(!isActive);
    };

    return (
        <article className={`collapse ${isActive && "active"}`}>
            <div className="collapse-title" onClick={handleToggle}>
                <h2>{icontitle}{title}</h2>
                {chevron}
            </div>
            <div className="collapse-content">
                {content}
            </div>
        </article>
    )
}

export default Collapse;