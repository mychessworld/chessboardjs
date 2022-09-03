var config = {
  position: '2R5/4bppk/1p1p4/5R1P/4PQ2/5P2/r4q1P/7K w - - 5 50'
}
var board = Chessboard('myBoard', config)

$('#move1Btn').on('click', function () {
  board.position('2R5/4bppk/1p1p3Q/5R1P/4P3/5P2/r4q1P/7K b - - 6 50')
})
$('#move2Btn').on('click', function () {
  board.position('2R5/4bpp1/1p1p3k/5R1P/4P3/5P2/r4q1P/7K w - - 0 51')
})
$('#move11Btn').on('click', function () {
  board.position('2R5/4bp1k/1p1p3p/5R1P/4P3/5P2/r4q1P/7K w - - 0 51')
})
$('#move21Btn').on('click', function () {
  board.position('2R5/4bR1k/1p1p3p/7P/4P3/5P2/r4q1P/7K b - - 0 51')
})
$('#move3Btn').on('click', function () {
  board.position('7R/4bpp1/1p1p3k/5R1P/4P3/5P2/r4q1P/7K b - - 1 51')
})
$('#move0Btn').on('click', function () {
  board.position('2R5/4bppk/1p1p4/5R1P/4PQ2/5P2/r4q1P/7K w - - 5 50')
})

document.getElementById("move1Btn").style.display="none";
document.getElementById("move2Btn").style.display="none";
document.getElementById("move11Btn").style.display="none";
document.getElementById("move21Btn").style.display="none";
document.getElementById("move3Btn").style.display="none";
document.getElementById("move0Btn").style.display="none";

function myChess() {
  document.getElementById("move1Btn").style.display="inline";
  document.getElementById("move2Btn").style.display="inline";
  document.getElementById("move3Btn").style.display="inline";
  document.getElementById("move11Btn").style.display="inline";
  document.getElementById("move21Btn").style.display="inline";
  document.getElementById("move0Btn").style.display="inline";
  document.getElementById("solution1").style.display="none";
}  
 
