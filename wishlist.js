let fav = document.querySelector('.favorites')

let favoriteProducts = JSON.parse(localStorage.getItem('favorites'))
let favorites = [] || JSON.parse(localStorage.getItem('favorites'))


function createFav(){
    fav.innerHTML = ""
    favoriteProducts.forEach(elem => {
    fav.innerHTML +=`
    <div class="favorite-item">
            <img src="${elem.image}" alt="">
            <h2>${elem.title}</h2>
            <p>$${elem.price}</p>
            <button data='${elem.id}' class="remove-from-favorites">Remove</button>
        </div>`

        const removeFrt = document.querySelectorAll('.remove-from-favorites')
        for (let removeItem of removeFrt) {
            removeItem.addEventListener("click",(e)=>{
                favoriteProducts = favoriteProducts.filter(item => item.id != parseInt(e.target.getAttribute("data")));
                localStorage.setItem("favorites", JSON.stringify(favorites));
                createFav();
            })
        }
});
}

createFav()


