const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let msg = "";
let isValidInput = true;

const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

const convertNumber = (inputInt) => {
    let result = '';
    
    for (let i = 0; i < romanNumerals.length; i++) {
        while (inputInt >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            inputInt -= romanNumerals[i].value;
        }
    }
    return result;
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (isNaN(inputInt)) {
        msg = "Please enter a valid number";
        isValidInput = false;
    } else if (inputInt < 0) {
        msg = "Please enter a number greater than or equal to 1";
        isValidInput = false;
    } else if (inputInt >= 4000) {
        msg = "Please enter a number less than or equal to 3999";
        isValidInput = false;
    } else {
        msg = convertNumber(inputInt);
        isValidInput = true;
    }
    return msg;
}

const changeColor = () => {
    const newColor = isValidInput ? 'hsla(0, 100%, 100%, 0.3)' : 'hsla(0, 100%, 50%, 0.3)';
    output.style.setProperty('--container-color', newColor);
}

const showMsg = () => {
    output.classList.remove("hidden");
    output.innerText = checkUserInput();
    changeColor();
}

convertBtn.addEventListener("click", showMsg);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showMsg();
    }
});
