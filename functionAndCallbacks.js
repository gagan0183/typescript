var addAndHandle = function (number1, number2, cb) {
    return number1 + number2;
};
addAndHandle(10, 90, function (result) {
    console.log(result);
});
