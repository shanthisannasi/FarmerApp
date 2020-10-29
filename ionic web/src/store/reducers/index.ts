import { combineReducers } from 'redux';
import regData from './Registration/Registration';
import harvestData from './Harvestings/Harvestings';
import weedRemoveData from './WeedRemove/WeedRemove';
import seedData from './Seedings/Seedings';
import saleData from './Sales/Sales';
import plowingData from './Plowings/Plowing';
import pestControlData from './PestControl/PestControl';
import PartitionLandData from './PartitionLand/PartitionLand';
import LandDetailData from './LandDetail/LandDetail';
import stateListData from './StateList/SateList';
import loginData from './Login/Login';
import viewReportData from './ViewReport/ViewReport';
import viewAllReportData from './ViewAllReport/ViewAllReport';
const reducers = combineReducers({
  regData,
  harvestData,
  weedRemoveData,
  seedData,
  saleData,
  plowingData,
  pestControlData,
  PartitionLandData,
  LandDetailData,
  loginData,
  stateListData,
  viewReportData,
  viewAllReportData
})

export default reducers;