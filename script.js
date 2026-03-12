/* INTRO */

const introMessage="Hi Amira... I made something special for you ❤️";
let i=0;

function typeIntro(){
if(i<introMessage.length){
document.getElementById("introText").innerHTML+=introMessage.charAt(i);
i++;
setTimeout(typeIntro,60);
}else{
document.getElementById("enterBtn").style.display="block";
}
}
typeIntro();

function startApp(){
document.getElementById("intro").style.display="none";
}

function show(id){
document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* REASONS */

let reasons=[
"I love your smile",
"I love your laugh",
"I love your kindness",
"I love your hugs",
"I love how you make me happy",
"I love your beautiful eyes",
"I love your voice",
"I love spending time with you",
"I love your personality",
"I love everything about you ❤️"
];

let usedReasons=[];

function newReason(){

if(usedReasons.length===reasons.length){
document.getElementById("reasonText").innerText="That's all the reasons... but I could list thousands more ❤️";
return;
}

let index;

do{
index=Math.floor(Math.random()*reasons.length);
}while(usedReasons.includes(index));

usedReasons.push(index);

document.getElementById("reasonText").innerText=reasons[index];
}

/* HEART ANIMATION */

function createHeart(){
const heart=document.createElement("div");
heart.className="heart";
heart.innerText="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="0";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
}

setInterval(createHeart,800);

/* GIFT */

function loveExplosion(){
for(let i=0;i<80;i++){
setTimeout(createHeart,i*40);
}
alert("You are the best thing in my life ❤️");
}

/* HEART CLICK GAME */

let score=0;

function addPoint(){
score++;
document.getElementById("score").innerText=score;
}

/* FOREVER */

function answerYes(){
loveExplosion();
alert("THALAAL ❤️ AMIRA forever!");
}

function moveNo(btn){
const app=document.querySelector(".app");
const maxX=app.clientWidth-btn.offsetWidth-20;
const maxY=app.clientHeight-btn.offsetHeight-20;
btn.style.position="absolute";
btn.style.left=Math.random()*maxX+"px";
btn.style.top=Math.random()*maxY+"px";
}

/* TIMER */

const startDate=new Date("2025-12-20");
const today=new Date();
const diff=Math.floor((today-startDate)/(1000*60*60*24));
document.getElementById("days").innerText=diff+" days ❤️";

/* MUSIC */

const music=document.getElementById("music");

function startMusic(){
music.volume=0;
music.play().catch(()=>{});
let fade=setInterval(()=>{
if(music.volume<0.6){
music.volume+=0.05;
}else{
clearInterval(fade);
}
},200);
}

document.addEventListener("click",startMusic,{once:true});

/* MEMORY GAME */

const images=[
"images/img1.jpeg",
"images/img2.jpeg",
"images/img3.jpeg",
"images/img4.jpeg",
"images/img5.jpeg",
"images/img6.jpeg"
];

let cards=[];
let flipped=[];
let matches=0;

function startMemoryGame(){

const board=document.getElementById("memoryBoard");
board.innerHTML="";
document.getElementById("memoryMessage").innerText="";

cards=[...images,...images];
cards.sort(()=>0.5-Math.random());

matches=0;
flipped=[];

cards.forEach((img)=>{

const card=document.createElement("div");
card.className="card";

const image=document.createElement("img");
image.src=img;

card.appendChild(image);

card.addEventListener("click",()=>flipCard(card,img));

board.appendChild(card);

});

}

function flipCard(card,img){

if(card.classList.contains("flipped") || flipped.length===2) return;

card.classList.add("flipped");
flipped.push({card,img});

if(flipped.length===2){

if(flipped[0].img===flipped[1].img){

matches++;
flipped=[];

if(matches===6){
document.getElementById("memoryMessage").innerText="You matched all our memories ❤️";
}

}else{

setTimeout(()=>{
flipped[0].card.classList.remove("flipped");
flipped[1].card.classList.remove("flipped");
flipped=[];
},800);

}

}

}

startMemoryGame();