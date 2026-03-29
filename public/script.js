
function toggleMenu(){

let menu = document.getElementById("menu");

menu.classList.toggle("active");
console.log('working');

}



/* IMAGE SLIDER */

let slides = document.querySelectorAll(".slide");

let index = 0;

function showSlide(){

slides.forEach((slide)=>{
slide.classList.remove("active");
})

slides[index].classList.add("active");

index++;

if(index === slides.length){
index = 0;
}

}

setInterval(showSlide,3000);

let buttonAll = document.getElementsByTagName('button')
for(let i = 0; i < buttonAll.length; i++){
    console.log(buttonAll[i]);
    buttonAll[i].addEventListener('click' , ()=>{

        window.open('https://wa.me/923318939821', "_blank");
    })
    console.log('working');
    
}


let p = document.getElementsByClassName('rating')
console.log(p);
for(let i = 0 ; i < p.length ; i++){
    p[i].style.display = 'none'
}


function goToWhatsapp() {
    window.open('https://wa.me/923318939821', "_blank");
}


function copyURL(contentText){
    let copyText = document.getElementById('copyText');
    
    // Text copy karna
    navigator.clipboard.writeText(contentText.innerText || contentText.textContent)
        .then(() => {
            // Message show karna
            copyText.innerHTML += `<p  class="copyText">Copied URL</p>`;
            
            // 0.5 second me message hide karna
            setTimeout(() => {
              let getP = copyText.getElementsByTagName('p');
getP[0].style.display = 'none'
               
               
            }, 900);
        })
        .catch(err => {
            console.error('Copy failed:', err);
        });
}