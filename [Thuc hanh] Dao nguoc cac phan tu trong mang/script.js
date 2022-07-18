let x = [7, 8, 9, 10, 11];
console.log(x)
let first = 0;
let last = x.length - 1
while (first < last) {
    let b = x[first];
    x[first] = x[last]
    x[last] = b
    first++
    last--
}
console.log(x)

