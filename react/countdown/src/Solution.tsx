import { useState, useEffect, useRef } from 'react';

function Solution() {
    const [inputMinutes, setInputMinutes] = useState<number>(0);
    const [inputSeconds, setInputSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    const [reset, setReset] = useState<boolean>(false);
    const intervalRef = useRef<number | undefined>(undefined);

    const updateTimer = () => {
        setSeconds(previousSeconds => {
            if (previousSeconds === 0) {
                if (minutes === 0) {
                    clearInterval(intervalRef.current);
                    return 0;
                } else {
                    setMinutes(previousMinutes => previousMinutes - 1);
                    return 59;
                }
            } else {
                return previousSeconds - 1;
            }
        });
    };

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(updateTimer, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [running, minutes, reset]);

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

    const pauseOrResume = () => setRunning(!running);

    const onReset = () => {
        setRunning(false);
        setInputMinutes(0);
        setInputSeconds(0);
        setMinutes(0);
        setSeconds(0);
    };

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