const button = document.getElementById("button")
let result = 0
let error = false

button.addEventListener('click', () => {
    document.getElementById('firsterror').textContent = ""
    document.getElementById('thirderror').textContent = ""
    document.getElementById('result').textContent = ""
    const first = +document.getElementById("firstInput").value
    const third = +document.getElementById("thirdInput").value
    if (Number.isNaN(first)) {
        document.getElementById('firsterror').textContent = "error вы ввели не число"
        error = true
    }
    if (Number.isNaN(third)) {
        document.getElementById('thirderror').textContent = "error вы ввели не число"
        error = true
    }
    result = first / (third ** 2)
    if (error) {
        error = false; return
    } else {
        if (result < 18.5){
            result.style.color = 'lime'
        } else if (result < 25){
            result.style.color = 'green'
        } else if (result < 30){
            result.style.color = 'yellow'
        } else if (result < 35){
            result.style.color = 'orange'
        } else if (result < 40){
            result.style.color = 'green'
        }
        document.getElementById('result').textContent = result
    }
})