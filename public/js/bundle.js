(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var CommentsActions = (function () {
    function CommentsActions() {
        _classCallCheck(this, CommentsActions);

        this.generateActions('getCommentsSuccess', 'getCommentsFail', 'postCommentsFail');
    }

    _createClass(CommentsActions, [{
        key: 'getComments',
        value: function getComments(userId, projectId) {
            var _this2 = this;

            if (!userId || !projectId) {
                return;
            }

            $.ajax({ url: 'http://api.diy.org/makers/' + userId + '/projects/' + projectId + '/comments' }).done(function (data) {
                _this2.actions.getCommentsSuccess(data.response);
            }).fail(function (jqXhr) {
                _this2.actions.getCommentsFail(jqXhr);
            });
        }
    }, {
        key: 'postComments',
        value: function postComments(userId, projectId, body) {
            var _this3 = this;

            if (!userId || !projectId) {
                return;
            }
            var _this = this;
            $.ajax({ url: 'http://api.diy.org/makers/' + userId + '/projects/' + projectId + '/comments',
                headers: { 'x-diy-api-token': '30b28060b2b06a954c334ad2c92a8d85b58316d9' },
                type: 'POST',
                processData: false,
                contentType: 'application/json',
                data: body }).done(function (data) {
                toastr.success('DIY', 'Your comment has been posted successfully!');
                _this.actions.getComments();
            }).fail(function (jqXhr) {
                _this3.actions.postCommentsFail(jqXhr);
            });
        }
    }]);

    return CommentsActions;
})();

exports['default'] = _alt2['default'].createActions(CommentsActions);
module.exports = exports['default'];

},{"../alt":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var FavouritesActions = (function () {
    function FavouritesActions() {
        _classCallCheck(this, FavouritesActions);

        this.generateActions('getFavouritesSuccess', 'getFavouritesFail');
    }

    _createClass(FavouritesActions, [{
        key: 'getFavourites',
        value: function getFavourites(userId, projectId) {
            var _this = this;

            if (!userId || !projectId) {
                return;
            }
            $.ajax({ url: 'http://api.diy.org/makers/' + userId + '/projects/' + projectId + '/favorites' }).done(function (data) {
                console.log(data);
                _this.actions.getFavouritesSuccess(data.response);
            }).fail(function (jqXhr) {
                _this.actions.getFavouritesFail(jqXhr);
            });
        }
    }]);

    return FavouritesActions;
})();

exports['default'] = _alt2['default'].createActions(FavouritesActions);
module.exports = exports['default'];

},{"../alt":4}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var ProjectViewAction = (function () {
    function ProjectViewAction() {
        _classCallCheck(this, ProjectViewAction);

        this.generateActions('getProjectSuccess', 'getProjectFail');
    }

    _createClass(ProjectViewAction, [{
        key: 'getProject',
        value: function getProject(userId, projectId, router) {
            var _this = this;

            if (!userId || !projectId) {
                return;
            }
            $.ajax({ url: 'http://api.diy.org/makers/' + userId + '/projects/' + projectId + '/' }).done(function (data) {
                _this.actions.getProjectSuccess(data.response);
            }).fail(function (jqXhr) {
                _this.actions.getProjectFail(jqXhr);
                router.pushState(null, "/");
            });
        }
    }]);

    return ProjectViewAction;
})();

