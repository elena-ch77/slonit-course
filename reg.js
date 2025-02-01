let multiply = function (a, b) {
    return a * b;
}
let sum = function (a, b) {
    return a + b;
}
let div = function (a, b) {
    return a / b;
}
let sub = function (a, b) {
    return a - b;
}

function calculate(a, b, selectedOperation) {
    return selectedOperation(a, b);
}
const operations = {
    multiply: multiply,
    sum: sum,
    sub: sub,
    div: div,
};

const selectedOperation = "sum";
console.log(calculate(18, 3, operations[selectedOperation])); // 18
