import React, { useState, useEffect } from 'react';

import './LoanForm.css';

export default function LoanForm(props) {
  const [loan, setLoan] = useState({
    name: '',
    isMonthly: true,
    principal: 0,
    downPayment: 0,
    term: 60,
    apr: 3.0,
  });

  useEffect(() => {
    console.log(loan);
  })

  const handleChange = (e) => {
    setLoan({
      ...loan,
      [e.target.name]: e.target.value
    });
  }

  const handleRadio = (e) => {
    e.target.value === 'yearly'
      ? setLoan({
        ...loan,
        isMonthly: false
      })
      : setLoan({
        ...loan,
        isMonthly: true
      });
  }

  return (
    <div className="form-wrapper">
      <form>

        <div className="input-wrapper">
          <label className="input-label">
            Loan name
            <input
              className="form-input"
              type="text"
              name="name"
              defaultValue={`Loan ${props.loanCount}`}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-wrapper">
          <label className="input-label">
            Payment Frequency
            <input
              className="form-input"
              type="radio"
              name="frequency"
              value="monthly"
              onClick={handleRadio}
              defaultChecked
            />Monthly
            <input
              className="form-input"
              type="radio"
              name="frequency"
              value="yearly"
              onClick={handleRadio}
            />Yearly
          </label>
        </div>

        <div className="input-wrapper">
          <label className="input-label">
            Principal
            <input
              className="form-input"
              type="number"
              name="principal"
              defaultValue="0"
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="input-wrapper">
          <label className="input-label">
            Down Payment
            <input
              className="form-input"
              type="number"
              name="downPayment"
              defaultValue="0"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-wrapper">
          <label className="input-label">
            Term
            <input
              className="form-input"
              type="number"
              name="term"
              defaultValue="60"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="input-wrapper">
          <label className="input-label">
            APR
            <input
              className="form-input"
              type="number"
              name="apr"
              defaultValue="3.0"
              onChange={handleChange}
            />
          </label>
        </div>

      </form>
    </div>
  );
}
