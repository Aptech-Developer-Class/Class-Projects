const countdownDate = new Date("Apr 1, 2023 00:00:00").getTime();
const y = setInterval(function(){
    const currentDate = new Date().getTime();
    const difference = countdownDate - currentDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = leading_zero(days);
    document.getElementById("hours").innerHTML = leading_zero(hours);
    document.getElementById("minutes").innerHTML = leading_zero(minutes);
    document.getElementById("seconds").innerHTML = leading_zero(seconds);

    function leading_zero(x){
        return(x < 10) ? ('0'+ x):x;
    }
},1000);