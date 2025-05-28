import React, { useState } from "react";
import "./WordLetterCounter.css";


function WordLetterCounter() {

    const [text, setText] = useState("");

    const wordLimit = 100;
    const charLimit = 500;

    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const letterCount = text.length;
    const letterCountNoSpace = text.replace(/\s/g, "").length;

    const handleTextChange = (e) => {
        const newText = e.target.value;
        if(newText.length <=charLimit) {
            setText(newText);
        }
    }

    return(
        <div className="counter-container">
            <h2>Word & Letter Counter</h2>
            <textarea
                placeholder="Type your text here..."
                onChange={handleTextChange}
                value={text}
                rows={6}
                cols={60}
            />
            <div className="stats">
                <p><strong>Word Count:</strong> {wordCount}</p>
                <p><strong>Letter Count (with spaces):</strong> {letterCount}</p>
                <p><strong>Letter Count (no spaces):</strong> {letterCountNoSpace}</p>
                <p><strong>Character Limit:</strong> {letterCount}/{charLimit}</p>
            </div>
            {wordCount > wordLimit && (
                  <p className="warning">⚠️ Word limit exceeded ({wordCount} / {wordLimit})</p>
            )}
            {letterCount === charLimit && (
                  <p className="warning">⚠️ You’ve reached the character limit!</p>
            )}
        </div>
    )
}

export default WordLetterCounter;