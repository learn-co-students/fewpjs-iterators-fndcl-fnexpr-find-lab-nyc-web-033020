const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
    let answer = array.find( (w) => {
      if (w.result === "W"){
        return w
      } 
    })
    if (answer){
      return answer.year
    } else return answer
}