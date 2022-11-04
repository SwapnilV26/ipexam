let raedLine = require('readline-sync');

function calculatoe() {
    let input = 'y';
    while (input != 'n') {
        const op = raedLine.question("Choose the operation:" + "\n1. Addition" + "\n2. Subtraction" + "\n3. Multiplication" + "\n4. Division\n");

        const num1 = raedLine.questionFloat("Enter first num: ");
        const num2 = raedLine.questionFloat("Enter second num: ");

        switch (op) {
            case '1':
                console.log("The result of " + num1 + " + " + num2 + " = " + (num1 + num2));
                break;
            case '2':
                console.log("The result of " + num1 + " - " + num2 + " = " + (num1 - num2));
                break;
            case '3':
                console.log("The result of " + num1 + " * " + num2 + " = " + (num1 * num2));
                break;
            case '4':
                console.log("The result of " + num1 + " / " + num2 + " = " + (num1 / num2).toFixed(2));
                break;
            default: console.log("Invalid Opration");
        }
        input = raedLine.question("Do u want to continue: ");
    }
}

calculatoe();