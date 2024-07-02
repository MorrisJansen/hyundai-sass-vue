/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/hyundai-sass-vue/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "0347":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "04da":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "11dd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiMobiel_vue_vue_type_style_index_0_id_468e14b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e8b4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiMobiel_vue_vue_type_style_index_0_id_468e14b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiMobiel_vue_vue_type_style_index_0_id_468e14b8_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "14bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag2_vue_vue_type_style_index_0_id_7c5138aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5776");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag2_vue_vue_type_style_index_0_id_7c5138aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag2_vue_vue_type_style_index_0_id_7c5138aa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "19d6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1a16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_0dd96c54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1c27");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_0dd96c54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formulier_vue_vue_type_style_index_0_id_0dd96c54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1a1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComfortSmart_vue_vue_type_style_index_0_id_b3f7f4b4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ae83");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComfortSmart_vue_vue_type_style_index_0_id_b3f7f4b4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComfortSmart_vue_vue_type_style_index_0_id_b3f7f4b4_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1c27":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "21d0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel1_vue_vue_type_style_index_0_id_57f0ef10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("04da");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel1_vue_vue_type_style_index_0_id_57f0ef10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel1_vue_vue_type_style_index_0_id_57f0ef10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2705":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3dbcd956_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c4f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3dbcd956_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_style_index_0_id_3dbcd956_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2b43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabel2_vue_vue_type_style_index_0_id_76ecaae2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("42a7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabel2_vue_vue_type_style_index_0_id_76ecaae2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabel2_vue_vue_type_style_index_0_id_76ecaae2_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "2e13":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen2_vue_vue_type_style_index_0_id_1d3b6dc9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7dc6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen2_vue_vue_type_style_index_0_id_1d3b6dc9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen2_vue_vue_type_style_index_0_id_1d3b6dc9_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "35e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_29c53250_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f5c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_29c53250_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_vue_vue_type_style_index_0_id_29c53250_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "374e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag5_vue_vue_type_style_index_0_id_0dbae738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6a5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag5_vue_vue_type_style_index_0_id_0dbae738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag5_vue_vue_type_style_index_0_id_0dbae738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "42a7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "44d1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/achtergrondVraag.b83dac96.png";

/***/ }),

/***/ "453e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vragen-pijl-volgende.e3bc62d4.svg";

/***/ }),

/***/ "4a79":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ff8":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/binnen-auto-1@2x.54190e9d.png";

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=317579e4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('router-view');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=317579e4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: "App"
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneHyundaiDesktopTest.vue?vue&type=template&id=1e1cba10
var CampagneHyundaiDesktopTestvue_type_template_id_1e1cba10_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "campagne-hyundai-desktop-test screen"
  }, [_c('div', {
    staticClass: "overlap-group2"
  }, [_c('div', {
    staticClass: "group-1"
  }, [_c('div', {
    staticClass: "overlap-group",
    style: {
      'background-image': 'url(' + _vm.overlayGroup + ')'
    }
  }), _c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1)]), _c('div', {
    staticClass: "overkoepelende-container-header"
  }, [_c('div', {
    staticClass: "section-header"
  }, [_c('div', {
    staticClass: "overlap-group1"
  }, [_c('div', {
    staticClass: "overlap-group1"
  }, [_c('transition', {
    attrs: {
      "name": "image-slide",
      "mode": "out-in"
    }
  }, [_vm.showOverlay ? _c('div', {
    key: _vm.currentImage,
    staticClass: "overlap-group new-image afbeelding-radius",
    style: {
      'background-image': 'url(' + _vm.currentImage + ')'
    }
  }, [_c('div', {
    staticClass: "flex-col"
  }, [_c('div', {
    staticClass: "tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px",
    domProps: {
      "innerHTML": _vm._s(_vm.tijdelijkVoorMaar275PM)
    }
  }), _c('div', {
    staticClass: "ontdek-meer",
    on: {
      "click": _vm.scrollToSection
    }
  }, [_vm._v("ONTDEK MEER")])]), _c('div', {
    staticClass: "navigatie-slider"
  }, [_c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-left",
    attrs: {
      "src": _vm.arrowLeft,
      "alt": "Arrow left"
    }
  })]), _c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-right",
    attrs: {
      "src": _vm.arrowRight,
      "alt": "Arrow right"
    }
  })])])]) : _vm._e()]), _c('transition', {
    attrs: {
      "name": "image-slide",
      "mode": "out-in"
    }
  }, [!_vm.showOverlay ? _c('div', {
    key: _vm.currentImage,
    staticClass: "overlap-group old-image afbeelding-radius",
    style: {
      'background-image': 'url(' + _vm.currentImage + ')'
    }
  }, [_c('div', {
    staticClass: "flex-col"
  }, [_c('div', {
    staticClass: "tijdelijk-voor-maar-275-pm hyundaisansheadoffice-bold-white-41px",
    domProps: {
      "innerHTML": _vm._s(_vm.tijdelijkVoorMaar275PM)
    }
  }), _c('div', {
    staticClass: "ontdek-meer",
    on: {
      "click": _vm.scrollToSection
    }
  }, [_vm._v("ONTDEK MEER")])]), _c('div', {
    staticClass: "navigatie-slider"
  }, [_c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-left",
    attrs: {
      "src": _vm.arrowLeft,
      "alt": "Arrow left"
    }
  })]), _c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-right",
    attrs: {
      "src": _vm.arrowRight,
      "alt": "Arrow right"
    }
  })])])]) : _vm._e()])], 1), _c('div', {
    staticClass: "cta-balk"
  }, [_c('p', {
    staticClass: "private-lease-nu-tij hyundaisansheadoffice-bold-midnight-blue-nu-tijdelijk",
    domProps: {
      "innerHTML": _vm._s(_vm.privateLeaseNuTij)
    }
  }), _c('router-link', {
    attrs: {
      "to": "/hyundai-sass-vue/vraag1"
    }
  }, [_c('button', {
    staticClass: "offerte-knop cta-offerte-knop"
  }, [_c('div', {
    staticClass: "vraag-offerte-aan"
  }, [_vm._v("Vraag offerte aan")]), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png",
      "alt": "Arrow button"
    }
  })])])], 1)]), _c('div', {
    staticClass: "hoofd-titel-tekst"
  }, [_c('x-label', {
    attrs: {
      "nieuw": _vm.xLabelProps.nieuw
    }
  }), _c('div', {
    staticClass: "frame-5"
  }, [_c('h1', {
    staticClass: "de-vernieuwde-hyundai-i10",
    domProps: {
      "innerHTML": _vm._s(_vm.deVernieuwdeHyundaiI10)
    }
  }), _c('div', {
    staticClass: "maak-een-groots-statement"
  }, [_vm._v(_vm._s(_vm.maakEenGrootsStatement))])])], 1), _vm._m(1), _c('p', {
    staticClass: "het-maandbedrag-va hyundaisansheadoffice-regular-normal-silver-16px"
  }, [_vm._v(_vm._s(_vm.hetMaandbedragVa))])])])]), _c('div', {
    staticClass: "section-all-inclusive"
  }, [_c('div', {
    staticClass: "overlap-group-1"
  }, [_c('img', {
    staticClass: "vrouw-blij-auto",
    attrs: {
      "id": "target-section",
      "src": _vm.vrouwBlijAuto,
      "alt": "vrouw blij auto"
    }
  }), _c('div', {
    staticClass: "voordelen-blokken"
  }, [_c('div', {
    staticClass: "voordeel-1"
  }, [_c('img', {
    staticClass: "stuurwiel",
    attrs: {
      "src": _vm.stuurwiel,
      "alt": "stuurwiel"
    }
  }), _c('div', {
    staticClass: "rijden-in-een-nieuwe-hyundai hyundaisansheadoffice-bold-midnight-blue-24px",
    domProps: {
      "innerHTML": _vm._s(_vm.rijdenInEenNieuweHyundai)
    }
  })]), _c('voordeel2', {
    attrs: {
      "coins": _vm.voordeel21Props.coins,
      "aantrekkelijkVastBedragPM": _vm.voordeel21Props.aantrekkelijkVastBedragPM
    }
  }), _c('voordeel2', {
    attrs: {
      "coins": _vm.voordeel22Props.coins,
      "aantrekkelijkVastBedragPM": _vm.voordeel22Props.aantrekkelijkVastBedragPM
    }
  }), _c('voordeel2', {
    attrs: {
      "coins": _vm.voordeel23Props.coins,
      "aantrekkelijkVastBedragPM": _vm.voordeel23Props.aantrekkelijkVastBedragPM
    }
  }), _c('voordeel2', {
    attrs: {
      "coins": _vm.voordeel24Props.coins,
      "aantrekkelijkVastBedragPM": _vm.voordeel24Props.aantrekkelijkVastBedragPM
    }
  })], 1)]), _c('div', {
    staticClass: "frame-19"
  }, [_c('div', {
    staticClass: "titel-all-inclusive"
  }, [_c('div', {
    staticClass: "hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-18px"
  }, [_vm._v(_vm._s(_vm.hyundaiI101))]), _c('p', {
    staticClass: "all-inclusive-geniet hyundaisansheadoffice-bold-midnight-blue-48px"
  }, [_vm._v(_vm._s(_vm.allInclusiveGeniet))])]), _c('p', {
    staticClass: "vast-maandbedrag-inc hyundaisansheadoffice-regular-normal-black-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.vastMaandbedragInc)
    }
  })])]), _c('div', {
    staticClass: "section-frisse-kijk-slider"
  }, [_c('div', {
    staticClass: "titel-frisse-kijk"
  }, [_c('div', {
    staticClass: "hyundai-i10 hyundaisansheadoffice-bold-midnight-blue-18px"
  }, [_vm._v(_vm._s(_vm.hyundaiI102))]), _c('p', {
    staticClass: "een-frisse-kijk-op-een-gedurfd-ontwerp hyundaisansheadoffice-bold-midnight-blue-48px"
  }, [_vm._v(" " + _vm._s(_vm.eenFrisseKijkOpEenGedurfdOntwerp) + " ")])]), _c('Carousel')], 1), _c('Tabel2'), _c('router-link', {
    attrs: {
      "to": "/hyundai-sass-vue/vraag1"
    }
  }, [_c('button', {
    staticClass: "offerte-knop middelste-knop-groot"
  }, [_c('div', {
    staticClass: "vraag-offerte-aan"
  }, [_vm._v("Vraag offerte aan")]), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png",
      "alt": "Arrow button"
    }
  })])]), _c('div', {
    staticClass: "section-prijzentabel"
  }, [_c('div', {
    staticClass: "prijzentabel-i10-comfort hyundaisansheadoffice-bold-midnight-blue-48px"
  }, [_vm._v(" Prijzentabel i10 Comfort ")]), _c('div', {
    staticClass: "tabel-prijzen"
  }, [_c('div', {
    staticClass: "container-prijzen"
  }, [_vm._m(2), _c('div', {
    staticClass: "frame-9-1 licht-blauw-achtergrond hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "border-prijzentabel"
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("60 maanden")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "account-viwers"
  }, [_vm._v("60 maanden")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "social-media-dashboa"
  }, [_vm._v("48 maanden")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "shopify-dashboard"
  }, [_vm._v("48 maanden")])])]), _c('div', {
    staticClass: "container-prijzen"
  }, [_vm._m(3), _c('div', {
    staticClass: "frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "border-prijzentabel"
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("10.000")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "account-viwers"
  }, [_vm._v("20.000")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "social-media-dashboa"
  }, [_vm._v("10.000")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "shopify-dashboard"
  }, [_vm._v("20.000")])])]), _c('div', {
    staticClass: "container-prijzen"
  }, [_vm._m(4), _c('div', {
    staticClass: "frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "border-prijzentabel"
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("€ 312,-")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "account-viwers"
  }, [_vm._v("€ 358,11")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "social-media-dashboa"
  }, [_vm._v("€ 342,-")]), _c('img', {
    staticClass: "separators-5",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "shopify-dashboard"
  }, [_vm._v("€ 385,04")])])])])]), _c('router-link', {
    attrs: {
      "to": "/hyundai-sass-vue/vraag1"
    }
  }, [_c('button', {
    staticClass: "offerte-knop midden-knop"
  }, [_c('div', {
    staticClass: "vraag-offerte-aan"
  }, [_vm._v("Vraag offerte aan")]), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png",
      "alt": "Arrow button"
    }
  })])]), _c('img', {
    staticClass: "line-2",
    attrs: {
      "src": _vm.line2,
      "alt": "Line 2"
    }
  }), _vm._m(5)], 1)]);
};
var CampagneHyundaiDesktopTestvue_type_template_id_1e1cba10_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "https://morrisjansen.github.io/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('p', {
    staticClass: "profiteer-nu-van-een bodymedium"
  }, [_c('span', {
    staticClass: "span0 bodymedium"
  }, [_vm._v("Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.")]), _c('br'), _c('span', {
    staticClass: "span1"
  }, [_vm._v("Je stapt al in vanaf €275 per maand*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "titel-7"
  }, [_c('div', {
    staticClass: "bill-montly-1 hyundaisansheadoffice-bold-white-32px"
  }, [_vm._v("Aantal maanden")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "titel"
  }, [_c('div', {
    staticClass: "titel-8 hyundaisansheadoffice-bold-port-gore-32px"
  }, [_vm._v("Aantal km")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "titel"
  }, [_c('div', {
    staticClass: "titel-9 hyundaisansheadoffice-bold-port-gore-32px"
  }, [_vm._v("Maandbedrag")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "privacy-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "voorwaarden-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/CampagneHyundaiDesktopTest.vue?vue&type=template&id=1e1cba10

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Keurmerk.vue?vue&type=template&id=d6553b08
var Keurmerkvue_type_template_id_d6553b08_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`keurmerk`, _vm.className || ``]
  });
};
var Keurmerkvue_type_template_id_d6553b08_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Keurmerk.vue?vue&type=template&id=d6553b08

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Keurmerk.vue?vue&type=script&lang=js
/* harmony default export */ var Keurmerkvue_type_script_lang_js = ({
  name: "Keurmerk",
  props: ["className"]
});
// CONCATENATED MODULE: ./src/components/Keurmerk.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Keurmerkvue_type_script_lang_js = (Keurmerkvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Keurmerk.vue?vue&type=style&index=0&id=d6553b08&prod&lang=sass
var Keurmerkvue_type_style_index_0_id_d6553b08_prod_lang_sass = __webpack_require__("af04");

// CONCATENATED MODULE: ./src/components/Keurmerk.vue






/* normalize component */

var Keurmerk_component = Object(componentNormalizer["a" /* default */])(
  components_Keurmerkvue_type_script_lang_js,
  Keurmerkvue_type_template_id_d6553b08_render,
  Keurmerkvue_type_template_id_d6553b08_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Keurmerk = (Keurmerk_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XLabel.vue?vue&type=template&id=c9371a18
var XLabelvue_type_template_id_c9371a18_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "label"
  }, [_c('div', {
    staticClass: "nieuw"
  }, [_vm._v(_vm._s(_vm.nieuw))])]);
};
var XLabelvue_type_template_id_c9371a18_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/XLabel.vue?vue&type=template&id=c9371a18

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/XLabel.vue?vue&type=script&lang=js
/* harmony default export */ var XLabelvue_type_script_lang_js = ({
  name: "XLabel",
  props: ["nieuw"]
});
// CONCATENATED MODULE: ./src/components/XLabel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_XLabelvue_type_script_lang_js = (XLabelvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/XLabel.vue?vue&type=style&index=0&id=c9371a18&prod&lang=sass
var XLabelvue_type_style_index_0_id_c9371a18_prod_lang_sass = __webpack_require__("bdbf");

// CONCATENATED MODULE: ./src/components/XLabel.vue






/* normalize component */

var XLabel_component = Object(componentNormalizer["a" /* default */])(
  components_XLabelvue_type_script_lang_js,
  XLabelvue_type_template_id_c9371a18_render,
  XLabelvue_type_template_id_c9371a18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var XLabel = (XLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Voordeel2.vue?vue&type=template&id=71221579
var Voordeel2vue_type_template_id_71221579_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "voordeel"
  }, [_c('img', {
    staticClass: "coins",
    attrs: {
      "src": _vm.coins,
      "alt": "coins"
    }
  }), _c('div', {
    staticClass: "aantrekkelijk-vast-bedrag-pm hyundaisansheadoffice-bold-midnight-blue-24px"
  }, [_vm._v(" " + _vm._s(_vm.aantrekkelijkVastBedragPM) + " ")])]);
};
var Voordeel2vue_type_template_id_71221579_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Voordeel2.vue?vue&type=template&id=71221579

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Voordeel2.vue?vue&type=script&lang=js
/* harmony default export */ var Voordeel2vue_type_script_lang_js = ({
  name: "Voordeel2",
  props: ["coins", "aantrekkelijkVastBedragPM"]
});
// CONCATENATED MODULE: ./src/components/Voordeel2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Voordeel2vue_type_script_lang_js = (Voordeel2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Voordeel2.vue?vue&type=style&index=0&id=71221579&prod&lang=sass
var Voordeel2vue_type_style_index_0_id_71221579_prod_lang_sass = __webpack_require__("9128");

// CONCATENATED MODULE: ./src/components/Voordeel2.vue






/* normalize component */

var Voordeel2_component = Object(componentNormalizer["a" /* default */])(
  components_Voordeel2vue_type_script_lang_js,
  Voordeel2vue_type_template_id_71221579_render,
  Voordeel2vue_type_template_id_71221579_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Voordeel2 = (Voordeel2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Onderdelen.vue?vue&type=template&id=208dab99
var Onderdelenvue_type_template_id_208dab99_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "onderdelen-2"
  }, [_c('frame12', _vm._b({}, 'frame12', _vm.frame12Props, false))], 1);
};
var Onderdelenvue_type_template_id_208dab99_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Onderdelen.vue?vue&type=template&id=208dab99

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame12.vue?vue&type=template&id=2c880430
var Frame12vue_type_template_id_2c880430_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`frame-12`, _vm.className || ``]
  }, [_vm._l(_vm.icons, function (icon, index) {
    return _c('div', {
      key: index,
      staticClass: "icoon-container"
    }, [_c('img', {
      staticClass: "tabel-icons",
      attrs: {
        "src": icon,
        "alt": "Tabel icons"
      }
    }), index < _vm.icons.length - 0 ? _c('img', {
      staticClass: "separators-3",
      attrs: {
        "src": _vm.separators1,
        "alt": "Separators"
      }
    }) : _vm._e()]);
  }), _vm.extraIcon ? _c('img', {
    staticClass: "tabel-icons",
    attrs: {
      "src": _vm.extraIcon,
      "alt": "Extra Tabel icon"
    }
  }) : _vm._e(), _vm._l(21 - (_vm.icons.length = 21), function (missingSeparatorIndex) {
    return _c('img', {
      key: 'separator-' + missingSeparatorIndex,
      staticClass: "separators-3",
      attrs: {
        "src": _vm.separators1,
        "alt": "Separators"
      }
    });
  })], 2);
};
var Frame12vue_type_template_id_2c880430_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Frame12.vue?vue&type=template&id=2c880430

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Frame12.vue?vue&type=script&lang=js
/* harmony default export */ var Frame12vue_type_script_lang_js = ({
  name: "Frame12",
  props: {
    icons: {
      type: Array,
      required: true
    },
    separators1: String,
    className: String,
    extraIcon: String
  }
});
// CONCATENATED MODULE: ./src/components/Frame12.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Frame12vue_type_script_lang_js = (Frame12vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Frame12.vue?vue&type=style&index=0&id=2c880430&prod&lang=sass
var Frame12vue_type_style_index_0_id_2c880430_prod_lang_sass = __webpack_require__("cbc7");

