const billNumber = document.getElementById('bill-number')
const peopleNumber = document.getElementById('people-input')
const resetBtn = document.querySelector('.reset')
const selecttipBtn = document.getElementById('selecttip-btn')
const custom = document.getElementById('custom')
// const inputTip = document.getElementsByTagName('input.')


resetBtn.addEventListener(('click'), () => {
    peopleNumber.value = "1"
    billNumber.value = "10"
    custom.value = "5"
    document.getElementById('selecttip-btn').style.display = 'block'
    custom.style.display= 'none'
    document.getElementById('result-tip').innerText = `0`
    document.getElementById('result-total').innerText = `0`
})

document.getElementById('five-percent').addEventListener('click', ()=>{
    sum()
})
document.getElementById('ten-percent').addEventListener('click', ()=>{
    sum()
})
document.getElementById('fifteen-percent').addEventListener('click', ()=>{
    sum()
})
document.getElementById('twenty-percent').addEventListener('click', ()=>{
    sum()
})
document.getElementById('twenty-five-percent').addEventListener('click', ()=>{
    sum()
})

billNumber.addEventListener('input', () => {
    if(Number(billNumber.value) <= 0){
        billNumber.value = "10"
    }
    sum()
})
peopleNumber.addEventListener('input', () => {
    if(Number(peopleNumber.value) < 1){
        peopleNumber.value = "1"
    }
    sum()
})


const sum = () => {
    const orBillNumber = Number(billNumber.value)
    const origPeopleNumber = Number(peopleNumber.value)
    const selecktedRadioTip = document.querySelector('input[name="tip"]:checked')
    let tipPersentage = Number(selecktedRadioTip.value.slice(0, -1))
    let multiplier= (orBillNumber / 100) * tipPersentage  
    const tip = (multiplier / origPeopleNumber).toFixed(2)
    const tipsum = ((orBillNumber + multiplier)/origPeopleNumber).toFixed(2)
    
    document.getElementById('result-tip').innerText = `$${tip}`
    document.getElementById('result-total').innerText = `$${tipsum}`

}

document.getElementById('selecttip-btn').addEventListener('click', ()=>{
    document.getElementById('selecttip-btn').style.display = 'none'
    custom.style.display= 'block'
    custom.addEventListener('input', () =>{
    const orBillNumber = Number(billNumber.value)
    const origPeopleNumber = Number(peopleNumber.value)
    let tipPersentage = Number(custom.value)
    let multiplier= (orBillNumber / 100) * tipPersentage  
    const tip = (multiplier / origPeopleNumber).toFixed(2)
    const tipsum = ((orBillNumber + multiplier)/origPeopleNumber).toFixed(2)
    
    document.getElementById('result-tip').innerText = `$${tip}`
    document.getElementById('result-total').innerText = `$${tipsum}`
    })
})