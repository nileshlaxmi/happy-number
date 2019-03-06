const clickFunction = () => {
    computeFunction();
}

const enterKeyFunction = (event) => {
    if (event.which == 13 || event.keyCode == 13) {
        computeFunction();
    }
}

const computeFunction = () => {
    let str = document.getElementById('ipText').value;
    if (str !== "") {
        let num = Number(str);
        let sq;
        if (num < 10) {
            sq = num * num;
            if (sq < 10) {
                if (sq === 1) {
                    return document.getElementById('opText').innerHTML = "Happy Number";
                } else {
                    return document.getElementById('opText').innerHTML = "Unhappy Number";
                }
            } else {
                sumOfAllDigitsInANumber(sq);
            }
        } else {
            sumOfAllDigitsInANumber(num);
        }
    } else {
        return document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function sumOfAllDigitsInANumber(n) {
    debugger
    let ar = n.toString().split("");
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum+Number(ar[i])*Number(ar[i]);
    }
    if(sum === 1){
        return document.getElementById('opText').innerHTML = "Happy Number";
    }
    else if(sum > 1 && sum < 10){
        return document.getElementById('opText').innerHTML = "Unhappy Number";
    }
    else{
        sumOfAllDigitsInANumber(sum);
    }
}

function clearFields() {
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}