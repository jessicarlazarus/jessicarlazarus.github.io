setInterval(function() {
  var currentTime = new Date();
 
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
 
  if (hours <= 11) {
    var period = "AM";
  } else {
    var period = "PM";
  }
 
  if (hours > 12) {
    hours = hours - 12;
  }
 
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }
 
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
 
  var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + period;
 
  var clock = document.getElementById('clock');
 
  clock.innerText = clockTime;
}, 1000);



var modalContainer = document.getElementById("modal-container");
 
var hideModal = function() {
  modalContainer.style.display = "none"
};
 
var showModal = function() {
  modalContainer.style.display = "block";
};
 
var modalShowButton = document.getElementById("modal-show");
modalShowButton.addEventListener("click", showModal);
 
var modalCloseButton = document.getElementById("modal-hide");
modalCloseButton.addEventListener("click", hideModal);

var handleNewsletterSignup = function(evt) {
  evt.preventDefault(); // don't ACTUALLY send the form ;)
  
  var newsletterHeader = document.getElementById("newsletter-header");
 
  newsletterHeader.innerText = "Thank you for signing up!";
};
 
var newsletterForm = document.getElementById("newsletter-signup");
newsletterForm.addEventListener("submit", handleNewsletterSignup);

var handleNewsletterSignup = function(evt) {
  evt.preventDefault(); // don't ACTUALLY send the form ;)
 
  var newsletterHeader = document.getElementById("newsletter-header");
 
  var newsletterForm = document.getElementById("newsletter-signup");
  newsletterForm.style.display = "none"; // hide the form
 
  newsletterHeader.innerText = "Thank you for signing up!";
 
  setTimeout(hideModal, 2000);
};
 
var newsletterForm = document.getElementById("newsletter-signup");
newsletterForm.addEventListener("submit", handleNewsletterSignup);




