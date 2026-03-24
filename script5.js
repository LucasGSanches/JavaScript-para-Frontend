const cards = document.querySelectorAll("section");

cards.forEach((card) => {
  card.addEventListener('click', () => {
    handleCardClick(card);
  });
});

function handleCardClick(card){
    cards.forEach((_card) => {
        _card.classList.remove("especial_class");
    })
    card.classList.add("especial_class");
}