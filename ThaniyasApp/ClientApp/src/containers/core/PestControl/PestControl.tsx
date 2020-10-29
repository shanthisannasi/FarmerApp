import { IonItem, IonContent, IonPage, IonList, IonLoading, IonSelectOption, IonLabel, IonSelect, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getPestControlList, deletePestControl } from '../../../store/actions/PestControl';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getLandDetailList } from '../../../store/actions/LandDetail';
interface Props extends RouteComponentProps { }

interface IPestControlProps {
  dispatch: Dispatch<any>;
  pestControlData: any;
  route: RouteComponentProps;
}


const PestControl: React.SFC<IPestControlProps & RouteComponentProps> = ({ dispatch, pestControlData, history }) => {
  React.useEffect(() => {
    dispatch(getPestControlList());
    dispatch(getLandDetailList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);
  const [PestControl, setPestControl] = useState();
  const onEditClick = (id:any) => {
    setPestControl(id);
    history.push("/pestControlEditPage/" + id);
  }
  const [showAlert1, setShowAlert1] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const onDeleteClick = (id: any) => {
    setPestControl(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deletePestControl(PestControl));
  }
  if (deleteProcess && !pestControlData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [showLoading, setShowLoading] = useState(true);

  const [PestControlgData, setPestControlData] = useState([]);

  if (pestControlData.PetsControlItems.length > 0 && PestControlgData.length === 0) {
    setPestControlData(pestControlData.PetsControlItems);
  }
  const PetsControlItems: any = (PestControlgData || []);
  const PetsControlList: any = [];
  PetsControlItems.forEach((PetsControlItems: any) => PetsControlList.push(
    <IonItem key={PetsControlItems.id}>
      <IonLabel> {PetsControlItems.nameofthePestSide} </IonLabel>
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditClick(PetsControlItems.id)}></img>
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteClick(PetsControlItems.id)} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Pest Control List</h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Pest Control Details </label>
              <a className="add-btn" onClick={() => (setShowLoading(true) == history.push("/pestControlEditPage/" + 0))}>  ADD  </a>
              <IonLoading
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}
                duration={2000}
              />
            </IonItem>
            <IonList>
              {PetsControlList}
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
  const { pestControlData } = state;

  return {
    pestControlData
  };
};

const Child = withRouter(PestControl as any);
export default connect(mapStateToProps)(Child);