exports['default'] = _alt2['default'].createActions(ProjectViewAction);
module.exports = exports['default'];

},{"../alt":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var App = (function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props);
    }

    _createClass(App, [{
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _actionsCommentsActions = require('../actions/CommentsActions');

var _actionsCommentsActions2 = _interopRequireDefault(_actionsCommentsActions);

var CommentForm = (function (_React$Component) {
    _inherits(CommentForm, _React$Component);

    function CommentForm(props) {
        _classCallCheck(this, CommentForm);

        _get(Object.getPrototypeOf(CommentForm.prototype), 'constructor', this).call(this, props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            icon: "",
            username: "",
            url: "",
            value: ""
        };
    }

    _createClass(CommentForm, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getUserInfo();
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo() {
            var _this = this;

            var result = {};
            $.ajax({ url: 'https://api.diy.org/makers/catzhangy1' }).done(function (data) {
                data = data.response;
                _this.setState({
                    username: data.nickname,
                    url: data.url,
                    icon: data.avatar.small.url
                });
            }).fail(function (jqXhr) {
                console.log(jqXhr);
                result = jqXhr;
            });
            return result;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var result = undefined;
            var body = this.refs.text.value.trim();
            if (!body) {
                return;
            }
            result = this.props.replyId == 0 ? { raw: body } : { raw: body, reply: this.props.replyId };
            this.props.postComments(this.props.userId, this.props.projectId, JSON.stringify(result));
            this.refs.text.value = '';
        }
    }, {
        key: 'updateForm',
        value: function updateForm() {
            var newValue = this.refs.text.value;
            this.props.updateValue(newValue);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            CommentsStore.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'comments-container' },
                _react2['default'].createElement('img', { src: this.state.icon, width: '60px' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'comments' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ',
                        _react2['default'].createElement(
                            'strong',
                            null,
                            ' ',
                            this.state.username,
                            ' '
                        ),
                        ' '
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'form-container' },
                        _react2['default'].createElement(
                            'form',
                            { className: 'commentForm', onSubmit: this.handleSubmit.bind(this) },
                            _react2['default'].createElement('textarea', { type: 'text', maxLength: '140', placeholder: 'Add a new comment', ref: 'text', value: this.props.value, onChange: this.updateForm }),
                            _react2['default'].createElement('input', { type: 'submit', value: 'Post' })
                        )
                    )
                )
            );
        }
    }]);

    return CommentForm;
})(_react2['default'].Component);

exports['default'] = CommentForm;
module.exports = exports['default'];

},{"../actions/CommentsActions":1,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _CommentForm = require("./CommentForm");

var _CommentForm2 = _interopRequireDefault(_CommentForm);

var CommentsDetail = (function (_React$Component) {
    _inherits(CommentsDetail, _React$Component);

    function CommentsDetail(props) {
        _classCallCheck(this, CommentsDetail);

        _get(Object.getPrototypeOf(CommentsDetail.prototype), 'constructor', this).call(this, props);
    }

    _createClass(CommentsDetail, [{
        key: 'addReply',
        value: function addReply(id, user) {
            this.props.updateReplyTo(id, user);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var nestedComments = this.props.comment.slice().splice(1); //makes copy of nestedComments so props.comment is unmodified
            var comments = nestedComments.map(function (c) {
                return _react2['default'].createElement(
                    'div',
                    { className: 'nested-comments-container', key: c.rawDate },
                    _react2['default'].createElement('img', { src: c.icon, width: '60px' }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'comments' },
                        _react2['default'].createElement(
                            'span',
                            null,
                            ' ',
                            _react2['default'].createElement(
                                'strong',
                                null,
                                ' ',
                                c.user,
                                ' '
                            ),
                            ' ',
                            c.date
                        ),
                        _react2['default'].createElement(
                            'p',
                            null,
                            ' ',
                            c.content,
                            ' '
                        ),
                        _react2['default'].createElement('img', { src: '/img/reply.svg', onClick: _this.addReply.bind(_this, c.id, c.user), height: '25px', width: '25px' })
                    )
                );
            });

            return _react2['default'].createElement(
                'div',
                { className: 'comments-container', key: this.props.comment[0].rawDate },
                _react2['default'].createElement('img', { src: this.props.comment[0].icon, width: '60px' }),
                _react2['default'].createElement(
                    'div',
                    { className: 'comments' },
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ',
                        _react2['default'].createElement(
                            'strong',
                            null,
                            ' ',
                            this.props.comment[0].user,
                            ' '
                        ),
                        ' ',
                        this.props.comment[0].date
                    ),
                    _react2['default'].createElement(
                        'p',
                        null,
                        ' ',
                        this.props.comment[0].content,
                        ' '
                    ),
                    _react2['default'].createElement('img', { src: '/img/reply.svg', onClick: this.addReply.bind(this, this.props.comment[0].id, this.props.comment[0].user), height: '25px', width: '25px' })
                ),
                _react2['default'].createElement(
                    'div',
                    null,
                    comments
                )
            );
        }
    }]);

    return CommentsDetail;
})(_react2['default'].Component);

