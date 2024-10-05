import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';

import One from './Component/one';
import Two from './Component/two';
import Three from './Component/Three';
import Four from './Component/Four';
import image1 from './Component/Assets/image1.jpg'
import image2 from './Component/Assets/image2.webp'
import image3 from './Component/Assets/image3.webp'
import image4 from './Component/Assets/image4.webp'
import image5 from './Component/Assets/image5.webp'
import image6 from './Component/Assets/image6.webp'

import Five from './Component/Five';



function App() {
  const [task, setTask] = useState("Click any task to continue");

  function task1(){
    setTask(<One/>)
    console.log("Task 1");
    
  }
  function task2(){
    setTask(<Two/>)
    console.log("Task 2");
    
  }
  function task3(){
    setTask(<Three message="Welcome" name="Prayash"/>);
    console.log("Task 3");
    
  }
  function task4(){
    setTask(<Four images={images}/> );
    console.log("Tsk 4");
    
  }
  function task5(){
    setTask(<Five items = {fruits}/>)
    console.log("Task 5");
    
  }

  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
  ];

  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
  const emptyArray = [];
  return (
    <div>
      <Header task1={task1} task2 = {task2} task3 = {task3} task4 = {task4} task5 = {task5} />
      <Main task = {task} />
    </div>
  )
}
export default App;
