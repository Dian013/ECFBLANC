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
let input = document.querySelector('input')
input.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        let input = document.querySelector('input');
        const inputValue = input.value.trim()  //trim permet d'enlever les espaces blanc autour du string
    
        if (inputValue){
            const word = inputValue
            search(word)
        }
    
        else{
            alert("Champ de text vide, c'est compliqué de trouver un plat sans le nom :/ (vous avez appuyé sur entrée)")
        }  
    }
});

//En appuyant sur le bouton, ça cherche ce qu'il y avait dans l'input
const button = document.querySelector('button') 
button.addEventListener("click",function(){

    let input = document.querySelector('input');
    const inputValue = input.value.trim()  //trim permet d'enlever les espaces blanc autour du string

    if (inputValue){
        const word = inputValue
        search(word)
    }

    else{
        alert("Champ de text vide, c'est compliqué de trouver un plat sans le nom :/ (vous avez appuyé sur le bouton)")
    }   
});

function search(word){

    const div = document.querySelector('#search');
    div.innerHTML = "";  //Reinitialiser div à chaque nouvelle recherche

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`)
        .then((res) => res.json())
        .then((data) => {
            
            const meals = data.meals;

            for (let i = 0; i < meals.length; i++){
                const div_main = document.querySelector('#search');
        
                let div = document.createElement("div")
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let p_area_category = document.createElement("p");
                let meal_link = document.createElement("button")
                
                const id = meals[i].idMeal

                img.src = meals[i].strMealThumb;
                h2.textContent = meals[i].strMeal;
                p_area_category.textContent = `Area : ${meals[i].strArea}
                                                Category : ${meals[i].strCategory}`;
                

                meal_link.textContent = "voir plus"
                meal_link.addEventListener('click', function(){
                    localStorage.setItem('mealID', id); 
                    window.location.href = "../meal/meal.html"

                })

                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(p_area_category);
                div.appendChild(meal_link)

                div_main.append(div)
            }
        }
    )
}