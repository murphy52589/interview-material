import { useState } from 'react';
import './Calculator.css';

type ButtonProps = {
  value: string;
  onClick: (value: string) => void;
  className?: string;
};

const Button = ({ value, onClick, className = '' }: ButtonProps) => (
  <button className={className} onClick={() => onClick(value)}>
    {value}
  </button>
);

export default function Calculator() {
  const [input, setInput] = useState<string>('0');

  const handleClick = (value: string): void => {
    switch (value) {
      case '+/-':
        setInput(input.startsWith('-') ? input.slice(1) : '-' + input);
        break;
      case '%':
        setInput(String(Number(input) / 100));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        setInput(`${input} ${value} `);
        break;
      default:
        setInput(input === '0' ? value : input + value);
        break;
    }
  };

  const performOperation = (operation: string, num1: number, num2: number): number => {
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
        return 0;
    }
  };

  const calculate = (): void => {
    const parts = input.split(' ');
    if (parts.length === 3) {
      const num1 = Number(parts[0]);
      const operation = parts[1];
      const num2 = Number(parts[2]);
      const result = performOperation(operation, num1, num2);
      setInput(result.toString());
    } else {
      setInput('Error');
    }
  };

  const clear = (): void => setInput('');

  return (
    <section className="calculator">
      <form>
        <input type="text" value={input} readOnly />
      </form>
      <div className="keypad">
        <Button value="AC" onClick={clear} />
        <Button value="+/-" onClick={handleClick} />
        <Button value="%" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="0" onClick={handleClick} className="zero" />
        <Button value="." onClick={handleClick} />
        <Button value="=" onClick={calculate} />
      </div>
    </section>
  );
}