import React, { useState } from 'react'

const Usestate = () => {

    const [counter, setCounter] = useState(null);
    const [name, setName] = useState("");
    const [details, setDetails] = useState({
        name: "Rahul Sharma",
        country: "India",
        game: "Cricket",
        age: 36
    }
    );
    const IncreaseCounter = () => {
        setCounter(counter + 1);
    }

    const DecrementCounter = () => {
        setCounter(counter - 1);
    }

    const ChangeName = () => {
        setName("Goyal");
    }

    const updateDetails = ()=>{
        setDetails((oldDatils)=>{
            return {...oldDatils , age: 100 }
        }
        )
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={IncreaseCounter}>INCREAMENT</button>
            <button onClick={DecrementCounter}>DECREMENT</button>
            <h1>{name}</h1>
            <button onClick={ChangeName}>ChangeName</button>
            <h1>Player Name is {details.name} plays for {details.country} having age of {details.age} </h1>
            <button onClick={updateDetails}> Update</button>
        </div>
    )
}

export default Usestate