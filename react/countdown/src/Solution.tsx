import { useState, useEffect, useRef } from 'react';

function Solution() {
    // these hold the values entered by the user in the minutes and seconds input fields
    const [inputMinutes, setInputMinutes] = useState<number>(0);
    const [inputSeconds, setInputSeconds] = useState<number>(0);

    // these hold the current countdown time
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    // this boolean indicates whether the countdown is running
    const [running, setRunning] = useState<boolean>(false);

    // this is a boolean that toggles when the reset button is clicked
    const [reset, setReset] = useState<boolean>(false);

    // useRef is used to hold a mutable value that persists for the lifetime of the component
    // useRef doesn't cause re-renders when the value changes, unlike state
    // In this case, it is used to hold the interval ID of the countdown timer
    const intervalRef = useRef<number | undefined>(undefined);

    // this function is called every second when the countdown is running.
    const updateTimer = () => {
        // The previous state is passed to the updater function to ensure that the state is updated correctly
        setSeconds(previousSeconds => {
            if (previousSeconds === 0) {
                if (minutes === 0) {
                    // if minutes and seconds are both 0, the countdown is stopped
                    clearInterval(intervalRef.current);
                    return 0;
                } else {
                    // if seconds are 0 but minutes are not, the minutes are decremented by 1 and seconds are set to 59
                    setMinutes(previousMinutes => previousMinutes - 1);
                    return 59;
                }
            } else {
                // if seconds are not 0, seconds are decremented by 1
                return previousSeconds - 1;
            }
        });
    };

    // This hook is used to start the countdown when the running state is true.
    // It sets an interval that calls updateTimer every second.
    useEffect(() => {
        if (running) intervalRef.current = setInterval(updateTimer, 1000);
        // The interval is cleared when the component unmounts or when the running, minutes, or reset state changes
        return () => clearInterval(intervalRef.current);
        // hook runs when running, minutes, or reset state changes
        // Minutes example - if the timer is started and the minutes state decreases, 
        // the old interval needs to be cleared and start a new one to reflect the updated minutes state
    }, [running, minutes, reset]);

    // This function is called when the start button is clicked.
    // It calculates the total seconds from the input minutes and seconds,
    // sets the minutes and seconds state with the calculated values, and starts the countdown.
    const start = () => {
        clearInterval(intervalRef.current);
        setRunning(false);

        const totalSeconds = inputMinutes * 60 + inputSeconds;
        const minutesToSet = Math.floor(totalSeconds / 60);
        const secondsToSet = totalSeconds % 60;

        setMinutes(minutesToSet);
        setSeconds(secondsToSet);
        setRunning(true);
        setReset(prevReset => !prevReset);
    };

    // This function is called when the pause/resume button is clicked.
    // It toggles the running state, effectively pausing or resuming the countdown.
    const pauseOrResume = () => setRunning(!running);

    // This function is called when the reset button is clicked.
    // It stops the countdown and resets all the state variables to their initial values
    const onReset = () => {
        setRunning(false);
        setInputMinutes(0);
        setInputSeconds(0);
        setMinutes(0);
        setSeconds(0);
    };

    // This function formats the minutes and seconds state into a string in the mm:ss format
    const formatClock = () => {
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    return (
        <>
            <label>
                <input
                    id="minutes-input"
                    type="number"
                    value={inputMinutes}
                    onChange={e => setInputMinutes(Number(e.target.value))}/>
                Minutes
            </label>
            <label>
                <input
                    id="seconds-input"
                    type="number"
                    value={inputSeconds}
                    onChange={e => setInputSeconds(Number(e.target.value))} />
                Seconds
            </label>

            <button onClick={start}>START</button>
            <button onClick={pauseOrResume}>PAUSE / RESUME</button>
            <button onClick={onReset}>RESET</button>

            <h1 data-testid="running-clock">{formatClock()}</h1>
        </>
    );
}

export default Solution;
