const add = document.getElementById("add")
const body = document.querySelector("#body")


add.addEventListener("click", function(){
    const divToAppend = document.createElement("div")
    divToAppend.classList.add("divAnunturi")
    const div = document.createElement("div")
    const img = document.createElement("img")
    const pNumeAnunt = document.createElement("p")
    const pAccesorii = document.createElement("p")
    const pStare = document.createElement("p")
    const pLocatie = document.createElement("p")
    const pPret = document.createElement("p")

    div.classList.add("anunt")
    img.classList.add("imgAnunt")
    img.src ="masini/zoe.jpg"
    pNumeAnunt.classList.add("numeAnunt")
    pAccesorii.classList.add("accesorii")
    pStare.classList.add("stare")
    pLocatie.classList.add("locatie")
    pPret.classList.add("pret")

    pNumeAnunt.textContent = "Renault zoe"
    pAccesorii.textContent = "Fara"
    pStare.textContent = "Noua"
    pLocatie.textContent = "Bucuresti"
    pPret.textContent = "20000 euro"



    div.append(img)
    div.append(pNumeAnunt)
    div.append(pAccesorii)
    div.append(pStare)
    div.append(pLocatie)
    div.append(pPret)
    
    
    divToAppend.append(div)
    body.append(divToAppend)
})



