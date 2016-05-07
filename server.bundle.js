/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	// import some new stuff


	console.log('routes', _routes2.default);
	// we'll use this to render our app to an html string


	var express = __webpack_require__(13);
	var path = __webpack_require__(14);
	var compression = __webpack_require__(15);
	var app = express();
	app.use(compression());

	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'dist')));

	// send all requests to index.html so browserHistory in React Router works
	// app.get('*', function (req, res) {
	//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
	// })

	app.get('*', function (req, res) {
	    // match the routes to the url
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	        if (err) {
	            console.log("MASSIVE ERRR");

	            res.status(500).send(error.message);
	        } else if (redirectLocation) {
	            console.log("MASSIVE REDIRECT!!");
	            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	        } else if (renderProps) {
	            console.log("MASSIVE RENDERPROPS@@!!");
	            // You can also check renderProps.components or renderProps.routes for
	            // your "not found" component or route respectively, and send a 404 as
	            // below, if you're using a catch-all route.
	            res.status(200).send(renderPage((0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps))));
	        } else {
	            res.status(404).send('Not found');
	        }

	        // console.log("REEDIRECT", redirect);
	        // console.log('PROOOOPS', props);
	        //
	        //
	        // // `RouterContext` is the what `Router` renders. `Router` keeps these
	        // // `props` in its state as it listens to `browserHistory`. But on the
	        // // server our app is stateless, so we need to use `match` to
	        // // get these props before rendering.
	        // const appHtml = renderToString(<RouterContext {...props}/>);
	        //
	        // // dump the HTML into a template, lots of ways to do this, but none are
	        // // really influenced by React Router, so we're just using a little
	        // // function, `renderPage`
	        // res.send(renderPage(appHtml));
	    });
	});

	function renderPage(appHtml) {
	    return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <div id=root>' + appHtml + '</div>\n    <script src=/static/bundle.js></script>\n    <link href=https://fonts.googleapis.com/css?family=Open+Sans:300 rel=stylesheet type=text/css />\n    <link href=https://fonts.googleapis.com/css?family=Abril+Fatface rel=stylesheet type=text/css />\n    \n    \n   ';
	}

	// <!doctype html>
	// <html>
	// <head>
	//     <title>Sample App</title>
	// </head>
	// <body>
	// <div id='root'>
	// </div>
	// <script src="/static/bundle.js"></script>
	// <link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css' />
	// <link href='https://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css' />
	// </body>
	// </html>

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	    console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _about = __webpack_require__(9);

	var _about2 = _interopRequireDefault(_about);

	var _pilot = __webpack_require__(10);

	var _pilot2 = _interopRequireDefault(_pilot);

	var _exhibition = __webpack_require__(11);

	var _exhibition2 = _interopRequireDefault(_exhibition);

	var _home = __webpack_require__(12);

	var _home2 = _interopRequireDefault(_home);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: '/', component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _about2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/pilot', component: _pilot2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/exhibition', component: _exhibition2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(6);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_header2.default, null),
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _navigation = __webpack_require__(7);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'header' },
	                _react2.default.createElement(
	                    _reactRouter.IndexLink,
	                    { to: '/', className: 'logo' },
	                    _react2.default.createElement(
	                        'h1',
	                        { className: 'logo' },
	                        'bnb',
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'fat-face' },
	                            'OPEN'
	                        )
	                    )
	                ),
	                _react2.default.createElement(_navigation2.default, null)
	            );
	        }
	    }]);

	    return Header;
	}(_react2.default.Component);

	exports.default = Header;


	Header.propTypes = {};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _navLink = __webpack_require__(8);

	var _navLink2 = _interopRequireDefault(_navLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navigation = function (_React$Component) {
	    _inherits(Navigation, _React$Component);

	    function Navigation(props) {
	        _classCallCheck(this, Navigation);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navigation).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Navigation, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'ul',
	                { className: 'Navigation' },
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        _navLink2.default,
	                        { to: '/about' },
	                        'Om Oss'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        _navLink2.default,
	                        { to: '/pilot' },
	                        'Piloten'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    null,
	                    _react2.default.createElement(
	                        _navLink2.default,
	                        { to: '/exhibition' },
	                        'Utstilling'
	                    )
	                )
	            );
	        }
	    }]);

	    return Navigation;
	}(_react2.default.Component);

	exports.default = Navigation;


	Navigation.propTypes = {};

	// "scripts": {
	//     "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
	//         "start:dev": "webpack-dev-server --inline --content-base public/ --history-api-fallback",
	//         "start:prod": "npm run build && node server.bundle.js",
	//         "build:client": "webpack",
	//         "build:server": "webpack --config webpack.server.config.js",
	//         "build": "npm run build:client && npm run build:server"
	// },

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	    displayName: 'nav-link',
	    render: function render() {
	        return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_React$Component) {
	    _inherits(About, _React$Component);

	    function About(props) {
	        _classCallCheck(this, About);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(About).call(this, props));

	        _this.state = {};
	        console.log('yo im about!');
	        return _this;
	    }

	    _createClass(About, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h3',
	                    null,
	                    'Hey Im about!'
	                )
	            );
	        }
	    }]);

	    return About;
	}(_react2.default.Component);

	exports.default = About;


	About.propTypes = {};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pilot = function (_React$Component) {
	    _inherits(Pilot, _React$Component);

	    function Pilot(props) {
	        _classCallCheck(this, Pilot);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pilot).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Pilot, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Hey im the pilot Modified! Again and agian'
	                )
	            );
	        }
	    }]);

	    return Pilot;
	}(_react2.default.Component);

	exports.default = Pilot;


	Pilot.propTypes = {};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Exhibition = function (_React$Component) {
	    _inherits(Exhibition, _React$Component);

	    function Exhibition(props) {
	        _classCallCheck(this, Exhibition);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Exhibition).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Exhibition, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Hey Im the exhibition '
	                )
	            );
	        }
	    }]);

	    return Exhibition;
	}(_react2.default.Component);

	exports.default = Exhibition;


	Exhibition.propTypes = {};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	    _inherits(Home, _React$Component);

	    function Home(props) {
	        _classCallCheck(this, Home);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Home, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Welcome to openTransformation!'
	                )
	            );
	        }
	    }]);

	    return Home;
	}(_react2.default.Component);

	exports.default = Home;


	Home.propTypes = {};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);