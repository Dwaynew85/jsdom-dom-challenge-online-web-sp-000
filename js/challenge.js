let count;
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let heart = document.getElementById('heart')
let pause = document.getElementById('pause')
let counter = document.getElementById('counter');
let likeCount;
function addCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) + 1;
 };
 function minusCounter() {
   counter.innerHTML = parseInt(counter.innerHTML, 10) - 1;
 }
 function increment() {
   addCounter();
   likeCount = 0;
 }
 function stopCounter() {
   clearTimeout(count)
 }
 document.addEventListener('DOMContentLoaded', function() { // starts counter when page loads
     setInterval(increment, 1000)
     console.log("Counter Started")
     likeCount = 0;
 });

function activeButtons() {
  plus.addEventListener("click", addCounter); // listens for plus being pressed
  minus.addEventListener("click", minusCounter); // listens for minus being pressed

  heart.addEventListener("click", function() {
    likeCount++;
    const li = document.createElement("li");
    const node = document.createTextNode(`${counter.textContent} has been liked ${likeCount} time(s).`);
    const likes = document.querySelector('.likes');
    const lastLike = likes.lastChild;
    li.appendChild(node);
    if(likeCount>1){
      lastLike.replaceWith(li);
    }else {
      likes.appendChild(li);
    }
  });

  let text;
  document.addEventListener("submit", function() {
    event.preventDefault();
    const list = document.getElementById('list');
    const comment = document.getElementById('comment-input');
    const p = document.createElement('p');
    list.appendChild(p);
    p.innerHTML = comment.value;
    document.getElementById('comment-form').reset();
  });
}
