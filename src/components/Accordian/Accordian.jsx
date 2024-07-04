import { useState } from "react";
import accordianDATA from "./accordianData.js";

export default function Accordian() {

    const [selectedQuestion, setSelectedQuestion] = useState();
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    function handleGiveAnswer(currentId) {
        setSelectedQuestion(currentId === selectedQuestion ? null : currentId);
    }

    {
        enableMultiSelection === true ?
            console.log('Multiple Selection Enabled') :
            console.log('Multi Selection Disabled')
    }

    function handleMultipleAnswer(currentId) {
        let cpyMultiSelected = [...multiSelected];
        const indexOfCurrentId = cpyMultiSelected.indexOf(currentId);

        if (indexOfCurrentId === -1) {
            cpyMultiSelected.push(currentId);
        } else {
            cpyMultiSelected.splice(indexOfCurrentId, 1);
        }

        setMultiSelected(cpyMultiSelected);
    }
    console.log(multiSelected);

    return (
        <>
            <h1>Accordian</h1>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            {
                accordianDATA && accordianDATA.length > 0 ?
                    accordianDATA.map((ques) =>
                        <div key={ques.id}>
                            <h3>{ques.question}</h3>
                            <button onClick={enableMultiSelection
                                ? () => handleMultipleAnswer(ques.id)
                                : () => handleGiveAnswer(ques.id)} >Show Answer</button>
                            {
                                enableMultiSelection ?
                                    (
                                        multiSelected.indexOf(ques.id) !== -1 && (<p>{ques.answer}</p>)
                                    ) : (
                                        selectedQuestion === ques.id && <p>{ques.answer}</p>
                                    )

                            }

                            <br />
                        </div >
                    )
                    : <div>No Data Found!</div>
            }
        </>
    )
}