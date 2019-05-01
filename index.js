const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  const x = array.find( (obj) => obj['result'] === "W")
  console.log(x)
  if (x) {
    return x['year']
  } else {
    return x
  }
}
