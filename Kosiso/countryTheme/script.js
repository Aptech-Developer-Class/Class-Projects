const countryContainer = document.querySelector(".imageContainer");
const mainContainer = document.querySelector(".mainContainer");
const searchContainer = document.querySelector(".searchContainer");
let darkOrLight = document.querySelector("#darkOrLight");
let header = document.querySelector("#header");
let mode = document.querySelector("#modeContainer");
let modeIcon = document.querySelector("#modeIcon");
const main = document.querySelector("#main");        
let sun = document.querySelector("#sunImg");
let input = document.querySelector("input");
let link = document.querySelectorAll(".link");
let dropMenu = document.querySelector(".dropdown-menu");
let searchIcon = document.querySelector("#searchIcon");
let btn = document.querySelector(".dropdown-toggle");
console.log(btn);

isClicked = false;

    fetch('data.json')
    .then( (res) => res.json().then( (data) => {
            console.log(data)

    
            for (let i = 190; i < 200; i++) {
                    console.log(data[i])
    
           
            const container = document.createElement("div");
             container.setAttribute('class','numerals');  
    
            let img1 = document.createElement("img")
            img1.src = data[i].flag
            img1.classList.add("img1")
            img1.setAttribute("class",'images');
            
    
            let countryName = document.createElement("h2")
            countryName.append(data[i].name)
            countryName.classList.add("country")
    
            let population = document.createElement("h4")
            population.classList.add("population")
            population.append(`Population: ` + data[i].population)
    
            let region = document.createElement("h4")
            region.classList.add("population")
            region.append(`Region: ` + data[i].region)
    
    
           let capital = document.createElement("h4")
           capital.classList.add("population")
           capital.classList.add("capital")
           capital.append(`Capital: ` + data[i].capital)
           
           
    
            container.append(img1,countryName,population,region,capital)
            countryContainer.append(container);

            function modeChanger() {
                if(isClicked == false) {
             isClicked = true;
             darkOrLight.innerHTML = 'Dark Mode';
             mainContainer.style.backgroundColor = 'hsl(0, 0%, 98%)'
             header.style.backgroundColor = 'white';
             header.style.color = 'black';
             header.style.boxShadow = '0 0 13px gainsboro'
             input.style.backgroundColor = 'white';
             input.style.color = 'hsl(207, 26%, 17%)';
             searchContainer.style.backgroundColor = 'white';
             searchContainer.style.boxShadow = '0 0 13px gainsboro';
             modeIcon.src = 'Moon.png';
             container.style.color = 'black';   
             btn.classList.add("btn");  
             btn.classList.remove("btn2");
             let num = document.querySelectorAll(".numerals");
             dropMenu.style.backgroundColor = 'white';
             dropMenu.style.color = 'black';
             for(let digit of num) {
                digit.style.backgroundColor = 'white';
                digit.style.color = 'black';
                digit.style.boxShadow = '0 0 10px gainsboro'
             }
}   
        else {
            isClicked = false;
            mainContainer.style.backgroundColor = 'hsl(207, 26%, 17%';
            darkOrLight.innerHTML = 'Light Mode';
            header.style.backgroundColor = 'hsl(209, 23%, 22%)';
            header.style.color = 'white';
            header.style.boxShadow = '0 0 13px hsl(209, 23%, 22%)';
            input.style.backgroundColor = 'hsl(209, 23%, 22%)';
            input.style.color = 'white'
            searchContainer.style.boxShadow = '0 0 13px hsl(207, 26%, 17%)';
            searchContainer.style.backgroundColor = 'hsl(209, 23%, 22%)';
            modeIcon.src = 'moonLight.svg';
            container.style.color = 'white'; 
            btn.classList.add("btn2");
            btn.classList.remove("btn");
            dropMenu.style.backgroundColor = 'hsl(209, 23%, 22%)';
            dropMenu.style.color = 'red';
             let num = document.querySelectorAll(".numerals");
             for(let digit of num) {
                digit.style.backgroundColor = "hsl(209, 23%, 22%)";
                digit.style.color = "white";
                digit.style.boxShadow = '0 0 13px hsl(209, 23%, 22%)';
             }
        }
    };
 }

mode.addEventListener("click", modeChanger);
}));