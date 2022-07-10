import React from "react";
import useApp from "../../hook/AppHook";
import "./FrontEnd.css"

const FrontEnd = () => {
    const { FrontEnd } = useApp;
    return (
        <div className="frontend-container">
            <form action="">
                <h1>{FrontEnd["Title"]}</h1>
                <p>{FrontEnd["Subtitle"]}</p>
                <input type="text" placeholder={FrontEnd["Name"]} />
                <input type="text" placeholder={FrontEnd["Phone"]} />
                <input type="text" placeholder={FrontEnd["E-mail"]} />
                <label>{FrontEnd["CV-File"]}</label>
                <input type="file" value={FrontEnd["CV"]} />
                <input type="submit" value={FrontEnd["Apply"]} />
            </form>
        </div>
    );
}

export default FrontEnd;