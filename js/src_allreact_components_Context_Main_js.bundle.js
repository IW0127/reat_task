"use strict";
(self["webpackChunkmy_webpack_project"] = self["webpackChunkmy_webpack_project"] || []).push([["src_allreact_components_Context_Main_js"],{

/***/ "./src/allreact/components/Context/Cart.js":
/*!*************************************************!*\
  !*** ./src/allreact/components/Context/Cart.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/allreact/components/Context/Context.js");
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct */ "./src/allreact/components/Context/SingleProduct.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





function Cart() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-between",
    id: "Product"
  }, cart.map(function (productsData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: productsData.id,
      productsData: productsData
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Cart);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/allreact/components/Context/Context.js":
/*!****************************************************!*\
  !*** ./src/allreact/components/Context/Context.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": function() { return /* binding */ Context; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var cartContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
var Context = cartContext.Provider;
/* harmony default export */ __webpack_exports__["default"] = (cartContext);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/allreact/components/Context/Header.js":
/*!***************************************************!*\
  !*** ./src/allreact/components/Context/Header.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/allreact/components/Context/Context.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





function Header() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav justify-content-center border-bottom sticky-top  bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link active",
    "aria-current": "page",
    to: "/context"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    className: "nav-link",
    to: "/context/cart"
  }, "Cart(", cart.length, ")"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/allreact/components/Context/Home.js":
/*!*************************************************!*\
  !*** ./src/allreact/components/Context/Home.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProduct */ "./src/allreact/components/Context/SingleProduct.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




faker__WEBPACK_IMPORTED_MODULE_1___default().seed(123);

function Home() {
  var productsArray = _toConsumableArray(Array(20)).map(function () {
    return {
      id: faker__WEBPACK_IMPORTED_MODULE_1___default().datatype.uuid(),
      name: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.productName(),
      price: faker__WEBPACK_IMPORTED_MODULE_1___default().commerce.price(),
      img: faker__WEBPACK_IMPORTED_MODULE_1___default().random.image()
    };
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(productsArray),
      _useState2 = _slicedToArray(_useState, 1),
      products = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row justify-content-between",
    id: "Product"
  }, products.map(function (productsData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: productsData.id,
      productsData: productsData
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/allreact/components/Context/Main.js":
/*!*************************************************!*\
  !*** ./src/allreact/components/Context/Main.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/allreact/components/Context/Context.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/allreact/components/Context/Header.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/allreact/components/Context/Home.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./src/allreact/components/Context/Cart.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Main() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cart = _useState2[0],
      setCart = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Context__WEBPACK_IMPORTED_MODULE_1__.Context, {
    value: {
      cart: cart,
      setCart: setCart
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/cart",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Cart__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/allreact/components/Context/SingleProduct.js":
/*!**********************************************************!*\
  !*** ./src/allreact/components/Context/SingleProduct.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./src/allreact/components/Context/Context.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var SingleProduct = function SingleProduct(props) {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart,
      setCart = _useContext.setCart;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card col-3 m-2",
    style: {
      width: "18rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: props.productsData.img,
    className: "card-img-top",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {
    className: "card-title"
  }, " ", props.productsData.name, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-text"
  }, "Price : \u20B9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, props.productsData.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), cart.includes(props.productsData) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-danger Price",
    onClick: function onClick() {
      return setCart(cart.filter(function (c) {
        return c.id !== props.productsData.id;
      }));
    }
  }, "remove") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-primary Price",
    onClick: function onClick() {
      setCart([].concat(_toConsumableArray(cart), [props.productsData]));
    }
  }, "Buy")));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX2FsbHJlYWN0X2NvbXBvbmVudHNfQ29udGV4dF9NYWluX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ksSUFBVCxHQUFnQjtFQUNkLGtCQUFpQkgsaURBQVUsQ0FBQ0MsZ0RBQUQsQ0FBM0I7RUFBQSxJQUFRRyxJQUFSLGVBQVFBLElBQVI7O0VBQ0Esb0JBQ0U7SUFBSyxTQUFTLEVBQUMsNkJBQWY7SUFBNkMsRUFBRSxFQUFDO0VBQWhELEdBQ0dBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLFlBQUQ7SUFBQSxvQkFDUiwyREFBQyxzREFBRDtNQUFlLEdBQUcsRUFBRUEsWUFBWSxDQUFDQyxFQUFqQztNQUFxQyxZQUFZLEVBQUVEO0lBQW5ELEVBRFE7RUFBQSxDQUFULENBREgsQ0FERjtBQU9EOztBQUVELCtEQUFlSCxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBLElBQU1GLFdBQVcsZ0JBQUdPLG9EQUFhLEVBQWpDO0FBRU8sSUFBTUMsT0FBTyxHQUFHUixXQUFXLENBQUNTLFFBQTVCO0FBRVAsK0RBQWVULFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUNBLFNBQVNXLE1BQVQsR0FBa0I7RUFDaEIsa0JBQWlCWixpREFBVSxDQUFDQyxnREFBRCxDQUEzQjtFQUFBLElBQVFHLElBQVIsZUFBUUEsSUFBUjs7RUFDQSxvQkFDRSx1SUFDRTtJQUFJLFNBQVMsRUFBQztFQUFkLGdCQUNFO0lBQUksU0FBUyxFQUFDO0VBQWQsZ0JBQ0UsMkRBQUMsa0RBQUQ7SUFBTSxTQUFTLEVBQUMsaUJBQWhCO0lBQWtDLGdCQUFhLE1BQS9DO0lBQXNELEVBQUUsRUFBQztFQUF6RCxVQURGLENBREYsZUFNRTtJQUFJLFNBQVMsRUFBQztFQUFkLGdCQUNFLDJEQUFDLGtEQUFEO0lBQU0sU0FBUyxFQUFDLFVBQWhCO0lBQTJCLEVBQUUsRUFBQztFQUE5QixZQUNRQSxJQUFJLENBQUNTLE1BRGIsTUFERixDQU5GLENBREYsQ0FERjtBQWdCRDs7QUFFRCwrREFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBRUFHLGlEQUFBLENBQVcsR0FBWDs7QUFFQSxTQUFTRSxJQUFULEdBQWdCO0VBQ2QsSUFBTUMsYUFBYSxHQUFHLG1CQUFJQyxLQUFLLENBQUMsRUFBRCxDQUFULEVBQWVkLEdBQWYsQ0FBbUI7SUFBQSxPQUFPO01BQzlDRSxFQUFFLEVBQUVRLDBEQUFBLEVBRDBDO01BRTlDTyxJQUFJLEVBQUVQLGlFQUFBLEVBRndDO01BRzlDVSxLQUFLLEVBQUVWLDJEQUFBLEVBSHVDO01BSTlDVyxHQUFHLEVBQUVYLHlEQUFBO0lBSnlDLENBQVA7RUFBQSxDQUFuQixDQUF0Qjs7RUFPQSxnQkFBbUJELCtDQUFRLENBQUNJLGFBQUQsQ0FBM0I7RUFBQTtFQUFBLElBQU9XLFFBQVA7O0VBRUEsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsNkJBQWY7SUFBNkMsRUFBRSxFQUFDO0VBQWhELEdBQ0dBLFFBQVEsQ0FBQ3hCLEdBQVQsQ0FBYSxVQUFDQyxZQUFEO0lBQUEsb0JBQ1osMkRBQUMsc0RBQUQ7TUFBZSxHQUFHLEVBQUVBLFlBQVksQ0FBQ0MsRUFBakM7TUFBcUMsWUFBWSxFQUFFRDtJQUFuRCxFQURZO0VBQUEsQ0FBYixDQURILENBREY7QUFPRDs7QUFFRCwrREFBZVcsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNlLElBQVQsR0FBZ0I7RUFDZCxnQkFBd0JsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQTtFQUFBLElBQU9WLElBQVA7RUFBQSxJQUFhNkIsT0FBYjs7RUFDQSxvQkFDRSwyREFBQyw2Q0FBRDtJQUFTLEtBQUssRUFBRTtNQUFFN0IsSUFBSSxFQUFKQSxJQUFGO01BQVE2QixPQUFPLEVBQVBBO0lBQVI7RUFBaEIsZ0JBQ0UsMkRBQUMsK0NBQUQsT0FERixlQUVFLHFGQUNFLDJEQUFDLG9EQUFELHFCQUNFLDJEQUFDLG1EQUFEO0lBQU8sSUFBSSxFQUFDLEdBQVo7SUFBZ0IsT0FBTyxlQUFFLDJEQUFDLDZDQUFEO0VBQXpCLEVBREYsZUFFRSwyREFBQyxtREFBRDtJQUFPLElBQUksRUFBQyxPQUFaO0lBQW9CLE9BQU8sZUFBRSwyREFBQyw2Q0FBRDtFQUE3QixFQUZGLENBREYsQ0FGRixDQURGO0FBV0Q7O0FBRUQsK0RBQWVELElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFDQSxJQUFNOUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDZ0MsS0FBRCxFQUFXO0VBQy9CLGtCQUEwQmxDLGlEQUFVLENBQUNDLGdEQUFELENBQXBDO0VBQUEsSUFBUUcsSUFBUixlQUFRQSxJQUFSO0VBQUEsSUFBYzZCLE9BQWQsZUFBY0EsT0FBZDs7RUFDQSxvQkFDRTtJQUFLLFNBQVMsRUFBQyxnQkFBZjtJQUFnQyxLQUFLLEVBQUU7TUFBRUUsS0FBSyxFQUFFO0lBQVQ7RUFBdkMsZ0JBQ0U7SUFBSyxHQUFHLEVBQUVELEtBQUssQ0FBQzVCLFlBQU4sQ0FBbUJvQixHQUE3QjtJQUFrQyxTQUFTLEVBQUMsY0FBNUM7SUFBMkQsR0FBRyxFQUFDO0VBQS9ELEVBREYsZUFFRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFO0lBQUksU0FBUyxFQUFDO0VBQWQsUUFBNkJRLEtBQUssQ0FBQzVCLFlBQU4sQ0FBbUJnQixJQUFoRCxNQURGLGVBRUU7SUFBSyxTQUFTLEVBQUM7RUFBZixrQ0FDVyx5RUFBT1ksS0FBSyxDQUFDNUIsWUFBTixDQUFtQm1CLEtBQTFCLENBRFgsQ0FGRixlQUtFLHNFQUxGLEVBTUdyQixJQUFJLENBQUNnQyxRQUFMLENBQWNGLEtBQUssQ0FBQzVCLFlBQXBCLGlCQUNDO0lBQ0UsU0FBUyxFQUFDLHNCQURaO0lBRUUsT0FBTyxFQUFFO01BQUEsT0FDUDJCLE9BQU8sQ0FBQzdCLElBQUksQ0FBQ2lDLE1BQUwsQ0FBWSxVQUFDQyxDQUFEO1FBQUEsT0FBT0EsQ0FBQyxDQUFDL0IsRUFBRixLQUFTMkIsS0FBSyxDQUFDNUIsWUFBTixDQUFtQkMsRUFBbkM7TUFBQSxDQUFaLENBQUQsQ0FEQTtJQUFBO0VBRlgsWUFERCxnQkFVQztJQUNFLFNBQVMsRUFBQyx1QkFEWjtJQUVFLE9BQU8sRUFBRSxtQkFBTTtNQUNiMEIsT0FBTyw4QkFBSzdCLElBQUwsSUFBVzhCLEtBQUssQ0FBQzVCLFlBQWpCLEdBQVA7SUFDRDtFQUpILFNBaEJKLENBRkYsQ0FERjtBQStCRCxDQWpDRDs7QUFtQ0EsK0RBQWVKLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWxscmVhY3QvY29tcG9uZW50cy9Db250ZXh0L0NhcnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FsbHJlYWN0L2NvbXBvbmVudHMvQ29udGV4dC9Db250ZXh0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hbGxyZWFjdC9jb21wb25lbnRzL0NvbnRleHQvSGVhZGVyLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hbGxyZWFjdC9jb21wb25lbnRzL0NvbnRleHQvSG9tZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYWxscmVhY3QvY29tcG9uZW50cy9Db250ZXh0L01haW4uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2FsbHJlYWN0L2NvbXBvbmVudHMvQ29udGV4dC9TaW5nbGVQcm9kdWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJ0Q29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KGNhcnRDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBpZD1cIlByb2R1Y3RcIj5cclxuICAgICAge2NhcnQubWFwKChwcm9kdWN0c0RhdGEpID0+IChcclxuICAgICAgICA8U2luZ2xlUHJvZHVjdCBrZXk9e3Byb2R1Y3RzRGF0YS5pZH0gcHJvZHVjdHNEYXRhPXtwcm9kdWN0c0RhdGF9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgY2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNhcnRDb250ZXh0LlByb3ZpZGVyO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydENvbnRleHQ7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgY2FydENvbnRleHQgZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KGNhcnRDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJvcmRlci1ib3R0b20gc3RpY2t5LXRvcCAgYmctbGlnaHRcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiB0bz1cIi9jb250ZXh0XCI+XHJcbiAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9jb250ZXh0L2NhcnRcIj5cclxuICAgICAgICAgICAgQ2FydCh7Y2FydC5sZW5ndGh9KVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gXCIuL1NpbmdsZVByb2R1Y3RcIjtcclxuXHJcbmZha2VyLnNlZWQoMTIzKTtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgcHJvZHVjdHNBcnJheSA9IFsuLi5BcnJheSgyMCldLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IGZha2VyLmRhdGF0eXBlLnV1aWQoKSxcclxuICAgIG5hbWU6IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCksXHJcbiAgICBwcmljZTogZmFrZXIuY29tbWVyY2UucHJpY2UoKSxcclxuICAgIGltZzogZmFrZXIucmFuZG9tLmltYWdlKCksXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBbcHJvZHVjdHNdID0gdXNlU3RhdGUocHJvZHVjdHNBcnJheSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIGlkPVwiUHJvZHVjdFwiPlxyXG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0c0RhdGEpID0+IChcclxuICAgICAgICA8U2luZ2xlUHJvZHVjdCBrZXk9e3Byb2R1Y3RzRGF0YS5pZH0gcHJvZHVjdHNEYXRhPXtwcm9kdWN0c0RhdGF9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuL0NhcnRcIjtcclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0IHZhbHVlPXt7IGNhcnQsIHNldENhcnQgfX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jYXJ0XCIgZWxlbWVudD17PENhcnQgLz59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250ZXh0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjYXJ0Q29udGV4dCBmcm9tIFwiLi9Db250ZXh0XCI7XHJcbmNvbnN0IFNpbmdsZVByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNhcnQsIHNldENhcnQgfSA9IHVzZUNvbnRleHQoY2FydENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTMgbS0yXCIgc3R5bGU9e3sgd2lkdGg6IFwiMThyZW1cIiB9fT5cclxuICAgICAgPGltZyBzcmM9e3Byb3BzLnByb2R1Y3RzRGF0YS5pbWd9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj4ge3Byb3BzLnByb2R1Y3RzRGF0YS5uYW1lfSA8L2g1PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICBQcmljZSA6IOKCuTxzcGFuPntwcm9wcy5wcm9kdWN0c0RhdGEucHJpY2V9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtjYXJ0LmluY2x1ZGVzKHByb3BzLnByb2R1Y3RzRGF0YSkgPyAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIFByaWNlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICBzZXRDYXJ0KGNhcnQuZmlsdGVyKChjKSA9PiBjLmlkICE9PSBwcm9wcy5wcm9kdWN0c0RhdGEuaWQpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHJlbW92ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IFByaWNlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENhcnQoWy4uLmNhcnQsIHByb3BzLnByb2R1Y3RzRGF0YV0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCdXlcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJjYXJ0Q29udGV4dCIsIlNpbmdsZVByb2R1Y3QiLCJDYXJ0IiwiY2FydCIsIm1hcCIsInByb2R1Y3RzRGF0YSIsImlkIiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJQcm92aWRlciIsIkxpbmsiLCJIZWFkZXIiLCJsZW5ndGgiLCJ1c2VTdGF0ZSIsImZha2VyIiwic2VlZCIsIkhvbWUiLCJwcm9kdWN0c0FycmF5IiwiQXJyYXkiLCJkYXRhdHlwZSIsInV1aWQiLCJuYW1lIiwiY29tbWVyY2UiLCJwcm9kdWN0TmFtZSIsInByaWNlIiwiaW1nIiwicmFuZG9tIiwiaW1hZ2UiLCJwcm9kdWN0cyIsIlJvdXRlcyIsIlJvdXRlIiwiTWFpbiIsInNldENhcnQiLCJwcm9wcyIsIndpZHRoIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJjIl0sInNvdXJjZVJvb3QiOiIifQ==