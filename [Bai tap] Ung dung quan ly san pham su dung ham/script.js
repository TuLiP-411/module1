let arr = [];

function displayProduct() {
    let data = "<table class=\"table table-striped\" >"
    data += "<tr>" + "<td colspan='2'> " + "<h3>" + "Display All Product" + "</h3>" + "</td>" + "<td>" + arr.length + " products" + "</td>" + "</tr>"
    for (let i = 0; i < arr.length; i++) {
        data += "<tr>" + "<td id=" + i + ">" + arr[i] + "</p></td>"
        data += "<td>" + "<button class=\"btn btn-outline-success\" onclick='editProduct(" + i + ")'>" + "Edit" + "</button>" + "&emsp;" +
            "<button class=\"btn btn-outline-primary\" onclick='saveProduct(" + i + ")'>" + "Save" + "</button>" + "</td>"
        data += "<td>" + "<button class=\"btn btn-outline-danger\" onclick='deleteProduct(" + i + ")'>" + "Delete" + "</button>" + "</td>" + "</tr>";
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data;
}

function addProduct() {
    let newProduct = document.getElementById("newProduct").value;
    if (newProduct == "") {
        alert("Please input new product")
    } else {
        arr.push(newProduct);
        displayProduct()
        document.getElementById("newProduct").value = "";
    }
}

function editProduct(buttonIndex) {
    document.getElementById(buttonIndex).contentEditable = true;
}

function saveProduct(buttonIndex) {
    document.getElementById(buttonIndex).contentEditable = false;
}


function deleteProduct(buttonIndex) {
    arr.splice(buttonIndex, 1);
    displayProduct();
}