exports['default'] = CommentsDetail;
module.exports = exports['default'];

},{"./CommentForm":6,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesProjectViewStore = require('../stores/ProjectViewStore');

var _storesProjectViewStore2 = _interopRequireDefault(_storesProjectViewStore);

var _actionsProjectViewAction = require('../actions/ProjectViewAction');

var _actionsProjectViewAction2 = _interopRequireDefault(_actionsProjectViewAction);

var _favourites = require('./favourites');

var _favourites2 = _interopRequireDefault(_favourites);

var _comments = require('./comments');

var _comments2 = _interopRequireDefault(_comments);

var ProjectView = (function (_React$Component) {
    _inherits(ProjectView, _React$Component);

    function ProjectView(props) {
        _classCallCheck(this, ProjectView);

        _get(Object.getPrototypeOf(ProjectView.prototype), 'constructor', this).call(this, props);
        this.state = _storesProjectViewStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(ProjectView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesProjectViewStore2['default'].listen(this.onChange);
            _actionsProjectViewAction2['default'].getProject(this.props.params.user, this.props.params.project, this.props.history);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesProjectViewStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var comments = _react2['default'].createElement('br', null);
            var favourites = _react2['default'].createElement('br', null);
            if (this.state.loadSuccess) {
                comments = _react2['default'].createElement(_comments2['default'], { userId: this.props.params.user, projectId: this.props.params.project });
                favourites = _react2['default'].createElement(_favourites2['default'], { userId: this.props.params.user, projectId: this.props.params.project });
            }

            return _react2['default'].createElement(
                'div',
                { className: 'outer-container' },
                _react2['default'].createElement(
                    'div',
                    { className: 'upper-section' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'inner-container' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'project-container' },
                            _react2['default'].createElement(
                                'div',
                                { className: 'row' },
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'col-md-8' },
                                    _react2['default'].createElement('img', { src: this.state.project.contentSrc, width: 'auto' }),
                                    _react2['default'].createElement('img', { id: 'favourite', src: '/img/favorite.svg', width: '50px', height: '50px' })
                                ),
                                _react2['default'].createElement(
                                    'div',
                                    { className: 'col-md-4 img' },
                                    _react2['default'].createElement(
                                        'h3',
                                        null,
                                        this.state.project.title
                                    ),
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        this.state.project.date
                                    ),
                                    _react2['default'].createElement(
                                        'footer',
                                        null,
                                        _react2['default'].createElement('img', { src: this.state.project.iconsrc }),
                                        _react2['default'].createElement(
                                            'span',
                                            null,
                                            ' ',
                                            this.state.project.username,
                                            ' '
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'inner-container' },
                    _react2['default'].createElement(
                        'div',
                        { className: 'row' },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-sm-8' },
                            comments
                        ),
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-md-4 col-sm-4' },
                            favourites
                        )
                    )
                )
            );
        }
    }]);

    return ProjectView;
})(_react2['default'].Component);

exports['default'] = ProjectView;
module.exports = exports['default'];

},{"../actions/ProjectViewAction":3,"../stores/ProjectViewStore":16,"./comments":10,"./favourites":11,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Whoops = (function (_React$Component) {
    _inherits(Whoops, _React$Component);

    function Whoops() {
        _classCallCheck(this, Whoops);

        _get(Object.getPrototypeOf(Whoops.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Whoops, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //console.log("I did mount");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'whoops-container' },
                _react2['default'].createElement(
                    'h3',
                    null,
                    '!'
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'text' },
                    _react2['default'].createElement(
                        'h1',
                        null,
                        'Whoops-'
                    ),
                    _react2['default'].createElement('hr', null),
                    _react2['default'].createElement(
                        'p',
                        null,
                        ' Looks like the project you\'re looking for isn\'t here, or you\'re just being wild! '
                    ),
                    _react2['default'].createElement('hr', null),
                    _react2['default'].createElement(
                        'p',
                        { style: { color: '#FFAB97' } },
                        ' ',
                        _react2['default'].createElement(
                            'i',
                            null,
                            ' Hint: Enter URL as validUser/validProjectId '
                        ),
                        ' '
                    )
                )
            );
        }
    }]);

    return Whoops;
})(_react2['default'].Component);

exports['default'] = Whoops;
module.exports = exports['default'];

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesCommentsStore = require('../stores/CommentsStore');

var _storesCommentsStore2 = _interopRequireDefault(_storesCommentsStore);

var _actionsCommentsActions = require('../actions/CommentsActions');

