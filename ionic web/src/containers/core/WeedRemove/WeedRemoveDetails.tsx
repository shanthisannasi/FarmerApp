import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { storeWeedRemoveData } from '../../../store/actions/WeedRemove';
import { getPartitionLandList } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IWeedRemoveProps {
  dispatch: Dispatch<any>;
  weedRemoveData: any;
  PartitionLandData: any;
  LandDetailData: any;
 // landDetails: any;
}

const WeedRemoveDetails: React.SFC<IWeedRemoveProps> = ({ dispatch, weedRemoveData, PartitionLandData, LandDetailData }) => {
  React.useEffect(() => {
    setStartDate((startDate))
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());

  }, [])
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date: any) => {   
    setStartDate(date || new Date());
    weedRemoveData.weedRemoveInput.date = date;
     //date => { setStartDate(date || new Date()) } 
  }
  const onWeedRemoveSubmit = () => {
    dispatch(storeWeedRemoveData(weedRemoveData.weedRemoveInput));
  }

  const handleLandChange = (event: any) => {
    weedRemoveData.weedRemoveInput.landDetailId = event.target.value;
  }
  const handlePLChange = (event: any) => {
    weedRemoveData.weedRemoveInput.partitionLandDetailId = event.target.value;
  };
  const handleCostChange = (event: any) => {
    weedRemoveData.weedRemoveInput.cost = event.target.value;
  };
  const handleNOLChange = (event: any) => {
    weedRemoveData.weedRemoveInput.noOfLabours = event.target.value;
  };
  const handleLCChange = (event: any) => {
    weedRemoveData.weedRemoveInput.labourCost = event.target.value;
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
            <h1>Add Weed Remove </h1>
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
                  Date  <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date: Date) => handleDateChange(date)} className="input-text" />  
                  Labour Cost <input type="text" placeholder="Working Labours Cost" className="input-text" onChange={handleLCChange} required />
                  Cost <input type="text" placeholder="Weed Removing Cost" className="input-text" onChange={handleCostChange} required />
                  NO of Labours <input type="text" placeholder="No of working Labours" className="input-text" onChange={handleNOLChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onWeedRemoveSubmit}> OK </button>

        </div>
         <Footer />
      </footer>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { weedRemoveData, PartitionLandData, LandDetailData} = state;
  return {
    weedRemoveData, PartitionLandData, LandDetailData
  };
};

export default connect(mapStateToProps)(WeedRemoveDetails);
