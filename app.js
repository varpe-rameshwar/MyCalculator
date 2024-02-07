document.addEventListener("DOMContentLoaded", () => {
    let display = document.querySelector("input");
    let buttons = document.querySelectorAll(".digit, .operator");

    buttons.forEach((digit) => {
        digit.addEventListener('click', () => {
            handleButtons(digit.innerText);
        })
    })

    function handleButtons(val) {
        switch (val) {
            case 'AC':
                clearDisplay();
                break;
            case '%':
            case '/':
            case '*':
            case '-':
            case '+':
                handleOperators(val);
                break;
            case '.':
                handleFloatingPoint(val);
                break;
            case '=':
                handleResult();
                break;
            case '⌫':
                handleDelete();
                break;
            default:
                handleClickedDigit(val);
                break;
        }
    }

    function clearDisplay() {
        display.value = '';
    }

    function handleClickedDigit(val) {
        display.value += val;
    }

    const operators = ['%','/', '*', '+', '-'];
    function handleOperators(val) {
        let displayLength = display.value.length
        let lastChar = display.value.charAt(displayLength - 1);
        if (!operators.includes(lastChar) && displayLength != 0 && lastChar != '.') {
            display.value += val;
        }
    }

    function handleFloatingPoint(val) {
        let status = true;
        let i = display.value.length - 1;
        while (!operators.includes(display.value.charAt(i)) && i >= 0) {
            if (display.value.charAt(i) == '.') {
                status = false;
            }
            i--;
        }

        let len = display.value.length;

        let lastChar = display.value.charAt(len - 1);

        if (status == true && len != 0 && !operators.includes(lastChar)) {
            display.value += val;
        }
    }

    function handleDelete(){
        let displayArr = display.value.split('');
        displayArr.pop();
        display.value = displayArr.join('');
    }

    // function getLeftOperand(resultString,j){
    //     let leftNumber = '';
    //     let i = j-1;
    //     while(!operators.includes(resultString.charAt(i)) && i >= 0){
    //         leftNumber = resultString.charAt(i) + leftNumber;
    //         i--;
    //     }
    //     return Number(leftNumber);
    // }

    // function getRightOperand(resultString,j){
    //     let rightNumber = '';
    //     let i = j + 1;
    //     while(!operators.includes(resultString.charAt(i)) && i < resultString.length){
    //         rightNumber += resultString.charAt(i);
    //         i++;
    //     }
    //     return Number(rightNumber);
    // }

    // function calculateExpression(resultString, j) {
    //     let leftOperand = getLeftOperand(resultString, j);
    //     let rightOperand = getRightOperand(resultString, j);
    //     switch (resultString.charAt(j)) {
    //         case '/':
    //             return leftOperand / rightOperand;
    //         case '*':
    //             return leftOperand * rightOperand;
    //         case '-':
    //             return leftOperand - rightOperand;
    //         case '+':
    //             return leftOperand + rightOperand;
    //         case '%':
    //             return leftOperand % rightOperand;
    //     }
    // }

    // function getReplacableString(resultString,j){
    //     let replacableString = '';
    //     for(let i = j - 1; !operators.includes(resultString.charAt(i)) && i >= 0; i--){
    //         // begin = i;
    //         replacableString = resultString.charAt(i) + replacableString;
    //     }
    //     for(let k = j; !operators.includes(resultString.charAt(k)) && k < resultString.length; k++){
    //         // end = k;
    //         replacableString += resultString.charAt(k);
    //     }
    //     return replacableString;
    // }

    const handleResult = () => {
    //     let operatorPrecedency = ['%','/','*','-','+'];
        display.value = eval(display.value); 123*34/2+657-23
        // let resultString = display.value;
        // let newResult = '';
        // let result;
        // for(let i = 0; i < operatorPrecedency.length; i++){
        //     for(let j = 0; j < resultString.length;j++){
        //         if(operatorPrecedency[i] == resultString.charAt(j)){
        //             result = calculateExpression(resultString,j);//result = 17
        //             // resultString = replacableString(resultString,j);
        //             // newResult = resultString.replace(getReplacableString(resultString,j),result);
        //             let replacableString = getReplacableString(resultString,j);
        //             resultString = resultString.substring(0,j-replacableString.length) +
        //                             result +
        //                             resultString.substring(replacableString.length);

        //         }
        //     }
        // }
        // display.value = resultString;
    }
})