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
    let num = parseInt(str);

    if (str !== "") {
        for (let i = 1; i < num; i++) {
            let ar = i.toString().split("");
            let sum = 0;

            for (let j = 0; j < ar.length; j++) {
                let number = parseInt(ar[j]);
                sum = sum + Math.pow(number, (j + 1));
            }

            if (sum === i) {
                var para = document.createElement("p");
                para.innerHTML = "Disarium Numbers " + i;
                return document.getElementById('opText').appendChild(para);
            }
        }
    }
    else {
        return document.getElementById('opText').innerHTML = "Please enter a number";
    }
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}
