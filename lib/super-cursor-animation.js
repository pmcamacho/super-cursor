import * as Utils from './utils';

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

  Utils.removeClassName(pointer, 'invisible');
  Utils.addClassName(pointer, 'visible');
  Utils.addClassName(pointerAnim, 'pointer');

  let top = y - pointer.clientHeight / 2;
  let left = x - pointer.clientWidth / 2;
  pointer.style.top = top + 'px';
  pointer.style.left = left + 'px';

  animId = setTimeout(function () {
    Utils.removeClassName(pointer, 'visible');
    Utils.addClassName(pointer, 'invisible');
    Utils.removeClassName(pointerAnim, 'pointer');
    anim = false;
  }, 1000);
}

function reInitAnim (x, y) {
  var pointer = document.getElementById('sp-pointer-back-anim');
  var pointerAnim = document.getElementById('pointer-anim');
  Utils.removeClassName(pointer, 'visible');
  Utils.addClassName(pointer, 'invisible');
  Utils.removeClassName(pointerAnim, 'pointer');
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
