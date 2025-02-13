const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const regex = /^1?\s*\(?[1-9]\d{2}\)?\s*-?[1-9]\d{2}\s*-?[1-9]\d{3}$/;

const checkInput = () => {

  if (userInput.value.trim() === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = regex.test(userInput.value);
  const msg = isValid
    ? "Valid US number: "
    : "Invalid US number: ";

  const newParagraph = document.createElement("p");
  newParagraph.textContent = msg + userInput.value.replace(/\s+/g, " ").trim();
  newParagraph.style.color = isValid ? "#127b30" : "#7b1212";
  results.appendChild(newParagraph);

  userInput.value = "";
};

checkBtn.addEventListener("click", checkInput);

checkBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showMsg();
    }
});

clearBtn.addEventListener("click", () => (results.innerHTML = ""));
