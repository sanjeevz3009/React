import React from 'react';

const Hello = () => {
    // return (
    //     <div id: "hello", className: "testClass">
    //         <h1>Hello Sanjeev!</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: "hello", className: "testClass"}, 
        React.createElement('h1', null, "Hello Sanjeev!!"));
}

export default Hello;