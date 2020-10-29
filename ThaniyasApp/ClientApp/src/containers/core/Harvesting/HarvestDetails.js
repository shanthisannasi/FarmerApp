"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var react_2 = require("react");
var Harvestings_1 = require("../../../store/actions/Harvestings");
var PartitionLand_1 = require("../../../store/actions/PartitionLand");
var LandDetail_1 = require("../../../store/actions/LandDetail");
var react_redux_1 = require("react-redux");
var HarvestDetails = function (_a) {
    var harvestData = _a.harvestData, dispatch = _a.dispatch, PartitionLandData = _a.PartitionLandData, LandDetailData = _a.LandDetailData;
    React.useEffect(function () {
        setStartDate((startDate));
        dispatch(PartitionLand_1.getPartitionLandList());
        dispatch(LandDetail_1.getLandDetailList());
    }, []);
    var onHarvestSubmit = function () {
        dispatch(Harvestings_1.storeHarvestData(harvestData.harvestInput));
    };
    var handleDateChange = function (date) {
        setStartDate(date || new Date());
        harvestData.harvestInput.date = date;
        //date => { setStartDate(date || new Date()) } 
    };
    var _b = react_2.useState(new Date()), startDate = _b[0], setStartDate = _b[1];
    // const [partitionData, setPartitionData] = useState([]);
    var handleLandChange = function (event) {
        harvestData.harvestInput.landDetailId = event.target.value;
        // var items = PLitems.filter((item: any) => item.landDetailId == event.target.value);
        //dispatch(getPartitionLandById(Landitems.id)); 
    };
    var handlePLChange = function (event) {
        harvestData.harvestInput.partitionLandDetailId = event.target.value;
    };
    var handleCostChange = function (event) {
        harvestData.harvestInput.cost = event.target.value;
    };
    var handleNOLChange = function (event) {
        harvestData.harvestInput.noOfLabours = event.target.value;
    };
    var handleLCChange = function (event) {
        harvestData.harvestInput.labourCost = event.target.value;
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
    //<label> Partition Land Name </label>
    //<IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
    //  {PLitems.filter((item:any) => item.landDetailId == 1).map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection}> {data.landDirection} </IonSelectOption> })}
    //</IonSelect>
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Add Harvesting ")),
                React.createElement("form", { className: "form", onSubmit: onHarvestSubmit },
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
                                "Date  ",
                                React.createElement(react_datepicker_1.default, { dateFormat: "dd/MM/yyyy", selected: startDate, onChange: function (date) { return handleDateChange(date); }, className: "input-text" }),
                                "Cost ",
                                React.createElement("input", { type: "text", placeholder: "Harevest total Cost", className: "input-text", onChange: handleCostChange, required: true }),
                                "NO of Labours ",
                                React.createElement("input", { type: "text", placeholder: "No of working Labours ", className: "input-text", onChange: handleNOLChange, required: true }),
                                "Labour Cost ",
                                React.createElement("input", { type: "text", placeholder: "Working Labour Cost", className: "input-text", onChange: handleLCChange, required: true }))))))),
        React.createElement("footer", { className: "footcolor" },
            React.createElement("div", null,
                React.createElement("button", { className: "ok-btn", onClick: onHarvestSubmit }, " OK ")),
            React.createElement("div", null,
                React.createElement("button", { className: "cancel-btn" }, " CANCEL ")))));
};
var mapStateToProps = function (state) {
    var harvestData = state.harvestData, PartitionLandData = state.PartitionLandData, LandDetailData = state.LandDetailData;
    return {
        harvestData: harvestData, PartitionLandData: PartitionLandData, LandDetailData: LandDetailData
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(HarvestDetails);
//# sourceMappingURL=HarvestDetails.js.map