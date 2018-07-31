//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

var randomize = document.querySelector('.randomize');  // odnosi się do pola 
var story = document.querySelector('.story');  // odnosi się do klasy "story"
function randomValueFromArray(array) {
return array[Math.floor(Math.random() * array.length)];
}   // losowa wartość z tablicy

//2. RAW TEXT STRINGS
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ['Willy the Goblin',
'Big Daddy',
'Father Christmas'];

var insertY = ['the soup kitchen',
'Disneyland',
'the White House'];

var insertZ = ['spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() { 
var newStory = storyText;    
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);
    
var newStory = newStory.replace(/:insertx:/g, xItem)
.replace(/:inserty:/g, yItem )
.replace(/:insertz:/g, zItem);
    
var customName = document.getElementById('customname');    
  if(customName.value != '') {
    var name = customName.value;
    var newStory = newStory.replace(/Bob/g, name);   
  }    
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.07) + ' stones';
    var temperature =  Math.round(94 * 5/9 -32) + ' centigrade';
    var newStory = newStory.replace(/94 farenheit/g, temperature)
    .replace(/300 pounds/g, weight)
  }
  story.textContent = newStory;
  story.style.visibility = 'visible';
}