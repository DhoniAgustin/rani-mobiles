import React from "react"

function welcome(props) {
    return(
        <>
        <h2>1.welcom Message</h2>
        <h3>welcome {props.name}</h3>
        <h2>2.user info card</h2>
        <h3>Name : {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <h3>Gender : {props.gender}</h3>
        </>
    )

}
export default welcome;