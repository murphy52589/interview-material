import { useEffect, useState, useCallback } from "react";

export default function CounterSolution() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem("count");
        if (storedCount) {
            setCount(Number(storedCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("count", count.toString());
    }, [count]);

    /*
    incrementCount is memoized with useCallback, so its reference won't change across re-renders.
    This would be beneficial if incrementCount were passed as a prop to a child component that's optimized with React.memo.
    Note that we're also using the functional update form of setCount to ensure we always have the latest count value when incrementing.
    */
    const incrementCount = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
}