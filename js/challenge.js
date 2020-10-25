let count;
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let counter = document.getElementById('counter');
function addCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
 };
 function minusCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
 }
 function startCounter() {
   count = setInterval(addCounter, 1000)
 }
 function stopCounter() {
   clearTimeout(count)
 }
 document.addEventListener('DOMContentLoaded', function() { // starts counter when page loads
     startCounter();
     console.log("Counter Started")
 });
// there will be an event that adds the counter +1 if plus is pressed, or -1 if minus is pressed
plus.addEventListener("click", addCounter); // listens for plus being pressed
minus.addEventListener("click", minusCounter); // listens for minus being pressed
pause.addEventListener("click", stopCounter);
// when the 'like' button is pressed, it shows the amount of likes for the current number listed
let likeCount = 0;
heart.addEventListener("click", function() {
  likeCount++;
  const li = document.createElement("li");
  const node = document.createTextNode(counter.textContent + " has been liked" + likeCount " time(s).");
  const likes = document.querySelector('.likes');
  const lastLike = likes.lastChild;
  li.appendChild(node);
  if(likeCount>1){
    lastLike.replaceWith(li);
  }else {
    likes.appendChild(li);
  }
});
  // need to check each number as they run, see if they have likes, and display a message if they have likes
  // figure out what event triggers when the h1(counter) is updated




// listener for submit button
// let text;
// document.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event);
//   text = document.getElementById('comment-input')
// });
// text.value
