import React, { useState } from "react"
import "./para.css"

const Para = () => {

    const [paragraph, setParagraph] = useState([]);
    const [wordCount, setWordCount] = useState();

    const word = ["random", "call", "various", "new", "web", "cors", "gmail", "looking", "for", "get", "over",
        "Lorem", "ipsum.", "dolor", "sit", "amet", "consectetur.", "adipisicing", "elit.", "Officia.", "sequi", "voluptatem.", "Necessitatibus", "quod,", "esse", "corporis", "autem,", "cumque", "consectetur", "consequatur", "provident", "quidem", "iure", "consequuntur", "vitae", "aperiam ", "et", "possimus", "voluptate,", "mollitia", "assumenda."]

    const handelClick = () => {

        if (wordCount > 0 ) {
            const newPara = []
            for (let i = 0; i < wordCount; i++) {
                let index = Math.floor(Math.random() * 41);
                let newWord = word[index];
                newPara.push(newWord)
                newPara.push(" ");
            }
            setParagraph(newPara);
        }else{
            setParagraph([]);
        }
    }   

        return (
            <div className="para">
                <h2>Para Generator</h2>
                <div>
                    <input type="text" placeholder="Enter Number of Words" value={wordCount} onChange={(e) => setWordCount(e.target.value)} />
                    <button onClick={handelClick}>Generate</button>
                </div>
                <div className="words">{paragraph.join(' ')}</div>
            </div>
        )
    }

    export default Para