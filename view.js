/* function renderCards(cardValues){
  
    const displayCards = document.getElementById("memoryGame");

    cardValues.forEach((value,index) => {
        const cardContainer = document.createElement("div");
        const cardTextContainer = document.createElement("span");
        const cardText = document.createTextNode(value);
        
        cardContainer.classList.add("card-container"); 
        cardContainer.appendChild(cardTextContainer);
        cardTextContainer.appendChild(cardText);
        cardTextContainer.classList.add("dp-hidden");
        displayCards.appendChild(cardContainer);
    });  
  } */

class View {
  constructor(container) {
    this.playerContainer = container;
  }
  renderCards(cardValues) {
    const displayCards = document.getElementById(this.playerContainer);

    cardValues.forEach((value, index) => {
      const cardContainer = document.createElement("div");
      const cardTextContainer = document.createElement("span");
      const cardText = document.createTextNode(value);

      cardContainer.classList.add("card-container");
      cardContainer.appendChild(cardTextContainer);
      cardTextContainer.appendChild(cardText);
      cardTextContainer.classList.add("dp-hidden");
      displayCards.appendChild(cardContainer);
    });
  }
}
