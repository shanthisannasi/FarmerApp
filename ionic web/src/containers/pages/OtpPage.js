"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
var Header_1 = require("../common/Header");
var OtpPage = function () {
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Registration")),
                React.createElement("form", { className: "form" },
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, null,
                            React.createElement(react_1.IonText, { className: "reg-fields" },
                                "OTP Number ",
                                React.createElement("input", { type: "text", placeholder: "xxxxx", className: "input-text", required: true }),
                                React.createElement("button", { className: "reg-btn" }, " Verify ")))))))));
};
exports.default = OtpPage;
//# sourceMappingURL=OtpPage.js.map