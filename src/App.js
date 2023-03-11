import React, { useState } from "react";

function ParentComponent(props) {
  const [child, setChild] = useState(0)

  function addChilren() {
    setChild(child + 1)
  }

  return (
      <div className="parent">
        <h1>{props.title}</h1>
        <button onClick={addChilren}>нажми на меня и число увеличиться на 1 </button>
        {[...Array(child)].map((_, index) =>(
            <ChildComponent key={index} text={`число ${index + 1}`} />
        ))}
      </div>
  )
}

function ChildComponent({text}) {
  return (
      <p>{text}</p>
  )
}

function App() {
  return (
      <ParentComponent title='Число' />

  )
}

export default App
