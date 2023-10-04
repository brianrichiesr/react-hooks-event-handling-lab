const Keypad = () => {
    const enterPassword = () => {
        console.log("Entering password...");
    }
    return (
        <div>
            <input
                type="password"
                onChange={() => enterPassword()}
            />
        </div>
    )
}

export default Keypad;