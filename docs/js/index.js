let textParent = document.getElementById('container__text');
let textChildren = textParent.children;
let imgParent = document.getElementById('container__img');
let imgChildren = imgParent.children

for (let i = 0; i < textChildren.length; i++) {
  textChildren[i].addEventListener('mouseenter', () => {
    imgChildren[i].classList.add('on');
  }, false);
  textChildren[i].addEventListener('mouseleave', () => {
    imgChildren[i].classList.remove('on');
  }, false);

  textChildren[i].addEventListener('touchstart', () => {
    imgChildren[i].classList.add('on');
  }, false);
  textChildren[i].addEventListener('touchend', () => {
    imgChildren[i].classList.remove('on');
  }, false);
}
