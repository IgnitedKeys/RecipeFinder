const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '097e1931';
const APP_KEY ='130ce19defeb1e6885eaed450769e8be';
//const baseURL = 'https://api.edamam.com/api/recipes/v2';


searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=24`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove('initial');
    let generatedHTML = "";
    results.map(result => {
        generatedHTML +=

        `
        <div class="item">
                        <img src="${result.recipe.image}" alt="">
                        <div class="flex-container">
                            <h1 class="recipe-title">${result.recipe.label.toLowerCase()}</h1>
                            <a class="recipe-button" href="${result.recipe.url}" target="_blank">view</a>
                        </div>
                        <p class="recipe-data">${result.recipe.cuisineType}</p>
                    </div>
        `
        
    })
    searchResultDiv.innerHTML = generatedHTML;
};