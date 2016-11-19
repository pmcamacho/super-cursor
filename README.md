# super-cursor

## status
Work in progress...

## description
Tiny library to enhance the cursor in a web app through CSS3 and JS(ES6).

## modules (ES6)

super-cursor.js &nbsp;&nbsp;**>** &nbsp;&nbsp; wrapper aka entry point.

super-cursor-position.js &nbsp;&nbsp;**>** &nbsp;&nbsp; gives cursor position taking into account mouse move and mouse scroll events.

super-cursor-underneath.js&nbsp;&nbsp;**>** &nbsp;&nbsp; parses css classes in html hovered by the cursor according to a regular expression.

super-cursor-animation.js &nbsp;&nbsp;**>** &nbsp;&nbsp; starts animations based on click events.

site.js &nbsp;&nbsp;**>** &nbsp;&nbsp; your app .js file.

## usage
soon...

## examples
soon...

## todo

- [x] change element.classList manipulation, favoring element.className for browser compatibility.
- [ ] add api endpoint to override cursors or widgets chosen automatically by the library to add more control.
- [ ] stack widgets with cursors or vice-versa
- [ ] make it mobile compatible leveraging multi-touch (only for menu widgets I guess).

## notes
[https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects](https://developer.mozilla.org/docs/Mozilla/Performance/ScrollLinkedEffects)

## license
MIT (see [license](LICENSE))
