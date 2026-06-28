const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getInput);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getInput();
    }
});

async function getInput() {
    const query = searchInput.value;
    await fetchData(query);
}
 
async function fetchData(query) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        const meals = data.meals;

        if (meals === null) {
        return; 
        } else {
            return meals;  
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}
