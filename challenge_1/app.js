let roundCountX = 0;
let roundCountO = 0;
let clickCount = 0;
let count = 2;
let win = 0;

window.onclick = e => {

    if (e.target.id === 'winModal') {
      e.preventdefault();
    }

    if (!e.target.innerText && count % 2 === 0) {
      e.target.innerText = 'X';
      count++;
      clickCount++;
    } else if (!e.target.innerText) {
      e.target.innerText = 'O';
      count++;
      clickCount++;
    }
    let one = document.getElementById("one").innerText;
    let two = document.getElementById("two").innerText;
    let three = document.getElementById("three").innerText;
    let four = document.getElementById("four").innerText;
    let five = document.getElementById("five").innerText;
    let six = document.getElementById("six").innerText;
    let seven = document.getElementById("seven").innerText;
    let eight = document.getElementById("eight").innerText;
    let nine = document.getElementById("nine").innerText;

    if (one && one === two && two === three && win < 1) { // first 3 are rows
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${one} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (one === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (four && four === five && five === six && win < 1) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${four} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (four === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (seven && seven === eight && eight === nine && win < 1) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${seven} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (seven === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (one && one === four && four === seven && win < 1) { // next 3 are columns
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${one} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (one === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (two && two === five && five === eight && win < 1) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${two} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (two === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (three && three === six && six === nine && win < 1) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${three} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (three === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (one && one === five && five === nine && win < 1) { // final 2 are diagonals
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${one} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (one === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    } else if (three && three === five && five === seven && win < 1) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `${three} WINS!!!! \n \n Click New Game \n To Play Again`;
      if (three === 'X') {
        document.getElementById('score1').innerText += '|';
        roundCountX ++;
      } else {
        document.getElementById('score2').innerText += '|';
        roundCountO ++;
      }
      win = 1;
    }
     else if (clickCount === 9 && win === 0) {
      document.getElementById('winModal').style.display = 'block';
      document.getElementById('winMessage').innerText = `ITS A TIE! \n \n Click New Game \n To Play Again`;
    }

    if (roundCountO === 5) {
      document.getElementById('endGame').style.display = 'block';
      document.getElementById('endMessage').innerText = `Thats All Folks \n O won 5 Rounds First`;
    }

    if (roundCountX === 5) {
      document.getElementById('endGame').style.display = 'block';
      document.getElementById('endMessage').innerText = `Thats All Folks \n X won 5 Rounds First`;
    }
}

function resetBoard() {
  let squares = document.getElementsByClassName('grid-item');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerText = '';
  }
  clickCount = 0;
  count --;
  win = 0;
  document.getElementById('winModal').style.display = 'none'
}

