let sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
let i = 1;
let j = 2;
for (i = 1; i < 10; i++) {
    sout = sout + "<tr>";
    for (j = 2; j < 10; j++) {
        sout = sout + "<td>" + j + "x" + i + "=" + (i * j) + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout)