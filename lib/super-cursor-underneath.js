
import * as SuperCursorPosition from './super-cursor-position';

var callback;

function init (cb) {
  callback = cb;
  initEventListeners();
}

function dispose () {}

function initEventListeners () {
  window.addEventListener('mousemove', function (event) {
    updateUnderneathClasses(SuperCursorPosition.getPointerPositionInViewPort().vx, SuperCursorPosition.getPointerPositionInViewPort().vy);
  });
  window.addEventListener('scroll', function (event) {
    updateUnderneathClasses(SuperCursorPosition.getPointerPositionInViewPort().vx, SuperCursorPosition.getPointerPositionInViewPort().vy);
  });
}

function updateUnderneathClasses (x, y) {
  var element = document.elementFromPoint(x, y);

  var classes = {};
  let targetClasses = element.className.split(' ');
  classes.node = [];
  for (let i = 0; i < targetClasses.length; i++) {
    classes.node.push(targetClasses[i]);
  }
  let parent = element.parentNode;
  for (let i = 0; parent !== null && parent !== undefined; i++) {
    let targetClasses = parent.className;
    if (targetClasses !== undefined) {
      targetClasses = targetClasses.split(' ');
      classes['parent' + i] = [];
      for (let j = 0; j < targetClasses.length; j++) {
        classes['parent' + i].push(targetClasses[j]);
      }
    }
    parent = parent.parentNode;
  }
  var spClass = findFirstSuperPointerClasses(classes);
  callback(spClass[0] || 'sp-fallback');
}

function findFirstSuperPointerClasses (classes) {
  const regex = /sp-[^ \n\r\t\0]+/u;
  let classesArray = Object.keys(classes).map((value, index, array) => {
    return classes[value];
  });

  let arrayStrings = classesArray.map((value, index, array) => {
    return value.join(' ');
  });

  let m;
  let sp = [];
  for (let i = 0; i < arrayStrings.length; i++) {
    m = regex.exec(arrayStrings[i]);
    if (m !== null) {
      for (let i = 0; i < m.length; i++) {
        sp.push(m[i]);
      }
    }
  }
  return sp;
}

export {init, dispose};
