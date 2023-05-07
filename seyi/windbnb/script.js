// const userLocation = document.getElementById('selectLocation')
// userLocation.addEventListener('change', function handleChange(event) {
//   const locationValue = event.target.value
//   document.querySelector('.location-bar p').innerHTML =  locationValue
// });

function showHeader() {
    const x = document.querySelector(".full-header");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

  function hideHeader(){
    const x = document.querySelector(".full-header");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
} 

function showLocationDropdown(){
  let y = document.querySelector(".location-dropdown");
  if (y.style.display === "none") {
    y.style.display = "block";
} else{
  y.style.display = "none";
}
}

function showGuestsDropdown(){
  let y = document.querySelector(".guests-dropdown");
  if (y.style.display === "none") {
    y.style.display = "block";
} else{
  y.style.display = "none";
}
}

function selectLocation(location) {
  document.getElementById("selectLocation").value = location;
}

  
const counterValue1 = document.getElementById('counter-value1');
const incrementBtn1 = document.getElementById('increment-btn1');
const decrementBtn1 = document.getElementById('decrement-btn1');
const counterValue2 = document.getElementById('counter-value2');
const incrementBtn2 = document.getElementById('increment-btn2');
const decrementBtn2 = document.getElementById('decrement-btn2');
const sum = document.getElementById('addGuests');

let counter1 = 0;  
let counter2 = 0;
let totalCount = 0;
// To increment the value of counter
incrementBtn1.addEventListener('click', () => {
    counter1++;
    totalCount = counter1 + counter2
    counterValue1.innerHTML = counter1;
    sum.value = totalCount + ' guests';
});
  
// To decrement the value of counter
decrementBtn1.addEventListener('click', () => {
    counter1--;
    if (counter1 < 0) counter1 = 0;
    totalCount = counter1 + counter2
    counterValue1.innerHTML = counter1;
    sum.value = totalCount + ' guests';
});

// To increment the value of counter
incrementBtn2.addEventListener('click', () => {
    counter2++;
    totalCount = counter1 + counter2
    counterValue2.innerHTML = counter2;
    sum.value = totalCount + ' guests';
});
// To decrement the value of counter
decrementBtn2.addEventListener('click', () => {
    counter2--;
    if (counter2 < 0) counter2 = 0;
    totalCount = counter1 + counter2
    counterValue2.innerHTML = counter2;
    sum.value = totalCount + ' guests';
});



