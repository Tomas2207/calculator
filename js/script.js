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
      if (button.id === "ac") {
        reset();
        console.log("numbers" + n1 + n2);
        second = false;
        result = 0;
        resultContainer.innerHTML = result;
      }
      if (button.id === "dot") {
        if (second === false) {
          n1 += ".";
          console.log(n1);
          resultContainer.innerHTML = Math.round(+number * 100) / 100;
        } else {
          n2 += ".";
          console.log(n2);
          resultContainer.innerHTML = Math.round(+number2 * 100) / 100;
        }
      }
      if (button.id === "maso") {
        if (second === false) {
          if (number > 0) {
            number = "-" + number;
            console.log(n1);
          } else {
            number = Math.abs(number);
          }
          resultContainer.innerHTML = number;
        } else {
          if (number2 > 0) {
            number2 = "-" + number2;
            console.log(n2);
          } else {
            number2 = Math.abs(number2);
          }
          resultContainer.innerHTML = number2;
        }
      }
      if (second && button.id !== "dot" && button.id !== "maso") {
        result = operate(number, operator, number2);
        resultContainer.innerHTML = Math.round(+result * 100) / 100;
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
      } else if (
        button.id !== "ac" &&
        (button.id !== "dot") & (button.id !== "maso")
      ) {
        operator = button.id;
        second = true;
      }
    } else if (second === false) {
      number = numberOne(button.id);
      resultContainer.innerHTML = Math.round(+number * 100) / 100;
    } else if (second) {
      number2 = numberTwo(button.id);
      resultContainer.innerHTML = Math.round(+number2 * 100) / 100;
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
    case "%":
      result = remain(n1, n2);
      break;

    default:
      // alert("not valid");
      reset();
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

const remain = function (n1, n2) {
  let result = (n2 * n1) / 100;
  return result;
};

const reset = function () {
  n1 = "";
  n2 = "";
  number = 0;
  number2 = 0;
};
