const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
    const reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}

checkBtn.addEventListener("click", () => {
    const text = inputText.value;

    if (!text) {
        alert("Please input a value");
        return;
    }

    const textWithoutSpaces = text.replace(/\s+/g, "");
    const textOnlyAlphanumeric = textWithoutSpaces.replace(/[^a-zA-Z0-9]/g, "");
    const textLowerCase = textOnlyAlphanumeric.toLowerCase();

    result.innerHTML = isPalindrome(textLowerCase)
        ? `${text} <strong>is a palindrome!</strong>`
        : `${text} <strong>is not a palindrome!</strong>`;
});


