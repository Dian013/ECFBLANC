

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


