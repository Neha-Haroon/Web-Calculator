function getResult(f) {
    var a = document.getElementById("field")
    a.value += f
    console.log(a.value)
}

function printResult() {
    var a = document.getElementById('field')
    a.value = eval(a.value)
}

function restart() {
    var a = document.getElementById('field')
    a.value = ''
}