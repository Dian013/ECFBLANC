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
            let h2 = document.createElement("h2");
            h2.textContent = categories[i].strCategory;
            div.appendChild(h2);
        }
    });


