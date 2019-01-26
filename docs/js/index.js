let textParent = document.getElementById('container__text');
let textChildren = textParent.children;
let imgParent = document.getElementById('container__img');
let array = ['p1', 'p2', 'p3']

for (let i = 0; i < textChildren.length; i++) {
  textChildren[i].addEventListener('mouseenter', () => {
    imgParent.classList.add(array[i], 'on');
  }, false);
  textChildren[i].addEventListener('mouseleave', () => {
    imgParent.classList.remove(array[i], 'on');
  }, false);
}
