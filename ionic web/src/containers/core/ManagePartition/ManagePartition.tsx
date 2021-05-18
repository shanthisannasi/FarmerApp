import { IonItem, IonContent, IonPage, IonList, IonAlert,  IonVirtualScroll, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
//import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
//import { storeLandDetailData } from '../../../store/actions/LandDetail';
import { getPartitionLandList, deletePartitionLand } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import Confirm from '../../common/Confirm';
//import { CANCEL } from 'redux-saga';
//import PartitionLandData from '../../../store/reducers/PartitionLand/PartitionLand';
//import PartitionLandData from '../../../store/reducers/PartitionLand/PartitionLand';

interface Props extends RouteComponentProps { }

interface IPartitionProps {
  dispatch: Dispatch<any>;
  PartitionLandData: any;
  route: RouteComponentProps;
  //LandDetailData: any;  
}

const ManagePartition: React.SFC<IPartitionProps & RouteComponentProps> = ({ dispatch, PartitionLandData, history }) => {


  React.useEffect(() => {
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
    setShowLoading(true);
  }, []);
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [partitionLand, setPartitionLand] = useState();
  const [deleteProcess, setDeleteProcess] = useState(false);
  const onEditPartitionClick = (id: any) => {
    setPartitionLand(id);
    history.push("/managePartitionEdit/" + id);
   // dispatch(savePartitionLand(id));
  }
  const [partInput, setPartrInput] = useState();
  const onDeletePartitionClick = (id:any) => {
    setPartrInput(id);
    setShowConfirm(true); 
  }

  const [PLdata, setPLData] = useState([]);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deletePartitionLand(partInput));
  }
  if (deleteProcess && !PartitionLandData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (PartitionLandData.isLoading===false && isDataLoaded === false) {
    setPLData(PartitionLandData.PLitems);
    setIsDataLoaded(true);
    setShowLoading(false);
  }

  const PLitems: any = (PLdata || []);
  const itemPL: any = [];
  
  
  PLitems.forEach((PLitems: any) => itemPL.push(
    <IonItem key={PLitems.id}>
      <IonLabel> {PLitems.landDirection} </IonLabel>         
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditPartitionClick(PLitems.id)}></img>  
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeletePartitionClick(PLitems.id)} ></img>
    </IonItem>));
 
  return (
    
    <IonPage>
     
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <div  className="MLand-Lbl">Manage Partition </div>
            <a onClick={() => {               
                history.push("/managePartitionEdit/0")
              
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
                {itemPL}
                </div>
                </IonList>           
          </form>

          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}           
            message={'Successfully Deleted'}
            buttons={['OK']}
          />
          <Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} processDelete={processDelete}  message="<strong>Are you sure do you want to delete it?</strong>!!!" />          
          {/* <IonAlert isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            message={'Are you sure want to delete..?'}            
            buttons={[
              {
                text: 'Cancel',
                handler: blah => {

                  //setShowAlert(true),
                  console.log('Confirm Cancel: blah');                  
                }
              },
              {
                text: 'Okay',                
                handler: () => {                  
                  var idvalue = partInput;
                  if (idvalue != null) {
                    dispatch(deletePartitionLand(idvalue));  
                  }                                                   
                  console.log('Confirm Okay');
                }
              }
            ]}
          /> */}
         
        </div> 
      </IonContent>     
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { PartitionLandData } = state;

  return {
    PartitionLandData
  };
};

const Child = withRouter(ManagePartition as any);
export default connect(mapStateToProps)(Child);


