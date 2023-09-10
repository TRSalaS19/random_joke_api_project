const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');




async function getJoke() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();

    if(punchline.style.display === 'block'){
        punchline.style.display = 'none'
    } else {
        punchline.style.display = 'none'
    }

    setup.innerText = joke.setup;
    punchline.innerText = joke.punchline;

    console.log(joke.setup);
    console.log(joke.punchline);
}

function showPunchline() {
    if(punchline.style.display === 'none'){
        punchline.style.display = 'block'
    } else {
        punchline.style.display = 'none'
    }
}


