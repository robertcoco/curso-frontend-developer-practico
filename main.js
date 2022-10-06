const SingUpMenu = document.getElementById("Sing-out-menu");
const navBarEmail = document.getElementById("navbar-email");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const shopLogo = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

// opennig and closing of the mobile menu
menuHamburger.addEventListener("click", () => {
    const isShopCartOpened = !aside.classList.contains("inactive");

    if (!isShopCartOpened) {
        menuMobile.classList.toggle("inactive");
    }
});

// opennig and closing of the shopping product detail
shopLogo.addEventListener("click", () => {
    const isMenuMobileOpened = !menuMobile.classList.contains("inactive");

    if (!isMenuMobileOpened) {
        aside.classList.toggle("inactive");
    }
});

navBarEmail.onclick = () => 
{
    SingUpMenu.classList.remove("inactive");

    // Código para hacer que el menu desaparezca cuando se ponga el mouse encima y se
    // elimine cuando el mouse deje el elemento

    SingUpMenu.addEventListener("mouseleave", () => 
    {
        SingUpMenu.classList.add("inactive");
    })    
}

const products = [
    {
        name: "RTX 2080ti asus eagle",
        price: 600,
        img: "./icons/asus-tuf-geforce-rtx-3080-ti-gaming-oc-12gb-gddr6x-placa-grafica.jpg"
    },
    {
        name: "Power supply ATX 500W GOLD",
        price: 220,
        img: "./icons/powerSupply.png"

    },

    {
        name: "RTX 2080ti asus eagle",
        price: 650,
        img: "./icons/asus-tuf-geforce-rtx-3080-ti-gaming-oc-12gb-gddr6x-placa-grafica.jpg"
    },
    {
        name: "Power supply ATX 500W GOLD",
        price: 280,
        img: "./icons/powerSupply.png"

    }
];

   /*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    </div> */

function renderElements(arr) {

    for(product of products) {
        const ProductCard = document.createElement("div");
        ProductCard.classList.add("product-card");

        const ProductInfo = document.createElement("div");
        ProductInfo.classList.add("product-info");

        const ProductInfoDiv = document.createElement("div");

        const price = document.createElement("P");
        price.innerHTML =  product.price;
        const name = document.createElement("P");
        name.innerHTML =  `'${product.name}'`;

        const ProductFigure = document.createElement("figure");
        const ProductImgCard = document.createElement("img");
        ProductImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

        const img = document.createElement("img");
        img.setAttribute("src", product.img);

        cardContainer = document.querySelector(".cards-container");

        ProductCard.append(img, ProductInfo);
        ProductFigure.appendChild(ProductImgCard);
        ProductInfoDiv.append(price, name);
        ProductInfo.append(ProductInfoDiv,ProductFigure);

        cardContainer.appendChild(ProductCard);
    }
    
}

renderElements(products);
// Logic when the user click a product to show the info

const showInfoOfTheProduct = () => {
    const mainContainer = document.querySelector(".main-container");
    
    const ShowProductInfo = document.createElement("div");
    mainContainer.removeChild(cardContainer);

    ShowProductInfo.innerHTML = `
    <aside class="shoppingCartInfo">
        <div class="shoppingCartInfo-close">
            <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        <div class="productShoppinCart-info">
            <p>${product.price}</p>
            <p>${product.name}</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button class="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
            </button>
        </div>
        </aside>  
    `;
    
    const container = document.querySelector(".container");
    container.appendChild(ShowProductInfo);
}

const ProductCard = document.querySelectorAll(".product-card");

ProductCard.forEach(product => {
product.addEventListener("click", showInfoOfTheProduct);
});


