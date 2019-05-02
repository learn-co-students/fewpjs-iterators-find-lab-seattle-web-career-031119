const testVar = {}

function testFunc() {
  return "hi"
}

function searchFunc(teamRecord) {
  return (teamRecord.result === "W")
}

function superbowlWin(arr) {
  let res = arr.find(searchFunc)
  if (res) {
    return res.year
  } else {
    return undefined
  }
}
