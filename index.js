
const modZi = document.getElementById("modZi")
const divZi = document.getElementById("divZi")
const modNoapte = document.getElementById("modNoapte")
const divNoapte = document.getElementById("divNoapte")
const numeCategorie = document.querySelectorAll(".pAuto")

modNoapte.addEventListener("click", function(){
    divNoapte.classList.add("displayOff")
    divZi.classList.remove("displayOff")

    numeCategorie.forEach((element) => {
        element.classList.remove('textNegru');
      });
    

numeCategorie.forEach((element) => {
  element.classList.add('textAlb');
});
  


    const body = document.querySelector("body")
    body.classList.remove("alb")
    body.classList.add("intunecat")
})


modZi.addEventListener("click", function(){
    divZi.classList.add("displayOff")
    divNoapte.classList.remove("displayOff")
   

    numeCategorie.forEach((element) => {
        element.classList.remove('textAlb');
      });
    

numeCategorie.forEach((element) => {
  element.classList.add('textNegru');
});
  




    const body = document.querySelector("body")
    body.classList.remove("intunecat")
    body.classList.add("alb")
})

const inimaRosie = document.getElementById("inimaRosie")
const inimaAlba = document.getElementById("inimaAlba")

inimaAlba.addEventListener("click", function(){
  inimaAlba.classList.add("displayOff")
  inimaRosie.classList.remove("displayOff")
})

inimaRosie.addEventListener("click", function(){
  inimaAlba.classList.remove("displayOff")
  inimaRosie.classList.add("displayOff")
})



const inimaRosie2 = document.getElementById("inimaRosie2")
const inimaAlba2 = document.getElementById("inimaAlba2")

inimaAlba2.addEventListener("click", function(){
  inimaAlba2.classList.add("displayOff")
  inimaRosie2.classList.remove("displayOff")
})

inimaRosie2.addEventListener("click", function(){
  inimaAlba2.classList.remove("displayOff")
  inimaRosie2.classList.add("displayOff")
})


const inimaRosie3 = document.getElementById("inimaRosie3")
const inimaAlba3 = document.getElementById("inimaAlba3")

inimaAlba3.addEventListener("click", function(){
  inimaAlba3.classList.add("displayOff")
  inimaRosie3.classList.remove("displayOff")
})

inimaRosie3.addEventListener("click", function(){
  inimaAlba3.classList.remove("displayOff")
  inimaRosie3.classList.add("displayOff")
})








const inimaRosie4 = document.getElementById("inimaRosie4")
const inimaAlba4 = document.getElementById("inimaAlba4")

inimaAlba4.addEventListener("click", function(){
  inimaAlba4.classList.add("displayOff")
  inimaRosie4.classList.remove("displayOff")
})

inimaRosie4.addEventListener("click", function(){
  inimaAlba4.classList.remove("displayOff")
  inimaRosie4.classList.add("displayOff")
})









const inimaRosie5 = document.getElementById("inimaRosie5")
const inimaAlba5 = document.getElementById("inimaAlba5")

inimaAlba5.addEventListener("click", function(){
  inimaAlba5.classList.add("displayOff")
  inimaRosie5.classList.remove("displayOff")
})

inimaRosie5.addEventListener("click", function(){
  inimaAlba5.classList.remove("displayOff")
  inimaRosie5.classList.add("displayOff")
})








const inimaRosie6 = document.getElementById("inimaRosie6")
const inimaAlba6 = document.getElementById("inimaAlba6")

inimaAlba6.addEventListener("click", function(){
  inimaAlba6.classList.add("displayOff")
  inimaRosie6.classList.remove("displayOff")
})

inimaRosie6.addEventListener("click", function(){
  inimaAlba6.classList.remove("displayOff")
  inimaRosie6.classList.add("displayOff")
})









const inimaRosie7 = document.getElementById("inimaRosie7")
const inimaAlba7 = document.getElementById("inimaAlba7")

inimaAlba7.addEventListener("click", function(){
  inimaAlba7.classList.add("displayOff")
  inimaRosie7.classList.remove("displayOff")
})

inimaRosie7.addEventListener("click", function(){
  inimaAlba7.classList.remove("displayOff")
  inimaRosie7.classList.add("displayOff")
})








const inimaRosie8 = document.getElementById("inimaRosie8")
const inimaAlba8 = document.getElementById("inimaAlba8")

inimaAlba8.addEventListener("click", function(){
  inimaAlba8.classList.add("displayOff")
  inimaRosie8.classList.remove("displayOff")
})

