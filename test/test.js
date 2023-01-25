const blue = document.querySelector(".blue")
const yellow = document.querySelector(".yellow")
const violet = document.querySelector(".violet")
const brown = document.querySelector(".brown")
const black = document.querySelector(".black")
const pink = document.querySelector(".pink")
const cercle = document.querySelector(".cercle2")


blue.addEventListener("click", function(){
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    
    cercle.classList.add("blue")
})

yellow.addEventListener("click", function(){
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    
    cercle.classList.add("yellow")
})

violet.addEventListener("click", function(){
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    cercle.classList.add("violet")
})

brown.addEventListener("click", function(){
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    
    cercle.classList.add("brown")
})

black.addEventListener("click", function(){
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    
    cercle.classList.add("black")
})

pink.addEventListener("click", function(){
    
        cercle.classList.remove("yellow", "violet","brown","black","pink","blue")
    
    cercle.classList.add("pink")
})

