/*
    EuljiFrame Extension
*/

console.log("Enabling EuljiFrame System");

var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/jquery.min.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/skel.min.js';
document.head.appendChild(imported);



setTimeout(function () {
var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/jquery.scrollex.min.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/jquery.scrolly.min.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/util.js';
document.head.appendChild(imported);

var imported = document.createElement('script');
imported.src = './framework/modules/euljiframe_system/js_modules/main.js';
document.head.appendChild(imported);
}, 100);

console.log("Enabling EuljiFrame System");