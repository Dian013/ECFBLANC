

const button = document.querySelector('button') 

// input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//         event.search()
//     }
// });

button.addEventListener("click",function(){
    let input = document.querySelector('input');
    const word = input.value
    search(word)
});


function search(word){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then((res) => res.json())
        .then((data) => {
            
            const meals = data.meals;

            for (let i = 0; i < meals.length; i++){
                const div = document.querySelector('#search');
        
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let p_area_category = document.createElement("p");
                
                
                img.src = meals[i].strMealThumb;
                h2.textContent = meals[i].strMeal;
                p_area_category.textContent = `Area : ${meals[i].strArea}
                                                Category : ${meals[i].strCategory}`;
                
                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(p_area_category);
                
                for (let j = 0; j < 15; j++){
                    let p_ingredient = document.createElement("p");
                    p_ingredient.textContent = meals[i][`strIngredient${j}`];
                    if (p_ingredient.textContent !== ""){
                        div.appendChild(p_ingredient);
                    }
                }
        
                for (let j = 0; j < 15; j++){
                    let p_measure = document.createElement("p");
                    p_measure.textContent = meals[i][`strMeasure${j}`]
                    if (p_measure.textContent !== ""){
                        div.appendChild(p_measure);
                    }
                }
            }
        }
    )
}