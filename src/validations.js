export function validateEmptyFields(inputData){
    return inputData ? '' : 'This field is required';
}

export function validateStringLength(inputData, stringLength){
    return inputData.length >= stringLength ? '' : `A minimum number of ${stringLength} characters is required`;
}

export function validateEmailFormat(inputData){
    return inputData.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? '' : 'Invalid email format';
}

export function validatePositiveNumber(inputData){
    return inputData >= 0 ? '' : 'A positive number is required';
}
