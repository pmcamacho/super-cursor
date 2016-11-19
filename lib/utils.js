
function addClassName (el, cls) {
  el.className += ' ' + cls;
}

function removeClassName (el, cls) {
  var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

export {addClassName, removeClassName};
