
const testVar = [
  {year: "2018", result: "L"},
  {year: "2017", result: "X"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(data) {
  let winner = data.find( obj => obj.result === "W" )
  if (winner) {
    return winner.year
  } else {
    return undefined
  }
}

console.log(testFunc(testVar))
