const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record){
let result=record.find(record=>record.result==="w")
  return !!result ? result.year : undefined
}