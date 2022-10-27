window.setTimeout(enablePopUp, 1000);
window.addEventListener('mouseup', function(event){
  let box = document.querySelector('.pop-up-container');
  //childNodes may be able to shorten this
  if(event.target != box && event.target.parentNode != box && event.target.parentNode.parentNode != box && event.target.parentNode.parentNode.parentNode != box){
    box.classList.remove('show');
    box.classList.add('hidden');
  }
})

/* let priceDiv = document.querySelector(".b-price__digit")
let priceAtt = priceDiv.getAttribute("content") */

let price = 42;

function discountedPrice(price){
  return (price * 0.8).toFixed(2);
}

const popUp = document.querySelector(".pop-up-container");

const reducedPrice = document.querySelector(".discounted-price");

reducedPrice.innerHTML = '£' + discountedPrice(price);

const closePop = document.querySelector(".close");

const countDownDate = new Date("Dec 25, 2022 00:00:00").getTime();

function enablePopUp(){
    popUp.classList.remove("hidden");
    popUp.classList.add("show");
}

function closePopUp(){
    popUp.classList.remove("show");
    popUp.classList.add("hidden");
}

closePop.addEventListener("click", closePopUp);

let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours to go!";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);