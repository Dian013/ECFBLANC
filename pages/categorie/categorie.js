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
        footer.append(bas_de_page)  //On l'ajoute à ce html
    });


const categorie = localStorage.getItem('mealcategorie');  //Récuperer l'id dans l'espace local placé au moment du click sur le lien
categorie_function(categorie)

async function categorie_function(categorie){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
        .then((res) => res.json())
        .then((data) => {
            
            const meals = data.meals;

            const div_main = document.querySelector('#categorie');


            for (let i = 0; i < meals.length; i++){

                let div = document.createElement("div")
                let img = document.createElement("img");
                let h2 = document.createElement("h2");
                let p_area_category = document.createElement("p");
                let meal_link = document.createElement("button")
                
                const id = meals[i].idMeal

                h2.textContent = meals[i].strMeal;
                img.src = meals[i].strMealThumb;
                img.alt = `Image de ${h2.textContent}` //Donne un alt à l'image pour l'accessibilité utilisateur
            
                meal_link.textContent = "voir plus"

                meal_link.addEventListener('click', function(){
                    localStorage.setItem('mealID', id); 
                    window.location.href = "../meal/meal.html"
                })

                div.appendChild(img);
                div.appendChild(h2);
                div.appendChild(meal_link)               

                div_main.append(div)
            }
        }
    );
}
    
    
    
