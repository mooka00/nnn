const vibor1 = document.getElementById('vibor1')
const vibor2 = document.getElementById('vibor2')
const button1 = document.getElementById('pokaz')
const button2 = document.getElementById('smena')
const result1 = document.getElementById('result1')
button1.addEventListener('click', () => {
    const input = +document.getElementById('input').value
    if (vibor1.value === 'MM'){
        if  (vibor2.value === 'MM'){
            result = input
        } else if (vibor2.value === 'CM'){
            result = input / 10
        } else if (vibor2.value === 'M'){
            result = input / 1000
        } else {
            result = input / 1000000
        }
    } else if (vibor1.value === 'CM'){
        if  (vibor2.value === 'MM'){
            result = input * 10
        } else if (vibor2.value === 'CM'){
            result = input
        } else if (vibor2.value === 'M'){
            result = input / 100
        } else {
            result = input / 100000
        }
    } else if (vibor1.value === 'M'){
        if  (vibor2.value === 'MM'){
            result = input * 1000
        } else if (vibor2.value === 'CM'){
            result = input * 100
        } else if (vibor2.value === 'M'){
            result = input
        } else {
            result = input / 1000
        }
    } else {
        if  (vibor2.value === 'MM'){
            result = input * 1000000
        } else if (vibor2.value === 'CM'){
            result = input * 100000
        } else if (vibor2.value === 'M'){
            result = input * 1000
        } else {
            result = input 
        }
    }
    result1.innerHTML = result + vibor2.value
})
button2.addEventListener('click', () =>{
    const mini = vibor1.value
    vibor1.value = vibor2.value
    vibor2.value = mini
    button1.click()
})