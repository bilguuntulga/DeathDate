import React from "react";
import { useState } from "react";
import axios from "axios";
import FileIcon from '../../assets/FileIcon.png';
import "./BackEnd.css";

function BackEnd() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEMail] = useState("");

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onPhoneChange(e) {
        setPhone(e.target.value);
    }

    function onEMailChange(e) {
        setEMail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            role: "Back-End",
            name: name,
            phone: phone,
            email: email,
            cv: "cv"
        };

        axios.post("https://fun-plus-human-resources.herokuapp.com/job", data)
            .then(res => console.log(res.data.message))
            .catch(err => console.log(err));
    }

    function showFileDialog() {
        document.getElementById("file").click();
    }

    return (
        <div className="backend-container">
            <h1 className="title">Back-End Developer</h1>
            <p className="subtitle">Та бидний нэг хэсэг болж ажиллахыг хүсвэл  CV илгээнэ үү</p>
            <form action="">
                <input type="text" placeholder="Нэр" onChange={onNameChange} />
                <input type="tel" placeholder="Утасны дугаар" onChange={onPhoneChange} />
                <input type="email" placeholder="И-мэйл" onChange={onEMailChange} />
                <label>CV Файл</label>
                <div className="btn-upload" onClick={showFileDialog} >
                    <img src={FileIcon} alt="File Icon" />
                    <p>CV-гээ илгээх</p>
                </div>
                <input id="file" style={{ display: "none" }} type="file" />
                <input type="submit" value="Илгээх" onClick={handleSubmit} />
            </form>
        </div>
    );
}

export default BackEnd;