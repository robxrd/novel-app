import * as React from 'react'
import story from "../story.json"

const {useState} = React

export default function MessageBox() {
    const [i, nextQuote] = useState(1)

    return (
        <div className="master-container">
            <div className="previous-button" onClick={() => nextQuote(i - 1)}></div>
            <div className="next-button" onClick={() => nextQuote(i + 1)}></div>
            <div className="quote-div">
                <h3 className="quote">{story[i]}</h3>
            </div>
        </div>
    )
}