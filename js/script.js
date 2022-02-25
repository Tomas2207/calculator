let operator = "";
let number = "";
let number2 = "";
let n1 = "";
let n2 = "";
let result = 0;
let second = false;

const resultContainer = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let a = parseInt(button.id);

    if (Number.isNaN(a)) {
      if (second) {
        result = operate(number, operator, number2);
        resultContainer.innerHTML = result;
        if (button.id === "=") {
          second = false;
          number = result;
          n2 = "";
        } else {
          number = result;
          n2 = "";
          operator = button.id;
        }

        console.log(result);
      } else {
        operator = button.id;
        second = true;
      }
    } else if (second === false) {
      number = numberOne(button.id);
      resultContainer.innerHTML = number;
    } else if (second) {
      number2 = numberTwo(button.id);
      resultContainer.innerHTML = number2;
    }
    console.log(
      "number: " + number + " operator: " + operator + "otherN: " + number2
    );
  });
});

const numberOne = function (...numbers) {
  for (let number of numbers) {
    n1 += number;
  }
  console.log(n1);
  return n1;
};
const numberTwo = function (...numbers) {
  for (let number of numbers) {
    n2 += number;
  }
  return n2;
};

const operate = function (n1, op, n2) {
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;

    case "-":
      result = subtract(n1, n2);
      break;

    case "x":
      result = multiply(n1, n2);
      break;

    case "/":
      result = divide(n1, n2);
      break;

    default:
      alert("not valid");
  }
  return result;
};

const add = function (n1, n2) {
  let result = +n1 + +n2;
  return result;
};

const subtract = function (n1, n2) {
  let result = +n1 - +n2;
  return result;
};

const multiply = function (n1, n2) {
  let result = +n1 * +n2;
  return result;
};

const divide = function (n1, n2) {
  let result = +n1 / +n2;
  return result;
};
