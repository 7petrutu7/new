
// Declaram variabile
const olEl = document.getElementById("ol-el")
const inputModel = document.getElementById("input-model")
const inputBucati = document.getElementById("input-bucati")
const inputDescriere = document.getElementById("input-descriere")
const saveButton = document.getElementById("saveBtn")
const clearButton = document.getElementById("clearBtn")
const modelAr = localStorage.getItem("a")
const conv = JSON.parse(modelAr)


let modelArray = []
let bucatiArray = []
let descriereArray = []
let arrayComplete = []

// Sfarsit declarare variabile


// facem butonul clear sa functioneze 
clearButton.addEventListener("click", function(){
    localStorage.clear()
    olEl.textContent = ""
})
// sfarsit butonul clear

// facem butonul save sa functioneze
saveButton.addEventListener("click", function(){
    lessCode(modelArray, bucatiArray, descriereArray, inputModel, inputBucati, inputDescriere)
    for(i = 0; i < modelArray.length; i++){
        li = `<div id="div${i}"><li>${modelArray[i]} ${bucatiArray[i]} ${descriereArray[i]}</li><button id='btnm${i}'>-</button><button id="btnp${i}">+</button></div>`
    }
    arrayComplete.push(li)
    localStorage.setItem("a", JSON.stringify(arrayComplete))
    olEl.innerHTML += li

    //buton + in butonul save
    const adunareButton = document.getElementById("btnp0")
    adunareButton.addEventListener("click", function(){
        console.log('+')
    })
    //sfarsit buton +

    //buton - in buton save
    const scadereButton = document.getElementById("btnm0")
    scadereButton.addEventListener("click", function(){
        console.log("h")
    })
    // sfarsit buton -

    }
    // sfarsit buton save
    )

// scurtam cu o functie functionalitatea butonului save
function lessCode(arrayName1,arrayName2,arrayName3, inputName1, inputName2, inputName3) {
    arrayName1.push(inputName1.value)
    arrayName2.push(inputName2.value)
    arrayName3.push(inputName3.value)
    inputName1.value = ""
    inputName2.value = ""
    inputName3.value = ""
}
// sfarsit functia butonului save


// facem sa apara din localStore dupa ce da reset
if(modelAr){
    olEl.innerHTML = conv.join("")

    // buton + dupa ce dai refresh la pagina
    const adunareButton = document.getElementById("btnp0")
    adunareButton.addEventListener("click", function(){
        console.log('+')
    })
    // sfarsit buton + dupa ce dai refresh la pagina

    // buton - dupa ce dai refresh la pagina
    const scadereButton = document.getElementById("btnm0")
    scadereButton.addEventListener("click", function(){
        console.log("h")
    })
    // sfarsit buton - dupa ce dai refresh la pagina
}
// sfarsit sa apara din localStore