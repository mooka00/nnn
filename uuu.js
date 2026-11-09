const currency1 = document.getElementById('currency1')
const currency2 = document.getElementById('currency2')
const button1 = document.querySelector('#show1')
const button2 = document.querySelector('#show2')
const result1 = document.getElementById('result')
const selected = document.getElementById('selected')
button1.addEventListener('click', () => {
    const input = +document.getElementById('input').value
    
    if(Number.isNaN(input)) {
        alert('вы ввели не число'); return
    }
    else if (input < 1){
        alert('вы ввели число меньши 1'); return
    }

    if (currency2.value === 'RUB'){
        if (currency1.value === 'RUB') {
            result = input / 1
        } else if (currency1.value === 'USD') {
            result = input / 90
        } else if (currency1.value === 'EUR') {
            result = input / 100
        } else {
            result = input / 0.2
        }
    }
    if (currency2.value === 'USD'){
        if (currency1.value === 'RUB') {
            result = input * 90
        } else if (currency1.value === 'USD') {
            result = input / 1
        } else if (currency1.value === 'EUR') {
            result = input * 0.9
        } else {
            result = input * 450
        }
    }
    if (currency2.value === 'EUR'){
        if (currency1.value === 'RUB') {
            result = input * 100
        } else if (currency1.value === 'USD') {
            result = input * 90
        } else if (currency1.value === 'EUR') {
            result = input / 1
        } else {
            result = input * 500
        }
    }
    if (currency2.value === 'KZT'){
        if (currency1.value === 'RUB') {
            result = input / 5
        } else if (currency1.value === 'USD') {
            result = input / 450
        } else if (currency1.value === 'EUR') {
            result = input / 500
        } else {
            result = input / 1
        }
    }
    console.log(result)
    result1.innerHTML = result.toFixed(2) + currency1.value
})
button2.addEventListener('click', () => {
    const mini = currency1.value
    currency1.value = currency2.value
    currency2.value = mini
    button1.click()

})