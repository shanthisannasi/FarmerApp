import { IonContent, IonHeader, IonPage, IonSpinner, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { storePartitionLandData } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//import { DropDownList } from '@progress/kendo-react-dropdowns';
//import { StateList } from '../ManageLand/StateList';


interface IPartitionLandProps {
  dispatch: Dispatch<any>;
  PartitionLandData: any;
  LandDetailData: any;
 
}

const ManagePartitionDetails: React.SFC<IPartitionLandProps> = ({ dispatch, PartitionLandData, LandDetailData}) => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
  React.useEffect(() => {
    dispatch(getLandDetailList());
  }, [dispatch]);

  const onPartitionLandSubmit = () => {
    dispatch(storePartitionLandData(PartitionLandData.partitionLandInput));  
  }
  
  const handleLandDiectionChange = (event: any) => {
    PartitionLandData.partitionLandInput.landDirection = event.target.value;
  };
  const handleAreaSizeChange = (event: any) => {
    PartitionLandData.partitionLandInput.areaSize = event.target.value;
  };
  const handleLandNameChange = (event: any) => {
    PartitionLandData.partitionLandInput.landDetailId = event.target.value;
  };
  const [LandData, setLandData] = useState([]);

  if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
    setLandData(LandDetailData.Landitems);
  }
  const Landitems: any = (LandData || []);
  const itemLand: any = [];
  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.name}>
      <IonLabel> {Landitems.name} </IonLabel>
    </IonItem>));
  
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Manage Partition Details</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <IonItem>
                    <label> Land Name </label>
                   
                    <IonSelect className="dropclr" placeholder="Select One" onIonChange={handleLandNameChange}>                       
                      {Landitems.map((data: any) => { return <IonSelectOption  value={data.id} key={data.id} title={data.name}> {data.name} </IonSelectOption> })}
                    </IonSelect>                 
                  </IonItem>
                  Land Direction <input type="text" placeholder="Land direction" className="input-text" onChange={handleLandDiectionChange} required />                 
                  Area Size <input type="text" placeholder="Size of Land" className="input-text" onChange={handleAreaSizeChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onPartitionLandSubmit}> OK </button>
        </div>
        <Footer />
      </footer>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { PartitionLandData, LandDetailData } = state;
  return {
    PartitionLandData, LandDetailData
  };
};


export default connect(mapStateToProps)(ManagePartitionDetails);
