fetch('https://rickandmortyapi.com/api/character')

.then(mean => mean.json())
.then(data =>{
    console.log(data)
    data.results.forEach(element => {
    // console.log(element)
    const characters = document.getElementById ('characters')
    const characterdetails = document.getElementById('characterdetails')
    // characters-details.classlist.add('characters-details')  
    
    const charactercontainer = document.createElement('div')
    charactercontainer.classList.add('characters-details')    

    const name = document.createElement('p')
    name.classList.add('name')

    const img = document.createElement('img')
    img.classList.add('image')

    const gender = document.createElement('p')
    gender.classList.add('gender')

    const specie = document.createElement('p')
    specie.classList.add('specie')

    const location = document.createElement('p')
    location.classList.add('location')

    const status = document.createElement('p')
    status.classList.add('status')

    name.append(element.name)
    img.src = element.image
    gender.append(element.gender)
    specie.append(element.specie)
    location.append(element.location.name)
    status.append(element.status)

    charactercontainer.append(name, img, gender, specie,location, status)
    characterdetails.append(charactercontainer)
    // characters.append(characterdetails)
    })
})