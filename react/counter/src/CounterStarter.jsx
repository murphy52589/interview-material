import { useEffect, useState, useCallback } from "react";

export default function CounterSolution() {

    return (
        <div>
            <p>You clicked X times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
}