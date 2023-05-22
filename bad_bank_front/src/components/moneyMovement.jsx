import React from 'react';
import { validatePositiveNumber, validateEmptyFields } from '../validations';

export default function MoneyMovement({ buttonName, moneyElements }){
    const [withdrawMoney, setWithdrawMoney] = React.useState(0);
    const [status, setStatus] = React.useState('Only numbers are accepted in this operation');

    function numberValidation(numberField){
        const errorMessage = [validateEmptyFields(numberField), validatePositiveNumber(numberField)];
        const error = errorMessage[0] ? errorMessage[0] : errorMessage[1];
        setWithdrawMoney(numberField);
        setStatus(error);
    }

    return (
        <div style={{marginTop: '0rem'}}>
            {buttonName} amount <span className='validation-error'>{status}</span>
            <input type="text" className="form-control" value={withdrawMoney} onChange={e => numberValidation(e.target.value)} />
            <br/>
            <button className="btn btn-primary" onClick={() => moneyElements(withdrawMoney, setWithdrawMoney)} disabled={status} > 
                {buttonName} 
            </button>
        </div>
    );
}