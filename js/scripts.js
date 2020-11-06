
//     Hour check for daily greetings  

let greetingsSelector = document.getElementById("greetingsSelector");
let bottomNav = document.getElementById("bottomNav");
let designSec = document.getElementById("designSec");
let codeSec = document.getElementById("codeSec");
let code = document.getElementById("code");
let hiddenRed = document.getElementById("hiddenRed");
let hiddenWhite = document.getElementById("hiddenWhite");
let codeHoldWhite = document.getElementById("codeHoldWhite");
let designHoldRed = document.getElementById("designHoldRed");
let closeWhite = document.getElementById("closeWhite");
let closeRed = document.getElementById("closeRed");

//    Changes the Greeting Section depending on time of day

function greetings() {
    let date = new Date();
    let timeOfDay = date.getHours();
    console.log(timeOfDay);
    if (timeOfDay >= 5 && timeOfDay < 11 ) {
        greetingsSelector.innerHTML = "Morning";
    } else if (timeOfDay >= 11 && timeOfDay < 20) {
        greetingsSelector.innerHTML = "Afternoon"
    } else {
        greetingsSelector.innerHTML = "Evening";
    }
}

greetings();


//  Scroll function to show bottom nav
window.onscroll = function() {scrollNav()};

function scrollNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      bottomNav.classList.remove("hide");
    } else {
      bottomNav.classList.add("hide");
    }
  }



//       Expands the Design and Code Sections

designSec.addEventListener('click', function() {
    hiddenRed.classList.add("hiddenRedFull");
    designHoldRed.classList.remove("hide");
})
closeRed.addEventListener('click', function() {
    hiddenRed.classList.remove("hiddenRedFull");
    designHoldRed.classList.add("hide");
})
codeSec.addEventListener('click', function() {
    hiddenWhite.classList.add("hiddenWhiteFull");
    codeHoldWhite.classList.remove("hide");
})
closeWhite.addEventListener('click', function() {
    hiddenWhite.classList.remove("hiddenWhiteFull");
    codeHoldWhite.classList.add("hide");
})

