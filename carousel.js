//carousel 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}

//automatic slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }



//accordion
let bi=document.getElementsByClassName("bx-plus")
console.log(bi)
let info=document.getElementsByClassName("info")
console.log(info)
let minus=document.getElementsByClassName("bx-minus")
console.log(minus)
for(let k=0;k<minus.length;k++){
  minus[k].style.display="none"
}
function accord(){
    
    
    for(let i=0;i<info.length;i++){
        bi[i].addEventListener("click",()=>{
            console.log("displaying")
            info[i].style.display="block"
            bi[i].style.display="none"
            minus[i].style.display="block"
            minus[i].addEventListener("click",()=>{
              info[i].style.display="none"
              minus[i].style.display="none"
              bi[i].style.display="block"
            })
            for(let j=0;j<info.length;j++){
                if(j!=i){
                    info[j].style.display="none"
                    
                }
            }
        })
        
    }
}
accord()