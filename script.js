// Variables
const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

// Funcions
function requestApi(searchTerm) {
    const urlBase = 'http://localhost:3000/artists';
    const urlQuery = urlBase + `?name=${encodeURI(searchTerm)}`

    fetch(urlQuery)
        .then((response) => response.json());
        // .then(result => displayResults(result));
}

// function displayResults(result) { 

// }

// Document listener
document.addEventListener('input', () => {
    const searchTerm = searchInput.value;

    if (searchTerm === '') {
        resultArtists.classList.add('hidden');
        resultPlaylist.classList.remove('hidden')
        return;
    }
    else  {
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden')
    }

    requestApi(searchTerm);
})