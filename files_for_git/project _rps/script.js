const buttons = document.querySelectorAll('.fild-grup-btn')
let scoreIndex = document.querySelector('.score-num').innerText

const params = new URLSearchParams(window.location.search)
let score = params.get('score')

if(score > scoreIndex){
    scoreIndex = score
    console.log(document.querySelector('.score-num').innerText = score);

}

buttons.forEach ((button, i)=>{
    button.addEventListener('click',() => {
        const userChose = i
        const compChose = Math.floor(Math.random() *3)
        window.location.href = `winner.html?user=${userChose}&comp=${compChose}&scoreIndex=${scoreIndex}`
    })
})
