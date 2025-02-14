  
const categorie = "Beef"
    
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((res) => res.json())
    .then((data) => {
        const meals = data.meals;
        const div = document.querySelector('#categorie')

        for (let i = 0; i < meals.length; i++) {
            let h2 = document.createElement("h2");
            let img = document.createElement("img")
            let meal_links = document.createElement("a")

            const id = meals[i].idMeal

            img.src = meals[i].strMealThumb
            h2.textContent = meals[i].strMeal;

            meal_links 
            //TODO 

            div.appendChild(img);
            div.appendChild(h2);
        }
    });

    
    
    
