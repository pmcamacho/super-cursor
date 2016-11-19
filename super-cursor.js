
import * as SuperCursorPosition from './lib/super-cursor-position';
import * as SuperCursorUnderneath from './lib/super-cursor-underneath';
import * as SuperCursorAnimation from './lib/super-cursor-animation';
import * as Utils from './lib/utils';

var spCallbacks;
var lastSpClass;
var spBackCursor;
var spBackCursorAnim;

function init (config) {
  initMouse();
  initSpHtml();
  initSpHtmlAnim();
  initCallbacks(config.spCallbacks);

  SuperCursorPosition.init();
  SuperCursorUnderneath.init(processUnderneathCssClasses);
  SuperCursorAnimation.init();
}

function initSpHtml () {
  spBackCursor = document.createElement('div');
  spBackCursor.setAttribute('id', 'sp-back-cursor');
  Utils.addClassName(spBackCursor, 'pointer-move');
  document.getElementsByTagName('body')[0].appendChild(spBackCursor);
}

function initSpHtmlAnim () {
  spBackCursorAnim = document.createElement('div');
  spBackCursorAnim.setAttribute('id', 'sp-pointer-back-anim');
  Utils.addClassName(spBackCursor, 'pointer-background invisible');
  var div = document.createElement('div');
  div.setAttribute('id', 'pointer-anim');
  spBackCursorAnim.appendChild(div);
  document.getElementsByTagName('body')[0].appendChild(spBackCursorAnim);
}

function initMouse () {
  let html = document.getElementsByTagName('html')[0];

  html.addEventListener('mouseenter', function (event) {
    var sp = document.getElementById('sp-back-cursor');
    if (sp !== null) {
      Utils.removeClassName(sp, 'invisible');
      Utils.addClassName(sp, 'visible');
    }
  });

  html.addEventListener('mouseleave', function (event) {
    var sp = document.getElementById('sp-back-cursor');
    if (sp !== null) {
      Utils.removeClassName(sp, 'visible');
      Utils.addClassName(sp, 'invisible');
    }
  });
}

function initCallbacks (cbs) {
  spCallbacks = cbs;
}

function processUnderneathCssClasses (spCls) {
  if (spCls !== lastSpClass) {
    lastSpClass = spCls;
    var spCursorHtml = spCallbacks.processSpClassChange(spCls);
    changeSpCursor(spCursorHtml);
  }
}

function changeSpCursor (spCursorHtml) {
  let oldTop = spBackCursor.style.top.substring(0, spBackCursor.style.top.length - 2); // remove px from top
  let oldLeft = spBackCursor.style.left.substring(0, spBackCursor.style.left.length - 2);
  let oldWidth = spBackCursor.offsetWidth;
  let oldHeight = spBackCursor.offsetHeight;
  spCursorHtml.style.visibility = 'hidden';
  spBackCursor.innerHTML = '';
  spBackCursor.appendChild(spCursorHtml);
  let width = spCursorHtml.offsetWidth;
  let height = spCursorHtml.offsetHeight;
  let newTop = (oldTop + oldHeight / 2) - (height / 2);
  let newLeft = (oldLeft + oldWidth / 2) - (width / 2);
  spBackCursor.style.top = newTop + 'px';
  spBackCursor.style.left = newLeft + 'px';
  spCursorHtml.style.visibility = '';
}

export {init};
