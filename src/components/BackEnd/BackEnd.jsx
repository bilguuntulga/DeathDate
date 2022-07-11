import React from "react";
import "./BackEnd.css"

function BackEnd() {
    return (
        <div className="backend-container">
            <h1 className="title">Back-End Developer</h1>
            <p className="subtitle">Та бидний нэг хэсэг болж ажиллахыг хүсвэл  CV илгээнэ үү</p>
            <form action="">
                <input type="text" placeholder="Нэр" />
                <input type="text" placeholder="Утасны дугаар" />
                <input type="text" placeholder="И-мэйл" />
                <label>CV Файл</label>
                <button className="btn-upload">CV-гээ илгээх</button>
                <input type="submit" value="Илгээх" />
            </form>
        </div>
    );
}

export default BackEnd;