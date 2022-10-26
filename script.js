window.setTimeout(enablePopUp, 1000)

fetch('http://www.fatface.com/women/clothing/skirts/jennie-geo-skirt/976998.html?dwvar_976998_color=black#q=jennie+geo+skirt&lang=en_GB&start=1',
{
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the JSON from our response
  let parser = new DOMParser();
  let doc = parser.parseFromString(html, 'text/html');

  let price = doc.querySelector('.b-price__digit');
  console.log(price);
	console.log(html);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


const popUp = document.querySelector(".pop-up-container");

const reducedPrice = document.querySelector(".discounted-price");

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