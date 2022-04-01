/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("const form = document.getElementsByTagName('form')[0];\n\nconst email = document.getElementById('mail');\nconst emailError = document.querySelector('#mail + span.error');\n\n// add an eventListener on email - element\nemail.addEventListener('input', function(event) {\n    // check for each time a user type something...\n    // and check if form fields are valid\n\n    if (email.validity.valid) {\n        emailError.textContent = ''; // reseting content of emailError message\n        emailError.className = 'active'\n        \n    } else {\n        // if there still exist an error\n        // show the error()\n        showError();\n    }\n});\n\nform.addEventListener('submit', function(event) {\n    // we submit form if form field is valid\n    if (!email.validity.valid) {\n        showError();\n\n        // cancel the event here\n        event.preventDefault();\n    }\n});\n\nfunction showError() {\n    // if form field is empty\n    // show this error message\n    if (email.validity.valueMissing) {\n        emailError.textContent = \"Please provide an email address!\";\n    } else if (email.validity.typeMismatch) {\n        // if value entered is not a correct email address\n        // show this error message\n        emailError.textContent = \"Value not a correct email address!\";\n    } else if (email.validity.tooShort) {\n        // if email address value is too short\n        emailError.textContent = `\n            Email should be at least ${email.minLength} characters; n\\ you entered\n            ${email.value.length}\n        `;\n    }\n\n    emailError.className = 'error active';\n}\n\n\n//# sourceURL=webpack://cv-api/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;