// CONCATENATED MODULE: ./src/components/Frame12.vue






/* normalize component */

var Frame12_component = Object(componentNormalizer["a" /* default */])(
  components_Frame12vue_type_script_lang_js,
  Frame12vue_type_template_id_2c880430_render,
  Frame12vue_type_template_id_2c880430_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Frame12 = (Frame12_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Onderdelen.vue?vue&type=script&lang=js

/* harmony default export */ var Onderdelenvue_type_script_lang_js = ({
  name: "Onderdelen",
  components: {
    Frame12: Frame12
  },
  props: ["frame12Props"]
});
// CONCATENATED MODULE: ./src/components/Onderdelen.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Onderdelenvue_type_script_lang_js = (Onderdelenvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Onderdelen.vue?vue&type=style&index=0&id=208dab99&prod&lang=sass
var Onderdelenvue_type_style_index_0_id_208dab99_prod_lang_sass = __webpack_require__("724d");

// CONCATENATED MODULE: ./src/components/Onderdelen.vue






/* normalize component */

var Onderdelen_component = Object(componentNormalizer["a" /* default */])(
  components_Onderdelenvue_type_script_lang_js,
  Onderdelenvue_type_template_id_208dab99_render,
  Onderdelenvue_type_template_id_208dab99_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Onderdelen = (Onderdelen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Onderdelen2.vue?vue&type=template&id=1d3b6dc9
var Onderdelen2vue_type_template_id_1d3b6dc9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "onderdelen-3"
  }, [_c('frame12', _vm._b({}, 'frame12', _vm.frame12Props, false))], 1);
};
var Onderdelen2vue_type_template_id_1d3b6dc9_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Onderdelen2.vue?vue&type=template&id=1d3b6dc9

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Onderdelen2.vue?vue&type=script&lang=js

/* harmony default export */ var Onderdelen2vue_type_script_lang_js = ({
  name: "Onderdelen2",
  components: {
    Frame12: Frame12
  },
  props: ["frame12Props"]
});
// CONCATENATED MODULE: ./src/components/Onderdelen2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Onderdelen2vue_type_script_lang_js = (Onderdelen2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Onderdelen2.vue?vue&type=style&index=0&id=1d3b6dc9&prod&lang=sass
var Onderdelen2vue_type_style_index_0_id_1d3b6dc9_prod_lang_sass = __webpack_require__("2e13");

// CONCATENATED MODULE: ./src/components/Onderdelen2.vue






/* normalize component */

var Onderdelen2_component = Object(componentNormalizer["a" /* default */])(
  components_Onderdelen2vue_type_script_lang_js,
  Onderdelen2vue_type_template_id_1d3b6dc9_render,
  Onderdelen2vue_type_template_id_1d3b6dc9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Onderdelen2 = (Onderdelen2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ComfortSmart.vue?vue&type=template&id=b3f7f4b4
var ComfortSmartvue_type_template_id_b3f7f4b4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`tabel-item-1-1`, _vm.className || ``]
  }, [_c('div', {
    staticClass: "titel-10"
  }, [_c('div', {
    staticClass: "titel-11 hyundaisansheadoffice-bold-port-gore-41px"
  }, [_vm._v(_vm._s(_vm.titel))])]), _c('onderdelen2', {
    attrs: {
      "frame12Props": _vm.onderdelen2Props.frame12Props
    }
  })], 1);
};
var ComfortSmartvue_type_template_id_b3f7f4b4_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/ComfortSmart.vue?vue&type=template&id=b3f7f4b4

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ComfortSmart.vue?vue&type=script&lang=js

/* harmony default export */ var ComfortSmartvue_type_script_lang_js = ({
  name: "ComfortSmart",
  components: {
    Onderdelen2: Onderdelen2
  },
  props: ["titel", "className", "onderdelen2Props"]
});
// CONCATENATED MODULE: ./src/components/ComfortSmart.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ComfortSmartvue_type_script_lang_js = (ComfortSmartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/ComfortSmart.vue?vue&type=style&index=0&id=b3f7f4b4&prod&lang=sass
var ComfortSmartvue_type_style_index_0_id_b3f7f4b4_prod_lang_sass = __webpack_require__("1a1f");

// CONCATENATED MODULE: ./src/components/ComfortSmart.vue






/* normalize component */

