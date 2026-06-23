const products = [

{
name:"Turbo Kit",
price:25000,
image:"https://images.unsplash.com/photo-1489824904134-891ab64532f1"
},

{
name:"Alloy Wheels",
price:18000,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"
},

{
name:"Sports Exhaust",
price:12000,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
},

{
name:"LED Headlights",
price:5000,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a"
},

{
name:"Premium Seat Covers",
price:7000,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
},

{
name:"Touchscreen System",
price:15000,
image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
}

];

const container = document.getElementById("product-container");

const cartItems = document.getElementById("cart-items");

const totalElement = document.getElementById("total");

const cartCount = document.getElementById("cart-count");

let cart = [];

function displayProducts(items){

container.innerHTML="";

items.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<button onclick="addToCart('${product.name}',${product.price})">

Add To Cart

</button>

</div>

</div>

`;

});

}

displayProducts(products);

function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<span>${item.name}</span>

<span>₹${item.price}</span>

</div>

`;

});

totalElement.innerText=total;

cartCount.innerText=cart.length;

}

document.getElementById("search")
.addEventListener("keyup",(e)=>{

const value=e.target.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

);

displayProducts(filtered);

});
