"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var Footer_1 = require("../../common/Footer");
var react_2 = require("react");
var Seedings_1 = require("../../../store/actions/Seedings");
var PartitionLand_1 = require("../../../store/actions/PartitionLand");
var LandDetail_1 = require("../../../store/actions/LandDetail");
var react_redux_1 = require("react-redux");
var SeedingDetails = function (_a) {
    // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
    var dispatch = _a.dispatch, seedData = _a.seedData, PartitionLandData = _a.PartitionLandData, LandDetailData = _a.LandDetailData;
    React.useEffect(function () {
        dispatch(PartitionLand_1.getPartitionLandList());
        dispatch(LandDetail_1.getLandDetailList());
    }, []);
    var onSeedSubmit = function () {
        dispatch(Seedings_1.storeSeedData(seedData.seedInput));
    };
    var handleLandChange = function (event) {
        seedData.seedInput.landDetailId = event.target.value;
    };
    var handlePLChange = function (event) {
        seedData.seedInput.partitionLandDetailId = event.target.value;
    };
    var handleQuantityChange = function (event) {
        seedData.seedInput.quantity = event.target.value;
    };
    var handleSeedNameChange = function (event) {
        seedData.seedInput.seedName = event.target.value;
    };
    var handleSeedCostChange = function (event) {
        seedData.seedInput.seedCost = event.target.value;
    };
    var handleNOLChange = function (event) {
        seedData.seedInput.noOfLabours = event.target.value;
    };
    var handleLCChange = function (event) {
        seedData.seedInput.labourCost = event.target.value;
    };
    var _b = react_2.useState([]), PartLandData = _b[0], setPartLandData = _b[1];
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
    var _c = react_2.useState([]), LandData = _c[0], setLandData = _c[1];
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
                    React.createElement("h1", null, "Add Seeding ")),
                React.createElement("form", { className: "form" },
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
                                "Quantity ",
                                React.createElement("input", { type: "text", placeholder: "Seeding Quantity", className: "input-text", onChange: handleQuantityChange, required: true }),
                                "Seed Name ",
                                React.createElement("input", { type: "text", placeholder: "Seed Name", className: "input-text", onChange: handleSeedNameChange, required: true }),
                                "Seed Cost ",
                                React.createElement("input", { type: "text", placeholder: "Seed Cost", className: "input-text", onChange: handleSeedCostChange, required: true }),
                                "NO of Labours ",
                                React.createElement("input", { type: "text", placeholder: "No of working Labours", className: "input-text", onChange: handleNOLChange, required: true }),
                                "Labour Cost ",
                                React.createElement("input", { type: "text", placeholder: "Working Labours Cost", className: "input-text", onChange: handleLCChange, required: true }))))))),
        React.createElement("footer", { className: "footcolor" },
            React.createElement("div", null,
                React.createElement("button", { className: "ok-btn", onClick: onSeedSubmit }, " OK ")),
            React.createElement(Footer_1.default, null))));
};
var mapStateToProps = function (state) {
    var seedData = state.seedData, PartitionLandData = state.PartitionLandData, LandDetailData = state.LandDetailData;
    return {
        seedData: seedData, PartitionLandData: PartitionLandData, LandDetailData: LandDetailData
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(SeedingDetails);
//# sourceMappingURL=SeedingDetails.js.map