var ComfortSmart_component = Object(componentNormalizer["a" /* default */])(
  components_ComfortSmartvue_type_script_lang_js,
  ComfortSmartvue_type_template_id_b3f7f4b4_render,
  ComfortSmartvue_type_template_id_b3f7f4b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ComfortSmart = (ComfortSmart_component.exports);
// EXTERNAL MODULE: ./img/overlay.png
var overlay = __webpack_require__("f1fd");
var overlay_default = /*#__PURE__*/__webpack_require__.n(overlay);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel.vue?vue&type=template&id=3dbcd956&scoped=true
var carouselvue_type_template_id_3dbcd956_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "carousel"
  }, [_c('div', {
    ref: "inner",
    staticClass: "inner",
    style: _vm.innerStyles,
    on: {
      "touchstart": _vm.onTouchStart,
      "touchmove": _vm.onTouchMove,
      "touchend": _vm.onTouchEnd
    }
  }, _vm._l(_vm.visibleCards, function (card, index) {
    return _c('div', {
      key: index,
      staticClass: "card"
    }, [_c('img', {
      staticClass: "carousel-image",
      attrs: {
        "src": card.src,
        "alt": card.alt
      }
    })]);
  }), 0)]), _c('div', {
    staticClass: "slider-indicator"
  }, _vm._l(_vm.cards, function (card, index) {
    return _c('div', {
      key: index,
      class: ['slider-indicator-item', {
        'active': _vm.currentIndex === index % 4
      }],
      on: {
        "click": function ($event) {
          return _vm.goToSlide(index % 4);
        }
      }
    });
  }), 0)]);
};
var carouselvue_type_template_id_3dbcd956_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/carousel.vue?vue&type=template&id=3dbcd956&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel.vue?vue&type=script&lang=js
/* harmony default export */ var carouselvue_type_script_lang_js = ({
  data() {
    return {
      cards: [{
        src: __webpack_require__("eeff"),
        alt: 'hand mobiel'
      }, {
        src: __webpack_require__("4ff8"),
        alt: 'binnen auto'
      }, {
        src: __webpack_require__("7f33"),
        alt: 'dashboard auto'
      }, {
        src: __webpack_require__("ef0e"),
        alt: 'binnen auto 2'
      }],
      currentIndex: 0,
      step: 0,
      innerStyles: {},
      transitioning: false,
      startX: 0,
      endX: 0,
      timer: null
    };
  },
  computed: {
    visibleCards() {
      return [...this.cards, ...this.cards];
    }
  },
  mounted() {
    this.setStep();
    this.startTimer();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.next();
      }, 3000);
    },
    setStep() {
      const totalWidth = this.$refs.inner.clientWidth;
      this.step = totalWidth / 3.9;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.scrollToCurrentIndex();
    },
    goToSlide(index) {
      if (this.transitioning) return;
      this.transitioning = true;
      this.currentIndex = index;
      this.scrollToCurrentIndex();
      clearInterval(this.timer);
      this.startTimer();
    },
    scrollToCurrentIndex() {
      let offset;
      if (window.innerWidth >= 768) {
        offset = this.step * this.currentIndex;
      } else if (window.innerWidth <= 480) {
        offset = this.step * this.currentIndex * 3.25;
      } else {
        offset = this.step * this.currentIndex * 1;
      }
      this.innerStyles = {
        transform: `translateX(-${offset}px)`,
        transition: 'transform 0.5s ease'
      };
      setTimeout(() => {
        this.transitioning = false;
      }, 500);
    },
    onTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    onTouchMove(event) {
      this.endX = event.touches[0].clientX;
    },
    onTouchEnd() {
      if (this.startX > this.endX + 50) {
        this.next();
      } else if (this.startX < this.endX - 50) {
        this.prev();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/carousel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_carouselvue_type_script_lang_js = (carouselvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/carousel.vue?vue&type=style&index=0&id=3dbcd956&prod&scoped=true&lang=css
var carouselvue_type_style_index_0_id_3dbcd956_prod_scoped_true_lang_css = __webpack_require__("2705");

// CONCATENATED MODULE: ./src/components/carousel.vue






/* normalize component */

var carousel_component = Object(componentNormalizer["a" /* default */])(
  components_carouselvue_type_script_lang_js,
  carouselvue_type_template_id_3dbcd956_scoped_true_render,
  carouselvue_type_template_id_3dbcd956_scoped_true_staticRenderFns,
  false,
  null,
  "3dbcd956",
  null
  
)

/* harmony default export */ var carousel = (carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabel2.vue?vue&type=template&id=76ecaae2
var tabel2vue_type_template_id_76ecaae2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section-uitvoeringen-tabel-correct"
  }, [_c('div', {
    staticClass: "tabel-sectie-correct"
  }, [_c('div', {
    staticClass: "uitvoeringen-en-hun-functionaliteiten-correct"
  }, [_vm._v(" Uitvoeringen en hun Functionaliteiten ")]), _c('div', {
    ref: "tabelWrapper",
    staticClass: "tabel-wrapper-correct"
  }, [_c('div', {
    ref: "tabel",
    staticClass: "tabel-correct"
  }, [_c('div', {
    staticClass: "titels-container-correct"
  }, [_c('div', {
    staticClass: "titel-item-correct titel-functionaliteiten-correct"
  }, [_vm._v("functionaliteiten")]), _vm._l(_vm.uitvoeringen, function (uitvoering, index) {
    return _c('div', {
      key: index,
      staticClass: "titel-item-correct"
    }, [_c('div', {
      staticClass: "titel-tekst-container-correct"
    }, [_vm._v(" " + _vm._s(uitvoering.naam) + " "), uitvoering.prijs ? _c('br') : _vm._e(), uitvoering.prijs ? _c('span', [_vm._v(_vm._s(uitvoering.prijs))]) : _vm._e()])]);
  })], 2), _c('div', {
    ref: "kolommen",
    staticClass: "kolommen-container-correct"
  }, [_c('div', {
    staticClass: "functionaliteiten-correct kolom-item-correct"
  }, [_c('div', {
    staticClass: "functionaliteit-item-container-correct"
  }, _vm._l(_vm.functionaliteiten, function (functionaliteit, index) {
    return _c('div', {
      key: index,
      staticClass: "functionaliteit-item-correct"
    }, [_vm._v(" " + _vm._s(functionaliteit) + " "), index !== _vm.functionaliteiten.length - 1 ? _c('img', {
      staticClass: "separators-correct",
      attrs: {
        "src": _vm.separatorsImage,
        "alt": "Separators"
      }
    }) : _vm._e()]);
  }), 0)]), _vm._l(_vm.uitvoeringen, function (uitvoering, index) {
    return _c('div', {
      key: index,
      staticClass: "kolom-item-correct"
    }, [_c('div', {
      staticClass: "icoon-item-container-correct"
    }, _vm._l(uitvoering.icons, function (icon, iconIndex) {
      return _c('div', {
        key: iconIndex,
        staticClass: "icoon-container-correct"
      }, [_c('img', {
        staticClass: "tabel-icons-correct",
        attrs: {
          "src": icon,
          "alt": "Tabel icons"
        }
      }), iconIndex !== uitvoering.icons.length - 1 ? _c('img', {
        staticClass: "separators-correct",
        attrs: {
          "src": _vm.separatorsImage,
          "alt": "Separators"
        }
      }) : _vm._e()]);
    }), 0)]);
  })], 2)])])]), _c('div', {
    staticClass: "tabel-slider"
  }, [_c('img', {
    staticClass: "tabel-slider-item",
    attrs: {
      "src": _vm.TabelSliderTerug,
      "alt": "achteruit"
    },
    on: {
      "click": _vm.scrollLeft
    }
  }), _c('img', {
    staticClass: "tabel-slider-item",
    attrs: {
      "src": _vm.TabelSlider,
      "alt": "vooruit"
    },
    on: {
      "click": _vm.scrollRight
    }
  })])]);
};
var tabel2vue_type_template_id_76ecaae2_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/tabel2.vue?vue&type=template&id=76ecaae2

// EXTERNAL MODULE: ./img/tabel-slider.svg
var tabel_slider = __webpack_require__("87a1");
var tabel_slider_default = /*#__PURE__*/__webpack_require__.n(tabel_slider);

// EXTERNAL MODULE: ./img/tabel-slider-terug.svg
var tabel_slider_terug = __webpack_require__("c3e9");
var tabel_slider_terug_default = /*#__PURE__*/__webpack_require__.n(tabel_slider_terug);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tabel2.vue?vue&type=script&lang=js


/* harmony default export */ var tabel2vue_type_script_lang_js = ({
  data() {
    return {
      separatorsImage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
      functionaliteiten: ["Actieve rijbaanassistentie (LKA)", "Cruise Control met limiet", "Noodremassistent (FCA) met voetgangerherkenning", "eCall (Emergency Call)", "Start/Stop systeem", "Achterbank in delen neerklapbaar", "Zij- en gordijnairbags", "ABS", "Vermoeidheidsherkenning", "8 inch multimediascherm", "USB aansluiting", "Android Auto (voorbereiding) / Apple Carplay", "Airconditioning (manueel)", "8 inch multimediascherm met navigatie", "Achteruitrijcamera met dynamische hulplijnen", "Snelheidsbordenherkenning (ISLW)", "Airconditioning (volautomatisch)", "Parkeersensoren achter", "3D afwerking interieurdelen", "16-inch lichtmetalen velgen", "Verwarmde stoelen voor", "Draadloos telefoon opladen", "Verwarmd stuurwiel"],
      TabelSlider: tabel_slider_default.a,
      TabelSliderTerug: tabel_slider_terug_default.a,
      firstScroll: true,
      kolomBreedte: 195,
      uitvoeringen: [{
        naam: "i-Drive",
        class: "titel-i-drive",
        icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png", 9)
      }, {
        naam: "Comfort",
        prijs: "vanaf €275 p/m",
        class: "titel-comfort",
        icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png", 13)
      }, {
        naam: "Comfort Smart",
        class: "titel-comfort-smart",
        icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png", 16)
      }, {
        naam: "Premium",
        class: "titel-premium",
        icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png").fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png", 18)
      }, {
        naam: "N Line",
        class: "titel-n-line",
        icons: Array(23).fill("https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png")
      }]
    };
  },
  methods: {
    scrollLeft() {
      const tabelWrapper = this.$refs.tabelWrapper;
      tabelWrapper.scrollLeft -= this.kolomBreedte;
      if (tabelWrapper.scrollLeft === 0) {
        this.firstScroll = true;
      }
    },
    scrollRight() {
      const tabelWrapper = this.$refs.tabelWrapper;
      if (this.firstScroll) {
        tabelWrapper.scrollLeft += 144;
        this.firstScroll = false;
      } else {
        tabelWrapper.scrollLeft += this.kolomBreedte;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabel2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_tabel2vue_type_script_lang_js = (tabel2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/tabel2.vue?vue&type=style&index=0&id=76ecaae2&prod&lang=sass
var tabel2vue_type_style_index_0_id_76ecaae2_prod_lang_sass = __webpack_require__("2b43");

// CONCATENATED MODULE: ./src/components/tabel2.vue






/* normalize component */

var tabel2_component = Object(componentNormalizer["a" /* default */])(
  components_tabel2vue_type_script_lang_js,
  tabel2vue_type_template_id_76ecaae2_render,
  tabel2vue_type_template_id_76ecaae2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabel2 = (tabel2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneHyundaiDesktopTest.vue?vue&type=script&lang=js









/* harmony default export */ var CampagneHyundaiDesktopTestvue_type_script_lang_js = ({
  name: "CampagneHyundaiDesktopTest",
  components: {
    Keurmerk: Keurmerk,
    XLabel: XLabel,
    Voordeel2: Voordeel2,
    Onderdelen: Onderdelen,
    Onderdelen2: Onderdelen2,
    ComfortSmart: ComfortSmart,
    Carousel: carousel,
    Tabel2: tabel2
  },
  props: ["overlapGroup", "arrowLeft", "arrowRight", "tijdelijkVoorMaar275PM", "ontdekMeer", "privateLeaseNuTij", "deVernieuwdeHyundaiI10", "maakEenGrootsStatement", "spanText1", "spanText2", "hetMaandbedragVa", "vrouwBlijAuto", "stuurwiel", "rijdenInEenNieuweHyundai", "hyundaiI101", "allInclusiveGeniet", "vastMaandbedragInc", "hyundaiI102", "eenFrisseKijkOpEenGedurfdOntwerp", "handMobiel", "binnenAuto", "dashboardAuto", "binnenAuto2", "uitvoeringenEnHunFunctionaliteiten", "billMontly1", "profileGroups", "separators1", "accountViwers", "separators2", "socialMediaDashboa", "separators3", "shopifyDashboard", "separators4", "mixedDragAndDrop", "separators5", "downloadablePdfRep", "separators6", "whiteLabelReports", "separators7", "competitorAnalytics", "separators8", "automatedEmailRepo", "separators9", "roiAnalyticsAndTr", "separators10", "correlationAnalysis", "separators11", "trendDetection1", "separators12", "trendDetection2", "separators13", "trendDetection3", "separators14", "trendDetection4", "separators15", "trendDetection5", "separators16", "trendDetection6", "separators17", "trendDetection7", "separators18", "trendDetection8", "separators19", "trendDetection9", "separators20", "trendDetection10", "separators21", "trendDetection11", "separators22", "trendDetection12", "titel1", "spanText3", "spanText4", "titel2", "prijzentabelI10Comfort", "billMontly2", "titel3", "titel4", "line2", "bekijkDePrivacy", "xLabelProps", "voordeel21Props", "voordeel22Props", "voordeel23Props", "voordeel24Props", "onderdelen1Props", "onderdelen2Props", "comfortSmart1Props", "comfortSmart2Props", "onderdelen2Props2"],
  data() {
    return {
      currentImage: "",
      overlayImage: overlay_default.a,
      showOverlay: false
    };
  },
  created() {
    this.currentImage = this.overlapGroup;
  },
  mounted() {
    this.startImageToggleTimer();
    this.addEventListeners();
  },
  beforeDestroy() {
    this.stopImageToggleTimer();
    this.removeEventListeners();
  },
  methods: {
    toggleImage() {
      this.showOverlay = !this.showOverlay;
      if (this.showOverlay) {
        this.currentImage = this.overlayImage;
      } else {
        this.currentImage = this.overlapGroup;
      }
    },
    startImageToggleTimer() {
      this.intervalId = setInterval(() => {
        this.toggleImage();
      }, 5000);
    },
    stopImageToggleTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    },
    scrollToSection() {
      const element = document.getElementById('target-section');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    addEventListeners() {
      const privacyLink = document.getElementById('privacy-link');
      const voorwaardenLink = document.getElementById('voorwaarden-link');
      if (privacyLink) {
        privacyLink.addEventListener('click', this.handlePrivacyLinkClick);
      }
      if (voorwaardenLink) {
        voorwaardenLink.addEventListener('click', this.handleVoorwaardenLinkClick);
      }
    },
    removeEventListeners() {
      const privacyLink = document.getElementById('privacy-link');
      const voorwaardenLink = document.getElementById('voorwaarden-link');
      if (privacyLink) {
        privacyLink.removeEventListener('click', this.handlePrivacyLinkClick);
      }
      if (voorwaardenLink) {
        voorwaardenLink.removeEventListener('click', this.handleVoorwaardenLinkClick);
      }
    },
    handlePrivacyLinkClick(event) {
      event.preventDefault();
      const popupUrl = document.getElementById('privacy-link').getAttribute('href');
      this.openPopup(popupUrl);
    },
    handleVoorwaardenLinkClick(event) {
      event.preventDefault();
      const popupUrl = document.getElementById('voorwaarden-link').getAttribute('href');
      this.openPopup(popupUrl);
    },
    openPopup(url) {
      window.open(url, 'popupWindow', 'width=800,height=600');
    }
  }
});
// CONCATENATED MODULE: ./src/components/CampagneHyundaiDesktopTest.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CampagneHyundaiDesktopTestvue_type_script_lang_js = (CampagneHyundaiDesktopTestvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CampagneHyundaiDesktopTest.vue?vue&type=style&index=0&id=1e1cba10&prod&lang=sass
var CampagneHyundaiDesktopTestvue_type_style_index_0_id_1e1cba10_prod_lang_sass = __webpack_require__("bac7");

// CONCATENATED MODULE: ./src/components/CampagneHyundaiDesktopTest.vue






/* normalize component */

var CampagneHyundaiDesktopTest_component = Object(componentNormalizer["a" /* default */])(
  components_CampagneHyundaiDesktopTestvue_type_script_lang_js,
  CampagneHyundaiDesktopTestvue_type_template_id_1e1cba10_render,
  CampagneHyundaiDesktopTestvue_type_template_id_1e1cba10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CampagneHyundaiDesktopTest = (CampagneHyundaiDesktopTest_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneHyundaiMobiel.vue?vue&type=template&id=468e14b8
var CampagneHyundaiMobielvue_type_template_id_468e14b8_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "campagne-hyundai-mobiel screen"
  }, [_c('div', {
    staticClass: "group-1-1"
  }, [_c('div', {
    staticClass: "top-balk-1"
  }, [_c('img', {
    staticClass: "logo-hyundai-1",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6631f717c9610b16f5d2db40/img/logo-hyundai.svg",
      "alt": "Logo Hyundai"
    }
  }), _c('keurmerk', {
    attrs: {
      "className": _vm.keurmerkProps.className
    }
  })], 1)]), _c('div', {
    staticClass: "overlap-group4"
  }, [_c('div', {
    staticClass: "section-header-1"
  }, [_c('div', {
    staticClass: "marge-links"
  }, [_c('div', {
    staticClass: "hoofd-titel-tekst-1"
  }, [_c('div', {
    staticClass: "nieuw"
  }, [_vm._v("NIEUW")]), _c('div', {
    staticClass: "frame-5-1"
  }, [_c('div', {
    staticClass: "de-vernieuwde-hyundai-i10-1 hyundaisansheadoffice-bold-midnight-blue-48px"
  }, [_vm._v("De vernieuwde Hyundai i10")]), _c('div', {
    staticClass: "maak-een-groots-statement-1"
  }, [_vm._v(_vm._s(_vm.maakEenGrootsStatement))])])]), _c('p', {
    staticClass: "profiteer-nu-van-een-1 hyundaisansheadoffice-regular-normal-black-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.profiteerNuVanEen)
    }
  })]), _c('div', {
    staticClass: "overlap-group3"
  }, [_c('transition', {
    attrs: {
      "name": "image-slide"
    }
  }, [_c('div', {
    staticClass: "groot-beeld-slider",
    style: {
      'background-image': 'url(' + _vm.currentImage + ')'
    }
  })]), _vm._m(0)], 1), _c('p', {
    staticClass: "het-maandbedrag-va-1"
  }, [_vm._v(_vm._s(_vm.hetMaandbedragVa))])]), _c('div', {
    staticClass: "navigatie-slider-1"
  }, [_c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-2",
    attrs: {
      "src": _vm.arrow1,
      "alt": "Arrow"
    }
  })]), _c('button', {
    staticClass: "ontzichtbaar",
    on: {
      "click": _vm.toggleImage
    }
  }, [_c('img', {
    staticClass: "arrow-3",
    attrs: {
      "src": _vm.arrow2,
      "alt": "Arrow"
    }
  })])]), _c('div', {
    staticClass: "ontdek-meer-1"
  }, [_vm._v(_vm._s(_vm.ontdekMeer))])]), _c('div', {
    staticClass: "section-all-inclusive-1"
  }, [_c('div', {
    staticClass: "frame-19-1"
  }, [_c('div', {
    staticClass: "titel-all-inclusive-1"
  }, [_c('div', {
    staticClass: "hyundai-i10-1 hyundaisansheadoffice-bold-midnight-blue-18px"
  }, [_vm._v(_vm._s(_vm.hyundaiI101))]), _c('h1', {
    staticClass: "all-inclusive-geniet-1 hyundaisansheadoffice-bold-midnight-blue-32px"
  }, [_vm._v(" " + _vm._s(_vm.allInclusiveGeniet) + " ")])]), _c('p', {
    staticClass: "vast-maandbedrag-inc-1 hyundaisansheadoffice-regular-normal-black-16px",
    domProps: {
      "innerHTML": _vm._s(_vm.vastMaandbedragInc)
    }
  })]), _c('div', {
    staticClass: "overlap-group-2"
  }, [_c('img', {
    staticClass: "vrouw-blij-auto-1",
    attrs: {
      "src": _vm.vrouwBlijAuto,
      "alt": "vrouw blij auto"
    }
  }), _c('div', {
    staticClass: "voordelen-blokken-1"
  }, [_c('voordeel1', {
    attrs: {
      "iconsLease": _vm.voordeel11Props.iconsLease,
      "rijdenInEenNieuweHyundai": _vm.voordeel11Props.rijdenInEenNieuweHyundai
    }
  }), _c('voordeel1', {
    attrs: {
      "iconsLease": _vm.voordeel12Props.iconsLease,
      "rijdenInEenNieuweHyundai": _vm.voordeel12Props.rijdenInEenNieuweHyundai,
      "className": _vm.voordeel12Props.className
    }
  }), _c('voordeel1', {
    attrs: {
      "iconsLease": _vm.voordeel13Props.iconsLease,
      "rijdenInEenNieuweHyundai": _vm.voordeel13Props.rijdenInEenNieuweHyundai,
      "className": _vm.voordeel13Props.className
    }
  }), _c('voordeel1', {
    attrs: {
      "iconsLease": _vm.voordeel14Props.iconsLease,
      "rijdenInEenNieuweHyundai": _vm.voordeel14Props.rijdenInEenNieuweHyundai,
      "className": _vm.voordeel14Props.className
    }
  }), _c('voordeel1', {
    attrs: {
      "iconsLease": _vm.voordeel15Props.iconsLease,
      "rijdenInEenNieuweHyundai": _vm.voordeel15Props.rijdenInEenNieuweHyundai,
      "className": _vm.voordeel15Props.className
    }
  })], 1)])]), _c('div', {
    staticClass: "section-frisse-kijk-slider-1"
  }, [_c('div', {
    staticClass: "titel-frisse-kijk-1"
  }, [_c('div', {
    staticClass: "hyundai-i10-2 hyundaisansheadoffice-bold-midnight-blue-18px"
  }, [_vm._v(_vm._s(_vm.hyundaiI102))]), _c('p', {
    staticClass: "een-frisse-kijk-op-een-gedurfd-ontwerp-1 hyundaisansheadoffice-bold-midnight-blue-32px"
  }, [_vm._v(" " + _vm._s(_vm.eenFrisseKijkOpEenGedurfdOntwerp) + " ")])]), _c('Carousel')], 1), _c('Tabel2'), _c('div', {
    staticClass: "section-prijzentabel-1"
  }, [_c('div', {
    staticClass: "prijzentabel-i10-comfort-1 hyundaisansheadoffice-bold-midnight-blue-32px"
  }, [_vm._v(" Prijzentabel i10 Comfort ")]), _c('div', {
    staticClass: "scroll-container"
  }, [_c('div', {
    staticClass: "tabel-prijzen-1"
  }, [_c('div', {
    staticClass: "aantal-maanden-1"
  }, [_c('div', {
    staticClass: "titel-19"
  }, [_c('div', {
    staticClass: "bill-montly-3 hyundaisansheadoffice-bold-white-32px"
  }, [_vm._v(_vm._s(_vm.billMontly2))])]), _c('div', {
    staticClass: "onderdelen-8"
  }, [_c('div', {
    staticClass: "overlap-group-1-2"
  }, [_c('div', {
    staticClass: "frame-9-1 achtergrond-lichtblauw hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("60 maanden")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("60 maanden")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("48 maanden")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("48 maanden")])])])])]), _c('div', {
    staticClass: "aantal-km"
  }, [_c('div', {
    staticClass: "titel-14"
  }, [_c('div', {
    staticClass: "overlap-group-5"
  }, [_c('div', {
    staticClass: "titel-20 tweede-kolom-titel hyundaisansheadoffice-bold-port-gore-32px"
  }, [_vm._v(_vm._s(_vm.titel7))])])]), _c('div', {
    staticClass: "onderdelen-8"
  }, [_c('div', {
    staticClass: "overlap-group-1-2"
  }, [_c('div', {
    staticClass: "frame-9-1 tweede-kolom-onderkant hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("10.000")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("20.000")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("10.000")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("20.000")])])])])]), _c('div', {
    staticClass: "aantal-km"
  }, [_c('div', {
    staticClass: "titel-14"
  }, [_c('div', {
    staticClass: "overlap-group-5"
  }, [_c('div', {
    staticClass: "titel-20 hyundaisansheadoffice-bold-port-gore-32px"
  }, [_vm._v(_vm._s(_vm.titel8))])])]), _c('div', {
    staticClass: "onderdelen-8"
  }, [_c('div', {
    staticClass: "overlap-group-1-2"
  }, [_c('div', {
    staticClass: "frame-9-1 hyundaisansheadoffice-regular-normal-port-gore-21px"
  }, [_c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("€ 312,-")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators1,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("€ 358,11")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators2,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("€ 342,-")]), _c('img', {
    staticClass: "separators-2",
    attrs: {
      "src": _vm.separators3,
      "alt": "Separators"
    }
  }), _c('div', {
    staticClass: "profile-groups-1"
  }, [_vm._v("€ 385,04 ")])])])])])])]), _vm._m(1)]), _c('footer', {
    staticClass: "footer-1"
  }, [_c('img', {
    staticClass: "line-2-1",
    attrs: {
      "src": _vm.line2,
      "alt": "Line 2"
    }
  }), _vm._m(2)])], 1)]);
};
var CampagneHyundaiMobielvue_type_template_id_468e14b8_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cta-balk-1"
  }, [_c('p', {
    staticClass: "private-lease-nu-tij-1 hyundaisansheadoffice-bold-midnight-blue-24px"
  }, [_vm._v("Private Lease nu tijdelijk"), _c('br'), _vm._v(" vanaf €275 p/m* ")]), _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/vraag1"
    }
  }, [_c('div', {
    staticClass: "offerte-knop eerste-knop",
    attrs: {
      "onclick": "navigateToQuestions()"
    }
  }, [_c('div', {
    staticClass: "vraag-offerte-aan eerste-knop-tekst"
  }, [_vm._v("Vraag offerte aan")]), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png",
      "alt": "Arrow button"
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/vraag1"
    }
  }, [_c('div', {
    staticClass: "offerte-knop midden knop-onder-kleine-tabel",
    attrs: {
      "onclick": "navigateToQuestions()"
    }
  }, [_c('div', {
    staticClass: "vraag-offerte-aan"
  }, [_vm._v("Vraag offerte aan")]), _c('img', {
    staticClass: "arrow",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png",
      "alt": "Arrow button"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "privacy-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "voorwaarden-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/CampagneHyundaiMobiel.vue?vue&type=template&id=468e14b8

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Voordeel1.vue?vue&type=template&id=57f0ef10
var Voordeel1vue_type_template_id_57f0ef10_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [`voordeel-2-1`, _vm.className || ``]
  }, [_c('img', {
    staticClass: "icons-lease",
    attrs: {
      "src": _vm.iconsLease,
      "alt": "Icons lease"
    }
  }), _c('div', {
    staticClass: "rijden-in-een-nieuwe-hyundai-1 hyundaisansheadoffice-bold-midnight-blue-24px",
    domProps: {
      "innerHTML": _vm._s(_vm.rijdenInEenNieuweHyundai)
    }
  })]);
};
var Voordeel1vue_type_template_id_57f0ef10_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Voordeel1.vue?vue&type=template&id=57f0ef10

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Voordeel1.vue?vue&type=script&lang=js
/* harmony default export */ var Voordeel1vue_type_script_lang_js = ({
  name: "Voordeel1",
  props: ["iconsLease", "rijdenInEenNieuweHyundai", "className"]
});
// CONCATENATED MODULE: ./src/components/Voordeel1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Voordeel1vue_type_script_lang_js = (Voordeel1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Voordeel1.vue?vue&type=style&index=0&id=57f0ef10&prod&lang=sass
var Voordeel1vue_type_style_index_0_id_57f0ef10_prod_lang_sass = __webpack_require__("21d0");

// CONCATENATED MODULE: ./src/components/Voordeel1.vue






/* normalize component */

var Voordeel1_component = Object(componentNormalizer["a" /* default */])(
  components_Voordeel1vue_type_script_lang_js,
  Voordeel1vue_type_template_id_57f0ef10_render,
  Voordeel1vue_type_template_id_57f0ef10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Voordeel1 = (Voordeel1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CampagneHyundaiMobiel.vue?vue&type=script&lang=js






/* harmony default export */ var CampagneHyundaiMobielvue_type_script_lang_js = ({
  name: "CampagneHyundaiMobiel",
  components: {
    Keurmerk: Keurmerk,
    XLabel: XLabel,
    Voordeel1: Voordeel1,
    Carousel: carousel,
    Tabel2: tabel2
  },
  props: ["deVernieuwdeHyundaiI10", "maakEenGrootsStatement", "profiteerNuVanEen", "grootBeeldSlider", "privateLeaseNuTij", "hetMaandbedragVa", "arrow1", "arrow2", "ontdekMeer", "hyundaiI101", "allInclusiveGeniet", "vastMaandbedragInc", "vrouwBlijAuto", "hyundaiI102", "eenFrisseKijkOpEenGedurfdOntwerp", "handMobiel", "binnenAuto", "dashboardAuto", "binnenAuto2", "uitvoeringenEnHunFunctionaliteiten", "titel1", "billMontly1", "onderdelen", "base1", "titel2", "base2", "tabelIcons1", "separators1", "tabelIcons2", "separators2", "tabelIcons3", "separators3", "tabelIcons4", "separators4", "tabelIcons5", "separators5", "tabelIcons6", "separators6", "tabelIcons7", "separators7", "tabelIcons8", "separators8", "tabelIcons9", "separators9", "tabelIcons10", "separators10", "tabelIcons11", "separators11", "tabelIcons12", "separators12", "tabelIcons13", "separators13", "tabelIcons14", "separators14", "tabelIcons15", "separators15", "tabelIcons16", "separators16", "tabelIcons17", "separators17", "tabelIcons18", "separators18", "tabelIcons19", "separators19", "tabelIcons20", "separators20", "tabelIcons21", "separators21", "tabelIcons22", "separators22", "tabelIcons23", "base3", "spanText1", "spanText2", "base4", "tabelIcons24", "separators23", "tabelIcons25", "separators24", "tabelIcons26", "separators25", "tabelIcons27", "separators26", "tabelIcons28", "separators27", "tabelIcons29", "separators28", "tabelIcons30", "separators29", "tabelIcons31", "separators30", "tabelIcons32", "separators31", "tabelIcons33", "separators32", "tabelIcons34", "separators33", "tabelIcons35", "separators34", "tabelIcons36", "separators35", "tabelIcons37", "separators36", "tabelIcons38", "separators37", "tabelIcons39", "separators38", "tabelIcons40", "separators39", "tabelIcons41", "separators40", "tabelIcons42", "separators41", "tabelIcons43", "separators42", "tabelIcons44", "separators43", "tabelIcons45", "separators44", "tabelIcons46", "base5", "titel3", "base6", "tabelIcons47", "separators45", "tabelIcons48", "separators46", "tabelIcons49", "separators47", "tabelIcons50", "separators48", "tabelIcons51", "separators49", "tabelIcons52", "separators50", "tabelIcons53", "separators51", "tabelIcons54", "separators52", "tabelIcons55", "separators53", "tabelIcons56", "separators54", "tabelIcons57", "separators55", "tabelIcons58", "separators56", "tabelIcons59", "separators57", "tabelIcons60", "separators58", "tabelIcons61", "separators59", "tabelIcons62", "separators60", "tabelIcons63", "separators61", "tabelIcons64", "separators62", "tabelIcons65", "separators63", "tabelIcons66", "separators64", "tabelIcons67", "separators65", "tabelIcons68", "separators66", "tabelIcons69", "base7", "titel4", "base8", "tabelIcons70", "separators67", "tabelIcons71", "separators68", "tabelIcons72", "separators69", "tabelIcons73", "separators70", "tabelIcons74", "separators71", "tabelIcons75", "separators72", "tabelIcons76", "separators73", "tabelIcons77", "separators74", "tabelIcons78", "separators75", "tabelIcons79", "separators76", "tabelIcons80", "separators77", "tabelIcons81", "separators78", "tabelIcons82", "separators79", "tabelIcons83", "separators80", "tabelIcons84", "separators81", "tabelIcons85", "separators82", "tabelIcons86", "separators83", "tabelIcons87", "separators84", "tabelIcons88", "separators85", "tabelIcons89", "separators86", "tabelIcons90", "separators87", "tabelIcons91", "separators88", "tabelIcons92", "base9", "titel5", "base10", "tabelIcons93", "separators89", "tabelIcons94", "separators90", "tabelIcons95", "separators91", "tabelIcons96", "separators92", "tabelIcons97", "separators93", "tabelIcons98", "separators94", "tabelIcons99", "separators95", "tabelIcons100", "separators96", "tabelIcons101", "separators97", "tabelIcons102", "separators98", "tabelIcons103", "separators99", "tabelIcons104", "separators100", "tabelIcons105", "separators101", "tabelIcons106", "separators102", "tabelIcons107", "separators103", "tabelIcons108", "separators104", "tabelIcons109", "separators105", "tabelIcons110", "separators106", "tabelIcons111", "separators107", "tabelIcons112", "separators108", "tabelIcons113", "separators109", "tabelIcons114", "separators110", "tabelIcons115", "arrow3", "arrow4", "prijzentabelI10Comfort", "titel6", "billMontly2", "overlapGroup", "base11", "titel7", "base12", "profileGroups", "profileGroups1", "separators111", "accountViwers1", "separators112", "socialMediaDashboa1", "separators113", "shopifyDashboard1", "base13", "titel8", "base14", "profileGroups2", "separators114", "accountViwers2", "separators115", "socialMediaDashboa2", "separators116", "shopifyDashboard2", "line2", "bekijkDePrivacy", "keurmerkProps", "xLabelProps", "voordeel11Props", "voordeel12Props", "voordeel13Props", "voordeel14Props", "voordeel15Props", "profileGroups", "separators1", "accountViwers", "separators2", "socialMediaDashboa", "separators3", "shopifyDashboard", "separators4", "mixedDragAndDrop", "separators5", "downloadablePdfRep", "separators6", "whiteLabelReports", "separators7", "competitorAnalytics", "separators8", "automatedEmailRepo", "separators9", "roiAnalyticsAndTr", "separators10", "correlationAnalysis", "separators11", "trendDetection1", "separators12", "trendDetection2", "separators13", "trendDetection3", "separators14", "trendDetection4", "separators15", "trendDetection5", "separators16", "trendDetection6", "separators17", "trendDetection7", "separators18", "trendDetection8", "separators19", "trendDetection9", "separators20", "trendDetection10", "separators21", "trendDetection11", "separators22", "trendDetection12"],
  data() {
    return {
      currentImage: '',
      overlayImage: overlay_default.a
    };
  },
  created() {
    this.currentImage = this.grootBeeldSlider;
  },
  methods: {
    toggleImage() {
      this.currentImage = this.currentImage === this.grootBeeldSlider ? this.overlayImage : this.grootBeeldSlider;
    }
  }
});
// CONCATENATED MODULE: ./src/components/CampagneHyundaiMobiel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CampagneHyundaiMobielvue_type_script_lang_js = (CampagneHyundaiMobielvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/CampagneHyundaiMobiel.vue?vue&type=style&index=0&id=468e14b8&prod&lang=sass
var CampagneHyundaiMobielvue_type_style_index_0_id_468e14b8_prod_lang_sass = __webpack_require__("11dd");

// CONCATENATED MODULE: ./src/components/CampagneHyundaiMobiel.vue






/* normalize component */

var CampagneHyundaiMobiel_component = Object(componentNormalizer["a" /* default */])(
  components_CampagneHyundaiMobielvue_type_script_lang_js,
  CampagneHyundaiMobielvue_type_template_id_468e14b8_render,
  CampagneHyundaiMobielvue_type_template_id_468e14b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CampagneHyundaiMobiel = (CampagneHyundaiMobiel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag1.vue?vue&type=template&id=1c4d7e0c&scoped=true
var desktopVraag1vue_type_template_id_1c4d7e0c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Vraag 1 van de 5")]), _c('div', {
    staticClass: "vraag"
  }, [_vm._v("Hoeveel km verwacht jij te rijden per jaar?")]), _vm._l(_vm.antwoordOpties, function (optie, index) {
    return _c('div', {
      key: index,
      staticClass: "vraag-optie-container",
      class: {
        'selected': _vm.geselecteerdAntwoord && _vm.geselecteerdAntwoord.id === optie.id
      }
    }, [_c('label', {
      staticClass: "vraag-optie",
      attrs: {
        "for": 'optie' + (index + 1)
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.geselecteerdAntwoordId,
        expression: "geselecteerdAntwoordId"
      }],
      attrs: {
        "type": "radio",
        "id": 'optie' + (index + 1)
      },
      domProps: {
        "value": optie.id,
        "checked": _vm._q(_vm.geselecteerdAntwoordId, optie.id)
      },
      on: {
        "change": function ($event) {
          _vm.geselecteerdAntwoordId = optie.id;
        }
      }
    }), _c('span', {
      staticClass: "vraag-optie-tekst"
    }, [_vm._v(_vm._s(optie.answer))])])]);
  })], 2)]), _vm._m(1)]);
};
var desktopVraag1vue_type_template_id_1c4d7e0c_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" "), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")]), _c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "privacy-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "voorwaarden-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/desktopVraag1.vue?vue&type=template&id=1c4d7e0c&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./img/achtergrondVraag.png
var achtergrondVraag = __webpack_require__("44d1");
var achtergrondVraag_default = /*#__PURE__*/__webpack_require__.n(achtergrondVraag);

// CONCATENATED MODULE: ./src/antwoorden.js

let antwoorden = [];
function addAntwoord(answer) {
  antwoorden.push(answer);
}
function getAntwoorden() {
  return antwoorden;
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag1.vue?vue&type=script&lang=js




/* harmony default export */ var desktopVraag1vue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag_default.a,
      antwoordOpties: [{
        id: 4777,
        answer: "0 - 5.000 km"
      }, {
        id: 5054,
        answer: "5.000 - 10.000 km"
      }, {
        id: 4780,
        answer: "10.000 - 20.000 km"
      }, {
        id: 4783,
        answer: "20.000 - 30.000 km"
      }, {
        id: 4786,
        answer: "30.000 - 40.000 km"
      }, {
        id: 4789,
        answer: "Meer dan 40.000 km"
      }, {
        id: 4792,
        answer: "Weet ik nog niet"
      }],
      geselecteerdAntwoordId: null
    };
  },
  watch: {
    geselecteerdAntwoordId(newVal) {
      if (newVal !== null) {
        addAntwoord(newVal);
        setTimeout(() => {
          window.scrollTo(0, 0);
          this.$router.push('/hyundai-sass-vue/vraag2');
        }, 1000);
      }
    }
  },
  mounted() {
    this.setupFooterLinks();
  },
  methods: {
    setupFooterLinks() {
      const privacyLink = document.getElementById('privacy-link');
      const voorwaardenLink = document.getElementById('voorwaarden-link');
      function openPopup(url) {
        window.open(url, 'popupWindow', 'width=800,height=600');
      }
      if (privacyLink) {
        privacyLink.addEventListener('click', function (event) {
          event.preventDefault();
          const popupUrl = privacyLink.getAttribute('href');
          openPopup(popupUrl);
        });
      }
      if (voorwaardenLink) {
        voorwaardenLink.addEventListener('click', function (event) {
          event.preventDefault();
          const popupUrl = voorwaardenLink.getAttribute('href');
          openPopup(popupUrl);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/desktopVraag1.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktopVraag1vue_type_script_lang_js = (desktopVraag1vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/desktopVraag1.vue?vue&type=style&index=0&id=1c4d7e0c&prod&scoped=true&lang=css
var desktopVraag1vue_type_style_index_0_id_1c4d7e0c_prod_scoped_true_lang_css = __webpack_require__("79ba");

// CONCATENATED MODULE: ./src/components/desktopVraag1.vue






/* normalize component */

var desktopVraag1_component = Object(componentNormalizer["a" /* default */])(
  components_desktopVraag1vue_type_script_lang_js,
  desktopVraag1vue_type_template_id_1c4d7e0c_scoped_true_render,
  desktopVraag1vue_type_template_id_1c4d7e0c_scoped_true_staticRenderFns,
  false,
  null,
  "1c4d7e0c",
  null
  
)

/* harmony default export */ var desktopVraag1 = (desktopVraag1_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag2.vue?vue&type=template&id=7c5138aa&scoped=true
var desktopVraag2vue_type_template_id_7c5138aa_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Vraag 2 van de 5")]), _c('div', {
    staticClass: "vraag"
  }, [_vm._v("Gewenste looptijd leasecontract")]), _vm._l(_vm.antwoordOpties, function (optie, index) {
    return _c('div', {
      key: index,
      staticClass: "vraag-optie-container",
      class: {
        'selected': _vm.geselecteerdAntwoord && _vm.geselecteerdAntwoord.id === optie.id
      }
    }, [_c('label', {
      staticClass: "vraag-optie",
      attrs: {
        "for": 'optie' + (index + 1)
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.geselecteerdAntwoord,
        expression: "geselecteerdAntwoord"
      }],
      attrs: {
        "type": "radio",
        "id": 'optie' + (index + 1)
      },
      domProps: {
        "value": optie.id,
        "checked": _vm._q(_vm.geselecteerdAntwoord, optie.id)
      },
      on: {
        "change": function ($event) {
          _vm.geselecteerdAntwoord = optie.id;
        }
      }
    }), _c('span', {
      staticClass: "vraag-optie-tekst"
    }, [_vm._v(" " + _vm._s(optie.answer) + " ")])])]);
  }), _c('a', {
    attrs: {
      "href": "/vraag1"
    }
  }, [_c('button', {
    staticClass: "terug"
  }, [_c('img', {
    staticClass: "pijl",
    attrs: {
      "src": _vm.vragenPijlVorige,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vorige-tekst"
  }, [_vm._v("Vorige")])])])], 2)]), _vm._m(1)]);
};
var desktopVraag2vue_type_template_id_7c5138aa_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" "), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")]), _c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "privacy-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "voorwaarden-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/desktopVraag2.vue?vue&type=template&id=7c5138aa&scoped=true

