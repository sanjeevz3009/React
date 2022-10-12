import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Bruce',
            age: 28,
            skill: 'Vue'
        }
    ]
    const names = ['Bruce', 'Clark', 'Diana']

    const personList = persons.map(person => (
        <Person person={person}></Person>
    ))
    return <div>{personList}</div>
    // return (
    //     <div>
    //         {/* <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2> */}

    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }

    //     </div>
    // )
}

export default NameList