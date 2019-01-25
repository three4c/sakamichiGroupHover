const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

const container = document.getElementById('container')

t1.addEventListener('mouseenter', () => {
  p1.classList.add("op")
}, false);

t1.addEventListener('mouseleave', () => {
  p1.classList.remove("op")
}, false);

t2.addEventListener('mouseenter', () => {
  p2.classList.add("op")
}, false);

t2.addEventListener('mouseleave', () => {
  p2.classList.remove("op")
}, false);

t3.addEventListener('mouseenter', () => {
  p3.classList.add("op")
}, false);

t3.addEventListener('mouseleave', () => {
  p3.classList.remove("op")
}, false);
