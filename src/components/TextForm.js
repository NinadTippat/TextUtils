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
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={
            {backgroundColor:props.mode==='light'?'dad7e8':'rgb(52 74 139)',
            color:props.mode==='light'?'#212530':'white'}} id="myBox" rows="8"></textarea>
            <button disabled={text.length===0} className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-success" onClick={handleLowClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-danger " onClick={handleClearClick} >Clear Text</button>

            <button disabled={text.length===0} className="btn btn-info" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-dark " onClick={handleExtraSpaces} >Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
