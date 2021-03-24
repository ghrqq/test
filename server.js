let test = " (57 + 8) * 3/8 +3"; // String for the first task

let example = 11235888; // Number for the second task

// First task
const calculator = (fn) => {
  return new Function("return " + fn)();
};

console.log(calculator(test));

// Second task

const checker = (num) => {
  const firstCheck = num
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");

  if (firstCheck == num) {
    console.log("This number is proper.");
    return num;
  }
  const alternate = num
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .map((i) => parseInt(i));

  const len = alternate.length;

  if (alternate[0] == 0) {
    alternate.shift();
    const result = alternate.map((i) => (i = 9)).join("");
    return result;
  }

  for (let i = len - 1; i >= 0; i--) {
    while (
      num > alternate.join("") &&
      alternate[i] >= alternate[i - 1] &&
      alternate[i] < 9
    ) {
      alternate[i]++;
      if (alternate.join("") > num) {
        alternate[i]--;
        i--;
      }
    }
  }

  return alternate.join("");
};

console.log(checker(example), "is the result");
