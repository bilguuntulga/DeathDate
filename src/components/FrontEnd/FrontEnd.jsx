import React from "react";
import "./FrontEnd.css"

function FrontEnd() {
    return (
        <div className="frontend-container">
            <h1 className="title">Front-End Developer</h1>
            <p className="subtitle">Та бидний нэг хэсэг болж ажиллахыг хүсвэл  CV илгээнэ үү</p>
            <form action="">
                <input type="text" placeholder="Нэр" />
                <input type="text" placeholder="Утасны дугаар" />
                <input type="text" placeholder="И-мэйл" />
                <label>CV Файл</label>
                <button class="btn-upload">CV-гээ илгээх</button>
                <input type="submit" value="Илгээх" />
            </form>
        </div>
    );
}

export default FrontEnd;