function soma() {
    let num1 = document.getElementById("primNum").value;
    let num2 = document.getElementById("segNum").value;

    document.getElementById("result").innerHTML = parseInt(num1 + num2);
}

function subtrai() {
    let num1 = document.getElementById("primNum").value;
    let num2 = document.getElementById("segNum").value;

    document.getElementById("result").innerHTML = parseInt(num1 - num2);
}

function multiplica() {
    let num1 = document.getElementById("primNum").value;
    let num2 = document.getElementById("segNum").value;

    document.getElementById("result").innerHTML = parseInt(num1 * num2);
}

function divide() {
    let num1 = document.getElementById("primNum").value;
    let num2 = document.getElementById("segNum").value;

    document.getElementById("result").innerHTML = parseInt(num1 / num2);
}

function calcula(operacao) {
    let num1 = parseFloat(document.getElementById("primNum").value);
    let num2 = parseFloat(document.getElementById("segNum").value);

    switch(operacao) {
        case 'soma':
            document.getElementById("result").value = num1 + num2;
            console.log(num1 + num2);
            break;
        case 'subtrai':
            document.getElementById("result").value = num1 - num2;
            console.log(num1 - num2);
            break;
        case 'multiplica':
            document.getElementById("result").value = num1 * num2;
            console.log(num1 * num2);
            break;
        case 'divide':
            document.getElementById("result").value = num1 / num2;
            console.log(num1 / num2);
            break;
        default:
            console.log('err');
    }

    // desafio
    // fazer com que o número, quando negativo, apareça na cor vermelha
}