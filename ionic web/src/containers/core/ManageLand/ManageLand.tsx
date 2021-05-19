import { IonItem, IonContent, IonPage, IonList, IonAlert, IonPopover, IonSelectOption, IonLabel, IonSelect, IonVirtualScroll, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Confirm from '../../common/Confirm';
import Footer from '../../common/Footer';
import { getLandDetailList, deleteLand } from '../../../store/actions/LandDetail';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { IonicImageLoader, ImgLoaderComponent, ImageLoader } from 'ionic-image-loader';

import { createBrowserHistory } from "history";
//import { __RouterContext as RouterContext, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface ILandDetailProps {
  dispatch: Dispatch<any>;
  LandDetailData: any;
  route: RouteComponentProps;
  //LandDetailData: any;  
}


const ManageLand: React.FunctionComponent<ILandDetailProps & RouteComponentProps> = ({ dispatch, LandDetailData, history }) => {
  useEffect(() => {   
    dispatch(getLandDetailList());
    setShowLoading(true);
  }, []);
  //var history = createBrowserHistory();
  const [deleteProcess, setDeleteProcess] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  // <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
  //const onaddClick = () => {
    //alert("Edit");
   // window.location.href ="/landDetails";
   // setShowModal(true);
    //isShowAddEditModal: true;
    //setShowModal(false);
  //<button onClick={() => onaddClick}> add  </button>
  //}
   

  const [Land, setLand] = useState();
  const onEditLandClick = (id: any) => {   
    setLand(id);   
    history.push("/landDetailEditPage/" + id+".Edit");
  }

  const onViewLandClick = (id: any) => {   
    setLand(id);   
    history.push("/landDetailEditPage/" + id+".View");
  }


  const [showAlert1, setShowAlert1] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [LandInput, setLandInput] = useState();
  const onDeleteLnadClick = (id: any) => {    
    setLandInput(id);
    setShowConfirm(true);
  }

  function processDelete() {
    setDeleteProcess(true);
    dispatch(deleteLand(LandInput));    
  }
  if (deleteProcess && !LandDetailData.isFormSubmit) {
    setDeleteProcess(false);    
    setShowAlert1(true);   
    setTimeout(() => {
      
    },1000) ;
     
  }
  const [LandData, setLandData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (LandDetailData.isLoading===false && isDataLoaded === false) {
    setLandData(LandDetailData.Landitems);
    setIsDataLoaded(true);
    setShowLoading(false);
  }

  
  const Landitems: any = (LandData || []);
  const itemLand: any = [];
  const img = new Image();
  //img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
  //img.onload = function() {
    //alert(img.clientWidth + 'x' + img.clientHeight);
    //console.log("img.clientWidth"+img.width+"img.clientHeight"+img.height+"imageObject.width");
  //}
  
  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.id}>
     
      <a  onClick={() => onViewLandClick(Landitems.id)}>
         <IonLabel> {Landitems.name} <br></br>
                    {Landitems.pattaNumber}<br></br>
                    {Landitems.city}<br></br>
                    {Landitems.notes} </IonLabel>  
         </a>
      <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditLandClick(Landitems.id)}></img>
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteLnadClick(Landitems.id)} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <div className="MLand-Lbl"> Manage Land </div>
                 
              <a onClick={() =>
              {
                history.push("/landDetailEditPage/" + 0);              
               
              }}
                className="add-btn">ADD</a>
           
          </div>
          <IonLoading
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}               
              />
          <form className="form">
     
  
            <IonList>
              <div className="scroll">
                {itemLand}
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
        </div>
      </IonContent>    
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { LandDetailData } = state;

  return {
    LandDetailData
  };
};
const Child = withRouter(ManageLand as any);
export default connect(mapStateToProps)(Child);
