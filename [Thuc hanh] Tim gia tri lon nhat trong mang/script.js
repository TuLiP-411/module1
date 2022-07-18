let numbers = [-3, 5, 1, 3, 2, 10, 6, -20, 60, 7, 9, 8];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }
}
document.write("Gia tri lon nhat cua mang la: " + max)