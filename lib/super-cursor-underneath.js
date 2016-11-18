
import * as SuperCursorPosition from './super-cursor-position'

var callback;

function init(cb) {
    callback = cb;
    initEventListeners();
}

function dispose() {
}

function initEventListeners() {
    window.addEventListener("mousemove", function(event) {
      updateUnderneathClasses(SuperCursorPosition.getPointerPositionInViewPort().vx, SuperCursorPosition.getPointerPositionInViewPort().vy);
    });

    window.addEventListener("scroll", function(event) {
      updateUnderneathClasses(SuperCursorPosition.getPointerPositionInViewPort().vx, SuperCursorPosition.getPointerPositionInViewPort().vy);
    });
}

function updateUnderneathClasses(x, y) {
  var element = document.elementFromPoint(x, y);

  var classes = {};
  let targetClasses = element.classList;
  if(targetClasses !== undefined) {
    classes.node = [];
    targetClasses.forEach((cls) => {
      classes.node.push(cls);
    });
  }

  let parent = element.parentNode;
  let i = 0;
  while(parent !== null && parent !== undefined) { // && parent !== document.body ?!
      let targetClasses = parent.classList;
      if(targetClasses !== undefined) {
        classes['parent' + i] = [];
        targetClasses.forEach((cls) => {
          classes['parent' + i].push(cls);
        });
      }
      parent = parent.parentNode;
      i++;
  }
  var spClass = findFirstSuperPointerClasses(classes);
  callback(spClass[0] || 'sp-fallback');
}

function findFirstSuperPointerClasses(classes) {
  const regex = /sp-[^ \n\r\t\0]+/u;
  let matchedSpClass = null;
  let classesArray = Object.keys(classes).map((value, index, array) => {
    return classes[value];
  });

  let arrayStrings = classesArray.map((value, index, array) => {
    return value.join(' ');
  });

  let m;
  let sp = [];
  arrayStrings.forEach((value, index, array) => {
    m = regex.exec(value);
    if (m !== null) {
      m.forEach((match, groupIndex) => {
        sp.push(match);
      });
    }
  });
  return sp;
}

export {init, dispose};
