let start = 0
let elasped = 0
input.onButtonPressed(Button.A, function () {
    game.setScore(0)
    start = input.runningTime()
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    elasped = input.runningTime() - start
    elasped = Math.abs(elasped - 7000)
    game.addScore(elasped)
    game.gameOver()
})
basic.forever(function () {
	
})
