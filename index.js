
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










