const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResult = document.querySelector('.search-result');
const showMoreButton = document.getElementById('show-more-button');

const key = "EQ1fLYIGTyg9MVwlehQVVAyaJSo_wYYmjjyowsXxbwI";
let keyword = '';
let page = 1;
async function searchImages() {
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=30`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if (page === 1) {
        searchResult.innerHTML = '';
    }
    
    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image)
        searchResult.appendChild(imageLink);
    })
    showMoreButton.style.display = 'block';
}

showMoreButton.addEventListener('click', () => {
    page++;
    searchImages();
})

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})
// searchImages()