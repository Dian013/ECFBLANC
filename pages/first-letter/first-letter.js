
function first_letter(letter){ 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then((res) => res.json())
        .then((data) => {
            const meals = data.meals;
            const div = document.querySelector('#first-letter')

            for (let i = 0; i < meals.length; i++) {
                let h2 = document.createElement("h2");
                h2.textContent = meals[i].strCategory;
                div.appendChild(h2);
            }
        });
}