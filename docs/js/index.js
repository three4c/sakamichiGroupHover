const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');

const container = document.getElementById('container')

t1.addEventListener('mouseenter touchstart', () => {
  p1.classList.add("img-opacity")
}, false);

t1.addEventListener('mouseleave touchstart', () => {
  p1.classList.remove("img-opacity")
}, false);

t2.addEventListener('mouseenter touchstart', () => {
  p2.classList.add("img-opacity")
}, false);

t2.addEventListener('mouseleave touchstart', () => {
  p2.classList.remove("img-opacity")
}, false);

t3.addEventListener('mouseenter touchstart', () => {
  p3.classList.add("img-opacity")
}, false);

t3.addEventListener('mouseleave touchstart', () => {
  p3.classList.remove("img-opacity")
}, false);
