function scrollToServices(){
document.getElementById("services")
.scrollIntoView({behavior:"smooth"});
}

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=+counter.dataset.target;
const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCounter,20);

}else{

counter.innerText=target;

}
};

updateCounter();

});

const form=document.getElementById("contactForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("successMsg").innerText=
"✅ Request Submitted Successfully!";

form.reset();

});
