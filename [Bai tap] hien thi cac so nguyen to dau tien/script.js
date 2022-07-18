let length = +prompt('Nhập số số nguyên tố cần in ra: ')
var n = 2
let count = 0;
let isPrime = true;
while (count < length) {
    checkPrime(n);
    n++
}


function checkPrime(n) {
    let isPrime = true;
    //Check giá trị với 2
    if (n < 2) {
        isPrime = false;

    } else if (n === 2) {
        isPrime = true;
    } else if (n % 2 === 0) {
        isPrime = false;
    } else
        //check số lẻ
        for (let i = 3; i < (n / 2); i += 2) {
            if (n % i === 0) {
                isPrime = false
            }
        }
    if (isPrime === true) {
        document.write(n + "<br>")
        count++
    }
}





