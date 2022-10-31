import React,{ useState } from "react";
import './index.css';

export default function Footer() {
    const [fst,setstyle]=useState("create");
    
     const Chng=()=>{
       if(fst==="create"){
        setstyle("create2");
       }else if(fst==="create2"){
        setstyle("create")
       }
     }
     const [snd,setshow]=useState("create1");
    
     const Chng1=()=>{
       if(snd==="create1"){
        setshow("create3");
       }else if(snd==="create3"){
        setshow("create1")
       }
     }
  return (
    <>
    <div>
    <div className="txt">
    <h1>🎆 Styling using Function and Class Component 🎆</h1>
    </div>
    <button onClick={Chng}>To see styling in functional component 🎆</button>
    <button onClick={Chng1}>To see styling in class component 🎇</button>
    
    </div>
    <div className={fst}>
               <p>This is created using functional Component</p>
             <div className="pra">
            <p id="e">This is done using external Css</p>
            <p id="i">This is done using internal Css</p>
             </div>
    </div>
       <div className={snd}>
               <p>This is created using Class Component</p>
             <div className="pra1">
            <p id="e1">This is done using external Css</p>
            <p id="i1">This is done using internal Css</p>
             </div>
     </div>  
    </>
  )
}