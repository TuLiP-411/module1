let num = +prompt("Enter a number: ");
let total = num;
while (num != -1) {
    num = +prompt("Enter a number: ");
    alert("Tổng là: " + total + "+" + "(" + num + ")")
    total += num;
}
alert("Tổng các số đã nhập là: " + total)