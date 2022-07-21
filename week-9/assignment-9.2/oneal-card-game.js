/**
=======================================
; Title: Assignment 9.2 - Card Game
; Author: Tierre Green from Github
; Modified by: Chad ONeal
; Date: 07/20/2022
; Description: Final Card Game JS
=========================================
*/


//creation of card class.
class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }
}

//creation of dealer class.
class Dealer {
    constructor() {
    this.getDeckofCards();
}

//card count variable declaration.
    card_count = 52;

//variable for cards with empty arrays
    cards = [];

//faces array
    face = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

//suits array
    suit = ["Spades", "Hearts", "Diamonds", "Clubs"];

//function to get deck of cards
    getDeckofCards() {


//for loop 52 card iteration.
        for (let count = 0; count < this.card_count; count++) {

            this.cards[count] = new Card(this.face[count % 13], this.suit[Math.floor(count / 13)]);
        }
}

//shuffle function. 
    shuffle() {
        let secondCard, tempCard;

        for (let firstCard = 0; firstCard < this.card_count; firstCard++) {
            secondCard = Math.floor((Math.random() * this.card_count));
            tempCard = this.cards[firstCard];
            this.cards[firstCard] = this.cards[secondCard];
            this.cards[secondCard] = tempCard
        }
        this.cardOutput();
    }

//build playing card function with parameters for face icon and color.
    buildPlayingCard(cardPic, suitIcon, faceColor, suitColor) {
        console.log("buildCard Log", cardPic)


//playing card return string.
        return `<div class="card player-card" style="width:100%">
                    <div class="card-title" style="text-align:left; font-size:20px; padding-left:10px; color:${faceColor};">
                    ${cardPic} 
                     </div>
                     <div class="card-content" style="font-size:28px; padding-bottom:25px">
                       
                            <span class="${suitIcon}" style="color:${suitColor}">
                            </span>
                    </div>
                </div>`
    }

//function for card output
    cardOutput() {

//cardoutPutwithIcon function for each loop.
        let cardOutPutWithIcon = "";
        this.cards.forEach((card) =>{
            console.log('card log', card);

//card suit and color switch statement.
        switch(card.suit) {

//case call for all suits.
        case "Spades":

        cardOutPutWithIcon += this.buildPlayingCard(card.face, "mdi mdi-cards-heart", "red", "red");
        break;

        case "Hearts":
        cardOutPutWithIcon += this.buildPlayingCard(card.face, "mdi mdi-cards-diamond", "red", "red");
        break;

        case "Diamonds":
        cardOutPutWithIcon += this.buildPlayingCard(card.face, "mdi mdi-cards-club", "black", "black");
        break;

        case "Clubs":
        cardOutPutWithIcon += this.buildPlayingCard(card.face, "mdi mdi-cards-spade", "black", "black");
}

});

//player card container binded to output with icon.
            document.getElementById("player-card-container").innerHTML = cardOutPutWithIcon;
    }
}

//dealer action onclick event.
document.getElementById("DealCards").onclick = function() {


//dealer shuffle function.
    new Dealer().shuffle()
};