// EXTERNAL MODULE: ./img/vragen-pijl-vorige.svg
var vragen_pijl_vorige = __webpack_require__("a6ce");
var vragen_pijl_vorige_default = /*#__PURE__*/__webpack_require__.n(vragen_pijl_vorige);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag2.vue?vue&type=script&lang=js





/* harmony default export */ var desktopVraag2vue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      vragenPijlVorige: vragen_pijl_vorige_default.a,
      achtergrondVraag: achtergrondVraag_default.a,
      antwoordOpties: [{
        id: 4990,
        answer: "3 jaar"
      }, {
        id: 4993,
        answer: "4 jaar"
      }, {
        id: 4996,
        answer: "5 jaar"
      }, {
        id: 4999,
        answer: "6 jaar"
      }, {
        id: 5002,
        answer: "Weet ik nog niet"
      }],
      geselecteerdAntwoord: null
    };
  },
  mounted() {
    this.setupFooterLinks(); // Roep setupFooterLinks() op na het mounten van de component
  },
  watch: {
    geselecteerdAntwoord(newVal) {
      if (newVal !== null) {
        addAntwoord(newVal);
        setTimeout(() => {
          window.scrollTo(0, 0);
          this.$router.push('/hyundai-sass-vue/vraag3');
        }, 1000);
      }
    }
  },
  methods: {
    setupFooterLinks() {
      const privacyLink = document.getElementById('privacy-link');
      const voorwaardenLink = document.getElementById('voorwaarden-link');
      function openPopup(url) {
        window.open(url, 'popupWindow', 'width=800,height=600');
      }
      if (privacyLink) {
        privacyLink.addEventListener('click', function (event) {
          event.preventDefault();
          const popupUrl = privacyLink.getAttribute('href');
          openPopup(popupUrl);
        });
      }
      if (voorwaardenLink) {
        voorwaardenLink.addEventListener('click', function (event) {
          event.preventDefault();
          const popupUrl = voorwaardenLink.getAttribute('href');
          openPopup(popupUrl);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/desktopVraag2.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktopVraag2vue_type_script_lang_js = (desktopVraag2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/desktopVraag2.vue?vue&type=style&index=0&id=7c5138aa&prod&scoped=true&lang=css
var desktopVraag2vue_type_style_index_0_id_7c5138aa_prod_scoped_true_lang_css = __webpack_require__("14bc");

// CONCATENATED MODULE: ./src/components/desktopVraag2.vue






/* normalize component */

var desktopVraag2_component = Object(componentNormalizer["a" /* default */])(
  components_desktopVraag2vue_type_script_lang_js,
  desktopVraag2vue_type_template_id_7c5138aa_scoped_true_render,
  desktopVraag2vue_type_template_id_7c5138aa_scoped_true_staticRenderFns,
  false,
  null,
  "7c5138aa",
  null
  
)

/* harmony default export */ var desktopVraag2 = (desktopVraag2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag3.vue?vue&type=template&id=f8e8c6e2&scoped=true
var desktopVraag3vue_type_template_id_f8e8c6e2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Vraag 3 van de 5")]), _c('div', {
    staticClass: "vraag"
  }, [_vm._v("Welk model heeft jouw voorkeur?")]), _c('div', {
    staticClass: "tussen-haakjes"
  }, [_vm._v("(meerdere antwoorden mogelijk)")]), _c('div', {
    staticClass: "onderstreept"
  }, [_vm._v("Bekijk "), _c('a', {
    staticClass: "link",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        return _vm.openPopup.apply(null, arguments);
      }
    }
  }, [_vm._v("hier")]), _vm._v(" de functionaliteiten per model")]), _vm._l(_vm.antwoordOpties, function (optie, index) {
    return _c('div', {
      key: index,
      staticClass: "vraag-optie-container"
    }, [_c('label', {
      staticClass: "vraag-optie",
      class: {
        'i10-comfort': optie.answer === 'i10 Comfort'
      }
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.geselecteerdeAntwoorden,
        expression: "geselecteerdeAntwoorden"
      }],
      attrs: {
        "type": "checkbox",
        "id": 'optie' + (index + 1)
      },
      domProps: {
        "value": {
          id: optie.id,
          answer: optie.answer
        },
        "checked": Array.isArray(_vm.geselecteerdeAntwoorden) ? _vm._i(_vm.geselecteerdeAntwoorden, {
          id: optie.id,
          answer: optie.answer
        }) > -1 : _vm.geselecteerdeAntwoorden
      },
      on: {
        "change": function ($event) {
          var $$a = _vm.geselecteerdeAntwoorden,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = {
                id: optie.id,
                answer: optie.answer
              },
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && (_vm.geselecteerdeAntwoorden = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.geselecteerdeAntwoorden = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.geselecteerdeAntwoorden = $$c;
          }
        }
      }
    }), _c('span', {
      staticClass: "switcher"
    }), _vm._v(" " + _vm._s(optie.answer) + " "), optie.answer === 'i10 Comfort' ? _c('button', {
      staticClass: "i10-knop"
    }, [_vm._v(" Aanbieding! ")]) : _vm._e()])]);
  }), _c('div', {
    staticClass: "pijlen-container"
  }, [_c('a', {
    attrs: {
      "href": "/vraag2"
    }
  }, [_c('button', {
    staticClass: "terug"
  }, [_c('img', {
    staticClass: "pijl",
    attrs: {
      "src": _vm.vragenPijlVorige,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vorige-tekst"
  }, [_vm._v("Vorige")])])]), _c('button', {
    staticClass: "volgende",
    on: {
      "click": _vm.goToNextQuestion
    }
  }, [_c('div', {
    staticClass: "volgende-tekst"
  }, [_vm._v("Volgende")]), _c('img', {
    staticClass: "pijl-omdraaien pijl",
    attrs: {
      "src": _vm.vragenPijlVolgende,
      "alt": ""
    }
  })])])], 2), _vm.showPopup ? _c('div', {
    staticClass: "popup-overlay",
    on: {
      "click": _vm.closePopup
    }
  }, [_c('div', {
    staticClass: "popup",
    on: {
      "click": function ($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('button', {
    staticClass: "close-button",
    on: {
      "click": _vm.closePopup
    }
  }, [_vm._v("×")]), _c('div', {
    staticClass: "popup-content"
  }, [_c('Tabel2')], 1)])]) : _vm._e()]), _vm._m(1)]);
};
var desktopVraag3vue_type_template_id_f8e8c6e2_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" "), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")]), _c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "privacy-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "id": "voorwaarden-link",
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/desktopVraag3.vue?vue&type=template&id=f8e8c6e2&scoped=true

// EXTERNAL MODULE: ./img/vragen-pijl-volgende.svg
var vragen_pijl_volgende = __webpack_require__("453e");
var vragen_pijl_volgende_default = /*#__PURE__*/__webpack_require__.n(vragen_pijl_volgende);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag3.vue?vue&type=script&lang=js







