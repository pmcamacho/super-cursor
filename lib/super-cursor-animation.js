
var anim = false;
var animId;

function init () {
  window.addEventListener('click', function (event) {
    var x = event.pageX;
    var y = event.pageY;
    click(x, y);
  });
}

function initAnim (x, y) {
  anim = true;
  var pointer = document.getElementById('sp-pointer-back-anim');
  var pointerAnim = document.getElementById('pointer-anim');

  pointer.classList.remove('invisible');
  pointer.classList.add('visible');
  pointerAnim.classList.add('pointer');

  let top = y - pointer.clientHeight / 2;
  let left = x - pointer.clientWidth / 2;
  pointer.style.top = top + 'px';
  pointer.style.left = left + 'px';

  animId = setTimeout(function () {
    pointer.classList.remove('visible');
    pointer.classList.add('invisible');
    pointerAnim.classList.remove('pointer');
    anim = false;
  }, 1000);
}

function reInitAnim (x, y) {
  var pointer = document.getElementById('sp-pointer-back-anim');
  var pointerAnim = document.getElementById('pointer-anim');
  pointer.classList.remove('visible');
  pointer.classList.add('invisible');
  pointerAnim.classList.remove('pointer');
  clearTimeout(animId);
  setTimeout(function () {
    initAnim(x, y);
  }, 100);
}

function click (x, y) {
  if (anim) {
    reInitAnim(x, y);
  } else {
    initAnim(x, y);
    anim = true;
  }
}

export {init};
