
const button = document.getElementById("button")
let result = 0
let error = false
button.addEventListener('click', () => {
    document.getElementById('firsterror').textContent = ""
    document.getElementById('thirderror').textContent = ""
    document.getElementById('seconderror').textContent = ""
    document.getElementById('result').textContent = ""
    const first = +document.getElementById("firstInput").value
    const second = document.getElementById("secondInput").value
    const third = +document.getElementById("thirdInput").value
    if (Number.isNaN(first)) {
        document.getElementById('firsterror').textContent = "error вы ввели не число"
        error = true
    }
    if (Number.isNaN(third)) {
        document.getElementById('thirderror').textContent = "error вы ввели не число"
        error = true
    }
    if (second === "+") {
        result = first + third
    } else if (second === "-") {
        result = first - third
    } else if (second === "*") {
        result = first * third
    } else if (second === "/") {
        result = first / third
    } else {
        document.getElementById('seconderror').textContent = "error вы ввели недопустимое значение"
        error = true
    }
    if (error) {
        error = false; return
    } else {
        document.getElementById('result').textContent = result
    }
})