/* harmony default export */ var desktopVraag3vue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk,
    Tabel2: tabel2
  },
  data() {
    return {
      vragenPijlVolgende: vragen_pijl_volgende_default.a,
      vragenPijlVorige: vragen_pijl_vorige_default.a,
      achtergrondVraag: achtergrondVraag_default.a,
      antwoordOpties: [{
        id: 4750,
        answer: "i10 i-Drive"
      }, {
        id: 4753,
        answer: "i10 Comfort"
      }, {
        id: 4759,
        answer: "i10 Comfort Smart"
      }, {
        id: 4762,
        answer: "i10 Premium"
      }, {
        id: 4765,
        answer: "i10 N Line"
      }, {
        id: 4774,
        answer: "Weet ik nog niet"
      }],
      geselecteerdeAntwoorden: [],
      showPopup: false
    };
  },
  methods: {
    goToNextQuestion() {
      if (this.geselecteerdeAntwoorden.length === 0) {
        alert("Selecteer minstens één antwoord.");
        return;
      }
      this.geselecteerdeAntwoorden.forEach(antwoord => {
        addAntwoord(antwoord.id);
      });
      window.scrollTo(0, 0);
      this.$router.push('/hyundai-sass-vue/vraag4');
    },
    openPopup() {
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  },
  mounted() {
    this.setupFooterLinks();
  },
  watch: {
    geselecteerdeAntwoorden(newVal) {
      if (newVal.length > 0) {}
    }
  },
  setupFooterLinks() {
    const privacyLink = document.getElementById('privacy-link');
    const voorwaardenLink = document.getElementById('voorwaarden-link');
    function openPopup(url) {
      window.open(url, 'popupWindow', 'width=800,height=600');
    }
    if (privacyLink) {
      privacyLink.addEventListener('click', function (event) {
        event.preventDefault();
        const popupUrl = privacyLink.getAttribute('href');
        openPopup(popupUrl);
      });
    }
    if (voorwaardenLink) {
      voorwaardenLink.addEventListener('click', function (event) {
        event.preventDefault();
        const popupUrl = voorwaardenLink.getAttribute('href');
        openPopup(popupUrl);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/desktopVraag3.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktopVraag3vue_type_script_lang_js = (desktopVraag3vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/desktopVraag3.vue?vue&type=style&index=0&id=f8e8c6e2&prod&scoped=true&lang=css
var desktopVraag3vue_type_style_index_0_id_f8e8c6e2_prod_scoped_true_lang_css = __webpack_require__("a772");

// CONCATENATED MODULE: ./src/components/desktopVraag3.vue






/* normalize component */

var desktopVraag3_component = Object(componentNormalizer["a" /* default */])(
  components_desktopVraag3vue_type_script_lang_js,
  desktopVraag3vue_type_template_id_f8e8c6e2_scoped_true_render,
  desktopVraag3vue_type_template_id_f8e8c6e2_scoped_true_staticRenderFns,
  false,
  null,
  "f8e8c6e2",
  null
  
)

/* harmony default export */ var desktopVraag3 = (desktopVraag3_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag4.vue?vue&type=template&id=e10e407e&scoped=true
var desktopVraag4vue_type_template_id_e10e407e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Vraag 4 van de 5")]), _c('div', {
    staticClass: "vraag"
  }, [_vm._v("Indien je kiest voor de Hyundai i10, wanneer zou jij erin willen rijden?")]), _vm._l(_vm.antwoordOpties, function (optie, index) {
    return _c('div', {
      key: index,
      staticClass: "vraag-optie-container"
    }, [_c('label', {
      staticClass: "vraag-optie"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.geselecteerdAntwoordId,
        expression: "geselecteerdAntwoordId"
      }],
      attrs: {
        "type": "radio",
        "id": 'optie' + (index + 1)
      },
      domProps: {
        "value": optie.id,
        "checked": _vm._q(_vm.geselecteerdAntwoordId, optie.id)
      },
      on: {
        "change": function ($event) {
          _vm.geselecteerdAntwoordId = optie.id;
        }
      }
    }), _vm._v(" " + _vm._s(optie.answer) + " ")])]);
  }), _c('a', {
    attrs: {
      "href": "/vraag3"
    }
  }, [_c('button', {
    staticClass: "terug"
  }, [_c('img', {
    staticClass: "pijl",
    attrs: {
      "src": _vm.vragenPijlVorige,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vorige-tekst"
  }, [_vm._v("Vorige")])])])], 2)]), _vm._m(1)]);
};
var desktopVraag4vue_type_template_id_e10e407e_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" "), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")]), _c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/desktopVraag4.vue?vue&type=template&id=e10e407e&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag4.vue?vue&type=script&lang=js





/* harmony default export */ var desktopVraag4vue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      vragenPijlVorige: vragen_pijl_vorige_default.a,
      achtergrondVraag: achtergrondVraag_default.a,
      antwoordOpties: [{
        id: 4795,
        answer: "Zo snel mogelijk"
      }, {
        id: 4798,
        answer: "Binnen 3 maanden"
      }, {
        id: 4801,
        answer: "Binnen 3 tot 6 maanden"
      }, {
        id: 4804,
        answer: "In overleg"
      }, {
        id: 4807,
        answer: "Weet ik nog niet"
      }],
      geselecteerdAntwoordId: null
    };
  },
  methods: {
    goToNextQuestion() {
      if (this.geselecteerdAntwoordId !== null) {
        addAntwoord(this.geselecteerdAntwoordId);
        setTimeout(() => {
          this.$router.push('/hyundai-sass-vue/vraag5').then(() => {
            window.scrollTo(0, 0);
          });
        }, 1000);
      }
    }
  },
  watch: {
    geselecteerdAntwoordId() {
      this.goToNextQuestion();
    }
  }
});
// CONCATENATED MODULE: ./src/components/desktopVraag4.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktopVraag4vue_type_script_lang_js = (desktopVraag4vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/desktopVraag4.vue?vue&type=style&index=0&id=e10e407e&prod&scoped=true&lang=css
var desktopVraag4vue_type_style_index_0_id_e10e407e_prod_scoped_true_lang_css = __webpack_require__("d72b");

// CONCATENATED MODULE: ./src/components/desktopVraag4.vue






/* normalize component */

var desktopVraag4_component = Object(componentNormalizer["a" /* default */])(
  components_desktopVraag4vue_type_script_lang_js,
  desktopVraag4vue_type_template_id_e10e407e_scoped_true_render,
  desktopVraag4vue_type_template_id_e10e407e_scoped_true_staticRenderFns,
  false,
  null,
  "e10e407e",
  null
  
)

/* harmony default export */ var desktopVraag4 = (desktopVraag4_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag5.vue?vue&type=template&id=0dbae738&scoped=true
var desktopVraag5vue_type_template_id_0dbae738_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Vraag 5 van de 5")]), _c('div', {
    staticClass: "vraag"
  }, [_vm._v("Wil jij graag een proefrit maken bij een dealer in jouw regio?")]), _c('div', {
    staticClass: "vraag-optie-container"
  }, [_c('label', {
    staticClass: "vraag-optie"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.geselecteerdAntwoordId,
      expression: "geselecteerdAntwoordId"
    }],
    attrs: {
      "type": "radio",
      "id": "ja",
      "value": "4810"
    },
    domProps: {
      "checked": _vm._q(_vm.geselecteerdAntwoordId, "4810")
    },
    on: {
      "change": function ($event) {
        _vm.geselecteerdAntwoordId = "4810";
      }
    }
  }), _vm._m(1)])]), _c('div', {
    staticClass: "vraag-optie-container"
  }, [_c('label', {
    staticClass: "vraag-optie"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.geselecteerdAntwoordId,
      expression: "geselecteerdAntwoordId"
    }],
    attrs: {
      "type": "radio",
      "id": "nee",
      "value": "4813"
    },
    domProps: {
      "checked": _vm._q(_vm.geselecteerdAntwoordId, "4813")
    },
    on: {
      "change": function ($event) {
        _vm.geselecteerdAntwoordId = "4813";
      }
    }
  }), _vm._m(2)])]), _c('a', {
    attrs: {
      "href": "/vraag4"
    }
  }, [_c('button', {
    staticClass: "terug"
  }, [_c('img', {
    staticClass: "pijl",
    attrs: {
      "src": _vm.vragenPijlVorige,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vorige-tekst"
  }, [_vm._v("Vorige")])])])])]), _vm._m(3)]);
};
var desktopVraag5vue_type_template_id_0dbae738_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/hyundai-sass-vue/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gelijke-tekst"
  }, [_c('div', {
    staticClass: "ja-nee"
  }, [_vm._v("Ja,")]), _vm._v(" ik wil graag een proefrit maken ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gelijke-tekst"
  }, [_c('div', {
    staticClass: "ja-nee"
  }, [_vm._v("Nee,")]), _vm._v(" ik hoef geen proefrit te maken ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen-1"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" "), _c('span', {
    staticClass: "footer-klein-scherm"
  }, [_c('br')]), _vm._v(" van deze actie. ")]), _c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v(" Bekijk de "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-privacy"
    }
  }, [_vm._v("Privacy")]), _vm._v(" & "), _c('a', {
    staticClass: "footer-link",
    attrs: {
      "href": "https://leadgen.republish.nl/api/content/hyundai-voorwaarden"
    }
  }, [_vm._v("voorwaarden")]), _vm._v(" van deze actie. ")])]);
}];

// CONCATENATED MODULE: ./src/components/desktopVraag5.vue?vue&type=template&id=0dbae738&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/desktopVraag5.vue?vue&type=script&lang=js





/* harmony default export */ var desktopVraag5vue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      vragenPijlVorige: vragen_pijl_vorige_default.a,
      achtergrondVraag: achtergrondVraag_default.a,
      geselecteerdAntwoordId: null
    };
  },
  methods: {
    goToNextQuestion() {
      if (this.geselecteerdAntwoordId !== null) {
        addAntwoord(this.geselecteerdAntwoordId);
        setTimeout(() => {
          window.scrollTo(0, 0);
          this.$router.push('/hyundai-sass-vue/formulier');
        }, 1000);
      }
    }
  },
  watch: {
    geselecteerdAntwoordId() {
      this.goToNextQuestion();
    }
  }
});
// CONCATENATED MODULE: ./src/components/desktopVraag5.vue?vue&type=script&lang=js
 /* harmony default export */ var components_desktopVraag5vue_type_script_lang_js = (desktopVraag5vue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/desktopVraag5.vue?vue&type=style&index=0&id=0dbae738&prod&scoped=true&lang=css
var desktopVraag5vue_type_style_index_0_id_0dbae738_prod_scoped_true_lang_css = __webpack_require__("374e");

// CONCATENATED MODULE: ./src/components/desktopVraag5.vue






/* normalize component */

var desktopVraag5_component = Object(componentNormalizer["a" /* default */])(
  components_desktopVraag5vue_type_script_lang_js,
  desktopVraag5vue_type_template_id_0dbae738_scoped_true_render,
  desktopVraag5vue_type_template_id_0dbae738_scoped_true_staticRenderFns,
  false,
  null,
  "0dbae738",
  null
  
)

/* harmony default export */ var desktopVraag5 = (desktopVraag5_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formulier.vue?vue&type=template&id=0dd96c54&scoped=true
var formuliervue_type_template_id_0dd96c54_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "bedankt hyundaisansheadoffice-bold-midnight-blue-32px"
  }, [_vm._v("Bedankt!")]), _vm._m(1), [_c('div', [_c('label', [_c('div', {
    staticClass: "geslacht-container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.geslacht,
      expression: "formData.geslacht"
    }],
    attrs: {
      "type": "radio",
      "value": "male"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.geslacht, "male")
    },
    on: {
      "change": function ($event) {
        return _vm.$set(_vm.formData, "geslacht", "male");
      }
    }
  }), _c('div', {
    staticClass: "geslacht"
  }, [_vm._v(" Meneer ")])])]), _c('label', [_c('div', {
    staticClass: "geslacht-container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.geslacht,
      expression: "formData.geslacht"
    }],
    attrs: {
      "type": "radio",
      "value": "female"
    },
    domProps: {
      "checked": _vm._q(_vm.formData.geslacht, "female")
    },
    on: {
      "change": function ($event) {
        return _vm.$set(_vm.formData, "geslacht", "female");
      }
    }
  }), _c('div', {
    staticClass: "geslacht"
  }, [_vm._v(" Mevrouw ")])])]), _vm.errors.geslacht ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.geslacht))]) : _vm._e()])], _c('div', {
    staticClass: "Voornaam"
  }, [_c('label', {
    attrs: {
      "for": "voornaam-input"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.voornaam,
      expression: "formData.voornaam"
    }],
    staticClass: "input-formulier",
    class: {
      'error-input': _vm.errors.voornaam
    },
    attrs: {
      "id": "voornaam-input",
      "type": "text",
      "placeholder": "Voornaam"
    },
    domProps: {
      "value": _vm.formData.voornaam
    },
    on: {
      "blur": _vm.validateVoornaam,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "voornaam", $event.target.value);
      }
    }
  }), _vm.errors.voornaam ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.voornaam))]) : _vm._e()]), _c('div', {
    staticClass: "Achternaam"
  }, [_c('label', {
    attrs: {
      "for": "achternaam-input"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.achternaam,
      expression: "formData.achternaam"
    }],
    staticClass: "input-formulier",
    attrs: {
      "id": "achternaam-input",
      "type": "text",
      "placeholder": "Achternaam"
    },
    domProps: {
      "value": _vm.formData.achternaam
    },
    on: {
      "blur": function ($event) {
        return _vm.validateAchternaam();
      },
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "achternaam", $event.target.value);
      }
    }
  }), _vm.errors.achternaam ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.achternaam))]) : _vm._e()]), _c('div', {
    staticClass: "E-mailadres"
  }, [_c('label', {
    attrs: {
      "for": "email-input"
    }
  }), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.email,
      expression: "formData.email"
    }],
    staticClass: "input-formulier",
    attrs: {
      "type": "email",
      "id": "email-input",
      "name": "E-mailadres",
      "placeholder": "E-mailadres"
    },
    domProps: {
      "value": _vm.formData.email
    },
    on: {
      "blur": _vm.validateEmail,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "email", $event.target.value);
      }
    }
  }), _vm.errors.email ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.email))]) : _vm._e()]), _c('div', {
    staticClass: "Telefoonnummer"
  }, [_c('label', {
    attrs: {
      "for": "telefoonnummer-input"
    }
  }), _c('div', {
    staticClass: "telefoonnummer-input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.telefoonnummer,
      expression: "formData.telefoonnummer"
    }],
    staticClass: "input-formulier telefoonnummer",
    attrs: {
      "type": "text",
      "id": "telefoonnummer-input",
      "name": "Telefoonnummer",
      "placeholder": "Telefoonnummer"
    },
    domProps: {
      "value": _vm.formData.telefoonnummer
    },
    on: {
      "blur": _vm.validateTelefoonnummer,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.formData, "telefoonnummer", $event.target.value);
      }
    }
  })]), _vm.errors.telefoonnummer ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.errors.telefoonnummer))]) : _vm._e()]), _c('div', {
    staticClass: "lijn"
  }), _vm._m(2), _c('div', [_c('div', {
    staticClass: "Postcode"
  }, [_c('label', {
    attrs: {
      "for": "Postcode"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.postcode,
      expression: "postcode"
    }],
    staticClass: "input-formulier",
    attrs: {
      "type": "text",
      "id": "Postcode",
      "name": "Postcode",
      "placeholder": "Postcode"
    },
    domProps: {
      "value": _vm.postcode
    },
    on: {
      "blur": _vm.checkPostcode,
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.postcode = $event.target.value;
      }
    }
  })]), _c('div', {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.errors.postcode))])]), _c('div', [_c('div', {
    staticClass: "Kies-een-dealer"
  }, [_c('label', {
    attrs: {
      "for": "Kies-een-dealer"
    }
  }), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.formData.dealer,
      expression: "formData.dealer"
    }],
    staticClass: "input-formulier dealer-select",
    attrs: {
      "id": "Kies-een-dealer",
      "name": "Kies-een-dealer"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.formData, "dealer", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.validateDealer]
    }
  }, [_vm._m(3), _vm._l(_vm.nearestDealers, function (dealer) {
    return _c('option', {
      key: dealer.id,
      domProps: {
        "value": dealer
      }
    }, [_vm._v(_vm._s(dealer.name))]);
  })], 2), _c('div', {
    staticClass: "error"
  }, [_vm._v(_vm._s(_vm.errors.dealer))])])])]), _c('div', {
    staticClass: "gekozen-dealer beneden"
  }, [_vm._v(" De gekozen dealer neemt telefonisch contact met je op voor het bespreken van je wensen voor de berekening. ")]), _c('button', {
    staticClass: "volgende",
    attrs: {
      "id": "verzendknop"
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_c('div', {
    staticClass: "volgende-tekst"
  }, [_vm._v("Aanvraag afronden")]), _c('img', {
    staticClass: "pijl-omdraaien",
    attrs: {
      "src": _vm.pijlVoren,
      "alt": ""
    }
  })]), _c('div', {
    staticClass: "afronding"
  }, [_vm._v(" Jouw gegevens worden alleen gebruikt voor de berekening van jouw leasetarief en worden niet gedeeld met andere partijen. De berekening en uitgebrachte offertes zijn gratis en vrijblijvend, er zijn geen verplichtingen aan verbonden! De uitkomst van de berekening ontvang je telefonisch en/of per e-mail. ")])], 2)]), _vm._m(4)]);
};
var formuliervue_type_template_id_0dd96c54_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vrijblijvend-gegevens"
  }, [_vm._v("Vul jouw gegevens in en ontvang gratis en "), _c('span', {
    staticClass: "dik"
  }, [_vm._v("vrijblijvend de berekening van jouw leasetarief,")]), _vm._v(" inclusief speciale aanbieding.")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vrijblijvend-gegevens beneden"
  }, [_vm._v("Vul je postcode in en "), _c('span', {
    staticClass: "dik"
  }, [_vm._v("kies een dealer")]), _vm._v(" bij jou in de buurt:")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('option', {
    staticClass: "selecteer-een-dealer",
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_c('span', {
    staticClass: "input-rechts"
  }, [_vm._v("Selecteer een dealer")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "footer-vragen-achtergrond"
  }, [_c('div', {
    staticClass: "footer-vragen"
  }, [_vm._v("Bekijk de Privacy & voorwaarden "), _c('br'), _vm._v(" van deze actie.")])]);
}];

// CONCATENATED MODULE: ./src/components/formulier.vue?vue&type=template&id=0dd96c54&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 43 modules
var axios = __webpack_require__("cee4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt-img.vue?vue&type=template&id=8ec26f20&scoped=true
var bedankt_imgvue_type_template_id_8ec26f20_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('head', [_c('img', {
    staticStyle: {
      "width": "1px",
      "height": "1px",
      "border": "0px"
    },
    attrs: {
      "referrerpolicy": "no-referrer-when-downgrade",
      "src": _vm.pixelUrl,
      "alt": "tracking-pixel"
    }
  })]), _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _vm._m(1)])])]);
};
var bedankt_imgvue_type_template_id_8ec26f20_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag"
  }, [_vm._v("Bedankt voor het invullen van het formulier.")]), _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Onze dealer neemt binnenkort contact met jou op.")]), _c('div', {
    staticClass: "weghalen"
  }, [_vm._v("dit is de img pixel bedankt pagina")])]);
}];

// CONCATENATED MODULE: ./src/components/bedankt-img.vue?vue&type=template&id=8ec26f20&scoped=true

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 5 modules
var v4 = __webpack_require__("ec26");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt-img.vue?vue&type=script&lang=js



