let physic = prompt("Hãy nhập điểm Vật lý")
let chemistry = prompt("Hãy nhập điểm Hóa học")
let biology = prompt("Hãy nhập điểm Sinh học")

let physicNum = Number(physic)
let chemistryNum = Number(chemistry)
let biologyNum = Number(biology)

let sum = physicNum + chemistryNum + biologyNum
let average = sum / 3

alert("Tổng điểm 3 môn là " + sum + ", trung bình 3 môn là " + average)