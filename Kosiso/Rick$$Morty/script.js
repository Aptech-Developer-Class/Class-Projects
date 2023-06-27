const character = document.createElement("h1");
const body = document.body
const emoji = "\uD83D\uDE00";
character.append(`About Rick and Morty API ${emoji}`)
body.append(character);
const mainContainer = document.querySelector(".mainContainer");



fetch("https://rickandmortyapi.com/api/character")

.then( (res) => res.json().then( (data) => {
   for(let result of data.results) {
      console.log(result)

   let charContain = document.createElement("div")
   charContain.classList.add("charContain");

   let name = document.createElement("p")
   name.classList.add("name")
   name.append(result.name)


   let images = document.createElement("img");
   images.src = result.image


    let createdOn = document.createElement("p")
    createdOn.append(`Created on: ` + result.created)

    let origin = document.createElement("p")
    origin.append(`Origin: ` + result.origin.name)

    let specie = document.createElement("p")
    specie.append(`specie: ` + result.species)

    let type = document.createElement("p")
    type.append(`type: ` + result.type)


    charContain.append(name,images,createdOn,origin,specie,type)
    mainContainer.append(charContain)
   }
}));