/* harmony default export */ var bedankt_imgvue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag_default.a,
      uniqueConversionId: Object(v4["a" /* default */])()
    };
  },
  computed: {
    pixelUrl() {
      return `https://republish.topleaseauto.nl/m/6190/13f48bd4ecfb/?event=7228&unique_conversion_id=${this.uniqueConversionId}`;
    }
  }
});
// CONCATENATED MODULE: ./src/components/bedankt-img.vue?vue&type=script&lang=js
 /* harmony default export */ var components_bedankt_imgvue_type_script_lang_js = (bedankt_imgvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/bedankt-img.vue?vue&type=style&index=0&id=8ec26f20&prod&scoped=true&lang=css
var bedankt_imgvue_type_style_index_0_id_8ec26f20_prod_scoped_true_lang_css = __webpack_require__("cf49");

// CONCATENATED MODULE: ./src/components/bedankt-img.vue






/* normalize component */

var bedankt_img_component = Object(componentNormalizer["a" /* default */])(
  components_bedankt_imgvue_type_script_lang_js,
  bedankt_imgvue_type_template_id_8ec26f20_scoped_true_render,
  bedankt_imgvue_type_template_id_8ec26f20_scoped_true_staticRenderFns,
  false,
  null,
  "8ec26f20",
  null
  
)

/* harmony default export */ var bedankt_img = (bedankt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/formulier.vue?vue&type=script&lang=js







const dealers = [{
  "id": 4816,
  "name": "Van Mossel Hyundai Leeuwarden",
  "latitude": 53.200770023103,
  "longitude": 5.8407729035167
}, {
  "id": 4819,
  "name": "Van Mossel Hyundai Groningen",
  "latitude": 53.220721988724,
  "longitude": 6.6111767146783
}, {
  "id": 4822,
  "name": "Van Mossel Hyundai Heerenveen",
  "latitude": 52.964521308202,
  "longitude": 5.8921035528572
}, {
  "id": 4825,
  "name": "Van Mossel Hyundai Emmen",
  "latitude": 52.763281277363,
  "longitude": 6.9392753158237
}, {
  "id": 4828,
  "name": "Autobedrijf Van Veen Assen",
  "latitude": 52.995796249184,
  "longitude": 6.5331830435734
}, {
  "id": 4831,
  "name": "Herwers Hyundai Deventer",
  "latitude": 52.24090320152,
  "longitude": 6.2148931809914
}, {
  "id": 4834,
  "name": "Herwers Hyundai Arnhem",
  "latitude": 51.948344891296,
  "longitude": 5.881746123549
}, {
  "id": 4837,
  "name": "Herwers Hyundai Doetinchem",
  "latitude": 51.972777644707,
  "longitude": 6.2666923214625
}, {
  "id": 4840,
  "name": "Herwers Hyundai Tiel",
  "latitude": 51.912172705068,
  "longitude": 5.4268906916074
}, {
  "id": 4843,
  "name": "Herwers Hyundai Veenendaal",
  "latitude": 52.037594643424,
  "longitude": 5.5738100626821
}, {
  "id": 4846,
  "name": "Herwers Hyundai Apeldoorn",
  "latitude": 52.238002454923,
  "longitude": 5.9853544079444
}, {
  "id": 4849,
  "name": "Broekhuis Hyundai Zwolle",
  "latitude": 52.494526968178,
  "longitude": 6.1222122787487
}, {
  "id": 4852,
  "name": "Broekhuis Hyundai Almere",
  "latitude": 52.358275062373,
  "longitude": 5.2592331536395
}, {
  "id": 4855,
  "name": "Autogroep Twente Enschede",
  "latitude": 52.191876753996,
  "longitude": 6.8891162548194
}, {
  "id": 4858,
  "name": "Autogroep Twente Almelo",
  "latitude": 52.384869036162,
  "longitude": 6.7229862693341
}, {
  "id": 4861,
  "name": "Autogroep Twente Hengelo",
  "latitude": 52.280382103484,
  "longitude": 6.7770215776139
}, {
  "id": 4864,
  "name": "Hyundai Wittenberg Nieuwegein",
  "latitude": 52.019822448674,
  "longitude": 5.0999873964444
}, {
  "id": 4867,
  "name": "Autogroep Ursem Barten Amsterdam",
  "latitude": 52.390577415125,
  "longitude": 4.7996608806479
}, {
  "id": 4870,
  "name": "Autogroep Ursem Barten Zuid Oost",
  "latitude": 52.328628417496,
  "longitude": 4.9279489634226
}, {
  "id": 4873,
  "name": "Autogroep Ursem Barten Amstelveen",
  "latitude": 52.281780526945,
  "longitude": 4.8379601112311
}, {
  "id": 4876,
  "name": "Autobedrijf Velserbeek Velserbroek",
  "latitude": 52.007814310819,
  "longitude": 4.1622059933439
}, {
  "id": 4879,
  "name": "Hyundai Wittenberg Amersfoort",
  "latitude": 52.165406956313,
  "longitude": 5.3525912536931
}, {
  "id": 4882,
  "name": "Hyundai Wittenberg Utrecht",
  "latitude": 52.076206664219,
  "longitude": 5.046634422724
}, {
  "id": 4885,
  "name": "Auto Sturm Goes",
  "latitude": 51.488043537477,
  "longitude": 3.8746142737977
}, {
  "id": 4888,
  "name": "Auto Sturm Middelburg",
  "latitude": 51.482250586951,
  "longitude": 3.6290256698105
}, {
  "id": 4891,
  "name": "Hyundai Wittenberg Hilversum",
  "latitude": 52.215382648186,
  "longitude": 5.1451317297305
}, {
  "id": 4894,
  "name": "Autogroep Ursem Barten Purmerend",
  "latitude": 52.519588463866,
  "longitude": 4.9990811507024
}, {
  "id": 4897,
  "name": "Autogroep Ursem Barten Zwaag",
  "latitude": 52.670418640975,
  "longitude": 5.0579877284956
}, {
  "id": 4900,
  "name": "Autogroep Ursem Barten Heerhugowaard",
  "latitude": 52.666183113917,
  "longitude": 4.8184493526844
}, {
  "id": 4903,
  "name": "Autogroep Ursem Barten Heemskerk",
  "latitude": 52.505040302237,
  "longitude": 4.6558053005753
}, {
  "id": 4906,
  "name": "Autogroep Ursem Barten Alkmaar",
  "latitude": 52.643349229245,
  "longitude": 4.7828172643399
}, {
  "id": 4909,
  "name": "Autogroep Ursem Barten Hoofddorp",
  "latitude": 52.293749540465,
  "longitude": 4.6797069000563
}, {
  "id": 4912,
  "name": "Wittebrug Hyundai Den Haag Ypenburg",
  "latitude": 52.071089543392,
  "longitude": 4.3930214238068
}, {
  "id": 4915,
  "name": "Wittebrug Hyundai Den Haag Kerketuinen",
  "latitude": 52.050924284312,
  "longitude": 4.2564097901303
}, {
  "id": 4918,
  "name": "Wittebrug Hyundai Rotterdam Metaalhof",
  "latitude": 51.94910669907,
  "longitude": 4.5441793096486
}, {
  "id": 4921,
  "name": "Autobedrijf Arjan Groet Den Helder",
  "latitude": 52.949898585181,
  "longitude": 4.7635901324677
}, {
  "id": 4924,
  "name": "Autobedrijf Noteboom Spijkenisse BV",
  "latitude": 51.850566961721,
  "longitude": 4.307374391587
}, {
  "id": 4927,
  "name": "Autobedrijf Noteboom Rotterdam b.v.",
  "latitude": 51.868951654863,
  "longitude": 4.549152595994
}, {
  "id": 4930,
  "name": "Garage van Dalen Schiedam",
  "latitude": 51.931293082407,
  "longitude": 4.3988171276193
}, {
  "id": 4933,
  "name": "H-Point Dordrecht",
  "latitude": 51.792037766149,
  "longitude": 4.648020753442
}, {
  "id": 4936,
  "name": "H-Point Gorinchem",
  "latitude": 51.841449706817,
  "longitude": 4.9527912249317
}, {
  "id": 4939,
  "name": "Dijksman Automobielbedrijven Katwijk",
  "latitude": 52.202092801914,
  "longitude": 4.4359123121548
}, {
  "id": 4942,
  "name": "Van der Linden Groep Zoetermeer B.V.",
  "latitude": 52.03691784883,
  "longitude": 4.501799538036
}, {
  "id": 4945,
  "name": "Van der Linden Groep Waddinxveen B.V.",
  "latitude": 52.027931285446,
  "longitude": 4.6553007642224
}, {
  "id": 4948,
  "name": "Van der Linden Groep Leiden B.V.",
  "latitude": 52.171775837631,
  "longitude": 4.4956402746069
}, {
  "id": 4951,
  "name": "Autobedrijf F. van der Heijden Uden",
  "latitude": 51.652427325599,
  "longitude": 5.6435443254211
}, {
  "id": 4954,
  "name": "Autobedrijf Peter Janssen Weert",
  "latitude": 51.269692980175,
  "longitude": 5.7230822447685
}, {
  "id": 4957,
  "name": "Wassink Autogroep Heerlen",
  "latitude": 50.904213103097,
  "longitude": 5.9484630028934
}, {
  "id": 4960,
  "name": "Wassink Autogroep Sittard",
  "latitude": 50.996372403143,
  "longitude": 5.8448701421058
}, {
  "id": 4963,
  "name": "Wassink Autogroep Venlo",
  "latitude": 51.390659512617,
  "longitude": 6.1359261106854
}, {
  "id": 4966,
  "name": "Zeeuw & Zeeuw Roosendaal",
  "latitude": 51.557958043752,
  "longitude": 4.4660006632069
}, {
  "id": 4969,
  "name": "Oostendorp Auto Den Bosch B.V.",
  "latitude": 51.708305676251,
  "longitude": 5.330910716323
}, {
  "id": 4972,
  "name": "Oostendorp Auto Nijmegen B.V.",
  "latitude": 51.83966168017,
  "longitude": 5.8057202319442
}, {
  "id": 4975,
  "name": "Oostendorp Auto Helmond B.V.",
  "latitude": 51.459466237075,
  "longitude": 5.6923203400239
}, {
  "id": 4978,
  "name": "Content Autogroep Eindhoven",
  "latitude": 51.481318298583,
  "longitude": 5.4588081532907
}, {
  "id": 4981,
  "name": "Content Autogroep Tilburg",
  "latitude": 51.580772353102,
  "longitude": 5.0643810461124
}, {
  "id": 4984,
  "name": "Zeeuw & Zeeuw Breda",
  "latitude": 51.603712654071,
  "longitude": 4.8046630595467
}, {
  "id": 4987,
  "name": "Groenewold & Dijkhuizen Delfzijl",
  "latitude": 53.322389781872,
  "longitude": 6.8849081644247
}];
/* harmony default export */ var formuliervue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      nearestDealers: [],
      achtergrondVraag: achtergrondVraag_default.a,
      pijlVoren: vragen_pijl_volgende_default.a,
      formData: {
        geslacht: '',
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: '',
        postcode: '',
        dealer: '',
        landcode: '',
        language: 'nl_NL',
        publisher_id: 'Hyundai',
        site_custom_url: window.location.href,
        site_custom_name: 'Hyundai-i10',
        ip: '',
        answers: []
      },
      errors: {
        geslacht: '',
        voornaam: '',
        achternaam: '',
        email: '',
        telefoonnummer: '',
        postcode: '',
        dealer: ''
      }
    };
  },
  mounted() {
    axios["a" /* default */].get('https://api.ipify.org?format=json').then(response => {
      this.formData.ip = response.data.ip;
    }).catch(error => {
      console.error('Fout bij ophalen van IP-adres:', error);
    });
    this.formData.answers = getAntwoorden();
    console.log("Antwoorden:", this.formData.answers);
  },
  methods: {
    validateGeslacht() {
      console.log("Validating geslacht:", this.formData.geslacht);
      if (!this.formData.geslacht) {
        this.errors.geslacht = 'Selecteer een geslacht.';
        return false;
      }
      this.errors.geslacht = '';
      return true;
    },
    validateVoornaam() {
      console.log("Validating voornaam:", this.formData.voornaam);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      const inputElement = document.querySelector('#voornaam-input');
      if (!this.formData.voornaam.match(regex)) {
        this.errors.voornaam = 'Ongeldige voornaam. Gebruik alleen letters, spaties en leestekens.';
        inputElement.classList.add('error-input');
        return false;
      }
      this.errors.voornaam = '';
      inputElement.classList.remove('error-input');
      return true;
    },
    validateAchternaam() {
      console.log("Validating achternaam:", this.formData.achternaam);
      const regex = /^[a-zA-Z\s.,'-]{1,}$/;
      const inputElement = document.querySelector('#achternaam-input');
      if (!this.formData.achternaam.match(regex)) {
        this.errors.achternaam = 'Ongeldige achternaam. Gebruik alleen letters, spaties en leestekens.';
        inputElement.classList.add('error-input');
        return false;
      }
      this.errors.achternaam = '';
      inputElement.classList.remove('error-input');
      return true;
    },
    validateEmail() {
      console.log("Validating email:", this.formData.email);
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const containsApostrophe = /'/;
      const inputElement = document.querySelector('#email-input');
      if (!this.formData.email.match(regex) || this.formData.email.match(containsApostrophe)) {
        this.errors.email = 'Ongeldig e-mailadres.';
        inputElement.classList.add('error-input');
        return false;
      }
      this.errors.email = '';
      inputElement.classList.remove('error-input');
      return true;
    },
    validateAndFormatPhoneNumber(phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
      const dutchRegex = /^(06[0-9]{8}|[+]{0,1}31[0]?[0-9]{9,10}|0031[0]?[0-9]{9,10})$/;
      if (!phoneNumber.match(dutchRegex)) {
        console.error('Ongeldig telefoonnummer');
        return null;
      }
      phoneNumber = phoneNumber.replace(/^0+/, '');
      if (phoneNumber.startsWith('0') && (phoneNumber.length === 10 || phoneNumber.length === 11)) {
        phoneNumber = '+31' + phoneNumber.substring(1);
      } else if (phoneNumber.startsWith('6') && phoneNumber.length === 9) {
        phoneNumber = '+31' + phoneNumber;
      } else if (phoneNumber.startsWith('31') && phoneNumber.length === 11) {
        phoneNumber = '+' + phoneNumber;
      } else if (phoneNumber.startsWith('+31')) {} else if (phoneNumber.startsWith('0031')) {
        phoneNumber = '+' + phoneNumber.substring(2);
      } else {
        console.error('Ongeldig telefoonnummer');
        return null;
      }
      if (phoneNumber.length !== 12) {
        console.error('Telefoonnummer moet in het formaat +31XXXXXXXXX zijn.');
        return null;
      }
      return phoneNumber;
    },
    validateTelefoonnummer() {
      console.log("Validating telefoonnummer:", this.formData.telefoonnummer);
      const phoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);
      if (!phoneNumber) {
        console.error('Ongeldig telefoonnummer.');
        this.errors.telefoonnummer = 'Ongeldig telefoonnummer.';
        const inputElement = document.querySelector('#telefoonnummer-input');
        inputElement.classList.add('error-input');
        return false;
      }
      this.errors.telefoonnummer = '';
      const inputElement = document.querySelector('#telefoonnummer-input');
      inputElement.classList.remove('error-input');
      return true;
    },
    async checkPostcode() {
      const cleanPostcode = this.postcode.replace(/\s+/g, '');
      if (cleanPostcode.length === 6) {
        const postcodeRegex = /^[1-9][0-9]{3}[a-zA-Z]{2}$/;
        if (postcodeRegex.test(cleanPostcode)) {
          await this.findNearestDealers();
          this.errors.postcode = '';
        } else {
          this.errors.postcode = 'Voer een geldige postcode in (1234AB).';
        }
      } else if (cleanPostcode.length > 0) {
        this.errors.postcode = 'Een postcode moet 6 tekens bevatten.';
      } else {
        this.errors.postcode = '';
      }
    },
    validateDealer() {
      console.log("Validating dealer:", this.formData.dealer.id);
      if (!this.formData.dealer || !this.formData.dealer.id) {
        this.errors.dealer = 'Selecteer een dealer.';
        return false;
      }
      this.errors.dealer = '';
      const dealerAnswer = this.formData.dealer.id;
      const dealerAnswerIndex = this.formData.answers.findIndex(answer => answer === dealerAnswer);
      if (dealerAnswerIndex === -1) {
        this.formData.answers = this.formData.answers.filter(answer => !dealers.some(dealer => dealer.id === answer));
        this.formData.answers.push(dealerAnswer);
      }
      return true;
    },
    async findNearestDealers() {
      try {
        const apiKey = 'pk.6c8d6a1e3fe6468f0ceab205affad3d7';
        const response = await axios["a" /* default */].get(`https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.postcode}&format=json`);
        if (response.data && response.data.length > 0) {
          const {
            lat,
            lon
          } = response.data[0];
          const dealersWithDistance = dealers.map(dealer => {
            const distance = this.calculateDistance(lat, lon, dealer.latitude, dealer.longitude);
            return {
              ...dealer,
              distance
            };
          });
          this.nearestDealers = dealersWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5);
        } else {
          this.errors.postcode = 'Geen gegevens gevonden voor de opgegeven postcode.';
        }
      } catch (error) {
        console.error('Fout bij het ophalen van de coördinaten voor de postcode:', error);
        this.errors.postcode = 'Fout bij het ophalen van de coördinaten voor de postcode.';
      }
    },
    calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371;
      const dLat = this.deg2rad(lat2 - lat1);
      const dLon = this.deg2rad(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },
    clearErrors() {
      this.errors.postcode = '';
    },
    validateForm() {
      console.log("Validating form...");
      const isValid = this.validateGeslacht() && this.validateVoornaam() && this.validateAchternaam() && this.validateEmail() && this.validateTelefoonnummer() && this.validateDealer();
      console.log("Form valid:", isValid);
      return isValid;
    },
    async submitForm() {
      console.log("Submitting form...");
      if (this.validateForm()) {
        console.log("Form is valid, submitting...");

        // Voorbereidende stappen voor het verzenden van formuliergegevens
        this.formData.answers = getAntwoorden();
        this.formData.answers.push(4659); // Voorbeeld van toevoegen van antwoorden
        this.formData.firstname = this.formData.voornaam;
        this.formData.lastname = this.formData.achternaam;
        const formattedPhoneNumber = this.validateAndFormatPhoneNumber(this.formData.telefoonnummer);
        if (!formattedPhoneNumber) {
          console.error('Ongeldig telefoonnummer, formulier niet verzonden.');
          return;
        }
        this.formData.phone_number = formattedPhoneNumber;
        this.formData.gender = this.formData.geslacht;
        const dealerAnswer = this.formData.dealer.id;
        this.formData.answers = this.formData.answers.filter(answer => !dealers.some(dealer => dealer.id === answer));
        this.formData.answers.push(dealerAnswer);
        delete this.formData.voornaam;
        delete this.formData.achternaam;
        delete this.formData.telefoonnummer;
        delete this.formData.geslacht;
        console.log("Form data after processing:", JSON.stringify(this.formData));
        const authHeader = 'Basic MTg1OmFiODIyMWQ0YTMxNzBkODk1NDI4ODA0NTlhYmY3OTgxN2FlMzY3YzI=';
        try {
          // API-aanroep om het formulier te verzenden
          const response = await axios["a" /* default */].post('https://leadgen.republish.nl/api/sponsors/2358/leads', this.formData, {
            headers: {
              'Authorization': authHeader,
              'Content-Type': 'application/json; charset=utf-8'
            }
          });
          console.log('Formulier succesvol verstuurd', response.data);
          if (response.status === 201) {
            this.$router.push('/hyundai-sass-vue/bedankt2');
          } else {
            this.$router.push('/hyundai-sass-vue/bedankt');
          }
        } catch (error) {
          console.error('Er is een fout opgetreden bij het versturen van het formulier', error);
          if (error.response && error.response.status === 409) {
            console.log('Duplicaat e-mailadres gedetecteerd.');
            this.$router.push('/hyundai-sass-vue/bedankt');
          }
        }
      } else {
        console.log("Form is invalid, not submitting.");
      }
    }

    // async checkIfNewLead(email) {
    //   try {
    //     const response = await axios.get(`https://leadgen.republish.nl/api/sponsors/2358/leads?email=${email}`);
    //     // Als de lead al bestaat, wordt het beschouwd als geen nieuwe lead
    //     return response.data.length === 0;
    //   } catch (error) {
    //     console.error('Fout bij het controleren op nieuwe lead:', error);
    //     // Default terugkeren true om pixel fired te activeren (niet aanbevolen voor productie)
    //     return true;
    //   }
    // },
  }
});
// CONCATENATED MODULE: ./src/components/formulier.vue?vue&type=script&lang=js
 /* harmony default export */ var components_formuliervue_type_script_lang_js = (formuliervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/formulier.vue?vue&type=style&index=0&id=0dd96c54&prod&scoped=true&lang=css
var formuliervue_type_style_index_0_id_0dd96c54_prod_scoped_true_lang_css = __webpack_require__("1a16");

// CONCATENATED MODULE: ./src/components/formulier.vue






/* normalize component */

var formulier_component = Object(componentNormalizer["a" /* default */])(
  components_formuliervue_type_script_lang_js,
  formuliervue_type_template_id_0dd96c54_scoped_true_render,
  formuliervue_type_template_id_0dd96c54_scoped_true_staticRenderFns,
  false,
  null,
  "0dd96c54",
  null
  
)

/* harmony default export */ var formulier = (formulier_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64e35f79-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt.vue?vue&type=template&id=29c53250&scoped=true
var bedanktvue_type_template_id_29c53250_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-center-horizontal"
  }, [_c('div', {
    staticClass: "top-balk"
  }, [_vm._m(0), _c('keurmerk')], 1), _c('div', {
    staticClass: "background-container"
  }, [_c('img', {
    staticClass: "achtergrondVraag",
    attrs: {
      "src": _vm.achtergrondVraag,
      "alt": ""
    }
  }), _vm._m(1)])]);
};
var bedanktvue_type_template_id_29c53250_scoped_true_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "logo-hyundai",
    attrs: {
      "src": "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/logo-hyundai-1.svg",
      "alt": "Logo Hyundai"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vragen-achtergrond"
  }, [_c('div', {
    staticClass: "vraag"
  }, [_vm._v("Bedankt voor het invullen van het formulier.")]), _c('div', {
    staticClass: "vraag-hoeveel"
  }, [_vm._v("Onze dealer neemt binnenkort contact met jou op.")])]);
}];

