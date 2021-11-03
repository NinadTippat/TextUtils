import React from 'react'
import "./About.css"

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    // const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toogleStyle = ()=>{
    //     if (myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',  
    //             border:'1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
    

    return (
        <div className="container"  style={                                //style={myStyle} 
            {backgroundColor:props.mode==='light'?'white':'#212530',
            color:props.mode==='light'?'#212530':'white'}}>
            <h1 my-3>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={                                //style={myStyle} 
                    {backgroundColor:props.mode==='light'?'white':'#062d53',
                    color:props.mode==='light'?'#212530':'white'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Developer
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={                                //style={myStyle} 
                        {backgroundColor:props.mode==='light'?'white':'#062d53',
                        color:props.mode==='light'?'#212530':'white'}}>
                    <strong>Ninad Satish Tippat:</strong> A full stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, he also knows how to: Program a browser (like using JavaScript, jQuery, React JS, Angular JS or Vue JS) ... Program a database (like using SQL, SQLite, or MongoDB)
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={                                //style={myStyle} 
                    {backgroundColor:props.mode==='light'?'white':'#062d53',
                    color:props.mode==='light'?'#212530':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        About TextUtils
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={                                //style={myStyle} 
                        {backgroundColor:props.mode==='light'?'white':'#062d53',
                        color:props.mode==='light'?'#212530':'white'}}>
                        <strong>TextUtils is utility which can be used to manipulate your text in the way you want:</strong> In computing, the term text processing refers to the theory and practice of automating the creation or manipulation of electronic text. Text usually refers to all the alphanumeric characters specified on the keyboard of the person engaging the practice, but in general text means the abstraction layer immediately above the standard character encoding of the target text. The term processing refers to automated (or mechanized) processing, as opposed to the same manipulation done manually.Text processing involves computer commands which invoke content, content changes, and cursor movement, for example to search and replace, format, generate a processed report of the content of, or filter a file or report of a text file
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={                                //style={myStyle} 
                        {backgroundColor:props.mode==='light'?'white':'#062d53',
                        color:props.mode==='light'?'#212530':'white'}}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        TextUtils Development
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={                                //style={myStyle} 
                        {backgroundColor:props.mode==='light'?'white':'#062d53',
                        color:props.mode==='light'?'#212530':'white'}}>
                        <strong>TextUtils - Manipulate Your Text: </strong>This website is developed by Mr Ninad Satish Tippat. It is developed with HTML, CSS, JavaScript and React. For Hosting purpose we use Google Firebase.
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toogleStyle} type="button" className="btn btn-primary" >{btntext}</button>
            </div> */}
        </div>
    )
}
