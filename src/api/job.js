import axios from "axios";

export async function createJob(role, name, phone, email, cv) {
    const data = {
        role: role,
        name: name,
        phone: phone,
        email: email,
        cv: cv
    }
    await axios.post("https://fun-plus-human-resources.herokuapp.com/job", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}