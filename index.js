const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    convert();
})

function convert() {
    var number = document.getElementById("num").value;
    var fromBase = document.getElementById("fromBase").value;
    var toBase = document.getElementById("toBase").value;
    var resultElement = document.querySelector(".result");

    // console.log(number);
    // console.log(fromBase);
    // console.log(toBase);

    if(isNaN(parseInt(number))){
        alert("Vui lòng nhập vào một số để chuyển đổi");
    }
    else {
        const csBase = arrBase(fromBase);
        if(validate(csBase, number)){
            if (fromBase === toBase) {
                alert("Vui lòng chọn cơ số khác nhau để chuyển đổi.");
            }
            else {
                const num = parseInt(number, fromBase);
                const result = num.toString(toBase);
                console.log(resultElement);
                resultElement.innerHTML = result;
            }
        }
        else{
            alert("Cơ số chuyển đổi không phù hợp");
        }
        
    }

}

const validate = (arr, number) => {
    for(it of number){
        if(!arr.includes(it)) return false;
    }
    return true;
}


const arrBase = (option) => {
    switch (option) {
        case "2":
            return ['0', '1']
        case "8":
            return ['0', '1', '2', '3', '4', '5', '6', '7'];
        case "10":
            return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        case "16":
            return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'a', 'b', 'c', 'd', 'e', 'f'];
    }
}


