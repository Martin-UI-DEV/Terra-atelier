/* 
const shoppingCart = [];

const cart = (productId) => {
    const cartContainer = document.querySelector(`.offcanvas-body`);
    const showProductsInCart = () =>{
        let product = cartProducts.find(product => product.id === productId);
        shoppingCart.push(product)
        let div = document.createElement(`div`);
        div.classList.add(`productInCart`)
        div.innerHTML = `<div class="card">
        <img src="${product.img}" class="img-card card-img-top" alt="imageplant">
        <h5 class="card-title mt-3">${product.name}</h5>
        <h5 class="card-subtitle mt-3">${product.price}</h5>
        <button class="btn btn-danger" id="delete${product.id}">
          <span> Eliminar producto </span>
        </button>
      </div>`
      cartContainer.appendChild(div)
      const buttonDelete = document.querySelector(`delete${product.id}`);
      buttonDelete.addEventListener(`click`, (e) =>{
        deleteProduct(e)
      })
    }
    showProductsInCart()
};

function deleteProduct(e) {
    let btnClicked = e.target;
    btnClicked.parentElement.remove()
} */