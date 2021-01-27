import * as React from 'react'
import story from "../story.json"

const {useState} = React

export default function Quote() {
    const [i, nextQuote] = useState(1)

    return (
        <div className="quote" onClick={() => {
            nextQuote(i + 1)
        }}>
            <h3>{story[i]}</h3>
        </div>
    )
}