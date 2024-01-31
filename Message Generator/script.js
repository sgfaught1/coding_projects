let messages = ['Hey there!', "hi y'all!", "it's so good to see you again!", 'whaddup homie', 'uh, what do you want?'];

let randMessageGenerator = () => {
    let randNum = Math.floor(Math.random() * messages.length)
    return messages[randNum]
}

let button = document.getElementById('message-button')
let newText = document.getElementById('to-change')

button.addEventListener('click', function() {
    newText.innerHTML = randMessageGenerator()
})



let reset = document.getElementById('reset-button')
let resetText = document.getElementById('reset-text')

reset.addEventListener('click', function() {
    location.reload()
    
}
)

