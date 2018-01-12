shout(string){
  return string.toUpperCase()
}
whisper(string){
  return string.toLowerCase()
}
logShout(string){
  return console.log(shout(string))
}
logWhisper(string){
  return console.log(whisper(string))
}
sayHiToGrandma