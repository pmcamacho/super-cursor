
var positionX;
var positionY;

var positionVX;
var positionVY;

var lastScrollX = 0;
var lastScrollY = 0;

function init() {
    initEventListeners();
}

function dispose() {
}

function initEventListeners() {
    window.addEventListener("mousemove", function(event) {
        updatePointerCoordinates(event.pageX, event.pageY, event.clientX, event.clientY);
    });

    window.addEventListener("scroll", function(event) {

        let scrollX = window.scrollX;
        let scrollY = window.scrollY;

        if(scrollX !== lastScrollX) {
            if(scrollX > lastScrollX) {
                positionX = positionX + (scrollX - lastScrollX);
            }
            else {
                positionX = positionX + (scrollX - lastScrollX);
            }
            lastScrollX = scrollX;
        }

        if(scrollY !== lastScrollY) {
            if(scrollY > lastScrollY) {
                positionY = positionY + (scrollY - lastScrollY);
            } else {
                positionY = positionY + (scrollY - lastScrollY);
            }
            lastScrollY = scrollY;
        }
        updatePointerCoordinates(positionX, positionY, positionVX, positionVY);
    });
}

function updatePointerCoordinates(x, y, vx, vy) {
    positionX = x;
    positionY = y;
    positionVX = vx;
    positionVY = vy;
    processPointerMove(x, y);
}

function getPointerPosition() {
    return {x: positionX, y: positionY};
}

function getPointerPositionInViewPort() {
  return {vx: positionVX, vy: positionVY};
}

function processPointerMove(x, y) {
  if(x !== undefined && y !== undefined && x !== NaN && y !== NaN) {
    move(x, y);
  }
}

function move(x, y) {
  let pointer = document.getElementById('sp-back-cursor');
  let top = y - pointer.clientHeight / 2;
  let left = x - pointer.clientWidth / 2;
  pointer.style.top = top + 'px';
  pointer.style.left = left + 'px';
}

export {init, dispose, getPointerPosition, getPointerPositionInViewPort};
