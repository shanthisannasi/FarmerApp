import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getPlowingList, deletePlowing } from '../../../store/actions/Plowing';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getPartitionLandList } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface Props extends RouteComponentProps { }

interface IPlowingProps {
  dispatch: Dispatch<any>;
  plowingData: any;
  LandDetailData: any;
  route: RouteComponentProps;
}


const Plowing: React.SFC<IPlowingProps & RouteComponentProps> = ({ dispatch, plowingData, LandDetailData, history }) => {
  React.useEffect(() => {
    dispatch(getPlowingList());
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, []);

  const [showPopover, setShowPopover] = useState(false);

  const [Plowing, setPlowing] = useState();
  const onEditPlowingClick = (id:any) => {
    setPlowing(id);
    history.push("/plowingEditPage/" + id);
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [weedRemoveDel, setWeedRemoveDel] = useState();
  const [showConfirm, setShowConfirm] = useState(false);
  const onDeletePlowingClick = (id: any) => {
    setWeedRemoveDel(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deletePlowing(weedRemoveDel));
  }
  if (deleteProcess && !plowingData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [PlowingData, setPlowingData] = useState([]);

  if (plowingData.PlowingItems.length > 0 && PlowingData.length === 0) {
    setPlowingData(plowingData.PlowingItems);
  }
  const PlowingItems: any = (PlowingData || []);
  const PlowingList: any = [];
  PlowingItems.forEach((PlowingItems: any) => PlowingList.push(
    <IonItem key={PlowingItems.id}>
      <IonLabel> {PlowingItems.typeofPlowing} </IonLabel>     
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditPlowingClick(PlowingItems.id)}></img>      
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeletePlowingClick(PlowingItems.id)} ></img>
    </IonItem>));

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Plowing List </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Plowing Details </label>
              <a onClick={() => {

                history.push("/plowingEditPage/" + 0)
              }}

                className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {PlowingList}
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
  const { plowingData, LandDetailData } = state;

  return {
    plowingData, LandDetailData
  };
};

const Child = withRouter(Plowing as any);
export default connect(mapStateToProps)(Child);
