function arrowUp() {
    let element = document.getElementById('image');
    element.style.top = parseInt(element.style.top) - 10 + 'px'
}

function arrowDown() {
    let element = document.getElementById('image');
    element.style.top = parseInt(element.style.top) + 10 + 'px'
}

function arrowLeft() {
    let element = document.getElementById('image');
    element.style.left = parseInt(element.style.left) - 10 + 'px'
}

function arrowRight() {
    let element = document.getElementById('image');
    element.style.left = parseInt(element.style.left) + 10 + 'px'
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            arrowLeft()
            break;
        case 38:
            arrowUp()
            break;
        case 39:
            arrowRight()
            break;
        case 40:
            arrowDown()
            break;
    }

}

function doReady() {
    window.addEventListener('keydown', moveSelection)

}