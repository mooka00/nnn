const button = document.getElementById("button")
let result = 0
let error = false
function roundTo(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }
button.addEventListener('click', () => {
    document.getElementById('firsterror').textContent = ""
    document.getElementById('thirderror').textContent = ""
    document.getElementById('result').textContent = ""
    document.getElementById('result2').textContent = ""
    const resultEl = document.getElementById('result')
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
            color = 'lime'; document.getElementById('result2').textContent = 'у вас недовес'
        } else if (result < 25){
            color = 'green'; document.getElementById('result2').textContent = 'у вас норма'
        } else if (result < 30){
            color = 'yellow'; document.getElementById('result2').textContent = 'у вас маленький перевес'
        } else if (result < 35){
            color = 'orange'; document.getElementById('result2').textContent = 'у вас ожирение 1 степени'
        } else if (result < 40){
            color = 'orangered'; document.getElementById('result2').textContent = 'у вас ожирение 2 степени'
        } else{
            color = 'red'; document.getElementById('result2').textContent = 'у вас ожирение 3 степени'
        }
        resultEl.style.color = color
        resultEl.textContent = result.toFixed(2)
    }
})