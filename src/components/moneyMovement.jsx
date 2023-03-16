import React from 'react';
import { validatePositiveNumber } from '../validations';

export default function MoneyMovement({ buttonName, moneyElements }){
    const [withdrawMoney, setWithdrawMoney] = React.useState(0);
    const [status, setStatus] = React.useState('');

    function numberValidation(numberField){
        const errorMessage = validatePositiveNumber(numberField);
        setWithdrawMoney(numberField);
        setStatus(errorMessage);
    }

    return (
        <div>
            <input type="number" className="form-control" value={withdrawMoney} onChange={e => numberValidation(e.target.value)} min="0" />
            {status}
            <br/>
            <button className="btn btn-primary" onClick={() => moneyElements(withdrawMoney, setWithdrawMoney)} disabled={withdrawMoney <= 0} > {buttonName} </button>
        </div>
    );
}