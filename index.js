const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  array.find(function(g) {
    if (g.result === "W") {
      return g.year
    } else {
      return undefined
    }
  })
}