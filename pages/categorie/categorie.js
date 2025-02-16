
const categorie = "Beef"  
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((res) => res.json())
    .then((data) => {
        const meals = data.meals;
        const div = document.querySelector('#categorie')

        for (let i = 0; i < meals.length; i++) {
            let h2 = document.createElement("h2");
            let img = document.createElement("img")
            let meal_link = document.createElement("button")

            const id = meals[i].idMeal

            img.src = meals[i].strMealThumb
            h2.textContent = meals[i].strMeal;

            meal_link.textContent = "lien"
            meal_link.addEventListener('click', function(){
                localStorage.setItem('mealID', id); 
                window.location.href = "../meal/meal.html"
            })

            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(meal_link)
        }
    });

    
    
    
