import React, {useState} from 'react'
import "./Text.css"

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
     }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
     }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = ()=> {
        // var text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={
            {backgroundColor:props.mode==='light'?'white':'#212530',
            color:props.mode==='light'?'#212530':'white'}} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary " onClick={handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary " onClick={handleClearClick} >Clear Text</button>

            <button className="btn btn-primary" onClick={handleCopy} >Copy Text</button>
            <button className="btn btn-primary " onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
