import React from 'react'

const Hello = () => {
    // JSX
//   return (
//     <div className="dummyClass">
//         <h1>Hello Mounika</h1>
//         </div>
//   )
// Without JSX
return React.createElement(
    'div',
     {id: 'hello', className: 'dummyClass'},
     React.createElement('h1', null, 'Hello Mounika')
    )
}

export default Hello