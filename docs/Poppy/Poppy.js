(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(4);

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    if (i % 2) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i]));
    }
  }

  return target;
}

module.exports = _objectSpread2;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Poppy", function() { return Poppy; });
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var defaultOptions = Object.freeze({
  title: {
    text: "",
    avatar: "",
    color: "#444"
  },
  content: "",
  cta: {
    text: "",
    url: "",
    color: "#222",
    newtab: false
  },
  coverImage: "",
  position: "bottomRight",
  delay: 0
});
var Poppy =
/*#__PURE__*/
function () {
  function Poppy(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Poppy);

    this.state = _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultOptions, {}, options, {
      title: _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultOptions.title, {}, options.title),
      cta: _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultOptions.cta, {}, options.cta)
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Poppy, [{
    key: "show",
    value: function show() {
      var _this = this;

      var createContainer = function createContainer(position) {
        var container = document.createElement("div");
        container.style.maxWidth = "300px";
        container.style.width = "100%";
        container.style.margin = "10px";
        container.style.borderRadius = "5px";
        container.style.overflow = "hidden";
        container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
        container.style.position = "fixed";
        container.style.backgroundColor = "#FFF";
        container.style.fontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

        if (position === "topLeft") {
          container.style.top = "0";
          container.style.left = "0";
        } else if (position === "topRight") {
          container.style.top = "0";
          container.style.right = "0";
        } else if (position === "bottomLeft") {
          container.style.bottom = "0";
          container.style.left = "0";
        } else if (position === "bottomRight") {
          container.style.bottom = "0";
          container.style.right = "0";
        }

        return container;
      };

      var createPopup = function createPopup(options) {
        var title = createTitle(options.title);
        var image = createCoverImage(options.coverImage);
        var content = createContent(options.content);
        var cta = createCTA(options.cta);
        var components = [title, image, content, cta].filter(function (component) {
          return !!component;
        });
        var fragment = createFragmentContainer();
        components.forEach(function (component) {
          return fragment.appendChild(component);
        });
        return fragment;
      };

      var createTitle = function createTitle(title) {
        if (!title.text) return null;
        var titleContainer = document.createElement("div");
        titleContainer.style.background = title.color;
        titleContainer.style.color = "#FFF";
        titleContainer.style.padding = "15px 10px";
        titleContainer.style.fontWeight = "500";
        titleContainer.style.display = "grid";
        titleContainer.style.gridTemplateColumns = "1fr 24px";
        titleContainer.style.alignItems = "center";
        var textContainer = document.createElement("span");
        textContainer.style.display = "flex";
        textContainer.style.alignItems = "center";

        if (title.avatar) {
          var avatarContainer = document.createElement("img");
          avatarContainer.style.width = "25px";
          avatarContainer.style.height = "25px";
          avatarContainer.style.borderRadius = "5px";
          avatarContainer.style.objectFit = "cover";
          avatarContainer.style.marginRight = "5px";
          avatarContainer.src = title.avatar;
          textContainer.appendChild(avatarContainer);
        }

        textContainer.innerHTML += title.text;
        titleContainer.appendChild(textContainer);
        titleContainer.appendChild(createCloseIcon());
        return titleContainer;
      };

      var createContent = function createContent(content) {
        if (!content) return null;
        var contentContainer = document.createElement("div");
        contentContainer.style.padding = "10px";
        contentContainer.style.lineHeight = "1.5rem";
        contentContainer.innerHTML = content;
        return contentContainer;
      };

      var createCoverImage = function createCoverImage(image) {
        if (!image) return null;
        var imageContainer = document.createElement("img");
        imageContainer.style.width = "100%";
        imageContainer.style.maxHeight = "150px";
        imageContainer.style.objectFit = "cover";
        imageContainer.src = image;

        imageContainer.onerror = function () {
          imageContainer.style.display = "none";
          console.warn("Poppy: Cover image cannot be found.");
        };

        return imageContainer;
      };

      var createCTA = function createCTA(cta) {
        if (!cta || !cta.text || !cta.url) return null;
        var contentContainer = document.createElement("a");
        contentContainer.style.margin = "10px";
        contentContainer.style.padding = "10px";
        contentContainer.style.lineHeight = "1.5rem";
        contentContainer.style.background = cta.color;
        contentContainer.style.color = "#FFF";
        contentContainer.style.textAlign = "center";
        contentContainer.style.textDecoration = "none";
        contentContainer.style.cursor = "pointer";
        contentContainer.style.display = "block";
        contentContainer.style.borderRadius = "5px";
        contentContainer.innerText = cta.text;
        contentContainer.href = cta.url;

        if (cta.newtab) {
          contentContainer.target = "_blank";
          contentContainer.rel = "noopener noreferrer";
        }

        return contentContainer;
      };

      var createCloseIcon = function createCloseIcon() {
        // Close Icon
        var closeIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x-square\">\n          <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>\n          <line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>\n          <line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>\n        </svg>";
        var closeIconContainer = document.createElement("span");
        closeIconContainer.style.cursor = "pointer";
        closeIconContainer.innerHTML = closeIcon;
        closeIconContainer.addEventListener("click", function () {
          if (_this.element) {
            _this.element.parentNode.removeChild(_this.element);
          }
        }); // OnClick Handler

        return closeIconContainer;
      };

      var createFragmentContainer = function createFragmentContainer() {
        return document.createDocumentFragment();
      }; // Displaying poppy


      var popup = createPopup(this.state);
      this.element = createContainer(this.state.position);
      this.element.appendChild(popup);
      setTimeout(function () {
        document.body.appendChild(_this.element);
      }, this.state.delay);
    }
  }]);

  return Poppy;
}();
/* harmony default export */ __webpack_exports__["default"] = (Poppy);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ })
/******/ ]);
});