const addAndHandle = (number1: number, number2: number, cb: (result: number) => void): number => {
    return number1 + number2;
}

addAndHandle(10, 90, (result) => {
    console.log(result);
});
