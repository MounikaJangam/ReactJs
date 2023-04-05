import React from 'react'

// function Greet() {
//   return <h1>Hello Mounika</h1>
// }
// Arrow Function

// export const Greet = () => <h1>Hello Mouni</h1>
const Greet = (props) => {
    console.log(props)
    return (
        <div>
        <h1>Hello {props.name} , {props.heroName} </h1>
        {props.children}
        </div>
    )
}

export default Greet