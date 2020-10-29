"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//import classnames from 'classnames';
var React = require("react");
//import * as styles from './AppFrame.module.scss';
//import Header from '../Header';
//import { createStore } from 'redux';
var Home_1 = require("../../core/Home/Home");
//const store = createStore(reducer);
var AppFrame = /** @class */ (function (_super) {
    __extends(AppFrame, _super);
    function AppFrame(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sessionTimeOut: 10,
            isValid: false,
            //isAdmin: false,
            userName: ""
        };
        return _this;
    }
    AppFrame.prototype.componentWillMount = function () {
        var loggedInString = localStorage.getItem('AUTHDATA');
        if (loggedInString) {
            var loggedInData = JSON.parse(loggedInString);
            if (!loggedInData && !loggedInData.status.statusValue) {
                window.localStorage.setItem('AUTHDATA', "");
                window.location.href = "/login";
            }
            var currentLocation = window.location.pathname;
            if (currentLocation.includes('homes') && (loggedInData.userDetail.isFirstTimeLogin)) {
                window.location.href = "/postlogin";
            }
            this.setState({ userName: loggedInData.userDetail.userName });
            //  this.setState({ isAdmin: loggedInData.userDetail.roleID === 1 });
            if (currentLocation.includes('users')) {
                window.location.href = "/home";
            }
            else {
                this.setState({ isValid: true });
            }
            this.setState({ sessionTimeOut: loggedInData.sessionTimeout });
        }
        else {
            window.location.href = "/login";
        }
    };
    AppFrame.prototype.render = function () {
        var isLogged = this.props.isLogged;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement("div", { style: { display: "" + (isLogged ? '' : 'none') } },
                    React.createElement(Home_1.default, null)))));
    };
    return AppFrame;
}(React.Component));
exports.default = AppFrame;
//# sourceMappingURL=AppFrame.js.map