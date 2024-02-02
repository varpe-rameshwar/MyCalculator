let input = document.querySelector("input");
let number;

const zero = document.querySelector("#zero");
const onClickZero = () => {
    // input.value = value;
    // console.log(zero.innerText);
    let btnValue = Number(zero.innerText);
    input.value += btnValue; 
    number = input.value;
}
zero.addEventListener('click', onClickZero)

const one = document.querySelector("#one");
const onClickOne = () => {
    let btnValue = Number(one.innerText);
    input.value += btnValue;
    number = input.value;
}
one.addEventListener('click',onClickOne);

const two = document.querySelector("#two");
const onClickTwo = () => {
    let btnValue = Number(two.innerText);
    input.value += btnValue;
    number = input.value;
}
two.addEventListener('click',onClickTwo);

const three = document.querySelector("#three");
const onClickThree = () =>{
    let btnValue = Number (three.innerText);
    input.value += btnValue;
    number = input.value;
}
three.addEventListener('click',onClickThree);


const four = document.querySelector("#four");
four.addEventListener('click', () =>{
    let btnValue = Number (four.innerText);
    input.value += btnValue;
    number = input.value;
});

const five = document.querySelector("#five");
five.addEventListener('click', () => {
    let btnValue = Number(five.innerText);
    input.value += btnValue; 
    number = input.value;
});

const six = document.querySelector("#six");
six.addEventListener('click', () => {
    let btnValue = Number(six.innerText);
    input.value += btnValue;
    number = input.value;
});

const seven = document.querySelector("#seven");
seven.addEventListener('click', () => {
    let btnValue = Number(seven.innerText);
    input.value += btnValue;
    number = input.value;
});

const eight = document.querySelector("#eight");
eight.addEventListener('click', () => {
    let btnValue = Number(eight.innerText);
    input.value += btnValue;
    number = input.value;
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    let btnValue = Number(nine.innerText);
    input.value += btnValue;
    number = input.value;
});
//

const operators = ['/', '*', '-', '+'];

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    let btnValue = plus.innerText;
    input.value += btnValue;
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    let btnValue = minus.innerText;
    input.value += btnValue;
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    let btnValue = divide.innerText;
    input.value += btnValue;
});

const multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
    let btnValue = multiplication.innerText;
    input.value += btnValue;
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    let btnValue = equal.innerText;
    input.value += btnValue;
});
