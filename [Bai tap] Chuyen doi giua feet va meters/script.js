function convert() {
    let number = document.getElementById("from").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;
    if (from === to) {
        result = number;
    } else {
        result = from * number;
    }
    document.getElementById("to").value = result;
    // console.log(result)
    // return result;
}