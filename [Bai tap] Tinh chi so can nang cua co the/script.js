function checkBMI() {
    let weight = +document.getElementById('weight').value
    let height = +document.getElementById('height').value
    let bmi = weight / (height ** 2)
    if (bmi < 18)
        document.getElementById('mes').innerHTML = "Chỉ số BMI của bạn là: " + bmi + ". Bạn bị thiếu cân đó"
    else if (bmi < 25.0)
        document.getElementById('mes').innerHTML = "Chỉ số BMI của bạn là: " + bmi + ". Bạn bình thường"
    else if (bmi < 30.0)
        document.getElementById('mes').innerHTML = "Chỉ số BMI của bạn là: " + bmi + ". Bạn hơi thừa cân nè"
    else
        document.getElementById('mes').innerHTML = "Chỉ số BMI của bạn là: " + bmi + ". Bạn béo phì rồi"
}