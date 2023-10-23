const JavascriptConcept = () => {
    // how to declare varibales

    let price = 10;
    
    // how to write functions
    function buttonClick() {
        // alert("fucntion called");
    }

    // fat arrow funtion
    const buttonClick2 = () => {
        // console.log("fat arrow called");
    }

    return (
        <>
            <button onClick={buttonClick} > {price}/button>
            <button onClick={buttonClick} > Call Function</button>
            <button onClick={buttonClick} > Call Function</button>
            <button onClick={buttonClick} > Call Function</button>
        </>
    )
}

export default JavascriptConcept;
