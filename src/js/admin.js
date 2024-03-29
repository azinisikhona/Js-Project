let cart = JSON.parse(localStorage.getItem("cart"));
if(!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}
const saveCart =  () => {
  localStorage.setItem("cart", JSON.stringify(cart))
}
function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product ) {
    cart.push(product);
    saveCart()
    updateCart();
  }
}
function deleteFromCart(index) {
  let deletedProduct = cart.splice(index, 1)[0];
  saveCart()
  updateCart();
}
function updateCart() {
  let cartContainer = document.getElementById("table");
  cartContainer.innerHTML = "";
  cart.forEach((product, index) => {
    let cartProduct = document.createElement("tr");
    cartProduct.innerHTML = `
    <td><img src="${product.image}" height="30px"></img></td>
    <td>${product.name}</td>
    <td>R${product.price}</td>
    <td><button onclick="deleteFromCart(${index})" class="delbtn">X</button></td>`;
    cartContainer.appendChild(cartProduct);
  });
  calculateTotal();
}
function calculateTotal() {
  let totalElement = document.getElementById("total");
  let total = 0;
  cart.forEach((product) => {
    total += parseFloat(product.price);
  });
  totalElement.textContent = `Total: R ${total.toFixed(2)}`;
}

updateCart();
function checkout() {
  if(cart.length > 0) {
    cart = [];
    localStorage.removeItem("cart");
    saveCart();
    updateCart();
    calculateTotal();
    alert("Thank you for shopping with us");
  }
  
}

const Products = [
  {
      id: 1,
      image: "https://i.postimg.cc/sX1yYhXv/her-her-deluxe-edition.webp",
      name: "H.E.R. - H.E.R. (Deluxe Edition",
      desc: "H.E.R. by anonymous singer-songwriter H.E.R. (Gabi Wilson), is a collection of her previous releases Vol. 1 and Vol. 2. This deluxe edition also include six previously unreleased tracks to create a full-length release.",
      price: 559.60,
      genre: "RnB",
  },
  {
      id: 2,
      image: "https://i.postimg.cc/x1YwG4TX/product-namecoast-to-coast-collectibles-memorabilia-148588.jpg",
      name: "Dave Chappelle",
      desc: "A signed LP Cover. Includes the vinyl. '846'. Guaranteed authentic. This was signed in-person by Dave Chappelle. Guaranteed authentic. Includes a certificate of authenticity (COA) provided by JSA. The certification number is: AB38903",
      price: 12569.31,
      genre: "Rap",
  },
  {
      id: 3,
      image: "https://i.postimg.cc/SQ1Lf2SC/97777-large.jpg",
      name: "Marvin Gaye - What's going on",
      desc: "This is a 12”Vinyl Record with a Marvin Gaye What's Going On Reproduction Label added and has the Autograph of Marvin Gaye printed directly on to it using a Unique State of the Art printing system",
      price: 22345.44,
      genre: "Soul",
  },
  {
      id: 4,
      image: "https://i.postimg.cc/tJRNBWwG/61-Pn-BPq-Tmx-L-UF1000-1000-QL80.jpg",
      name: "2Pac",
      desc: "'Greatest Hits' is a posthumous greatest hits album by the American rapper. The album's non-chronological sequence focuses on the highlights of the rappers career. The album is comprised of 21 tracks, accompanied by four previously unreleased songs. Features the singles 'Changes' and 'Unconditional Love'.",
      price: 3200.00,
      genre: "Rap",
  },
  {
      id: 5,
      image: "https://i.postimg.cc/wMtQKgqw/ZELW-o-Wv-BQa-Su-e-IBu43-Tt-EAi6-JOLZ4wa-AHCCRbz-Dhk.webp",
      name: "Selena Gomez LP Album",
      desc: "This Selena Gomez autographed LP Album Vinyl Insert has been personally hand-signed by Selena Gomez.",
      price: 1863.58,
      genre: "Pop",
  },
  {
      id: 6,
      image: "https://i.postimg.cc/QdrNWmTt/1200x1200bf-60.jpg",
      name: "Nora Noor - Soul Deep",
      desc: "Blue Mood is proud to present the comeback album from the Norwegian Queen of Soul. Noora Noor is finally back. Soul Deep, that gave Noor the Norwegian Grammy Award (Spellemannprisen), goes more retro and was recorded live in studio. ",
      price: 420.00,
      genre: "Pop",
  },
  {
      id: 7,
      image: "https://i.postimg.cc/Twq3RH0g/main-1644332854-Jessica-Simpson-Signed-Irresistible-Vinyl-Record-Album-Cover-JSA-Beckett-Pristine-Auc.jpg",
      name: "Jessica Simpson - Irresistible",
      desc: "A copy of 'Irresistible' signed by Jessica. Autographed in-person LP album record cover. Includes the vinyl. Guaranteed authentic.",
      price: 7415.83,
      genre: "Pop",
  },
  {
      id: 8,
      image: "https://i.postimg.cc/9fcLzDtS/s-l1200.webp",
      name: "Kanye West - Ye",
      desc: "A signed LP Cover. Includes the vinyl. 'Ye''. This was signed in-person by Kanye West. Guaranteed authentic. Includes a certificate of authenticity (COA) provided by GA. The certification number is: GV939134",
      price: 14813.72,
      genre: "Rap",
  },
  {
      id: 9,
      image: "https://i.postimg.cc/Hx8mvvcb/190295176532.avif",
      name: "Tina Turner - Foreign affair",
      desc: "",
      price: 12566.98,
      genre: "Soul",
  },
 
];

localStorage.setItem("catalogue", JSON.stringify(Products));
const adminProducts = JSON.parse(localStorage.getItem("catalogue")) || [];

function addProducts() {
    const id = Math.floor(Math.random());
    const adminProduct = {
        id,
        image: document.getElementById("image"),
        name: document.getElementById("productName"),
        price: parseFloat(document.getElementById("productPrice")),
        genre: document.getElementById("productGenre"),
    }
    adminProducts.push(Product);
    localStorage.setItem("catalogue", JSON.stringify(adminProducts));
    displayAdminProducts();
}
const addBtn = document.getElementById("addToStore")
addBtn.addEventListener("click", addProducts)
function displayAdminProducts() {
    const listProducts = document.getElementById("productList");
        listProducts.innerHTML = "";
        adminProducts.forEach((adminProduct) => {
            let adminTable = document.createElement("tr");
            adminTable.innerHTML = `
            <td class="text-center"><img src="${adminProduct.image}" style="width: 100px;"> </td>
            <td class="text-center">${adminProduct.name}</td>
            <td class="text-center">R ${adminProduct.price}</td>
            <td class="text-center">${adminProduct.genre}</td>
            <td>
                <button class="deleteBtn px-2text-white fw-bold border-white" onclick="deleteProducts(${adminProduct.id})" style="background-color: red;"> X </button>
            </td>
            `;
            listProducts.appendChild(adminTable);
        })
}
displayAdminProducts();

function deleteProducts(productId) {
    const adminIndex = adminProducts.findIndex((adminProduct) => adminProduct.id === productId);
    if(adminIndex !== -1) {
        adminProducts.splice(adminIndex, 1);
    }
    localStorage.setItem("catalogue", JSON.stringify(adminProducts));
    displayAdminProducts();
};