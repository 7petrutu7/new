
const modZi = document.getElementById("modZi")
const divZi = document.getElementById("divZi")
const modNoapte = document.getElementById("modNoapte")
const divNoapte = document.getElementById("divNoapte")
const numeCategorie = document.querySelectorAll(".numeCategorie")

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











const divAnunturi = document.getElementById("divAnunturi")



let count1 = 0
let count2 = 999
divAnunturi.addEventListener("dblclick", function(){
  count1++
  count2 -= 1
  if(count1 > 0 && count2 >= 998){
    count1--
    
    inimaAlba.classList.add("displayOff")
    inimaRosie.classList.remove("displayOff")
  }else{
    inimaRosie.classList.add("displayOff")
    inimaAlba.classList.remove("displayOff")
    count2 +=2
  }
  
  
})