inimaRosie8.addEventListener("click", function(){
  inimaAlba8.classList.remove("displayOff")
  inimaRosie8.classList.add("displayOff")
})








const inimaRosie9 = document.getElementById("inimaRosie9")
const inimaAlba9 = document.getElementById("inimaAlba9")

inimaAlba9.addEventListener("click", function(){
  inimaAlba9.classList.add("displayOff")
  inimaRosie9.classList.remove("displayOff")
})

inimaRosie9.addEventListener("click", function(){
  inimaAlba9.classList.remove("displayOff")
  inimaRosie9.classList.add("displayOff")
})









const inimaRosie10 = document.getElementById("inimaRosie10")
const inimaAlba10 = document.getElementById("inimaAlba10")

inimaAlba10.addEventListener("click", function(){
  inimaAlba10.classList.add("displayOff")
  inimaRosie10.classList.remove("displayOff")
})

inimaRosie10.addEventListener("click", function(){
  inimaAlba10.classList.remove("displayOff")
  inimaRosie10.classList.add("displayOff")
})









const inimaRosie11 = document.getElementById("inimaRosie11")
const inimaAlba11 = document.getElementById("inimaAlba11")

inimaAlba11.addEventListener("click", function(){
  inimaAlba11.classList.add("displayOff")
  inimaRosie11.classList.remove("displayOff")
})

inimaRosie3.addEventListener("click", function(){
  inimaAlba11.classList.remove("displayOff")
  inimaRosie11.classList.add("displayOff")
})









const inimaRosie12 = document.getElementById("inimaRosie12")
const inimaAlba12 = document.getElementById("inimaAlba12")

inimaAlba12.addEventListener("click", function(){
  inimaAlba12.classList.add("displayOff")
  inimaRosie12.classList.remove("displayOff")
})

inimaRosie12.addEventListener("click", function(){
  inimaAlba12.classList.remove("displayOff")
  inimaRosie12.classList.add("displayOff")
})









const inimaRosie13 = document.getElementById("inimaRosie13")
const inimaAlba13 = document.getElementById("inimaAlba13")

inimaAlba13.addEventListener("click", function(){
  inimaAlba13.classList.add("displayOff")
  inimaRosie13.classList.remove("displayOff")
})

inimaRosie13.addEventListener("click", function(){
  inimaAlba13.classList.remove("displayOff")
  inimaRosie13.classList.add("displayOff")
})









const inimaRosie14 = document.getElementById("inimaRosie14")
const inimaAlba14 = document.getElementById("inimaAlba14")

inimaAlba14.addEventListener("click", function(){
  inimaAlba14.classList.add("displayOff")
  inimaRosie14.classList.remove("displayOff")
})

inimaRosie14.addEventListener("click", function(){
  inimaAlba14.classList.remove("displayOff")
  inimaRosie14.classList.add("displayOff")
})









const inimaRosie15 = document.getElementById("inimaRosie15")
const inimaAlba15 = document.getElementById("inimaAlba15")

inimaAlba15.addEventListener("click", function(){
  inimaAlba15.classList.add("displayOff")
  inimaRosie15.classList.remove("displayOff")
})

inimaRosie15.addEventListener("click", function(){
  inimaAlba15.classList.remove("displayOff")
  inimaRosie15.classList.add("displayOff")
})










// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





const anunt = document.querySelectorAll(".anunt")
const verde = document.getElementById("verde")
const albastru = document.getElementById("albastru")
const header = document.getElementById("header")
const cauta = document.getElementById("cauta")
const anunturi = document.getElementById("anunturi")
const categorii = document.getElementById("categorii")

const footer = document.getElementById("footer")


verde.addEventListener("click", function(){

  anunt.forEach((element) => {
    element.classList.add('backgroundVerde');
  });

  footer.classList.add("backgroundVerde")
  anunturi.classList.add("backgroundVerde")
  categorii.classList.add("backgroundVerde")
  header.classList.add("backgroundVerde")
  cauta.classList.add("backgroundVerde")

  verde.classList.add("displayOff")
  albastru.classList.remove('displayOff')


})

albastru.addEventListener("click", function(){
  
  anunt.forEach((element) => {
    element.classList.remove('backgroundVerde');
  });

  footer.classList.remove("backgroundVerde")
  anunturi.classList.remove("backgroundVerde")
  categorii.classList.remove("backgroundVerde")
  header.classList.remove("backgroundVerde")
  cauta.classList.remove("backgroundVerde")


  verde.classList.remove("displayOff")
  albastru.classList.add("displayOff")
})