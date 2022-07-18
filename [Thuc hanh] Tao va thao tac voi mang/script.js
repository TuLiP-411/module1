var arr = []

function add() {
    let a = document.getElementById("view").value
    arr.push(a)
}

function display() {
    let txt = "";
    for (let i = 0; i < arr.length; i++) {
        txt += "Element " + i + " = " + arr[i] + "<br/>"
    }
    document.getElementById("mes").innerHTML = txt;


}