var _actionsCommentsActions2 = _interopRequireDefault(_actionsCommentsActions);

var _CommentsDetail = require("./CommentsDetail");

var _CommentsDetail2 = _interopRequireDefault(_CommentsDetail);

var _CommentForm = require("./CommentForm");

var _CommentForm2 = _interopRequireDefault(_CommentForm);

var Comments = (function (_React$Component) {
    _inherits(Comments, _React$Component);

    function Comments(props) {
        _classCallCheck(this, Comments);

        _get(Object.getPrototypeOf(Comments.prototype), 'constructor', this).call(this, props);
        this.state = _storesCommentsStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Comments, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesCommentsStore2['default'].listen(this.onChange);
            _actionsCommentsActions2['default'].getComments(this.props.userId, this.props.projectId);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesCommentsStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'updateForm',
        value: function updateForm(val) {
            this.setState({ currentReplyTo: val });
        }
    }, {
        key: 'updateReplyTo',
        value: function updateReplyTo(val, username) {
            var user = "@" + username;
            this.setState({ currentReplyTo: val, currentReplyToUser: user });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var comments = this.state.comments.map(function (comment) {
                return _react2['default'].createElement(_CommentsDetail2['default'], {
                    comment: comment,
                    updateReplyTo: _this.updateReplyTo.bind(_this) });
            });

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'header-title' },
                    _react2['default'].createElement('img', { src: '/img/comment.svg', height: '25px', width: '25px' }),
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ',
                        this.state.size,
                        ' Comments'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    null,
                    comments
                ),
                _react2['default'].createElement(_CommentForm2['default'], {
                    postComments: _actionsCommentsActions2['default'].postComments,
                    updateValue: this.updateForm.bind(this),
                    value: this.state.currentReplyToUser,
                    replyId: this.state.currentReplyTo,
                    userId: this.props.userId,
                    projectId: this.props.projectId
                })
            );
        }
    }]);

    return Comments;
})(_react2['default'].Component);

exports['default'] = Comments;
module.exports = exports['default'];

},{"../actions/CommentsActions":1,"../stores/CommentsStore":14,"./CommentForm":6,"./CommentsDetail":7,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesFavouritesStore = require('../stores/FavouritesStore');

var _storesFavouritesStore2 = _interopRequireDefault(_storesFavouritesStore);

var _actionsFavouritesActions = require('../actions/FavouritesActions');

var _actionsFavouritesActions2 = _interopRequireDefault(_actionsFavouritesActions);

var Favourites = (function (_React$Component) {
    _inherits(Favourites, _React$Component);

    function Favourites(props) {
        _classCallCheck(this, Favourites);

        _get(Object.getPrototypeOf(Favourites.prototype), 'constructor', this).call(this, props);
        this.state = _storesFavouritesStore2['default'].getState();
        this.onChange = this.onChange.bind(this);
    }

    _createClass(Favourites, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _storesFavouritesStore2['default'].listen(this.onChange);
            _actionsFavouritesActions2['default'].getFavourites(this.props.userId, this.props.projectId);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _storesFavouritesStore2['default'].unlisten(this.onChange);
        }
    }, {
        key: 'truncate',
        value: function truncate(a) {
            if (a.length > 16) {
                //conservative estimate on longest word allowed
                return a.slice(0, 12).concat("...");
            }
            return a;
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;
            var users = this.state.favourites.map(function (user) {
                return _react2['default'].createElement(
                    'div',
                    { className: 'user' },
                    _react2['default'].createElement('img', { src: user.icon }),
                    ' ',
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ',
                        _this.truncate(user.username),
                        ' '
                    )
                );
            });

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    'div',
                    { className: 'header-title' },
                    _react2['default'].createElement('img', { src: '/img/favorite.svg', width: '24px', height: '24px' }),
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ',
                        this.state.size,
                        ' Favourites'
                    )
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'bi-section' },
                    users
                )
            );
        }
    }]);

    return Favourites;
})(_react2['default'].Component);

