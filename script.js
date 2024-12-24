//capitalize str
export function capitalize(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//reverse str
export function reverse(string) {
  if (!string) return "";
  return string.split("").reverse().join("");
}

// calculator
export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

//caesarCipher
export function caesarCipher(str, shift) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // For uppercase lett
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    // For lowercase lett
    else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    // Non-alphabetical chars
    else {
      result += str[i];
    }
  }
  return result;
}

export function analyzeArray(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
