let value = prompt('Type a number');
switch (Math.abs(value) / value) {
    case (1):
        alert('1')
        break;
    case (-1):
        alert('-1')
        break;
    default:
        alert('0')
}
