import React from 'react';

// function Greet() {
//     return <h1>Hello Sanj</h1>
// }

const Greet = ({name, heroName}) => {
    // console.log(props);
    // const {name, heroName} = props;
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}

export default Greet;