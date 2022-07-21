let number = prompt("Nhập số nguyên tố cần check")
checkPrime(number)

function checkPrime(n) {
    let isPrime = true;
    //Check giá trị với 2
    if (n < 2) {
        isPrime = false;

    } else if (n == 2) {
        isPrime = true;
    } else if (n % 2 == 0) {
        isPrime = false;
    } else
        //check số lẻ
        for (let i = 3; i < (n / 2); i += 2) {
            if (n % i === 0) {
                isPrime = false
                break;
            }
        }
    if (isPrime == true) {
        alert(n + " là số nguyên tố")
    } else {
        alert(n + " không phải là số nguyên tố")
    }
}