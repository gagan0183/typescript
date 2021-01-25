function combines(number1, number2) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        return number1 + number2;
    }
    else {
        return number1.toString() + number2.toString();
    }
}
console.log(combines(1, 9));
console.log(combines("Max", "Anna"));
