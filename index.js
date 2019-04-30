const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games){
  let winGame = games.find(game => game.result === "W")
  if (winGame){
    return winGame.year
  } else {
    return undefined
  }
}
