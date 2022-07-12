let username = prompt('Please input username:')


if (username.trim().toLowerCase() == 'Admin'.toLowerCase()) {
    let password = prompt('Please input password')
    if (password == 'TheMaster') {
        alert("Welcome!")
    } else if (password == null || password=='') {
        alert("Canceled")
    } else {
        alert("Wrong password")
    }
} else if (username == null || username=='') {
    alert("Canceled")
} else {
    alert("I don't know you")
}
