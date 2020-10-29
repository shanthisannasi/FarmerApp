import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { useState } from "react";
import { storeSeedData } from '../../../store/actions/Seedings';
import { getPartitionLandList } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface ISeedProps {
  dispatch: Dispatch<any>;
  seedData: any;
  PartitionLandData: any;
  LandDetailData: any;
}

const SeedingDetails: React.SFC<ISeedProps> = ({ dispatch, seedData, PartitionLandData, LandDetailData}) => {
  // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  

  React.useEffect(() => {
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, [])

  const onSeedSubmit = () => {
    dispatch(storeSeedData(seedData.seedInput));
  }

  const handleLandChange = (event: any) => {
    seedData.seedInput.landDetailId = event.target.value;
  }
  const handlePLChange = (event: any) => {
    seedData.seedInput.partitionLandDetailId = event.target.value;
  };
  const handleQuantityChange = (event: any) => {
    seedData.seedInput.quantity = event.target.value;
  };
  const handleSeedNameChange = (event: any) => {
    seedData.seedInput.seedName = event.target.value;
  };
  const handleSeedCostChange = (event: any) => {
    seedData.seedInput.seedCost = event.target.value;
  };
  const handleNOLChange = (event: any) => {
    seedData.seedInput.noOfLabours = event.target.value;
  };
  const handleLCChange = (event: any) => {
    seedData.seedInput.labourCost = event.target.value;
  };

  const [PartLandData, setPartLandData] = useState([]);

  if (PartitionLandData.PLitems.length > 0 && PartLandData.length === 0) {
    setPartLandData(PartitionLandData.PLitems);
  }
  const PLitems: any = (PartLandData || []);
  const PLitemLand: any = [];
  PLitems.forEach((PLitems: any) => PLitemLand.push(
    <IonItem key={PLitems.id}>
      <IonLabel> {PLitems.landDirection} </IonLabel>
    </IonItem>));

  const [LandData, setLandData] = useState([]);

  if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
    setLandData(LandDetailData.Landitems);
  }
  const Landitems: any = (LandData || []);
  const itemLand: any = [];
  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.id}>
      <IonLabel> {Landitems.name} </IonLabel>
    </IonItem>));


  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Add Seeding </h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <label> Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handleLandChange}>
                    {Landitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.name}> {data.name} </IonSelectOption> })}
                  </IonSelect>
                  <label> Partition Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
                    {PLitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={PartitionLandData.PLitems.landDetails}> {data.landDirection} </IonSelectOption> })}
                  </IonSelect>
                  Quantity <input type="text" placeholder="Seeding Quantity" className="input-text" onChange={handleQuantityChange} required />
                  Seed Name <input type="text" placeholder="Seed Name" className="input-text" onChange={handleSeedNameChange} required />
                  Seed Cost <input type="text" placeholder="Seed Cost" className="input-text" onChange={handleSeedCostChange} required />
                  NO of Labours <input type="text" placeholder="No of working Labours" className="input-text" onChange={handleNOLChange} required />
                  Labour Cost <input type="text" placeholder="Working Labours Cost" className="input-text" onChange={handleLCChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onSeedSubmit}> OK </button>

        </div>
        <Footer />
      </footer>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { seedData, PartitionLandData, LandDetailData } = state;
  return {
    seedData, PartitionLandData, LandDetailData
  };
};


export default connect(mapStateToProps)(SeedingDetails);
