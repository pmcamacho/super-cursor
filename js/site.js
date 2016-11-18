import * as SuperCursor from 'super-cursor'

SuperCursor.init({
  spCallbacks: {
    processSpClassChange: processSpClassChange
  }
});

var spProgress = function(){
  let spProgress = document.createElement('div');
  spProgress.setAttribute('id', 'sp-progress');
  spProgress.classList.add('dot-spinner');
  for(var i = 0; i < 8; i++){
    var span = document.createElement('span');
    span.classList.add('dot');
    span.classList.add('dot' + (i + 1));
    spProgress.appendChild(span);
  }
  return spProgress;
}();

var spDefault = function(){
  let spPointer = document.createElement('div');
  spPointer.setAttribute('id', 'sp-default');
  spPointer.classList.add('sp-default-cursor');
  return spPointer;
}();

var spPointer = function(){
  let spPointer = document.createElement('div');
  spPointer.setAttribute('id', 'sp-pointer');
  spPointer.classList.add('sp-pointer-cursor');
  return spPointer;
}();

var spText = function() {
  let spText = document.createElement('div');
  spText.setAttribute('id', 'sp-text');
  spText.classList.add('sp-text-cursor');
  return spText;
}();

var spWidgetText = function() {
  let spWidgetText = document.createElement('div');
  spWidgetText.setAttribute('id', 'sp-widget');
  spWidgetText.classList.add('sp-widget-text');
  let message = "Imagination is the limit!";
  let messageWrapper = document.createElement('span');
  for(var i = 0; i < message.length; i++) {
    let span = document.createElement('span');
    span.classList.add('char' + (i + 1));
    span.innerHTML = message.charAt(i);
    messageWrapper.appendChild(span);
  }
  spWidgetText.appendChild(messageWrapper);
  return spWidgetText;
}();

function processSpClassChange (spClass) {

  switch(spClass) {

    case 'sp-fallback':
      return spDefault;
      break

    case 'sp-default':
      // return document.getElementById('sp-progress');
      return spDefault;
      break;

    case 'sp-pointer':
      // return document.getElementById('sp-progress');
      return spPointer;
      break;

    case 'sp-progress':
      // return document.getElementById('sp-progress');
      return spProgress;
      break;

    case 'sp-text':
      return spText;
      break;

    case 'sp-widget':
      return spWidgetText;
      break;

  }

}
