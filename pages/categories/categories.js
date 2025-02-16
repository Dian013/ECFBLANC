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

fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
        const categories = data.categories;
        const div = document.querySelector('#categorie')

        for (let i = 0; i < categories.length; i++) {
            let link_categorie = document.createElement("button");
            link_categorie.textContent = categories[i].strCategory;

            link_categorie.addEventListener('click', function(){
                localStorage.setItem('mealcategorie', categories[i].strCategory); 
                window.location.href = "../categorie/categorie.html"
            })

            div.appendChild(link_categorie);
        }
    });


