



// 1. Declare 3 variables in one statement
var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names
// Legal variable names
var myVariable;
var $variable;
var _variable;
var camelCaseVariable;
var variable123;

// Illegal variable names
// var 123variable; // Illegal: Cannot start with a number
// var my-variable; // Illegal: Hyphens are not allowed
// var my variable; // Illegal: Space is not allowed
// var var; // Illegal: Reserved keyword
// var break; // Illegal: Reserved keyword

// Displaying the rules in the browser
document.write("<b>a) Variable names can only contain:</b> letters, numbers, underscores (_) and dollar signs ($).<br>");
document.write("<b>b) Variables must begin with a:</b> letter, underscore (_) or dollar sign ($). For example $name, _name or name.<br>");
document.write("<b>c) Variable names are case:</b> sensitive.<br>");
document.write("<b>d) Variable names should not be JS:</b> keywords.<br>");

