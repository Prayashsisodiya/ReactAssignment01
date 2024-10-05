import React from 'react'
export default function Five({items}) {
    if(items.length === 0){
        return <p>No items found </p>;
    }
  return (
    <>
    <h1>Task 5</h1>
    <ul>
        {items.map((item,index) =>(
            <li key={index}>{item}</li>
        ))}
    </ul>
    </>
  )
}
