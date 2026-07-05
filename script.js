const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', getInput);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        getInput();
    }
});

function getInput() {
    const query = searchInput.value;
    fetchData(query);
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


 const mealContainer = document.getElementById("meals-container")
 function displayMeals(meals) { 
    mealContainer.innerHTML = ""
    if (!meals || meals.length === 0) { 
        mealContainer.innerHTML = "Oops! No results found."
        return
    }
    meals.forEach((meal) => {
        const mealCard = document.createElement("div");
        mealCard.setAttribute("data-id", meal.idMeal);
        mealCard.innerHTML = `
            <div class="meal-card">
                <img class="meal-image" src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <h3>${meal.strMeal}</h3>
                <span><i class="fa-regular fa-heart heart"></i></span>
            </div>
        `;
        mealContainer.appendChild(mealCard);
        const heartIcon = mealCard.querySelector(".heart");
        heartIcon.addEventListener("click", (e) => {
            addToFavourites(meal);
            e.stopPropagation(); // Prevent the click event from propagating to the meal card
        });

    });
}

mealContainer.addEventListener('click', (e) => {
    const card = e.target.closest('[data-id]');
    if (card) {
        const id = card.getAttribute('data-id');
        getMealDetails(id);
    }
});

async function getMealDetails(idMeal) {
    // fetch and show detail view using id
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}');
    const mealData = await response.json();
    // Display meal details
    const meal = mealData.meals[0];
    const mealDetails = document.createElement('div');
    mealDetails.classList.add('meal-details');
    const ingredientsList = document.createElement('ul');
    for (let i = 1; i <= 20; i = i + 1) {
        const ingredient = meal[strIngredient${i}];
        const ingredientItem = document.createElement('li');
        if(ingredient !== "") { 
            ingredientItem.textContent = ${meal["strMeasure" + i]} ${ingredient};
            ingredientsList.appendChild(ingredientItem);
        }
    }
    mealDetails.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <h2>${meal.strMeal}</h2>
        <button id="favourite">Add to Favourites</button>
        
        <h3>Ingredients:</h3>
        <ul>
            ${ingredientsList.innerHTML}
        </ul>
        <p>
            <strong>Instructions:</strong> ${meal.strInstructions}
        </p>
        <button id="close-btn">Back to Recipes</button>
    `;
    document.body.appendChild(mealDetails)

    const closeBtn = mealDetails.querySelector('#close-btn');
    closeBtn.addEventListener('click', () => {
        mealDetails.remove();
    });
    const favourite = mealDetails.querySelector("#favourite");
    favourite.addEventListener("click", (e) => {
        addToFavourites(meal);
        e.stopPropagation();
    });

}