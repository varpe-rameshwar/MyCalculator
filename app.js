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

    const operators = ['/', '*', '+', '-'];
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

    const handleResult = () => {
        display.value = eval(display.value);
    }
})