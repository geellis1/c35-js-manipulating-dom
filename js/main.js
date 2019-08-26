const sectionEL = document.querySelector(".article__header")
sectionEL.textContent = "Welcome to Gradi's Blog"
console.log(sectionEL)

// const sectionElAll= document.querySelectorAll(".article__header")
// sectionELAll.classList.add = "important"
// console.log(sectionElAll)

const sectionEl2 = document.querySelectorAll(".article__header")
for (let index = 0; index < sectionEl2.length; index++) {
    sectionEl2[index].classList.add("important")
    
}

const sectionEl3 = document.querySelector(".dashed")
sectionEl3.remove 
console.log(sectionEl3)

const sectionEl4 = document.querySelector(".article__footer")
console.log(sectionEl4)
sectionEl4.classList.add("goldenrod")