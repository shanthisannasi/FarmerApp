"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var Footer_1 = require("../../common/Footer");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var react_2 = require("react");
var react_redux_1 = require("react-redux");
var Plowing_1 = require("../../../store/actions/Plowing");
var PartitionLand_1 = require("../../../store/actions/PartitionLand");
var LandDetail_1 = require("../../../store/actions/LandDetail");
var PlowingDetails = function (_a) {
    var dispatch = _a.dispatch, plowingData = _a.plowingData, PartitionLandData = _a.PartitionLandData, LandDetailData = _a.LandDetailData;
    React.useEffect(function () {
        setStartDate((startDate));
        dispatch(PartitionLand_1.getPartitionLandList());
        dispatch(LandDetail_1.getLandDetailList());
    }, []);
    var _b = react_2.useState(new Date()), startDate = _b[0], setStartDate = _b[1];
    var onPlowingSubmit = function () {
        dispatch(Plowing_1.storePlowingData(plowingData.plowingInput));
    };
    var handleLandChange = function (event) {
        plowingData.plowingInput.landDetailId = event.target.value;
    };
    var handlePLChange = function (event) {
        plowingData.plowingInput.partitionLandDetailId = event.target.value;
    };
    var handleTypeofPlowChange = function (event) {
        plowingData.plowingInput.typeofPlowing = event.target.value;
    };
    var handlePlowEXPChange = function (event) {
        plowingData.plowingInput.plowingExp = event.target.value;
    };
    var handleDateChange = function (date) {
        setStartDate(date || new Date());
        plowingData.plowingInput.plowingDate = date;
        //date => { setStartDate(date || new Date()) } 
    };
    var _c = react_2.useState([]), PartLandData = _c[0], setPartLandData = _c[1];
    if (PartitionLandData.PLitems.length > 0 && PartLandData.length === 0) {
        setPartLandData(PartitionLandData.PLitems);
    }
    var PLitems = (PartLandData || []);
    var PLitemLand = [];
    PLitems.forEach(function (PLitems) { return PLitemLand.push(React.createElement(react_1.IonItem, { key: PLitems.id },
        React.createElement(react_1.IonLabel, null,
            " ",
            PLitems.landDirection,
            " "))); });
    var _d = react_2.useState([]), LandData = _d[0], setLandData = _d[1];
    if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
        setLandData(LandDetailData.Landitems);
    }
    var Landitems = (LandData || []);
    var itemLand = [];
    Landitems.forEach(function (Landitems) { return itemLand.push(React.createElement(react_1.IonItem, { key: Landitems.id },
        React.createElement(react_1.IonLabel, null,
            " ",
            Landitems.name,
            " "))); });
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Add Plowing ")),
                React.createElement("form", { className: "form", onSubmit: onPlowingSubmit },
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, null,
                            React.createElement(react_1.IonText, { className: "reg-fields" },
                                React.createElement("label", null, " Land Name "),
                                React.createElement(react_1.IonSelect, { placeholder: "Select One", className: "dropclr", onIonChange: handleLandChange }, Landitems.map(function (data) { return React.createElement(react_1.IonSelectOption, { value: data.id, key: data.id, title: data.name },
                                    " ",
                                    data.name,
                                    " "); })),
                                React.createElement("label", null, " Partition Land Name "),
                                React.createElement(react_1.IonSelect, { placeholder: "Select One", className: "dropclr", onIonChange: handlePLChange }, PLitems.map(function (data) { return React.createElement(react_1.IonSelectOption, { value: data.id, key: data.id, title: data.landDirection, selected: PartitionLandData.PLitems.landDetails },
                                    " ",
                                    data.landDirection,
                                    " "); })),
                                "Type of Plowing ",
                                React.createElement("input", { type: "text", placeholder: "Plowing type", className: "input-text", onChange: handleTypeofPlowChange, required: true }),
                                "Date  ",
                                React.createElement(react_datepicker_1.default, { dateFormat: "dd/MM/yyyy", selected: startDate, onChange: function (date) { return handleDateChange(date); }, className: "input-text" }),
                                "Plowing Expenses ",
                                React.createElement("input", { type: "text", placeholder: "Plowing Expenses", className: "input-text", onChange: handlePlowEXPChange, required: true }),
                                React.createElement("div", { className: "footcolor" },
                                    React.createElement("button", { className: "ok-btn" }, " OK "),
                                    React.createElement(Footer_1.default, null))))))))));
};
var mapStateToProps = function (state) {
    var plowingData = state.plowingData, PartitionLandData = state.PartitionLandData, LandDetailData = state.LandDetailData;
    return {
        plowingData: plowingData, PartitionLandData: PartitionLandData, LandDetailData: LandDetailData
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(PlowingDetails);
//# sourceMappingURL=PlowingDetails.js.map