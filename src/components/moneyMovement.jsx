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
        <div style={{marginTop: '0rem'}}>
            {buttonName} amount <span className='validation-error'>{status}</span>
            <input type="number" className="form-control" value={withdrawMoney} onChange={e => numberValidation(e.target.value)} min="0" />
            <br/>
            <button className="btn btn-primary" onClick={() => moneyElements(withdrawMoney, setWithdrawMoney)} disabled={withdrawMoney <= 0} > 
                {buttonName} 
            </button>
        </div>
    );
}