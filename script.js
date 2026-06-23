// ================= PRODUCTS =================

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
name:"Touch Screen System",
price:15000,
image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
},

{
name:"Premium Seat Covers",
price:7000,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
},

{
name:"Car Spoiler",
price:8500,
image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
},

{
name:"Performance Air Filter",
price:3500,
image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def"
},

{
name:"Body Wrap",
price:22000,
image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
},

{
name:"Ambient Lights",
price:4500,
image:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
},

{
name:"Steering Cover",
price:1200,
image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"
},

{
name:"Reverse Camera",
price:3000,
image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
},

{
name:"Subwoofer",
price:9000,
image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
},

{
name:"Roof Rails",
price:6500,
image:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341"
},

{
name:"Fog Lamps",
price:2800,
image:"https://images.unsplash.com/photo-1502877338535-766e1452684a"
},

{
name:"Chrome Kit",
price:4000,
image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
},

{
name:"Racing Pedals",
price:2500,
image:"https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
},

{
name:"Side Skirts",
price:8000,
image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def"
},

{
name:"Dashboard Camera",
price:5500,
image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
},

{
name:"Performance Brakes",
price:14000,
image:"https://images.unsplash.com/photo-1489824904134-891ab64532f1"
}

];

// ================= VARIABLES =================

const container =
document.getElementById("product-container");

const cartItems =
document.getElementById("cart-items");

const totalElement =
document.getElementById("total");

const cartCount =
document.getElementById("cart-count");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

// ================= DISPLAY PRODUCTS =================

function displayProducts(items){

container.innerHTML="";

items.forEach((product,index)=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<p class="price">
₹${product.price}
</p>

<button onclick="addToCart(${index})">
Add To Cart
</button>

</div>

</div>

`;

});

}

displayProducts(products);

// ================= ADD TO CART =================

function addToCart(index){

const item = products[index];

const existing =
cart.find(product =>
product.name === item.name);

if(existing){

existing.qty++;

}else{

cart.push({
...item,
qty:1
});

}

saveCart();

}

// ================= UPDATE CART =================

function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCart();

}

function updateCart(){

cartItems.innerHTML="";

let total = 0;

cart.forEach((item,index)=>{

total += item.price * item.qty;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h4>${item.name}</h4>

<p>
₹${item.price}
</p>

</div>

<div class="cart-controls">

<button onclick="decreaseQty(${index})">
-
</button>

<span>${item.qty}</span>

<button onclick="increaseQty(${index})">
+
</button>

<button
class="remove-btn"
onclick="removeItem(${index})">
Remove
</button>

</div>

</div>

`;

});

totalElement.innerText = total;

cartCount.innerText =
cart.reduce(
(sum,item)=>sum+item.qty,
0
);

}

updateCart();

// ================= QUANTITY =================

function increaseQty(index){

cart[index].qty++;

saveCart();

}

function decreaseQty(index){

if(cart[index].qty > 1){

cart[index].qty--;

}else{

cart.splice(index,1);

}

saveCart();

}

// ================= REMOVE =================

function removeItem(index){

cart.splice(index,1);

saveCart();

}

// ================= SEARCH =================

document
.getElementById("search")
.addEventListener("keyup",e=>{

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filtered);

});

// ================= DARK MODE =================

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

});

// ================= CONTACT FORM =================

const form =
document.getElementById("contactForm");

form.addEventListener("submit",e=>{

e.preventDefault();

document.getElementById("successMsg")
.innerText =
"✅ Message Sent Successfully!";

form.reset();

});

// ================= CHECKOUT =================

const modal =
document.getElementById("checkoutModal");

document
.getElementById("checkoutBtn")
.addEventListener("click",()=>{

if(cart.length===0){

alert("Cart is Empty");

return;

}

modal.style.display="flex";

cart=[];

saveCart();

});

document
.getElementById("closeModal")
.addEventListener("click",()=>{

modal.style.display="none";

});

// ================= REVIEWS =================

const reviews = [

{
text:"Amazing Quality Products!",
name:"Rahul"
},

{
text:"Best Car Modification Store.",
name:"Ankit"
},

{
text:"Very Fast Delivery & Genuine Products.",
name:"Aman"
},

{
text:"Loved The Alloy Wheels Collection.",
name:"Rohit"
}

];

let reviewIndex=0;

setInterval(()=>{

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

document.getElementById("reviewText")
.innerText =
reviews[reviewIndex].text;

document.getElementById("reviewName")
.innerText =
"- " + reviews[reviewIndex].name;

},3000);
