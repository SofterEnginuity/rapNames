document.querySelector('button').addEventListener('click', getMovie)

function getMovie(){
    const movies = document.querySelector('input').value
    const url = `/api/${movies}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#movieName').innerText = data['movieName']
        document.querySelector('#releaseYear').innerText = data['releaseYear']
        document.querySelector('#directorName').innerText = data['directorName']
        document.querySelector('#rottenTomatoes').innerText = data['rottenTomatoes']
})
}
