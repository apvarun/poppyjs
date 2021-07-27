(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Poppy": () => (/* binding */ Poppy),
  "default": () => (/* binding */ src_Poppy)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
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
;// CONCATENATED MODULE: ./src/Poppy.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    newtab: false,
    onclick: function onclick() {}
  },
  coverImage: "",
  position: "bottomRight",
  delay: 0,
  closeAfter: null
});
var Poppy = /*#__PURE__*/function () {
  function Poppy(options) {
    _classCallCheck(this, Poppy);

    this.state = _objectSpread(_objectSpread(_objectSpread({}, defaultOptions), options), {}, {
      title: _objectSpread(_objectSpread({}, defaultOptions.title), options.title),
      cta: _objectSpread(_objectSpread({}, defaultOptions.cta), options.cta)
    });
    this.element = null;
  }

  _createClass(Poppy, [{
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
        var imageContainer = document.createElement("div");
        imageContainer.style.width = "100%";
        imageContainer.style.paddingTop = "150px";
        imageContainer.style.backgroundSize = "cover";
        imageContainer.style.backgroundPosition = "center";
        imageContainer.style.backgroundImage = "url(".concat(image, ")");

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

        contentContainer.addEventListener("click", cta.onclick);
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

        if (_this.state.closeAfter) {
          if (typeof _this.state.closeAfter !== "number") {
            console.warn("`closeAfter` should be an interger(in seconds)");
            return;
          }

          setTimeout(function () {
            _this.close();
          }, _this.state.closeAfter);
        }
      }, this.state.delay);
    }
  }, {
    key: "close",
    value: function close() {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    }
  }]);

  return Poppy;
}();
/* harmony default export */ const src_Poppy = (Poppy);
/******/ 	return __webpack_exports__;
/******/ })()
;
});