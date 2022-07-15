import React from "react";
import { useState } from "react";
import FileIcon from '../../assets/FileIcon.png';
import { createJob } from "../../api/job";
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./Job.css";

function BackEnd(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEMail] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [progresspercent, setProgresspercent] = useState(0);

    function onNameChange(e) {
        setName(e.target.value);
    }

    function onPhoneChange(e) {
        setPhone(e.target.value);
    }

    function onEMailChange(e) {
        setEMail(e.target.value);
    }

    const fileUpload = (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setFileUrl(downloadURL));
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createJob(props.type, name, phone, email, fileUrl)
    }

    function showFileDialog() {
        document.getElementById("file").click();
    }

    return (
        <div className="backend-container">
            <h1 className="title">{props.type} Developer</h1>
            <p className="subtitle">Та бидний нэг хэсэг болж ажиллахыг хүсвэл  CV илгээнэ үү</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Нэр" onChange={onNameChange} />
                <input type="tel" placeholder="Утасны дугаар" onChange={onPhoneChange} />
                <input type="email" placeholder="И-мэйл" onChange={onEMailChange} />
                <label>CV Файл</label>
                <div className="btn-upload" onClick={showFileDialog} >
                    <img src={FileIcon} alt="File Icon" />
                    <p>CV-гээ илгээх</p>
                    <p>{progresspercent}%</p>
                </div>
                <input id="file" type="file" style={{ display: "none" }} onChange={fileUpload} />
                <input type="submit" value="Илгээх" />
            </form>
        </div>
    );
}

export default BackEnd;