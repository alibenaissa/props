import React from 'react'

const Component = (props) => {
    return (
        <div>
            <h1> Full Name : {props.name} </h1>
            <h2>Bio : {props.diplome }  </h2>
            <h2> profession : {props.profession} </h2>
            {props.children}
        </div>
    )
}

export default Component