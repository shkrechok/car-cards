'use strict'

var gImgUrls = ['./img/audu-mea.png', './img/fiak-ibasa.png', './img/mitsu-bashi.png', './img/subali-pesha.png']
var gCardSizes = ['large', 'medium', 'small']
var gCards = createCards()

document.onload = onInit()

function onInit() {
    renderCards()
}

function renderCards() {
    var strHtmls = gCards.map(function (card) {
        return `
        <div class="card ${card.size}">
        <div class="card-header">
        <h2>Title</h2>
        <h3>Subtitle</h3>
        </div>
        <img src="${card.img}" alt="image description">
        ${generateParagraphs(card.size)}
        <span class="price">$99.99</span>
        <button>Buy</button>
      </div>
      `
    })
    document.querySelector('.cards-columns').innerHTML = strHtmls.join('')
}


// createing 20 crads randomly deciding the size of the card


function createCards() {
    var cards = []
    for (var i = 0; i < 20; i++) {
        var card = {
            id: i,
            size: gCardSizes[Math.floor(Math.random() * gCardSizes.length)],
            img: gImgUrls[Math.floor(Math.random() * gImgUrls.length)],
            p: makeLorem()
        }
        cards.push(card)
    }
    return cards
}

function generateParagraphs(cardSize) {
    var size = cardSize === 'large' ? 3 : cardSize === 'medium' ? 2 : 1
    var paragraph = ''
    for (var i = 0; i < size; i++) {
        paragraph += `<p>${makeLorem()}</p>`
    }
    return paragraph
}

function makeLorem(wordCount = 15) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (wordCount > 0) {
        wordCount--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}