// CONCATENATED MODULE: ./src/components/bedankt.vue?vue&type=template&id=29c53250&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/bedankt.vue?vue&type=script&lang=js


/* harmony default export */ var bedanktvue_type_script_lang_js = ({
  name: "DesktopVraag",
  components: {
    Keurmerk: Keurmerk
  },
  data() {
    return {
      achtergrondVraag: achtergrondVraag_default.a
    };
  }
});
// CONCATENATED MODULE: ./src/components/bedankt.vue?vue&type=script&lang=js
 /* harmony default export */ var components_bedanktvue_type_script_lang_js = (bedanktvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/bedankt.vue?vue&type=style&index=0&id=29c53250&prod&scoped=true&lang=css
var bedanktvue_type_style_index_0_id_29c53250_prod_scoped_true_lang_css = __webpack_require__("35e3");

// CONCATENATED MODULE: ./src/components/bedankt.vue






/* normalize component */

var bedankt_component = Object(componentNormalizer["a" /* default */])(
  components_bedanktvue_type_script_lang_js,
  bedanktvue_type_template_id_29c53250_scoped_true_render,
  bedanktvue_type_template_id_29c53250_scoped_true_staticRenderFns,
  false,
  null,
  "29c53250",
  null
  
)

/* harmony default export */ var bedankt = (bedankt_component.exports);
// CONCATENATED MODULE: ./src/data.js
const xButton1Data = {
  arrowButton: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/color-white--type-button@2x.png"
};
const xLabel1Data = {
  nieuw: "NIEUW"
};
const voordeel21Data = {
  coins: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/coins@2x.png",
  aantrekkelijkVastBedragPM: "Aantrekkelijk vast bedrag p/m"
};
const voordeel22Data = {
  coins: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/verzekering@2x.png",
  aantrekkelijkVastBedragPM: "Inc. verzekering en reparatie"
};
const voordeel23Data = {
  coins: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/schade@2x.png",
  aantrekkelijkVastBedragPM: "Schadeherstel en onderhoud"
};
const voordeel24Data = {
  coins: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/portmonnee@2x.png",
  aantrekkelijkVastBedragPM: "Geen verborgen kosten"
};
const frame121Data = {
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-115@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-141@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-116@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-142@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-117@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-143@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-118@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-144@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-119@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-145@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-120@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-146@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-121@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-147@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-122@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-148@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-123@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-149@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-124@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-142@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-125@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-143@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-126@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-144@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-127@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-145@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-128@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-146@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-129@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-147@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-130@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-148@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-131@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-149@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-132@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-142@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-133@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-143@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-134@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-144@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-135@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-145@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-136@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-146@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-137@2x.png",
  className: ""
};
const onderdelen1Data = {
  frame12Props: frame121Data
};
const frame122Data = {
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-23@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-163@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-139@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-164@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-25@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-165@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-26@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-166@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-27@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-167@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-28@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-168@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-29@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-169@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-30@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-170@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-31@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-171@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-32@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-164@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-33@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-165@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-34@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-166@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-35@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-167@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-36@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-168@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-152@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-169@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-38@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-170@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-39@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-171@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-40@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-164@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-156@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-165@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-42@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-166@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-43@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-167@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-44@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-168@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-45@2x.png",
  className: "frame-1"
};
const onderdelen21Data = {
  frame12Props: frame122Data
};
const frame123Data = {
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-46@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-185@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-47@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-186@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-48@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-187@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-49@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-188@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-50@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-189@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-51@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-190@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-52@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-191@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-53@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-192@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-54@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-193@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-55@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-186@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-56@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-187@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-57@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-188@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-58@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-189@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-59@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-190@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-60@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-191@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-61@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-192@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-62@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-193@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-178@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-186@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-179@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-187@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-65@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-188@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-66@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-189@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-67@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-190@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-68@2x.png",
  className: "frame-1"
};
const onderdelen22Data = {
  frame12Props: frame123Data
};
const comfortSmart1Data = {
  titel: "Comfort Smart",
  onderdelen2Props: onderdelen22Data
};
const frame124Data = {
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-184@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-207@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-185@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-208@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-186@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-209@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-187@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-210@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-188@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-211@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-189@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-212@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-190@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-213@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-191@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-214@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-192@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-215@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-193@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-208@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-194@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-209@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-195@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-210@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-196@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-211@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-197@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-212@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-198@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-213@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-199@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-214@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-200@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-215@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-201@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-208@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-202@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-209@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-203@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-210@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-204@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-211@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-205@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-212@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-206@2x.png",
  className: "frame-1"
};
const onderdelen23Data = {
  frame12Props: frame124Data
};
const comfortSmart2Data = {
  titel: "Premium",
  className: "tabel-item-1",
  onderdelen2Props: onderdelen23Data
};
const frame125Data = {
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-92@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-229@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-93@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-230@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-94@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-231@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-95@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-232@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-96@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-233@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-97@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-234@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-98@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-235@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-99@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-236@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-100@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-237@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-101@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-230@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-102@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-231@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-103@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-232@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-104@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-233@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-105@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-234@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-106@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-235@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-222@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-236@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-108@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-237@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/tabel-icons-224@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-230@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-110@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-231@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-111@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-232@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-112@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-233@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-113@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-234@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ee5a175a57da77384a62/img/tabel-icons-114@2x.png",
  className: "frame-16"
};
const onderdelen3Data = {
  frame12Props: frame125Data
};
const xButton2Data = {
  arrowButton: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/arrow-9@2x.png"
};
const frame91Data = {
  profileGroups: "60 maanden",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-110@2x.png",
  accountViwers: "60 maanden",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-111@2x.png",
  socialMediaDashboa: "48 maanden",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-112@2x.png",
  shopifyDashboard: "48 maanden"
};
const frame92Data = {
  profileGroups: "10.000",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-254@2x.png",
  accountViwers: "20.000",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-255@2x.png",
  socialMediaDashboa: "10.000",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-256@2x.png",
  shopifyDashboard: "20.000",
  className: "frame-10"
};
const onderdelen32Data = {
  frame9Props: frame92Data
};
const frame93Data = {
  profileGroups: "€ 312,-",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-257@2x.png",
  accountViwers: "€ 358,11",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-258@2x.png",
  socialMediaDashboa: "€ 342,-",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-259@2x.png",
  shopifyDashboard: "€ 385,04",
  className: "frame-10"
};
const onderdelen33Data = {
  frame9Props: frame93Data
};
const xButton3Data = {
  arrowButton: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/arrow-10@2x.png",
  className: "button-1"
};
const campagneHyundaiDesktopTestData = {
  overlapGroup: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/auto-beeld-1@2x.png",
  overlayGroup: "img/overlay.png",
  tijdelijkVoorMaar275PM: "Tijdelijk voor<br />maar €275 p/m",
  ontdekMeer: "ONTDEK MEER",
  arrowLeft: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/arrow-left@2x.png",
  arrowRight: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/arrow-right@2x.png",
  privateLeaseNuTij: "Private Lease nu tijdelijk vanaf €275 p/m*",
  deVernieuwdeHyundaiI10: "De vernieuwde<br />Hyundai i10",
  maakEenGrootsStatement: "Maak een groots statement",
  spanText1: "Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.",
  spanText2: "Je stapt al in vanaf €275 per maand*",
  hetMaandbedragVa: "* Het maandbedrag van €275 geldt op basis van een looptijd van 72 maanden en 5.000 km per jaar bij de i10 Comfort!",
  vrouwBlijAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/vrouw-blij-auto-1@2x.png",
  stuurwiel: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/stuurwiel@2x.png",
  rijdenInEenNieuweHyundai: "Rijden in een<br />nieuwe Hyundai",
  hyundaiI101: "Hyundai i10",
  allInclusiveGeniet: "All-inclusive genieten met Hyundai Private Lease",
  vastMaandbedragInc: "<ul>" + "<li>Vast maandbedrag inclusief alle kosten, behalve brandstof</li>" + "<li>Nieuwe auto met inbegrepen rente en afschrijving</li>" + "<li>Pechhulp in binnenland en Europa</li>" + "<li>Motorrijtuigenbelasting inbegrepen</li>" + "<li>Bandenvervanging, schadeherstel en glasreparatie gedekt</li>" + "<li>Afleveringskosten en verwijderingsbijdrage inclusief</li>" + "<li>Onderhoud inbegrepen</li>" + "<li>Volle tank brandstof bij aflevering</li>" + "</ul>",
  hyundaiI102: "Hyundai i10",
  eenFrisseKijkOpEenGedurfdOntwerp: "Een frisse kijk op een gedurfd ontwerp",
  handMobiel: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/hand-mobiel-1@2x.png",
  binnenAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/binnen-auto-1@2x.png",
  dashboardAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/dashboard-auto-1@2x.png",
  binnenAuto2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/binnen-auto-2-1@2x.png",
  uitvoeringenEnHunFunctionaliteiten: "Uitvoeringen en hun functionaliteiten",
  billMontly1: "Functionaliteiten",
  profileGroups: "Actieve rijbaanassistentie (LKA)",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  accountViwers: "Cruise Control met limiet",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  socialMediaDashboa: "Noodremassistent (FCA) met voetgangerherkenning",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  shopifyDashboard: "eCall (Emergency Call)",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  mixedDragAndDrop: "Start/Stop systeem",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-123@2x.png",
  downloadablePdfRep: "Achterbank in delen neerklapbaar",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-124@2x.png",
  whiteLabelReports: "Zij- en gordijnairbags",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-125@2x.png",
  competitorAnalytics: "ABS",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-126@2x.png",
  automatedEmailRepo: "Vermoeidheidsherkenning",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-127@2x.png",
  roiAnalyticsAndTr: "8 inch multimediascherm",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  correlationAnalysis: "USB aansluiting",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  trendDetection1: "Android Auto (voorbereiding) / Apple carplay",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  trendDetection2: "Airconditioning (manueel)",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  trendDetection3: "8 inch multimediascherm met navigatie",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-123@2x.png",
  trendDetection4: "Achteruitrijcamera met dynamische hulplijnen",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-124@2x.png",
  trendDetection5: "Snelheidsbordenherkenning (ISLW)",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-125@2x.png",
  trendDetection6: "Airconditioning (volautomatisch)",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-126@2x.png",
  trendDetection7: "Parkeersensoren achter",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-127@2x.png",
  trendDetection8: "3D afwerking interieurdelen",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  trendDetection9: "16-inch lichtmetalen velgen",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  trendDetection10: "Verwarmde stoelen voor",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  trendDetection11: "Draadloos telefoon opladen",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  trendDetection12: "Verwarmd stuurwiel",
  titel1: "i-Drive",
  spanText3: "Comfort",
  spanText4: "vanaf €275 p/m",
  titel2: "N line",
  prijzentabelI10Comfort: "Prijzentabel i10 Comfort",
  billMontly2: "Aantal maanden",
  titel3: "Aantal km",
  titel4: "Maandbedrag",
  line2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/line-2-1.png",
  bekijkDePrivacy: "Bekijk de Privacy & voorwaarden van deze actie.",
  xButton1Props: xButton1Data,
  xLabelProps: xLabel1Data,
  voordeel21Props: voordeel21Data,
  voordeel22Props: voordeel22Data,
  voordeel23Props: voordeel23Data,
  voordeel24Props: voordeel24Data,
  onderdelen1Props: onderdelen1Data,
  onderdelen2Props: onderdelen21Data,
  comfortSmart1Props: comfortSmart1Data,
  comfortSmart2Props: comfortSmart2Data,
  onderdelen2Props2: onderdelen3Data,
  xButton2Props: xButton2Data,
  frame9Props: frame91Data,
  onderdelen31Props: onderdelen32Data,
  onderdelen32Props: onderdelen33Data,
  xButton3Props: xButton3Data
};
const keurmerk2Data = {
  className: "keurmerk-1"
};
const xLabel2Data = {
  nieuw: "NIEUW"
};
const xButton22Data = {
  vraagOfferteAan: "Vraag offerte aan",
  arrow: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-4@2x.png"
};
const voordeel11Data = {
  iconsLease: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/icons-lease-1@2x.png",
  rijdenInEenNieuweHyundai: "Rijden in een<br />nieuwe Hyundai"
};
const voordeel12Data = {
  iconsLease: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/icons-lease-2@2x.png",
  rijdenInEenNieuweHyundai: "Aantrekkelijk vast bedrag p/m",
  className: "voordeel-2-2"
};
const voordeel13Data = {
  iconsLease: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/icons-lease-3@2x.png",
  rijdenInEenNieuweHyundai: "Inc. verzekering en reparatie",
  className: "voordeel-2-3"
};
const voordeel14Data = {
  iconsLease: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/icons-lease@2x.png",
  rijdenInEenNieuweHyundai: "Schadeherstel en onderhoud",
  className: "voordeel-2-4"
};
const voordeel15Data = {
  iconsLease: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/icons-lease-4@2x.png",
  rijdenInEenNieuweHyundai: "Geen verborgen kosten",
  className: "voordeel-2"
};
const xButton4Data = {
  arrowButton: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/color-white--type-button@2x.png"
};
const frame94Data = {
  profileGroups: "60 maanden",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-110@2x.png",
  accountViwers: "60 maanden",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-111@2x.png",
  socialMediaDashboa: "48 maanden",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-112@2x.png",
  shopifyDashboard: "48 maanden",
  className: "frame-9-2"
};
const xButton5Data = {
  arrowButton: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/color-white--type-button@2x.png",
  className: "button-3"
};
const campagneHyundaiMobielData = {
  deVernieuwdeHyundaiI10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/de-vernieuwde-hyundai-i10.jpg",
  maakEenGrootsStatement: "Maak een groots statement",
  profiteerNuVanEen: "Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort.<br />Je stapt al in vanaf €275 per maand*",
  grootBeeldSlider: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/auto-beeld@2x.png",
  privateLeaseNuTij: "Private Lease nu tijdelijk<br />vanaf €275 p/m*",
  hetMaandbedragVa: "* Het maandbedrag van €275 geldt op basis van een looptijd van 72 maanden en 5.000 km per jaar bij de i10 Comfort!",
  arrow1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-5@2x.png",
  arrow2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-6@2x.png",
  ontdekMeer: "ONTDEK MEER",
  hyundaiI101: "Hyundai i10",
  allInclusiveGeniet: "All-inclusive genieten met Hyundai Private Lease",
  vastMaandbedragInc: "<ul>" + "<li>Vast maandbedrag inclusief alle kosten, behalve brandstof</li>" + "<li>Nieuwe auto met inbegrepen rente en afschrijving</li>" + "<li>Pechhulp in binnenland en Europa</li>" + "<li>Motorrijtuigenbelasting inbegrepen</li>" + "<li>Bandenvervanging, schadeherstel en glasreparatie gedekt</li>" + "<li>Afleveringskosten en verwijderingsbijdrage inclusief</li>" + "<li>Onderhoud inbegrepen</li>" + "<li>Volle tank brandstof bij aflevering</li>" + "</ul>",
  vrouwBlijAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/vrouw-blij-auto@2x.png",
  hyundaiI102: "Hyundai i10",
  eenFrisseKijkOpEenGedurfdOntwerp: "Een frisse kijk op een gedurfd ontwerp",
  handMobiel: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/hand-mobiel@2x.png",
  binnenAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/binnen-auto@2x.png",
  dashboardAuto: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  binnenAuto2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  uitvoeringenEnHunFunctionaliteiten: "Uitvoeringen en hun functionaliteiten",
  titel1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/rectangle@2x.png",
  billMontly1: "Functionaliteiten",
  onderdelen: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/rectangle-1.png",
  frame9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/frame-9.png",
  base1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base@2x.png",
  titel2: "i-Drive",
  base2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-1.png",
  tabelIcons1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators@2x.png",
  tabelIcons2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-1@2x.png",
  tabelIcons3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-2@2x.png",
  tabelIcons4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-3@2x.png",
  tabelIcons5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-4@2x.png",
  tabelIcons6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-5@2x.png",
  tabelIcons7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-6@2x.png",
  tabelIcons8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-7@2x.png",
  tabelIcons9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-8@2x.png",
  tabelIcons10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-9@2x.png",
  tabelIcons11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-10@2x.png",
  tabelIcons12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-11@2x.png",
  tabelIcons13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-12@2x.png",
  tabelIcons14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-13@2x.png",
  tabelIcons15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-14@2x.png",
  tabelIcons16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-15@2x.png",
  tabelIcons17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-3@2x.png",
  tabelIcons18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-4@2x.png",
  tabelIcons19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-18@2x.png",
  tabelIcons20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-6@2x.png",
  tabelIcons21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-20@2x.png",
  tabelIcons22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-21@2x.png",
  tabelIcons23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  base3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  spanText1: "Comfort",
  spanText2: "vanaf €275 p/m",
  base4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-3.png",
  tabelIcons24: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators23: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons25: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators24: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons26: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators25: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons27: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators26: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons28: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators27: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons29: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators28: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons30: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators29: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons31: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators30: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons32: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators31: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons33: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators32: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons34: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators33: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons35: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators34: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons36: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators35: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons37: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators36: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons38: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators37: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons39: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators38: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons40: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators39: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons41: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators40: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons42: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators41: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons43: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators42: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons44: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators43: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons45: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators44: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons46: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  base5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  titel3: "Comfort Smart",
  base6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-3.png",
  tabelIcons47: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators45: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons48: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators46: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons49: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators47: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons50: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators48: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons51: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators49: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons52: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators50: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons53: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators51: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons54: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators52: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons55: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators53: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons56: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators54: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons57: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators55: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons58: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators56: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons59: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators57: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons60: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators58: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons61: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators59: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons62: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators60: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons63: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators61: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons64: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators62: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons65: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators63: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons66: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators64: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons67: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators65: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons68: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators66: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons69: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  base7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  titel4: "Premium",
  base8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-3.png",
  tabelIcons70: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators67: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons71: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators68: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons72: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators69: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons73: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators70: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons74: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators71: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons75: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators72: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons76: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators73: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons77: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators74: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons78: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators75: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons79: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators76: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons80: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators77: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons81: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators78: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons82: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators79: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons83: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators80: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons84: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators81: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons85: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators82: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons86: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators83: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons87: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators84: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons88: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators85: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons89: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators86: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons90: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators87: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons91: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators88: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons92: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  base9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  titel5: "N line",
  base10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-3.png",
  tabelIcons93: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators89: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons94: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators90: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons95: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators91: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons96: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators92: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons97: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators93: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons98: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators94: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons99: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators95: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons100: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators96: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons101: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators97: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons102: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators98: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons103: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators99: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons104: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators100: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons105: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators101: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons106: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators102: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons107: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators103: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons108: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators104: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons109: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators105: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons110: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators106: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons111: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators107: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons112: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators108: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons113: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators109: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons114: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  separators110: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-2@2x.png",
  tabelIcons115: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  arrow3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-1@2x.png",
  arrow4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/arrow-2@2x.png",
  prijzentabelI10Comfort: "Prijzentabel i10 Comfort",
  titel6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/rectangle-2@2x.png",
  billMontly2: "Aantal maanden",
  overlapGroup: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/rectangle-3@2x.png",
  base11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-10@2x.png",
  titel7: "Aantal km",
  base12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/base-11@2x.png",
  profileGroups1: "10.000",
  separators111: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-113@2x.png",
  accountViwers1: "20.000",
  separators112: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-114@2x.png",
  socialMediaDashboa1: "10.000",
  separators113: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/separators-115@2x.png",
  shopifyDashboard1: "20.000",
  base13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  titel8: "Maandbedrag",
  base14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  profileGroups2: "€ 312,-",
  separators114: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  accountViwers2: "€ 358,11",
  separators115: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  socialMediaDashboa2: "€ 342,-",
  separators116: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/dashboard-auto@2x.png",
  shopifyDashboard2: "€ 385,04",
  line2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630ea3cc463853056e73b2d/img/line-2@2x.png",
  bekijkDePrivacy: "Bekijk de Privacy & voorwaarden van deze actie.",
  keurmerkProps: keurmerk2Data,
  xLabelProps: xLabel2Data,
  xButton2Props: xButton22Data,
  voordeel11Props: voordeel11Data,
  voordeel12Props: voordeel12Data,
  voordeel13Props: voordeel13Data,
  voordeel14Props: voordeel14Data,
  voordeel15Props: voordeel15Data,
  xButton1Props: xButton4Data,
  frame9Props: frame94Data,
  xButton2Props2: xButton5Data,
  profileGroups: "Actieve rijbaanassistentie (LKA)",
  separators1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  accountViwers: "Cruise Control met limiet",
  separators2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  socialMediaDashboa: "Noodremassistent (FCA) met voetgangerherkenning",
  separators3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  shopifyDashboard: "eCall (Emergency Call)",
  separators4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  mixedDragAndDrop: "Start/Stop systeem",
  separators5: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-123@2x.png",
  downloadablePdfRep: "Achterbank in delen neerklapbaar",
  separators6: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-124@2x.png",
  whiteLabelReports: "Zij- en gordijnairbags",
  separators7: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-125@2x.png",
  competitorAnalytics: "ABS",
  separators8: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-126@2x.png",
  automatedEmailRepo: "Vermoeidheidsherkenning",
  separators9: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-127@2x.png",
  roiAnalyticsAndTr: "8 inch multimediascherm",
  separators10: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  correlationAnalysis: "USB aansluiting",
  separators11: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  trendDetection1: "Android Auto (voorbereiding) / Apple carplay",
  separators12: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  trendDetection2: "Airconditioning (manueel)",
  separators13: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  trendDetection3: "8 inch multimediascherm met navigatie",
  separators14: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-123@2x.png",
  trendDetection4: "Achteruitrijcamera met dynamische hulplijnen",
  separators15: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-124@2x.png",
  trendDetection5: "Snelheidsbordenherkenning (ISLW)",
  separators16: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-125@2x.png",
  trendDetection6: "Airconditioning (volautomatisch)",
  separators17: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-126@2x.png",
  trendDetection7: "Parkeersensoren achter",
  separators18: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-127@2x.png",
  trendDetection8: "3D afwerking interieurdelen",
  separators19: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-119@2x.png",
  trendDetection9: "16-inch lichtmetalen velgen",
  separators20: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-120@2x.png",
  trendDetection10: "Verwarmde stoelen voor",
  separators21: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-121@2x.png",
  trendDetection11: "Draadloos telefoon opladen",
  separators22: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/separators-122@2x.png",
  trendDetection12: "Verwarmd stuurwiel"
};

// vragenvuur

// export const mobielVraag1Data = {
//     featuredimage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/featuredimage.png",
//     vraag1Van5: "Vraag 1 van 5",
//     hoeveelKmVerwacht: "Hoeveel km verwacht jij te rijden per jaar?",
//     x05000Km: "0-5000 km",
//     x500010000Km: "5000-10.000 km",
//     x1000020000Km: "10.000 - 20.000 km",
//     meerDan40000Km: "Meer dan 40.000 km",
//     weetIkNogNiet: "Weet ik nog niet",
//     spanText1: "Bekijk de ",
//     spanText2: "Privacy",
//     spanText3: " & ",
//     spanText4: "voorwaarden",
//     spanText5: " van deze actie.",
//     post4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/post-4-1.png",
//     frame11131Props: frame111321Data,
//     frame11132Props: frame111322Data,
//     group2Props: group21Data,
//     group1Props: group11Data,
// };

// export const mobielVraag2Data = {
//     featuredimage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/featuredimage.png",
//     address: "5 jaar",
//     spanText1: "Bekijk de ",
//     spanText2: "Privacy",
//     spanText3: " & ",
//     spanText4: "voorwaarden",
//     spanText5: " van deze actie.",
//     post4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/post-4-3.png",
//     frame1152Props: frame11523Data,
//     frame1081Props: frame1081Data,
//     frame1082Props: frame1082Data,
//     frame1083Props: frame1083Data,
//     frame1233Props: frame12333Data,
//     group2Props: group24Data,
//     group1Props: group16Data,
// };

// export const mobielVraag3Data = {
//     featuredimage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/featuredimage.png",
//     vraag3Van5: "Vraag 3 van 5",
//     spanText1: "Welk model heeft jouw voorkeur?<br />",
//     spanText2: "(meerdere antwoorden mogelijk)",
//     i10IDrive: "i10 i-Drive",
//     i10Comfort: "i10 Comfort",
//     i10ComfortSmart: "i10 Comfort Smart",
//     i10Premium: "i10 Premium",
//     i10NLine: "i10 N Line",
//     aanbieding: "Aanbieding!",
//     volgende: "Volgende",
//     rightarrow: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/rightarrow-1@2x.png",
//     spanText3: "Bekijk de ",
//     spanText4: "Privacy",
//     spanText5: " & ",
//     spanText6: "voorwaarden",
//     spanText7: " van deze actie.",
//     post4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/post-4-1.png",
//     frame1233Props: frame12334Data,
//     group2Props: group25Data,
//     group1Props: group17Data,
// };

// export const mobielVraag4Data = {
//     featuredimage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/featuredimage.png",
//     spanText1: "Ja",
//     spanText2: ", ik wil graag een proefrit maken",
//     spanText3: "Nee,",
//     spanText4: " ik hoef geen proefrit te maken",
//     spanText5: "Bekijk de ",
//     spanText6: "Privacy",
//     spanText7: " & ",
//     spanText8: "voorwaarden",
//     spanText9: " van deze actie.",
//     post4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/post-4-1.png",
//     frame1152Props: frame11522Data,
//     frame1233Props: frame12332Data,
//     group2Props: group23Data,
//     group1Props: group15Data,
// };

// export const mobielVraag5Data = {
//     featuredimage: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/featuredimage.png",
//     spanText1: "Bedankt!<br />",
//     spanText2: "Vul jouw gegevens in en ontvang gratis en vrijblijvend de berekening van jouw leasetarief,",
//     spanText3: " inclusief speciale aanbieding.",
//     ellipse3: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/ellipse-3@2x.png",
//     professional: "Meneer",
//     ellipse3Copy2: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/ellipse-3@2x.png",
//     retired: "Mevrouw",
//     line1: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/line-1@2x.png",
//     spanText4: "Vul je postcode in en ",
//     spanText5: "kies een dealer bij jou in de buurt:",
//     postcode: "Postcode",
//     kiesEenDealer: "Kies een dealer",
//     expand_More_Fill0_Wght400_Grad0_Ops: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/expand-more-fill0-wght400-grad0-opsz24-1@2x.png",
//     deGekozenDealerNe: "De gekozen dealer neemt telefonisch contact met je op voor het bespreken van je wensen voor de berekening.",
//     aanvraagAfronden: "Aanvraag afronden",
//     rightarrow: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6630e80d3963d74fbfb4822c/img/color-white--type-button@2x.png",
//     jouwGegevensWorden: "Jouw gegevens worden alleen gebruikt voor de berekening van jouw leasetarief en worden niet gedeeld met andere partijen. De berekening en uitgebrachte offertes zijn gratis en vrijblijvend, er zijn geen verplichtingen aan verbonden! De uitkomst van de berekening ontvang je telefonisch en/of per e-mail.",
//     spanText6: "Bekijk de ",
//     spanText7: "Privacy",
//     spanText8: " & ",
//     spanText9: "voorwaarden",
//     spanText10: " van deze actie.",
//     post4: "https://cdn.animaapp.com/projects/661e79bddf63ebb14c06d39b/releases/6638c9cbc088d48fd3060663/img/post-4-1.png",
//     frame12321Props: frame12321Data,
//     frame12322Props: frame12322Data,
//     frame12323Props: frame12323Data,
//     frame12324Props: frame12324Data,
//     group2Props: group22Data,
//     group1Props: group14Data,
// };
// CONCATENATED MODULE: ./src/router.js













vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
const routes = [{
  path: '/',
  redirect: {
    name: 'Home'
  }
}, {
  path: '/hyundai-sass-vue/',
  name: 'Home',
  component: CampagneHyundaiDesktopTest,
  props: {
    ...campagneHyundaiDesktopTestData
  }
}, {
  path: '/hyundai-sass-vue/campagne-hyundai-mobiel',
  component: CampagneHyundaiMobiel,
  props: {
    ...campagneHyundaiMobielData
  }
}, {
  path: '/hyundai-sass-vue/vraag1',
  component: desktopVraag1,
  name: 'vraag1'
}, {
  path: '/hyundai-sass-vue/vraag2',
  component: desktopVraag2,
  name: 'vraag2'
}, {
  path: '/hyundai-sass-vue/vraag3',
  component: desktopVraag3,
  name: 'vraag3'
}, {
  path: '/hyundai-sass-vue/vraag4',
  component: desktopVraag4,
  name: 'vraag4'
}, {
  path: '/hyundai-sass-vue/vraag5',
  component: desktopVraag5,
  name: 'vraag5'
}, {
  path: '/hyundai-sass-vue/formulier',
  component: formulier,
  name: 'formulier'
}, {
  path: '/hyundai-sass-vue/bedankt2',
  component: bedankt_img,
  name: 'bedankt2'
}, {
  path: '/hyundai-sass-vue/bedankt',
  component: bedankt,
  name: 'bedankt'
}, {
  path: '/hyundai-sass-vue/:queryParams(.*)',
  name: 'Result',
  component: CampagneHyundaiDesktopTest,
  props: true
}];
const router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
const handleRouting = () => {
  const isMobile = window.innerWidth < 768;
  const currentPath = router.currentRoute.path;
  const isOnVragenPage = currentPath.startsWith("/hyundai-sass-vue/desktopVragen") || currentPath === "/hyundai-sass-vue/";
  const isOnCampagnePage = currentPath.startsWith("/hyundai-sass-vue/campagne-hyundai-mobiel");
  if (isOnVragenPage) {
    if (isMobile) {
      if (currentPath !== "/hyundai-sass-vue/campagne-hyundai-mobiel") {
        router.replace("/hyundai-sass-vue/campagne-hyundai-mobiel");
      }
    } else {
      if (currentPath !== currentPath) {
        router.replace(currentPath);
      }
    }
  } else if (isOnCampagnePage) {
    if (isMobile) {
      if (currentPath !== "/hyundai-sass-vue/campagne-hyundai-mobiel") {
        router.replace("/hyundai-sass-vue/campagne-hyundai-mobiel");
      }
    } else {
      if (currentPath !== "/hyundai-sass-vue/") {
        router.replace("/hyundai-sass-vue/");
      }
    }
  }
};
const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
const debouncedHandleRouting = debounce(handleRouting, 200);
window.addEventListener("resize", debouncedHandleRouting);
document.addEventListener("DOMContentLoaded", handleRouting);
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./styleguide.sass
var styleguide = __webpack_require__("7259");

// EXTERNAL MODULE: ./globals.sass
var globals = __webpack_require__("6d84");

// CONCATENATED MODULE: ./src/main.js





vue_runtime_esm["a" /* default */].config.productionTip = false;
new vue_runtime_esm["a" /* default */]({
  render: h => h(App),
  router: src_router
}).$mount("#app");

/***/ }),

