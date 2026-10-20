document.querySelectorAll(".card").forEach(function (card, index) {
  card.style.transitionDelay = (index * 40) + "ms";
});
