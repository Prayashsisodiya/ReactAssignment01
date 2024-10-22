import React, { useState } from 'react'

export default function Quiz() {
    const [ans1, setans1] = useState("");
    const [ans2, setans2] = useState("");
    const [ans3, setans3] = useState("");
    const [score, setscore] = useState("");
    function clicked(){
        setans1(`Correct answer is : B: Props`)
        setans2(`Correct answer is : B: useState`)
        setans3(`Correct answer is : B: A syntax extension that allows mixing HTML with JavaScript `)
        const Que1 = document.querySelector('input[name="Que1"]:checked');
        console.log(Que1.value);
        const Que2 = document.querySelector('input[name="Que2"]:checked');
        console.log(Que2.value);
        const Que3 = document.querySelector('input[name="Que3"]:checked');
        console.log(Que3.value);
        let  count = 0;
        if (Que1.value === "B1"){
            count++;
            document.getElementById("B1").style.backgroundColor="lightgreen";
            document.getElementById("B1").style.fontWeight="bold"
        }
        else{
            document.getElementById("B1").style.backgroundColor="";
            document.getElementById("B1").style.fontWeight="normal"
            
        }
        if(Que2.value === "B2"){
            count++;
            document.getElementById("B2").style.backgroundColor="lightgreen";
            document.getElementById("B2").style.fontWeight="bold"

        }
        else{
            document.getElementById("B2").style.backgroundColor="";
            document.getElementById("B2").style.fontWeight="normal"

        }
        if(Que3.value === "B3") {
            count++;
            document.getElementById("B3").style.backgroundColor="lightgreen";
            document.getElementById("B3").style.fontWeight="bold"

        }
            else{
                document.getElementById("B3").style.backgroundColor="";
                document.getElementById("B3").style.fontWeight="normal"

            } 
        setscore(`Total Score :  ${count} / 3`)

      
    }
  return (
    <div id='maindiv'>
      <h1>Quiz</h1>
      <p>1. Which of the following is used to pass data to a child component in React?</p>
      <div className='optiondiv'><input type="radio" name="Que1" id='A1'   value="A1" /><span>A. useEffect</span></div> <br />
      <div className='optiondiv' id="B1"><input type="radio" name="Que1"  value="B1" /><span>B. Props</span></div> <br />
      <div className='optiondiv'> <input type="radio" name="Que1" id="C1" value="C1" /><span>C. useState </span></div> <br />
      <div className='optiondiv'><input type="radio" name="Que1" id="D1" value="D1" /><span>D. Event Handlers</span></div> <br />
        
        {ans1}
        <br/>

       <p>2. Which hook is used to add state to a functional component?</p>
       <div className="optiondiv"><input type="radio" name="Que2" id="A2" value="A2" /><span>A. useEffect</span></div><br />
       <div  className="optiondiv" id="B2"><input type="radio" name="Que2" value="B2" /><span  >B. useState </span></div><br />
       <div className="optiondiv"><input type="radio" name="Que2" id="C2" value="C2" /><span>C. useContext</span></div><br />
       <div className="optiondiv"><input type="radio" name="Que2" id="D2" value="D2" /><span>D. useRef</span></div><br />
       {ans2}
        <p>3. What is JSX in React?</p>

        <div className="optiondiv"><input type="radio" name='Que3' id="A3"  value="A3" /> <span>A. A function used to fetch data</span></div><br />
        <div className="optiondiv" id="B3"><input type="radio" name='Que3' id="B3"  value="B3" /> <span>B. A syntax extension that allows mixing HTML with JavaScript</span></div><br />
        <div className="optiondiv"><input type="radio" name='Que3' id="C3"  value="C3" /> <span>C. A CSS framework used in React</span></div><br />
        <div className="optiondiv"><input type="radio" name='Que3' id="D3"  value="D3" /> <span>D. A library to manipulate the DOM directly</span></div><br />
        {ans3}
        <br />
        <button onClick={clicked}>Submit Quiz</button> <br />
        {score}
    </div>
  )
}
