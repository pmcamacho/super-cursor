# super-cursor

## description
Tiny library to enhance the cursor in a web app through CSS3 and JS(ES6).

## modules

./js/pointer-module.js &nbsp;&nbsp;**>** &nbsp;&nbsp; wrapper aka entry point.

./js/pointer-position-module.js &nbsp;&nbsp;**>** &nbsp;&nbsp; gives cursor position taking into account mouse move and mouse scroll events.

./js/pointer-underneath-classes-modules&nbsp;&nbsp;**>** &nbsp;&nbsp; parses css classes in html hovered by the cursor according to a regular expression.

./js/pointer-animation-module.js &nbsp;&nbsp;**>** &nbsp;&nbsp; starts animations based on click events.

./js/site.js &nbsp;&nbsp;**>** &nbsp;&nbsp; your app .js file.

## usage

## examples

## todo

- [] change element.classList manipulation, favoring element.className for browser compatibility.
- [] add api endpoint to override cursors or widgets chosen automatically by the library to add more control. (e.g only show loading cursor when loading something).
- [] stack widgets with cursors or vice-versa
- [] make it mobile compatible leveraging multi-touch (only for menu widgets I guess).


## ideas




## license
MIT (see [license](license))
