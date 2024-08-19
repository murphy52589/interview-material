import { useState } from 'react';

function App() {
  const [loanAmount, setLoanAmount] = useState<number>(0.0);
  const [interestRate, setInterestRate] = useState<number>(0.0);
  const [term, setTerm] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) {
      setError('Please enter a valid number for loan amount.');
    } else {
      setError('');
      setLoanAmount(value);
    }
  };

  const handleInterestRateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) {
      setError('Please enter a valid number for interest rate.');
    } else {
      setError('');
      setInterestRate(value);
    }
  };

  const handleTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      setError('Please enter a valid number for term.');
    } else {
      setError('');
      setTerm(value);
    }
  };

  const calculateMonthlyPayment = (): string => {
    if (loanAmount <= 0 || interestRate <= 0 || term <= 0) {
      return '0.00';
    }
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment = 
      (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };

  const calculateTotalPayment = (monthlyPayment: number): string => {
    return (monthlyPayment * term * 12).toFixed(2);
  };

  const calculateTotalInterest = (totalPayment: number): string => {
    return (totalPayment - loanAmount).toFixed(2);
  };

  const monthlyPayment = parseFloat(calculateMonthlyPayment());
  const totalPayment = parseFloat(calculateTotalPayment(monthlyPayment));
  const totalInterest = parseFloat(calculateTotalInterest(totalPayment));

  return (
    <form>
      <div>
        <input type="text" placeholder="Loan Amount" onChange={handleLoanAmountChange} />
        <input type="text" placeholder="Interest Rate (%)" onChange={handleInterestRateChange} />
        <input type="text" placeholder="Term (years)" onChange={handleTermChange} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <p>Monthly Mortgage Payment: ${monthlyPayment}</p>
        <p>Total Payment Amount: ${totalPayment}</p>
        <p>Total Interest Paid: ${totalInterest}</p>
      </div>
    </form>
  );
}

export default App;