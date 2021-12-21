let comment = fetch('https://jsonplaceholder.typicode.com/comments/' + randomizer())
    .then(response => response.json())

comment.then(
    result => {
        setLoadedData(result)
        callPreloader()
    },
    error => {
        let data = document.getElementById("data")
        data.innerText = 'ERROR: ' + error
        callPreloader()
    })

function callPreloader() {
    let preloader = document.getElementById("preloader")
    preloader.classList.remove('visible');
    preloader.classList.add('hidden');
}

function randomizer() {
    return Math.floor(Math.random()*500)
}

function setLoadedData(data) {
    let divData = document.getElementById("data")
    divData.innerHTML = createComment(data)
}

function createComment(rawComment) {
    return `<fieldset>
        <label for="nickname">Nickname:</label>
        <span id="nickname">${rawComment.name}</span><br>
        <label for="email">Email address:</label>
        <span id="email">${rawComment.email}</span><br>
        <label for="body">Comment:</label><br>
        <span id="body">${rawComment.body}</span>
    </fieldset>`
}