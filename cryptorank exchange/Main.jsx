import React, {useState, useEffect} from "react";
import Table from "./Table";

function Main() {

  const [moneyToExchange, setMoneyToExchange] = useState('');
  const [error, setError] = useState('');
  const [balance, setBalance] = useState(17042.67);
  const [hasTyped, setHasTyped] = useState(false);
  const [isError, setIsError] = useState(false);

  const onChange = (e) => {
    if (!hasTyped) {
      setHasTyped(true); // First input change detected
    };
    setMoneyToExchange(e.target.value);
  };

  const updateError = () => {
    const amount = Number(moneyToExchange);

    if (!moneyToExchange && hasTyped) {
      setError('Amount cannot be empty');
      setIsError(true);
    }
    else if (amount < 0.01) {
      setError('Amount cannot be less than $0.01');
      setIsError(true);
    }
    else if (amount > balance) {
      setError('Amount cannot exceed the available balance');
      setIsError(true);
    }
    else {
      setError('');
      setIsError(false);
    };
  };

  useEffect(() => {
    updateError();
  }, [moneyToExchange]);

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange $ <input className="w-10" data-testid="amount-input" required type="number" placeholder="USD" value={moneyToExchange} onChange={onChange}/> of my $
            <span>{balance}</span>:
          </label>
          {hasTyped && isError && <p data-testid="error" className="form-hint error-text mt-3 pl-0 ml-0">
            {error}
          </p>}
        </div>
      </section>
      <Table moneyToExchange={moneyToExchange} isError={isError} hasTyped={hasTyped}/>
    </div>
  );
}

export default Main;