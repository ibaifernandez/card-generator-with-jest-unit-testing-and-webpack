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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((module) => {

eval("let symbols = [\"♦\", \"♥\", \"♠\", \"♣\"];\nlet values = [\"A\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\", \"J\", \"Q\", \"K\"];\nlet symbol;\nlet value;\n\nconst topSymbol = document.querySelector(\".header-symbol\");\nconst bottomSymbol = document.querySelector(\".footer-symbol\");\nconst mainValue = document.querySelector(\".body-symbol\");\n\nconst symbolGenerator = () => {\n    symbol = symbols[Math.floor(Math.random() * 4)];\n    return symbol;\n};\n\nconst valueGenerator = () => {\n    value = values[Math.floor(Math.random() * 13)];\n    return value;\n};\n\nconst assignSymbol = () => {\n    topSymbol.innerText = symbol;\n    bottomSymbol.innerText = symbol;\n};\n\nconst assignValue = () => {\n    mainValue.innerText = value;\n};\n\nconst assignColor = () => {\n    if (symbol === \"♦\" || symbol === \"♥\") {\n        topSymbol.classList.add(\"red\");\n        bottomSymbol.classList.add(\"red\");\n        mainValue.classList.add(\"red\");\n    } else {\n        topSymbol.classList.remove(\"red\");\n        bottomSymbol.classList.remove(\"red\");\n        mainValue.classList.remove(\"red\");\n    }\n};\n\nconst initialConfig = () => {\n    valueGenerator();\n    symbolGenerator();\n    assignSymbol();\n    assignValue();\n    assignColor();\n};\n\nmodule.exports = {\n    initialConfig,\n    valueGenerator,\n    symbolGenerator,\n    assignSymbol,\n    assignValue,\n    assignColor,\n};\n\n\n//# sourceURL=webpack://card-generator-with-test-and-webpack-2/./app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;