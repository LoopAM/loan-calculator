import React, { useState } from 'react';

import LoanForm from '../../components/LoanForm/LoanForm.js';
import './CalculatorPage.css';

export default function CalculatorPage() {
  const [loanCount, setLoanCount] = useState(1);

  return (
    <div className="calculator-page-wrapper">

      <div className="instructions-wrapper">
        <p className="instructions-text">Instructions text here, ya-da ya-da ya-da</p>
      </div>

      <div className="loan-forms-container">
        <LoanForm loanCount={loanCount} />
      </div>

      <button className="add-form-btn">Add Another Loan</button>
    </div>
  );
}
