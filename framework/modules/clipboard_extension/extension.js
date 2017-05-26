/*
    EuljiFrame Extension
*/
console.log("Enabling ClipboardJS Extension");

var imported = document.createElement('script');
imported.src = './framework/modules/clipboard_extension/js_modules/clipboard.min.js';
document.head.appendChild(imported);

console.log("Enabled ClipboardJS Extension");