//DISPLAY
let cardNumberDisplay = document.querySelector('.cardNumber');
let displayNameOnCard = document.querySelector(".nameOnCard");
let displayExpiDate = document.querySelector('.ExpiDate');
let displayYY = document.querySelector('.displayYY');
let displayMM = document.querySelector('.displayMM');
let displayCVC = document.querySelector('.displayCVC');
// INPUTS
let inputCardNumber = document.querySelector('.inputCardNumber');
let inputCardName = document.querySelector('.cardName');
let inputMM = document.querySelector('.MM');
let inputYY = document.querySelector('.YY');
let inputCVC = document.querySelector('.CVC');

// EVENT LISTENERS
inputCardNumber.addEventListener('beforeinput', updateCardNumberValue);
inputCardName.addEventListener('beforeinput', updateInputCardName);
inputMM.addEventListener('beforeinput', updateDisplayMM);
inputYY.addEventListener('beforeinput', updateDisplayYY);
inputCVC.addEventListener('beforeinput', updateDisplayCVC)

//FUNCTIONS
function updateCardNumberValue(e) {
   cardNumberDisplay.innerHTML = e.target.value;
}

function updateInputCardName(e) {
   displayNameOnCard.innerHTML = e.target.value;
}

function updateDisplayMM(e) {
   displayMM.innerHTML = e.target.value;
}

function updateDisplayYY(e) {
   displayYY.innerHTML = e.target.value;
}
function updateDisplayCVC(e) {
   displayCVC.innerHTML = e.target.value;
}

inputCardNumber.addEventListener('input', function (e) {
   var target = e.target, position = target.selectionEnd, length = target.value.length;
   
   target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
   target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && target.value.charAt(length - 1) === ' ' && length !== target.value.length) ? 1 : 0);
 });

$(document).ready(function () {
   $('.submit',);
})

$('.submit').on('click', function () {
   $('.sucessfulConfirmation').show();
   $('.PaymentInformation').hide();
}) 