exports['default'] = Favourites;
module.exports = exports['default'];

},{"../actions/FavouritesActions":2,"../stores/FavouritesStore":15,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var history = (0, _historyLibCreateBrowserHistory2['default'])();

var router = _react2['default'].createElement(
  _reactRouter2['default'],
  { history: history },
  _routes2['default']
);
_reactDom2['default'].render(router, document.getElementById('app'));

exports['default'] = router;
module.exports = exports['default'];

},{"./routes":13,"history/lib/createBrowserHistory":23,"react":"react","react-dom":"react-dom","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsWhoops = require('./components/Whoops');

var _componentsWhoops2 = _interopRequireDefault(_componentsWhoops);

var _componentsProjectView = require('./components/ProjectView');

var _componentsProjectView2 = _interopRequireDefault(_componentsProjectView);

var routes = _react2['default'].createElement(
    _reactRouter.Route,
    { component: _componentsApp2['default'] },
    _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsWhoops2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: ':user/:project', component: _componentsProjectView2['default'] }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/*', component: _componentsWhoops2['default'] })
);
exports['default'] = routes;
module.exports = exports['default'];

},{"./components/App":5,"./components/ProjectView":8,"./components/Whoops":9,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsCommentsActions = require('../actions/CommentsActions');

var _actionsCommentsActions2 = _interopRequireDefault(_actionsCommentsActions);

var CommentsStore = (function () {
    function CommentsStore() {
        _classCallCheck(this, CommentsStore);

        this.bindActions(_actionsCommentsActions2['default']);
        this.comments = [];
        this.threadStarters = [];
        this.commentsRaw = [];
        this.size = 0;
        this.currentReplyTo = 0;
        this.currentReplyToUser = '';
    }

    _createClass(CommentsStore, [{
        key: 'onGetCommentsSuccess',
        value: function onGetCommentsSuccess(data) {
            var _this = this;

            this.commentsRaw = data.map(function (a) {
                return {
                    "user": a.maker.nickname,
                    "url": a.maker.url,
                    "icon": a.maker.avatar.small.url,
                    "date": _this.getElapsed(a.stamp),
                    "rawDate": a.stamp,
                    "content": a.raw,
                    "id": a.id,
                    "replyId": a.reply };
            });

            this.threadStarters = this.commentsRaw.filter(function (a) {
                return a.replyId == 0;
            });
            this.comments = this.threadStarters.map(function (a) {
                return _this.commentsManager(a, _this.commentsRaw);
            });
            this.size = data.length;
        }
    }, {
        key: 'commentsManager',
        value: function commentsManager(obj, data) {
            var commentblock = [];
            commentblock.push([obj]);
            var currentReplyIds = [obj.id];
            var foundAll = false;

            var _loop = function () {
                var newReplyIds = [];
                commentblock.push(data.filter(function (a) {
                    var result = currentReplyIds.some(function (o) {
                        return o == a.replyId;
                    });
                    if (result) {
                        newReplyIds.push(a.id);
                    };
                    return result;
                }));
                if (newReplyIds.length > 0) {
                    currentReplyIds = newReplyIds;
                    newReplyIds = [];
                } else {
                    foundAll = true;
                }
            };

            while (!foundAll) {
                _loop();
            }
            commentblock.pop();
            commentblock = commentblock.reduce(function (a, b) {
                return a.concat(b);
            });

            return commentblock;
        }
    }, {
        key: 'onPostCommentsFail',
        value: function onPostCommentsFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'onGetCommentsFail',
        value: function onGetCommentsFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }, {
        key: 'getElapsed',
        value: function getElapsed(data) {
            var d = new Date(data);
            var days = Math.floor((new Date() - d) / (1000 * 60 * 60 * 24));
            if (days > 31) {
                return Math.floor(days / 30) + "mo";
            } else {
                return days + "d";
            }
        }
    }]);

    return CommentsStore;
})();

exports['default'] = _alt2['default'].createStore(CommentsStore);
module.exports = exports['default'];

},{"../actions/CommentsActions":1,"../alt":4}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsFavouritesActions = require('../actions/FavouritesActions');

var _actionsFavouritesActions2 = _interopRequireDefault(_actionsFavouritesActions);

var FavouritesStore = (function () {
    function FavouritesStore() {
        _classCallCheck(this, FavouritesStore);

        this.bindActions(_actionsFavouritesActions2['default']);
        this.favourites = [];
        this.size = 0;
    }

    _createClass(FavouritesStore, [{
        key: 'onGetFavouritesSuccess',
        value: function onGetFavouritesSuccess(data) {
            this.favourites = data.map(function (a) {
                return { "username": a.nickname,
                    "url": a.url,
                    "icon": a.avatar.icon.url };
            });
            this.size = data.length;
        }
    }, {
        key: 'getDate',
        value: function getDate(data) {
            var d = new Date(data);
            var date = d.toDateString().split(" ").splice(1);
            return [date[0], " ", date[1], ", ", date[2]].join("");
        }
    }, {
        key: 'onGetFavouritesFail',
        value: function onGetFavouritesFail(jqXhr) {
            // Handle multiple response formats, fallback to HTTP status code number.
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return FavouritesStore;
})();

exports['default'] = _alt2['default'].createStore(FavouritesStore);
module.exports = exports['default'];

},{"../actions/FavouritesActions":2,"../alt":4}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsProjectViewAction = require('../actions/ProjectViewAction');

var _actionsProjectViewAction2 = _interopRequireDefault(_actionsProjectViewAction);

var _reactRouter = require('react-router');

var ProjectViewStore = (function () {
    function ProjectViewStore() {
        _classCallCheck(this, ProjectViewStore);

        this.bindActions(_actionsProjectViewAction2['default']);
        this.project = {
            username: "",
            iconsrc: "",
            title: "",
            date: "",
            contentType: "",
            contentSrc: "" };
        this.loadSuccess = false;
    }

    _createClass(ProjectViewStore, [{
        key: 'onGetProjectSuccess',
        value: function onGetProjectSuccess(data) {
            this.project = {
                username: data.maker.nickname,
                iconsrc: data.maker.avatar.icon.url,
                title: data.title,
                date: this.getDate(data.stamp),
                contentType: data.clips[0].type,
                contentSrc: data.clips[0].assets.web_480.url
            };
            this.loadSuccess = true;
        }
    }, {
        key: 'onGetProjectFail',
        value: function onGetProjectFail(q) {
            this.loadSuccess = false;
        }
    }, {
        key: 'getDate',
        value: function getDate(data) {
            var d = new Date(data);
            var date = d.toDateString().split(" ").splice(1);
            return [date[0], " ", date[1], ", ", date[2]].join("");
        }
    }]);

    return ProjectViewStore;
})();

exports['default'] = _alt2['default'].createStore(ProjectViewStore);
module.exports = exports['default'];

},{"../actions/ProjectViewAction":3,"../alt":4,"react-router":"react-router"}],17:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],18:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],20:[function(require,module,exports){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === QuotaExceededError || window.sessionStorage.length === 0) {
      // Probably in Safari "private mode" where sessionStorage quota is 0. #42
      _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode');

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = window.sessionStorage.getItem(createKey(key));

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
},{"warning":34}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    return history.createLocation(path, state, undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
},{"./Actions":18,"./DOMStateStorage":20,"./DOMUtils":21,"./ExecutionEnvironment":22,"./createDOMHistory":24,"invariant":33}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
},{"./DOMUtils":21,"./ExecutionEnvironment":22,"./createHistory":25,"invariant":33}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function pushState(state, path) {
    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
  }

  function replaceState(state, path) {
    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(path) {
    if (path == null || typeof path === 'string') return path;

    var pathname = path.pathname;
    var search = path.search;
    var hash = path.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(path) {
    return createPath(path);
  }

  function createLocation(path, state, action) {
    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

    return _createLocation3['default'](path, state, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    pushState: pushState,
    replaceState: replaceState,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":18,"./AsyncUtils":19,"./createLocation":26,"./deprecate":27,"./runTransitionHook":29,"deep-equal":30}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof path === 'string') path = _parsePath2['default'](path);

  var pathname = path.pathname || '/';
  var search = path.search || '';
  var hash = path.hash || '';

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":18,"./parsePath":28}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function deprecate(fn, message) {
  return function () {
    _warning2['default'](false, '[history] ' + message);
    return fn.apply(this, arguments);
  };
}

exports['default'] = deprecate;
module.exports = exports['default'];
},{"warning":34}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  _warning2['default'](false, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', string);

  return string.substring(match[0].length);
}

function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
},{"warning":34}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead');
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
},{"warning":34}],30:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":31,"./lib/keys.js":32}],31:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],32:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],33:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))
},{"_process":17}],34:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))
},{"_process":17}]},{},[12]);
