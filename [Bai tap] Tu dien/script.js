function lookUp() {
    let arr1 = ["banana", "apple", "fish", "dog", "cat", "flower", "goat", "boy", "girl", "sun", "star", "cake", "candy", "fruit"]
    let arr2 = ["chuối", "táo", "cá", "chó", "mèo", "hoa", "dê", "cậu bé", "cô bé", "mặt trời", "ngôi sao", "bánh", "kẹo", "trái cây"]
    let word = document.getElementById("input").value;
    let result = "Không tìm thấy kết quả"
    for (let i = 0; i < arr1.length; i++) {
        if (word == arr1[i]) {
            result = arr2[i];
        }
    }
    document.getElementById("meaning").innerHTML = word + " : " + result;
    document.getElementById("input").value = "";
}