var modal = document.getElementById("myModal");

var img = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for(var i=0; i<img.length; i++){
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    this.classList.toggle('enlarged');
  });
}

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus();
})



const loveMe = document.querySelector(".container");
const times = document.querySelector("#times");

let clickTime = 0;


const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");
  const x = e.clientX;
  const y = e.clientY;
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;
  const xInside = x - leftOffset;
  const yInside = y - topOffset;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener("click", (e) => {

  if (clickTime === 0) clickTime = new Date().getTime();
  else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else clickTime = new Date().getTime();
  }
});




const textEl= document.getElementById('autoText')
const text = 'CLICK ON THE IMAGES!!!'
let idx=1;
let speed = 300

writeText()

function writeText(){
    textEl.innerText= text.slice(0,idx)
    idx++

    if(idx>text.length){
    idx=1
    }

    setTimeout(writeText,speed)
}
