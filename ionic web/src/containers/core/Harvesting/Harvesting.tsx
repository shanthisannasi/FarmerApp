import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getHarvestList, deleteHarvest } from '../../../store/actions/Harvestings';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface Props extends RouteComponentProps { }

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  harvestData: any;
  route: RouteComponentProps;
}


const Harvesting: React.SFC<IWeedRemoveProps & RouteComponentProps> = ({ dispatch, harvestData, history }) => {
  React.useEffect(() => {
    dispatch(getHarvestList());
    dispatch(getLandDetailList());
    setShowLoading(true);
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Harvest, setHarvest] = useState();
  const [showLoading, setShowLoading] = useState(false);
  const onEditHarvestClick = (id:any) => {
    setHarvest(id);
    history.push("/harvestingEditPage/" + id);
    history.push("/harvestingEditPage/" + id)
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [idDel, setDel] = useState();  
  
  const [showConfirm, setShowConfirm] = useState(false);
  const onDeleteHarvestClick = (id: any) => {
    setDel(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deleteHarvest(idDel));
  }
  if (deleteProcess && !harvestData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [HarvestData, setHarvestData] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (harvestData.isLoading===false && isDataLoaded === false) {
    setHarvestData(harvestData.HarvestItems);
    setIsDataLoaded(true);
    setShowLoading(false);
  }
  const HarvestItems: any = (HarvestData || []);
  const HarvestList: any = [];
  HarvestItems.forEach((HarvestItems: any) => HarvestList.push(
    <IonItem key={HarvestItems.id}>
      <IonLabel> {HarvestItems.partitionLandDetail.landDetail.name}<br></br> {HarvestItems.partitionLandDetail.landDirection} <br></br> {HarvestItems.cost} </IonLabel>      
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditHarvestClick(HarvestItems.id)}></img>      

      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteHarvestClick(HarvestItems.id)} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <div  className="MLand-Lbl">Harvesting List</div>
            <a onClick={() => {
              history.push("/harvestingEditPage/0")
              }}
            className="add-btn">  ADD  </a>
          </div>
          <IonLoading
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}               
              />
          <form className="form">            
            <IonList>
            <div className="scroll">
              {HarvestList}
              </div>
            </IonList>
          </form>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            message={'Successfully Deleted'}
            buttons={['OK']}
          />
          <Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} processDelete={processDelete} message="<strong>Are you sure do you want to delete it?</strong>!!!" />   
        </div>
      </IonContent>     
    </IonPage>
  );
};
const mapStateToProps = (state: any) => {
  const { harvestData } = state;

  return {
    harvestData
  };
};

const Child = withRouter(Harvesting as any);
export default connect(mapStateToProps)(Child);


