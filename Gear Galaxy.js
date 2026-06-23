// ================= MENU TOGGLE =================
const menu = document.querySelector(".menu");
const menuBox = document.querySelector(".menu-box");

menu.addEventListener("click", () => {
    menuBox.classList.toggle("show");
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// ================= SEARCH SERVICES =================
const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", () => {
  let keyword = prompt("Search Service:");

if(!keyword) return;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(keyword.toLowerCase())){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
});

// ================= SCROLL TO TOP =================
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

// ================= DARK MODE =================
const darkBtn = document.createElement("button");
darkBtn.innerHTML = "🌙";
darkBtn.classList.add("dark-btn");
document.body.appendChild(darkBtn);

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// ================= DYNAMIC SERVICES =================
const services = [
    {
        name:"Turbo Upgrade",
        desc:"Boost engine power with turbo kits."
    },
    {
        name:"Alloy Wheels",
        desc:"Premium alloy wheel installation."
    }
];

const serviceContainer = document.querySelector(".services");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="content">
            <h3>${service.name}</h3>
            <p>${service.desc}</p>
        </div>
    `;

    serviceContainer.appendChild(card);
});
