import { IonContent, IonHeader, IonPage, IonAlert, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg, withIonLifeCycle } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { storeHarvestData  } from '../../../store/actions/Harvestings';
import { getPartitionLandList, getPartitionLandById } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';


interface IHarvestProps {
  harvestData: any;
  dispatch: Dispatch<any>;
  PartitionLandData: any;
  LandDetailData: any;
}


const HarvestDetails: React.SFC<IHarvestProps> = ({ harvestData, dispatch, PartitionLandData, LandDetailData }) => {

  React.useEffect(() => {
    setStartDate((startDate))
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, [])

  const onHarvestSubmit = () => {
    dispatch(storeHarvestData(harvestData.harvestInput));
  }

  const handleDateChange = (date: any) => {
    setStartDate(date || new Date());
    harvestData.harvestInput.date = date;
    //date => { setStartDate(date || new Date()) } 
  }

  

  const [startDate, setStartDate] = useState(new Date());
 // const [partitionData, setPartitionData] = useState([]);
  const handleLandChange = (event: any) => {
    harvestData.harvestInput.landDetailId = event.target.value;
   // var items = PLitems.filter((item: any) => item.landDetailId == event.target.value);
    //dispatch(getPartitionLandById(Landitems.id)); 
  };
  const handlePLChange = (event: any) => {
        harvestData.harvestInput.partitionLandDetailId = event.target.value;
  };
  const handleCostChange = (event: any) => {
    harvestData.harvestInput.cost = event.target.value;
  };
  const handleNOLChange = (event: any) => {
    harvestData.harvestInput.noOfLabours = event.target.value;
  };
  const handleLCChange = (event: any) => {
    harvestData.harvestInput.labourCost = event.target.value;
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

    //<label> Partition Land Name </label>
                  //<IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
                  //  {PLitems.filter((item:any) => item.landDetailId == 1).map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection}> {data.landDirection} </IonSelectOption> })}
                  //</IonSelect>


  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Add Harvesting </h1>
          </div>
          <form className="form" onSubmit={onHarvestSubmit} >
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
                  Cost <input type="text" placeholder="Harevest total Cost" className="input-text" onChange={handleCostChange} required />
                  NO of Labours <input type="text" placeholder="No of working Labours " className="input-text" onChange={handleNOLChange} required />
                  Labour Cost <input type="text" placeholder="Working Labour Cost" className="input-text" onChange={handleLCChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>         
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onHarvestSubmit}> OK </button>

        </div>
        <div>
          <button className="cancel-btn"> CANCEL </button>
        </div>
      </footer>
    </IonPage>

  );
};

const mapStateToProps = (state: any) => {
  const { harvestData, PartitionLandData, LandDetailData } = state;
  return {
    harvestData, PartitionLandData, LandDetailData
  };
};

export default connect(mapStateToProps)(HarvestDetails);
