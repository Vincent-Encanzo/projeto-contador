var currentNumberWrapper = document.querySelector('.current--number')
var decrementWrapper = document.querySelector('#decrement')
var incrementWrapper = document.querySelector('#increment')
var currentNumber = 0;

incrementWrapper.addEventListener('click', increment)
incrementWrapper.addEventListener('click', limit)
incrementWrapper.addEventListener('click', hiddenButtons)
incrementWrapper.addEventListener('click', whiteZero)
decrementWrapper.addEventListener('click', limit)
decrementWrapper.addEventListener('click', hiddenButtons)
decrementWrapper.addEventListener('click', underZero)
decrementWrapper.addEventListener('click', decrement)


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function limit(){
    if (currentNumber >= 10 && document.querySelector('.container').classList.contains('neon--fx') ||
        currentNumber <= 0 && document.querySelector('.container').classList.contains('neon--fx')){
        document.querySelector('.container').classList.remove('neon--fx')
        document.querySelector('.container').classList.add('neon--fx--red')
    } else if (currentNumber <= 10 && currentNumber > 0 && document.querySelector('.container').classList.contains('neon--fx--red')){
        document.querySelector('.container').classList.remove('neon--fx--red')
        document.querySelector('.container').classList.add('neon--fx')
    }
}

function underZero(){
    if(currentNumber < 0){
        document.querySelector('.container').classList.remove('neon--fx')
        document.querySelector('.container').classList.add('neon--fx--red')
    }
}

function whiteZero(){
    if (currentNumber == 0 && document.querySelector('.container').classList.contains('neon--fx--red')){
        document.querySelector('.container').classList.remove('neon--fx--red')
        document.querySelector('.container').classList.add('neon--fx')
    }
}

function hiddenButtons(){
    if (currentNumber >= 10 && document.querySelector('.container').classList.contains('neon--fx--red')){
        document.getElementById('increment').style.visibility = 'hidden'
    } else {
        document.getElementById('increment').style.visibility = 'visible'
    }
}