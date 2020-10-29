"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
var Confirm = function (_a) {
    var showConfirm = _a.showConfirm, setShowConfirm = _a.setShowConfirm, processDelete = _a.processDelete, message = _a.message;
    return (React.createElement(react_1.IonAlert, { isOpen: showConfirm, onDidDismiss: function () { return setShowConfirm(false); }, header: 'Confirm!', 
        //message={'<strong>Are you sure do you want to delete it?</strong>!!!'}
        message: message, buttons: [
            {
                text: 'Okay',
                handler: function () {
                    processDelete();
                }
            },
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
            }
        ] }));
};
exports.default = Confirm;
//# sourceMappingURL=Confirm.js.map