function OddNumbers(firstNumber, secondNumber) {
    for (let i = firstNumber; i < secondNumber; i++) {
        if (i % 2 == 1) {
            console.log("this is an odd number which is: " + i );
        }
    }
}

OddNumbers(200,220);