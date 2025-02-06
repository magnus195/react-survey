import {useState} from "react";
import Checkbox from "./Checkbox.jsx";
import Radio from "./Radio.jsx";
import TextArea from "./TextArea.jsx";
import TextField from "./TextField.jsx";
import AnswersList from "./AnswersList.jsx";

const initialState = {
    id: "",
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
}

function Survey() {
    const radioOptions = [
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
        {label: "4", value: "4"}
    ];
    const [open, setOpen] = useState(false); //Ignore this state

    const [formData, setFormData] = useState(initialState);
    const [answers, setAnswers] = useState([]);


    const handleChange = (event) => {
        const {id, name, value, type} = event.target;

        if (type === "checkbox") {
            event.target.checked ? setFormData({
                ...formData,
                spendTime: [...formData.spendTime, id]
            }) : setFormData({...formData, spendTime: formData.spendTime.filter((item) => item !== id)});
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const submitForm = (event) => {
        event.preventDefault();
        if (formData.id !== "") {
            const newAnswers = answers.map((answer) => {
                if (answer.id === formData.id) {
                    return formData;
                }
                return answer;
            });
            setAnswers(newAnswers);
            setFormData(initialState);
            return
        }

        const newId = Math.max(...answers.map((answer) => answer.id), 0) + 1;
        formData.id = newId;
        setAnswers([...answers, formData]);
        setFormData(initialState);
    }

    const editHandler = (id) => {
        const answer = answers.find((answer) => answer.id === id);
        setFormData(answer);
    }

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={answers} editHandler={editHandler}/>
            </section>
            <section className="survey__form">
                <form className="form" onSubmit={submitForm}>
                    <input type={"hidden"} name={"id"} value={formData.id}/>
                    <h2>Tell us what you think about your rubber duck!</h2>
                    <div className="form__group radio">
                        <h3>How do you rate your rubber duck colour?</h3>
                        <Radio name={"color"} options={radioOptions} value={formData.color} onChange={handleChange}/>
                    </div>
                    <div className="form__group">
                        <h3>How do you like to spend time with your rubber duck</h3>
                        <ul>
                            <Checkbox id="swimming" name="spend-time" checked={formData.spendTime.includes("swimming")}
                                      label={"Swimming"} onChange={handleChange}/>
                            <Checkbox name="spend-time" id="bathing" checked={formData.spendTime.includes("bathing")}
                                      label={"Bathing"} onChange={handleChange}/>
                            <Checkbox name="spend-time" id="chatting" checked={formData.spendTime.includes("chatting")}
                                      label={"Chatting"} onChange={handleChange}/>
                            <Checkbox name="spend-time" id="noTime" checked={formData.spendTime.includes("noTime")}
                                      label={"I don't like to spend time with it"} onChange={handleChange}/>
                        </ul>
                    </div>
                    <TextArea name={"review"} label={"What else have you got to say about your rubber duck?"} rows={10}
                              cols={30} value={formData.review} onChange={handleChange}/>
                    <TextField name={"username"} label={"Put your name here (if you feel like it):"}
                               value={formData.username} onChange={handleChange}/>
                    <TextField name={"email"} label={"Leave us your email pretty please??"} value={formData.email}
                               onChange={handleChange}/>
                    <input className="form__submit" type="submit" value="Submit Survey!"/>
                </form>
            </section>
        </main>
    );
}

export default Survey;
