// VARIÁVEIS
const searchInput = document.getElementById('search-input');
const resultArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');
const anuncioPremium = document.getElementById("anuncio-premium");

// FUNÇÕES
function requestApi(searchTerm) {
    const urlBase = 'http://localhost:3000/artists';
    const urlQuery = urlBase + `?name=${encodeURI(searchTerm)}`

    fetch(urlQuery)
        .then((response) => response.json())
        .then(result => displayResults(result));
}

function displayResults(result) { 
    if (result.some(s => s)) {
        const artistName = document.getElementById('artist-name');
        const artistImg = document.getElementById('artist-img');
        
        result.forEach(element => {
            artistName.innerText = element.name;
            artistImg.src = element.urlImg;
        });
        
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
    }
    else {
        cleanResult()
    }
}

function cleanResult() {
    resultArtists.classList.add('hidden');
    resultPlaylist.classList.remove('hidden');
}

// MANIPULAÇÃO DE EVENTOS

// Pesquisando artista
document.addEventListener('input', () => {
    const searchTerm = searchInput.value;

    if (searchTerm === '') {
        cleanResult()
        return;
    }

    requestApi(searchTerm);
})

// Fechando botão
document.getElementById('close-button').addEventListener("click", () => {
    anuncioPremium.classList.add('hidden')
})