import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getSeedList, deleteSeed } from '../../../store/actions/Seedings';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface Props extends RouteComponentProps { }

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  seedData: any;
  route: RouteComponentProps;
}


const Seeding: React.SFC<IWeedRemoveProps & RouteComponentProps> = ({ dispatch, seedData, history }) => {

  React.useEffect(() => {
    dispatch(getSeedList());
    dispatch(getLandDetailList());
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  // <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
  //const onaddClick = () => {
  //alert("Edit");
  // window.location.href ="/landDetails";
  // setShowModal(true);
  //isShowAddEditModal: true;
  //setShowModal(false);
  //<button onClick={() => onaddClick}> add  </button>
  //}
  const [Seed, setSeed] = useState();
  const onEditSeedClick = (id:any) => {
    setSeed(id);
    history.push("/seedEditPage/" + id);
  }

  const [showAlert1, setShowAlert1] = useState(false);
  const [idDel, setDel] = useState();  

  const [showConfirm, setShowConfirm] = useState(false);
  const onDeleteSeedClick = (id: any) => {
    setDel(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deleteSeed(idDel));
  }
  if (deleteProcess && !seedData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [SeedData, setSeedData] = useState([]);

  if (seedData.Seeditems.length > 0 && SeedData.length === 0) {
    setSeedData(seedData.Seeditems);
  }
  const Seeditems: any = (SeedData || []);
  const SeedList: any = [];
  Seeditems.forEach((Seeditems: any) => SeedList.push(
    <IonItem key={Seeditems.id}>
      <IonLabel> {Seeditems.seedName} </IonLabel>
     
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSeedClick(Seeditems.id)}></img>
    
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick(Seeditems.id)} ></img>
    </IonItem>));


  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Seeding List </h1>
          </div>

          <form className="form">
            <IonItem className="MLand-Lbl">
              <label className="lbl"> Seeding Details </label>
              <a onClick={() => {

                history.push("/seedEditPage/0")
              }}

                className="add-btn">  ADD  </a>
            </IonItem>
            <IonList>
              {SeedList}
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
  const { seedData } = state;

  return {
    seedData
  };
};

const Child = withRouter(Seeding as any);
export default connect(mapStateToProps)(Child);

