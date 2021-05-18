import { IonItem, IonContent, IonPage, IonAlert, IonSelectOption, IonLabel, IonSelect, IonList, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getWeedRemoveList, deleteWeedRemove } from '../../../store/actions/WeedRemove';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface Props extends RouteComponentProps { }

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  weedRemoveData: any;
  route: RouteComponentProps;
}

const WeedRemove: React.SFC<IWeedRemoveProps & RouteComponentProps> = ({ dispatch, weedRemoveData, history}) => {

  React.useEffect(() => {
    dispatch(getWeedRemoveList());
    dispatch(getLandDetailList());
    setShowLoading(true);
  }, []);
  const [showPopover1, setShowPopover1] = useState(false);
  // <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
  //const onaddClick = () => {
  //alert("Edit");
  // window.location.href ="/landDetails";
  // setShowModal(true);
  //isShowAddEditModal: true;
  //setShowModal(false);
  //<button onClick={() => onaddClick}> add  </button>
  //}
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [weedRemoveDel, setWeedRemoveDel] = useState();
  
  const [showConfirm, setShowConfirm] = useState(false);
  const onDeleteWeedRemoveClick = (id: any) => {
    setWeedRemoveDel(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deleteWeedRemove(weedRemoveDel));
  }
  if (deleteProcess && !weedRemoveData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [WeedRemove, setWeedRemove] = useState();
  const onEditWeedRemoveClick = (id:any) => {
    setWeedRemove(id);
    history.push("/weedRemoveEditPage/" + id);
  }

  const [WeedData, setWeedRemoveData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (weedRemoveData.isLoading===false && isDataLoaded === false) {
    setWeedRemoveData(weedRemoveData.WeedItems);
    setIsDataLoaded(true);
    setShowLoading(false);
  }

  //{deleted == true && (
   // {WeeditemLandList}
   // )}

  const WeedItems: any = (WeedData || []);
  const WeeditemLandList: any = [];
  WeedItems.forEach((WeedItems: any) => WeeditemLandList.push(
    <IonItem key={WeedItems.id}>
      <IonLabel>  {WeedItems.partitionLandDetail.landDetail.name} <br></br> {WeedItems.partitionLandDetail.landDirection} <br></br> {WeedItems.cost} </IonLabel>  

        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditWeedRemoveClick(WeedItems.id)}></img>
     
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteWeedRemoveClick(WeedItems.id)} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <div className="MLand-Lbl">Weed Remove List </div>
            <a onClick={() => {
            history.push("/weedRemoveEditPage/0")
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
           
              {WeeditemLandList}
             
              </div>
            </IonList>
           
          </form>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            // header={'Alert'}
            // subHeader={'Subtitle'}
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
  const { weedRemoveData } = state;

  return {
    weedRemoveData
  };
};

const Child = withRouter(WeedRemove as any);
export default connect(mapStateToProps)(Child);

