fetch('../menu/menu.html')
    .then((res) => res.text())  //On change .json en .text car pas possible de récuperer le html en json
    .then((html) => {
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html'); // Convertie le text html en dom

        console.log(doc)
        const menu = doc.querySelector('nav')
        const header = document.querySelector('header')
        header.append(menu)
    });


//En appuyant sur entrée, ça cherche ce qu'il y avait dans l'input
const input = document.querySelector('input')
input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        let input = document.querySelector('input');
        const word = input.value
        search(word)
    }
});

//En appuyant sur le bouton, ça cherche ce qu'il y avait dans l'input
const button = document.querySelector('button') 
button.addEventListener("click",function(){
    let input = document.querySelector('input');
    const word = input.value
    search(word)
});

function search(word){

    const div = document.querySelector('#search');
    div.innerHTML = "";  //Reinitialiser div à chaque nouvelle recherche

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then((res) => res.json())
        .then((data) => {
            
            const meals = data.meals;

            for (let i = 0; i < meals.length; i++){
                const div = document.querySelector('#search');
        
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let p_area_category = document.createElement("p");
                let meal_link = document.createElement("button")
                
                const id = meals[i].idMeal

                img.src = meals[i].strMealThumb;
                h2.textContent = meals[i].strMeal;
                p_area_category.textContent = `Area : ${meals[i].strArea}
                                                Category : ${meals[i].strCategory}`;
                

                meal_link.textContent = "lien"
                meal_link.addEventListener('click', function(){
                    localStorage.setItem('mealID', id); 
                    window.location.href = "../meal/meal.html"

                })

                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(p_area_category);
                div.appendChild(meal_link)
                
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