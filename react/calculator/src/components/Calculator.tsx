import {useState} from 'react';
import './Calculator.css';

export default function Calculator() {
    const [input, setInput] = useState('0');

    const handleClick = (value: string) => {
        // checks if input is the +/- toggle
        if (value === '+/-') {
            // if input is negative, do something
            if (input.startsWith('-')) {
                // remove negative signage to make the number positive
                setInput(input.slice(1));
            } else {
                // otherwise, prepend negative sign
                setInput('-' + input);
            }
        } else if (value === '%') {
            // if the % button is clicked, convert the current input to a percentage
            setInput(String(Number(input) / 100));
        } else if (['+', '-', '*', '/'].includes(value)) {
            // if an operator (+, -, *, /) is clicked, append it to the current input with spaces for readability
            setInput(`${input} ${value} `);
        } else {
            // for any other button (numbers, decimal), append its value to the current input
            setInput(input + value);
        }
    };

    const performOperation = (operation: string, num1: number, num2: number) => {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                // if the operation is not recognized, return 0
                return 0;
        }
    };

    const calculate = () => {
        // split the input string into 3 parts (number, operator, number)
        const parts = input.split(' ');
        // double checking that 3 parts exist
        if (parts.length === 3) {
            const num1 = Number(parts[0]); // First number
            const operation = parts[1]; // Operator
            const num2 = Number(parts[2]); // Second number
            const result = performOperation(operation, num1, num2);
            setInput(result.toString());
        } else {
            // if the input format is incorrect, display an error
            setInput('Error');
        }
    };

    const clear = () => setInput('');


    return (
        <section className="calculator">
            <form>
                <input type="text" value={input} readOnly/>
            </form>
            <div className="keypad">
                <button onClick={() => clear()}>AC</button>
                <button onClick={() => handleClick('+/-')}>+/-</button>
                <button onClick={() => handleClick('%')}>%</button>
                <button onClick={() => handleClick('/')}>÷</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>×</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button className='zero' onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={() => calculate()}>=</button>
            </div>
        </section>
    );
}