/***/ "5776":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "57b3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6b1f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6d84":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6f5c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "724d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen_vue_vue_type_style_index_0_id_208dab99_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa3d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen_vue_vue_type_style_index_0_id_208dab99_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Onderdelen_vue_vue_type_style_index_0_id_208dab99_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7259":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "79ba":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag1_vue_vue_type_style_index_0_id_1c4d7e0c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("94cc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag1_vue_vue_type_style_index_0_id_1c4d7e0c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag1_vue_vue_type_style_index_0_id_1c4d7e0c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7dc6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7f33":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dashboard-auto-1@2x.822c228d.png";

/***/ }),

/***/ "87a1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tabel-slider.808e83f0.svg";

/***/ }),

/***/ "9128":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel2_vue_vue_type_style_index_0_id_71221579_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfe9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel2_vue_vue_type_style_index_0_id_71221579_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Voordeel2_vue_vue_type_style_index_0_id_71221579_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "94cc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9910":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a6ce":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vragen-pijl-vorige.5347b5e4.svg";

/***/ }),

/***/ "a772":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag3_vue_vue_type_style_index_0_id_f8e8c6e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a79");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag3_vue_vue_type_style_index_0_id_f8e8c6e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag3_vue_vue_type_style_index_0_id_f8e8c6e2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ae83":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "af04":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keurmerk_vue_vue_type_style_index_0_id_d6553b08_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0347");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keurmerk_vue_vue_type_style_index_0_id_d6553b08_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keurmerk_vue_vue_type_style_index_0_id_d6553b08_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bac7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiDesktopTest_vue_vue_type_style_index_0_id_1e1cba10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6b1f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiDesktopTest_vue_vue_type_style_index_0_id_1e1cba10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampagneHyundaiDesktopTest_vue_vue_type_style_index_0_id_1e1cba10_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bdbf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_c9371a18_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("57b3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_c9371a18_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_XLabel_vue_vue_type_style_index_0_id_c9371a18_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c3e9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tabel-slider-terug.881aa15b.svg";

/***/ }),

/***/ "c4f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cbc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame12_vue_vue_type_style_index_0_id_2c880430_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9910");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame12_vue_vue_type_style_index_0_id_2c880430_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame12_vue_vue_type_style_index_0_id_2c880430_prod_lang_sass__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cf49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_8ec26f20_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("19d6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_8ec26f20_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bedankt_img_vue_vue_type_style_index_0_id_8ec26f20_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d09b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d72b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag4_vue_vue_type_style_index_0_id_e10e407e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d09b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag4_vue_vue_type_style_index_0_id_e10e407e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_desktopVraag4_vue_vue_type_style_index_0_id_e10e407e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dfe9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e6a5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e8b4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "eeff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hand-mobiel-1@2x.d46359a2.png";

/***/ }),

/***/ "ef0e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/binnen-auto-2.ffdec7b2.png";

/***/ }),

/***/ "f1fd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/overlay.fc88e900.png";

/***/ }),

/***/ "fa3d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.a749ec10.js.map