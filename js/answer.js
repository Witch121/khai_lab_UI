function handleLab1Click () {
    const text = document.querySelector('.lab1');
    const btn = document.querySelector('.lab')
    text.classList.toggle('text_answer');
    if(text.classList.contains('.text_answer')) {
        btn.innerHTML = "<h2>Close</h2>";
    }

    }
function handleLab2Click () {
    const text = document.querySelector('.lab2');
    text.classList.toggle('text_answer');
    }
function handleLab3Click () {
    const text = document.querySelector('.lab3');
    text.classList.toggle('text_answer');
    }
function handleLab4Click () {
    const text = document.querySelector('.lab4');
    text.classList.toggle('text_answer');
    }
function handleLab5Click () {
    const text = document.querySelector('.lab5');
    text.classList.toggle('text_answer');
    }