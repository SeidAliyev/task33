'use strict'

let basket = [] || JSON.parse(localStorage.getItem('basketProducts')) 

let basketAll = document.querySelector(".basket-items")
let totalamount = document.querySelector(".totalamount")

let basketprod = JSON.parse(localStorage.getItem('basketProducts'))
createParams()

function createParams() {
    let cem = 0
    let totalPrices;
    basketAll.innerHTML = ""
    basketprod.forEach(elem => {
        basketAll.innerHTML +=`
            <div class="basket-item">
                <img src="${elem.image}" alt="Product 1">
                <div class="basket-item-details">
                    <h3 class="basket-item-name">${elem.title}</h3>
                    <p class="basket-item-price">$${elem.price}</p>
                    <div class="quantity-controls">
                        <span class="quantity">${elem.count}</span>
                    </div>
                    <p class="basket-item-total">Total: $${elem.price * elem.count}</p>
                </div>
                <button data="${elem.id}" class="remove-from-basket">Remove</button>
            </div>`;

        totalPrices = elem.count * elem.price
        cem += totalPrices
    });

    let spanPrice = document.createElement('span')
    totalamount.innerHTML = ""
    totalamount.appendChild(spanPrice)
    spanPrice.innerText = cem

    const removePrd = document.querySelectorAll('.remove-from-basket')
    for (let removeItem of removePrd) {
        removeItem.addEventListener("click",(e)=>{
            basketprod = basketprod.filter(item => item.id != parseInt(e.target.getAttribute("data")));
            localStorage.setItem("basketProducts", JSON.stringify(basketprod));
            createParams();
        })
    }
}

