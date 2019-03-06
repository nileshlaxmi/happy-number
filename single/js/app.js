const clickFunction = () => {
    computeFunction();
}

const enterKeyFunction = (event) => {
    debugger
    if (event.which == 13 || event.keyCode == 13) {
        computeFunction();
    }
}

const computeFunction = () => {
    let str = document.getElementById('ipText').value;
    if (str !== "") {
        return document.getElementById('opText').innerHTML = str;
    }
    else {
        return document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
