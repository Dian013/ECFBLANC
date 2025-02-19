fetch('../menu/menu.html')
    .then((res) => res.text())  //On change .json en .text car pas possible de récuperer le html en json
    .then((html) => {
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html'); // Convertie le text html en dom

        console.log(doc)
        const menu = doc.querySelector('nav')
        const bas_de_page = doc.querySelector('footer') //On cherche l'élément dans le menu

        const header = document.querySelector('header') 
        const footer = document.querySelector('footer') //On cherche l'élément correspondant dans notre html affilié à ce js
        
        header.append(menu)
        footer.append(bas_de_page)  //On l'ajoute à notre html
    });

const ID = localStorage.getItem('mealID');  //Récuperer l'id dans l'espace local placé au moment du clicj sur le lien
meal(ID)

function meal(ID){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`)
    .then((res) => res.json())
    .then((data) => {
        const meals = data.meals;
        const div = document.querySelector('#meal')
        

        let img = document.createElement("img")
        let h2 = document.createElement("h2");
        let p_area = document.createElement("p");
        let p_category = document.createElement("p");
        let div_Ingredient = document.createElement("div");
        let div_Measure = document.createElement("div");
        let div_Ingredient_Measure = document.createElement("div");

        div_Ingredient_Measure.id = "div_Ingredient_Measure"

        img.src = meals[0].strMealThumb
        h2.textContent = meals[0].strMeal;
        p_area.textContent = `Area : ${meals[0].strArea}`;
        p_category.textContent = `Category : ${meals[0].strCategory}`;
        


        
        for (let i = 0; i < 15; i++){
            let p_ingredient = document.createElement("p");
            p_ingredient.textContent = meals[0][`strIngredient${i}`]
            if (p_ingredient.textContent !== ""){
                div_Ingredient.appendChild(p_ingredient);
            }
        }

        for (let i = 0; i < 15; i++){
            let p_measure = document.createElement("p");
            p_measure.textContent = meals[0][`strMeasure${i}`]
            if (p_measure.textContent !== ""){
                div_Measure.appendChild(p_measure);
            }
        }        
        
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(p_area);
        div.appendChild(p_category);
            div_Ingredient_Measure.appendChild(div_Ingredient)
            div_Ingredient_Measure.appendChild(div_Measure)
        div.appendChild(div_Ingredient_Measure)

    });
}