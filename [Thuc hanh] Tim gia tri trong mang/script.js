function check() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let a = document.getElementById('input').value
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            document.getElementById('mes').innerHTML = a + " là phần tử " + i + " của mảng"
        }
    }
}