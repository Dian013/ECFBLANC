  
function meal(ID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
        .then((res) => res.json())
        .then((data) => {
            const meals = data.meals;
            const div = document.querySelector('#meal')

            let img = document.createElement("img")
            let h2 = document.createElement("h2");
            let p_area_category = document.createElement("p");
            

            img.src = meals[0].strMealThumb
            h2.textContent = meals[0].strMeal;
            p_area_category.textContent = `Area : ${meals[0].strArea}
                            Category : ${meals[0].strCategory}`;
            
            div.appendChild(img);
            div.appendChild(h2);
            div.appendChild(p_area_category);
            
            for (let i = 0; i < 15; i++){
                let p_ingredient = document.createElement("p");
                p_ingredient.textContent = meals[0][`strIngredient${i}`]
                if (p_ingredient.textContent !== ""){
                    div.appendChild(p_ingredient);
                }
            }

            for (let i = 0; i < 15; i++){
                let p_measure = document.createElement("p");
                p_measure.textContent = meals[0][`strMeasure${i}`]
                if (p_measure.textContent !== ""){
                    div.appendChild(p_measure);
                }
            }
        }   
    )
}