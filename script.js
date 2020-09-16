const colorDefined = document.getElementsByClassName('color');
const cleanTheBoard = document.querySelector('#clear-board');
const generateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
let pixelElements = document.getElementsByClassName('pixel');
let firstMainColor = document.getElementsByClassName('selected');
let boardSize = document.getElementById('board-size').value;
let numberOfColumns = 5;
let numberOfLines = 5;
let pixelWidth = 40;
function randomNumber() {
  return Math.round(Math.random() * 255);
};
for (let index = 0; index < Object.keys(colorDefined).length; index += 1) {
  colorDefined[index].addEventListener('click', function () { 
    firstMainColor[0].classList.remove('selected');
    event.target.classList.add('selected');
    firstMainColor = document.getElementsByClassName('selected');
  });
};
function listenerToPixels() {
pixelElements = document.getElementsByClassName('pixel');
for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
  pixelElements[index].addEventListener('click', function () {
    firstMainColor = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = firstMainColor[0].style.backgroundColor;
  });
}
}
function firstConditions() {
  boardSize = document.getElementById('board-size').value;
  if (boardSize === '' || boardSize == 0) {
    alert('Board inválido!');
  } else {
    conditionsToGenereteBoard();
  }
}
function conditionsToGenereteBoard() {
  if (boardSize >= 5 && boardSize <= 50) {
    constructorBoard();
  } else if (boardSize < 5) {
      boardSize = 5;
      constructorBoard();
    } else {
      boardSize = 50;
      constructorBoard();
    }
  }
function constructorBoard() {
  numberOfColumns = boardSize;
  numberOfLines = boardSize;
  pixelBoard.innerHTML = '';
  for (let line = 0; line < numberOfLines; line += 1) {
    let elementCreator = document.createElement('section');
    elementCreator.className = 'line';
    pixelBoard.appendChild(elementCreator);
    for (let column = 0; column < numberOfColumns; column += 1) {
      elementCreator = document.createElement('div');
      elementCreator.className = 'pixel';
      document.getElementsByClassName('line')[line].appendChild(elementCreator);
    }
  }
  listenerToPixels();
  pixelBoard.style.width = numberOfColumns * pixelWidth;
  pixelBoard.style.width += 'px';
}
colorDefined[0].style.backgroundColor = 'black'
colorDefined[1].style.backgroundColor = `rgb(${randomNumber()} , ${randomNumber()} , ${randomNumber()})`;
colorDefined[2].style.backgroundColor = `rgb(${randomNumber()} , ${randomNumber()} , ${randomNumber()})`;
colorDefined[3].style.backgroundColor = `rgb(${randomNumber()} , ${randomNumber()} , ${randomNumber()})`;
listenerToPixels();
cleanTheBoard.addEventListener('click', function ()  {
  for (let index = 0; index < Object.keys(pixelElements).length; index += 1) {
    pixelElements[index].style.backgroundColor = 'white';
  }
});
generateBoard.addEventListener('click', firstConditions);







