var cardIndex = 2;
showCards(cardIndex);

function plusSlides(n) {
  showCards(cardIndex += n);
}

function currentSlide(n) {
  showCards(cardIndex = n);
}

function showCards(n) {
  var i;
  var card = document.getElementsByClassName("project_card");
  var dots = document.getElementsByClassName("dot");

  if (n > card.length) {cardIndex = 1}    
  if (n < 1) {cardIndex = card.length}
  
  for (i = 0; i < card.length; i++) {
      card[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  card[cardIndex-1].style.display = "block";  
  dots[cardIndex-1].className += " active";
}