const EyesOnMe = () => {
    const printMessage = (str) => {
        str === 'focus' ? console.log("Good!") :
            console.log("Hey! Eyes on me!")
    } 
    return (
        <button
            onFocus={() => printMessage("focus")}
            onBlur={printMessage}
        >
            Eyes on me
        </button>
    )
}

export default EyesOnMe;