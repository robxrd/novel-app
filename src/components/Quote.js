import story from "../story.json"

function Quote() {
    
    return(
        <div className="quote">
            {story[1]}
        </div>
    )
}

export default Quote