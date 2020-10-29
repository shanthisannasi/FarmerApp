import { all, takeLatest } from 'redux-saga/effects';
import { STORE_REG_STARTED } from '../actions/Registration';
import { storeRegData } from './Registration/Registration';
import { STORE_HARVESTINGS_STARTED, GET_HARVESTINGSBYID_STARTED, GET_HARVESTINGS_STARTED, DELETE_HARVESTINGS_STARTED } from '../actions/Harvestings';
import { storeHarvestData, getHarvestList, getHarvestByIdList, deleteHarvest } from './Harvestings/Harvsetings';
import { STORE_WEEDREMOVE_STARTED, GET_WEEDREMOVE_STARTED, GET_WEEDREMOVEBYID_STARTED, DELETE_WEEDREMOVE_STARTED } from '../actions/WeedRemove';
import { storeWeedRemoveData, getWeedRemoveList, getWeedRemoveByIdList, deleteWeedRemove } from './WeedRemove/WeedRemove';
import { STORE_SEEDINGS_STARTED, GET_SEEDINGBYID_STARTED, GET_SEEDING_STARTED, DELETE_SEEDING_STARTED } from '../actions/Seedings';
import { storeSeedData, getSeedByIdList, getSeedList, deleteSeed } from './Seedings/Seedings';
import { STORE_SALES_STARTED, GET_SALESBYID_STARTED, GET_SALES_STARTED, DELETE_SALES_STARTED } from '../actions/Sales';
import { storeSaleData, getSaleByIdList, getSaleList, deleteSale } from './Sales/Sales';
import { STORE_PLOWINGS_STARTED, DELETE_PLOWINGS_STARTED, GET_PLOWINGSBYID_STARTED, GET_PLOWINGS_STARTED } from '../actions/Plowing';
import { storePlowingData, getPlowingByIdList, getPlowingList, deletePlowing } from './Plowings/Plowing';
import { STORE_PESTCONTROL_STARTED, GET_PESTCONTROLBYID_STARTED, GET_PESTCONTROL_STARTED, DELETE_PESTCONTROL_STARTED } from '../actions/PestControl';
import { storePestControlData, getPestControlByIdList, getPestControlList, deletePestControl } from './PestControl/PestControl';
import { STORE_PARTITIONLAND_STARTED, GET_PARTITIONLAND_STARTED,DELETE_PARTITIONLAND_STARTED, GET_PARTITIONLANDBYID_STARTED } from '../actions/PartitionLand';
import { storePartitionLandData, getPartitionLandList, deletePartirionLand, getPartitionLandByIdList } from './PartitionLand/PartitionLand';
import { STORE_LANDDETAIL_STARTED, GET_LANDDETAIL_STARTED, GET_LANDDETAILBYID_STARTED, DELETE_LANDDETAIL_STARTED } from '../actions/LandDetail';
import { storeLandDetailData, getLandDetailList, getLandByIdList, deleteLand } from './LandDetail/LandDetail';
import { GET_STATELIST_STARTED } from '../actions/StateList';
import { getStateList } from './StateList/StateList';
import { FETCH_LOGIN_STARTED } from '../actions/Login';
import { fetchLoginData } from './Login/Login';
import { GET_VIEWREPORT_STARTED } from '../actions/ViewReport';
import { getViewReportList} from './ViewReport/ViewReport';
import { GET_VIEWALLREPORT_STARTED } from '../actions/ViewAllReport';
import { getViewAllReportList} from './ViewAllReport/ViewAllReport';
export default function* rootSaga() {
  yield all([
    takeLatest(FETCH_LOGIN_STARTED, fetchLoginData),
    takeLatest(STORE_REG_STARTED, storeRegData),
    takeLatest(STORE_HARVESTINGS_STARTED, storeHarvestData),
    takeLatest(STORE_WEEDREMOVE_STARTED, storeWeedRemoveData),
    takeLatest(STORE_SEEDINGS_STARTED, storeSeedData),
    takeLatest(STORE_SALES_STARTED, storeSaleData),
    takeLatest(STORE_PLOWINGS_STARTED, storePlowingData),
    takeLatest(STORE_PESTCONTROL_STARTED, storePestControlData),
    takeLatest(STORE_PARTITIONLAND_STARTED, storePartitionLandData),
    takeLatest(STORE_LANDDETAIL_STARTED, storeLandDetailData),
    takeLatest(GET_PARTITIONLAND_STARTED, getPartitionLandList),
    takeLatest(GET_LANDDETAIL_STARTED, getLandDetailList),
    takeLatest(GET_WEEDREMOVE_STARTED, getWeedRemoveList),
    takeLatest(GET_HARVESTINGS_STARTED, getHarvestList),
    takeLatest(GET_SEEDING_STARTED, getSeedList),
    takeLatest(GET_PLOWINGS_STARTED, getPlowingList),
    takeLatest(GET_PESTCONTROL_STARTED, getPestControlList),
    takeLatest(GET_SALES_STARTED, getSaleList),
    takeLatest(DELETE_PARTITIONLAND_STARTED, deletePartirionLand),
    takeLatest(DELETE_LANDDETAIL_STARTED, deleteLand),
    takeLatest(DELETE_WEEDREMOVE_STARTED, deleteWeedRemove),
    takeLatest(DELETE_HARVESTINGS_STARTED, deleteHarvest),
    takeLatest(DELETE_SEEDING_STARTED, deleteSeed),
    takeLatest(DELETE_PESTCONTROL_STARTED, deletePestControl),
    takeLatest(DELETE_PLOWINGS_STARTED, deletePlowing),
    takeLatest(DELETE_SALES_STARTED, deleteSale),
    takeLatest(GET_STATELIST_STARTED, getStateList),
    takeLatest(GET_PARTITIONLANDBYID_STARTED, getPartitionLandByIdList),
    takeLatest(GET_LANDDETAILBYID_STARTED, getLandByIdList),
    takeLatest(GET_WEEDREMOVEBYID_STARTED, getWeedRemoveByIdList),
    takeLatest(GET_HARVESTINGSBYID_STARTED, getHarvestByIdList),
    takeLatest(GET_SEEDINGBYID_STARTED, getSeedByIdList),
    takeLatest(GET_PESTCONTROLBYID_STARTED, getPestControlByIdList),
    takeLatest(GET_PLOWINGSBYID_STARTED, getPlowingByIdList),
    takeLatest(GET_SALESBYID_STARTED, getSaleByIdList),
    takeLatest(GET_VIEWREPORT_STARTED, getViewReportList),
    takeLatest(GET_VIEWALLREPORT_STARTED, getViewAllReportList),
  ]);
}
