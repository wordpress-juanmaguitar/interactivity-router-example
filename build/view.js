import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity-router":
/*!**************************************************!*\
  !*** external "@wordpress/interactivity-router" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@wordpress/interactivity-router");;

/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

const getUrlScope = _url => {
  const url = new URL(_url); // https://playground.wordpress.net/scope:0.6413659246282131/
  const baseUrl = url.origin;
  const path = url.pathname;
  const scopeMatch = path.match(/scope:[^/]+/);
  return {
    baseUrl,
    scope: scopeMatch ? scopeMatch[0] : null
  };
};
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)("router-2f43f8", {
  state: {
    baseUrl: "",
    urlRegionDisplay: window.location.href,
    get urlRegionDisplaySlug() {
      const {
        pathname
      } = new URL(state.urlRegionDisplay);
      return pathname.split("/").filter(Boolean).pop() || "";
    }
  },
  callbacks: {
    setBaseUrl: () => {
      const {
        baseUrl,
        scope
      } = getUrlScope(window.location.href);
      state.baseUrl = baseUrl;
      if (scope) {
        state.baseUrl += `/${scope}/`;
      }
    }
  },
  actions: {
    *navigate(e) {
      e.preventDefault();
      const {
        actions
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @wordpress/interactivity-router */ "@wordpress/interactivity-router"));
      state.urlRegionDisplay = e.target.href;
      const urlToNavigatePlayground = state.baseUrl + state.urlRegionDisplaySlug;

      //yield actions.navigate( state.urlRegionDisplaySlug );
      yield actions.navigate(urlToNavigatePlayground);
    }
  }
});
})();


//# sourceMappingURL=view.js.map