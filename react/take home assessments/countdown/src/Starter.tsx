function Starter() {

    return (
        <>
            <label>
                <input type="number"/>
                Minutes
            </label>
            <label>
                <input type="number"/>
                Seconds
            </label>

            <button>Start</button>
            <button>Pause / resume</button>
            <button>Reset</button>

            <h1 data-testid="running-clock">00:00</h1>
        </>
    );
}

export default Starter;
