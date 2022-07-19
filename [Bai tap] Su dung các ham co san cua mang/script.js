// bai1
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString())
console.log(myColor.join())
console.log(myColor.join('+'))

// bai2
let a = prompt('Enter the number string: ')
let str = a.toString()
let result = [str[0]]
for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 == 0 && str[i + 1] % 2 == 0) {
        result.push('-', str[i + 1])

    } else result.push(str[i + 1])

}
console.log(result.join(''))

//bai3
let str = prompt('Enter the string: ')
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
var result = [];
for (let i = 0; i < str.length; i++) {
    if (UPPER.indexOf(str[i]) == -1) {
        result += str[i].toUpperCase()
    } else if (LOWER.indexOf(str[i]) == -1) {
        result += str[i].toLowerCase()
    }
}
console.log(result)
