let view = document.getElementById('view');

function inputValue(value) {
    view.value += value;
}

function calculateValue() {
    let result = eval(view.value);
    view.value = result;

}

function delValue() {
    view.value = "";

}
