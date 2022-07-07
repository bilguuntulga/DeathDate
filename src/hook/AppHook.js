/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react"
import MNData from "../data/mn.json";
import ENData from "../data/en.json";

export const AppContext = React.createContext({
    ...ENData,
    setLang: (lang = "") => { },
    lang: ""
});

export const AppContainer = ({ children }) => {

    const [landingPageData, setLandingPageData] = useState(ENData)

    const onChangeLang = (lang) => {
        localStorage.setItem("lang", lang)
        location.reload();
    }


    useEffect(() => {

        if (localStorage.getItem("lang")) {
            if (localStorage.getItem("lang") === "MN") {
                setLandingPageData(MNData)
            } else {
                setLandingPageData(ENData)
            }
        } else {
            localStorage.setItem("lang", "EN")
            setLandingPageData(ENData)
        }
    }, [localStorage.getItem("lang")])

    return <AppContext.Provider value={{
        ...landingPageData,
        lang: localStorage.getItem("lang") || "EN",
        setLang: onChangeLang
    }}>
        {
            children
        }
    </AppContext.Provider>
}

export default function useApp() {
    const value = React.useContext(AppContext);
    return value;
}