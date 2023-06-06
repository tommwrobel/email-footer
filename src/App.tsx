import React, {useEffect, useState} from 'react';
import classes from "./style.module.css";
import EmailTemplate from "./components/EmailTemplate/EmailTemplate";
import {toast, ToastContainer} from "react-toast";
import {theme} from "./theme/theme";

function App() {

    const [name, setName] = useState("Ewa Urbaniec");
    const [position, setPosition] = useState("Wspólnik");
    const [mail, setMail] = useState("ewa.urbaniec@biurourbaniec.pl");
    const [phone, setPhone] = useState("+48 661 354 130");

    const [template, setTemplate] = useState("");
    const [parsedTemplate, setParsedTemplate] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/template.html")
            .then((templateContent) => templateContent.text())
            .then(templateContent => {
                setTemplate(templateContent)
            })
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setParsedTemplate(template
            .replace("{{name}}", name)
            .replace("{{position}}", position)
            .replace("{{mail}}", mail)
            .replace("{{phone}}", phone))
    }, [name, position, mail, phone, template]);

    const handleCopy = () => {
        const range = document.createRange();
        range.selectNode(document.getElementById("ftr_body_table") as Node);
        if (globalThis.getSelection()) {
            globalThis.getSelection()?.removeAllRanges();
            globalThis.getSelection()?.addRange(range);
            document.execCommand("copy");
            globalThis.getSelection()?.removeAllRanges();
        }
        toast.success("Szablon został skopiowany do schowka!", {
            backgroundColor: theme.colors.success.basic,
            color: '#ffffff',
        })
    }

    const handleInstructions = () => {
        console.error("Implement this!");
    }

    return (
        <div className={classes.app}>
            <div className={classes.wrapper}>
                <h1 className={classes.heading}>Formularz</h1>
                <div className={classes.formWrapper}>
                    <label htmlFor="name" className={classes.label}>Imię i nazwisko:</label>
                    <input
                        type="text"
                        id="name"
                        className={classes.input}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <label htmlFor="position" className={classes.label}>Stanowisko:</label>
                    <input
                        type="text"
                        id="position"
                        className={classes.input}
                        value={position}
                        onChange={(event) => setPosition(event.target.value)}
                    />

                    <label htmlFor="mail" className={classes.label}>Adres email:</label>
                    <input
                        type="text"
                        id="mail"
                        className={classes.input}
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                    />

                    <label htmlFor="phone" className={classes.label}>Numer telefonu:</label>
                    <input type="text" id="phone"
                           className={classes.input}
                           value={phone}
                           onChange={(event) => setPhone(event.target.value)}
                    />
                </div>
                <button className={classes.button} onClick={handleCopy}>Kopiuj stopkę do schowka!</button>
                <button className={classes.buttonSecondary} onClick={handleInstructions}>Zobacz instrukcję</button>
            </div>
            <div className={classes.templateWrapper}>
                <h1 className={classes.heading}>Wzór szablonu stopki</h1>
                {loading && <span>Wczytywanie szablonu...</span>}
                {!loading && <EmailTemplate template={parsedTemplate}/>}
            </div>
            <ToastContainer position="bottom-center"/>
        </div>
    );
}

export default App;
