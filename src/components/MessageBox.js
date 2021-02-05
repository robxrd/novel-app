import * as React from 'react'
import story from "../story.json"
import song from '../assets/Ketsa - Astral-Travel.mp3'

const {useState} = React

export default function MessageBox() {
    let [i, nextQuote] = useState(1)
    let audio = new Audio(song)

    return (
        <div className="master-container">
            <div className="previous-button" onClick={() => {
                if(i <= 1){
                    i = 1
                } else {
                    nextQuote(i - 1)
                    }
                }
            }></div>
            <div className="next-button" onClick={() => {
                if(i === 1){
                    audio.play()
                }
                
                
                
                if(i >= 58) {
                    i = 58
                } else {
                    nextQuote(i + 1)
                    }
                }
            }></div>
            <div className="quote-div">
                <h3 className="quote">{story[i]}</h3>
            </div>
        </div>
    )
}