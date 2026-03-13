// smooth scroll 
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// dark mode
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

});


// isi form biar gahaus validasi
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function(e){

let valid = true;

inputs.forEach(input => {

if(input.value.trim()===""){
valid=false;
}

});

if(!valid){
e.preventDefault();
alert("Semua field harus diisi!");
}else{
alert("Pesan berhasil dikirim!");
}

});


// counter skill biar jalan bukan adu penjilat
const counters = document.querySelectorAll(".counter");
const section = document.querySelector("#skills");

let started = false;

function startCounter(){

if(started) return;
started = true;

counters.forEach((counter) => {

const target = +counter.getAttribute("data-target");
let count = 0;

function update(){

if(count < target){
count += Math.ceil(target / 50);
counter.innerText = count;
setTimeout(update,30);
}else{
counter.innerText = target;
}

}

update();

});

}

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){
startCounter();
}

});

},{
threshold:0.5
});

if(section){
observer.observe(section);
}

