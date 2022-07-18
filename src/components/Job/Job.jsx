import React from "react";
import { useState } from "react";
import FileIcon from '../../assets/FileIcon.png';
import { createJob } from "../../api/job";
import { storage } from '../../firebase';
import useApp from "../../hook/AppHook";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "./Job.css";

function BackEnd(props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEMail] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [progresspercent, setProgresspercent] = useState(0);
    const { Job } = useApp();

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
        createJob(props.type, name, phone, email, fileUrl);
    }

    function showFileDialog() {
        document.getElementById("file").click();
    }

    function changeSubmitButtonColor() {
        document.getElementById("submit-button").style.backgroundColor = "#3EB86F";
        setTimeout(() => {
            document.getElementById("submit-button").style.backgroundColor = "#EE2A5F";
        }, 1000);
    }

    return (
        <div className="backend-container">
            <h1 className="title">{props.type} Developer</h1>
            <p className="subtitle">{Job["Subtitle"]}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={Job["Name"]} onChange={onNameChange} />
                <input type="tel" placeholder={Job["Phone"]} onChange={onPhoneChange} />
                <input type="email" placeholder={Job["E-Mail"]} onChange={onEMailChange} />
                <label>{Job["CV-File"]}</label>
                <div className="btn-upload" onClick={showFileDialog} >
                    <img src={FileIcon} alt="File Icon" />
                    <p>{Job["CV"]}</p>
                    <p>{progresspercent}%</p>
                </div>
                <input id="file" type="file" style={{ display: "none" }} onChange={fileUpload} />
                <input id="submit-button" type="submit" value={Job["Apply"]} onClick={changeSubmitButtonColor} />
            </form>
        </div>
    );
}

export default BackEnd;