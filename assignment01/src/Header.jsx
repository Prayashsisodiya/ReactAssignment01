import React from 'react'
import './App.css'

export default function Header({api1,task1, task2, task3, task4, task5, Use_ref }) {
    return (
        <>
            <div className="headerdiv">
                <h1 className="headerh1">Welcome to my website</h1>
                <div className="buttons_in_header">

                    <button onClick={()=>Use_ref()} className='btn'>Use_ref</button>
                    <button onClick={()=>api1()} className='btn'>API 1</button>
                    <button onClick={()=>task1()} className='btn'>task: 1</button>
                    <button onClick={()=>task2()} className='btn'>task: 2</button>
                    <button onClick={()=>task3()} className='btn'>task: 3</button>
                    <button onClick={()=>task4()} className='btn'>task: 4</button>
                    <button onClick={()=>task5()} className='btn'>task: 5</button>

                </div>

            </div>
        </>
    )
}
