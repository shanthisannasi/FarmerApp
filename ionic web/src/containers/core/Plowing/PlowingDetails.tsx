import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { storePlowingData } from '../../../store/actions/Plowing';
import { getPartitionLandList } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface IPlowProps {
  dispatch: Dispatch<any>;
  plowingData: any;
  PartitionLandData: any;
  LandDetailData: any;
}

const PlowingDetails: React.SFC<IPlowProps> = ({ dispatch, plowingData, PartitionLandData, LandDetailData}) => {
  React.useEffect(() => {
    setStartDate((startDate))
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, [])
  const [startDate, setStartDate] = useState(new Date());

  const onPlowingSubmit = () => {
    dispatch(storePlowingData(plowingData.plowingInput));
  }

  const handleLandChange = (event: any) => {
    plowingData.plowingInput.landDetailId = event.target.value;
  }
  const handlePLChange = (event: any) => {
    plowingData.plowingInput.partitionLandDetailId = event.target.value;
  };
  const handleTypeofPlowChange = (event: any) => {
    plowingData.plowingInput.typeofPlowing = event.target.value;
  };
  const handlePlowEXPChange = (event: any) => {
    plowingData.plowingInput.plowingExp = event.target.value;
  };

  const handleDateChange = (date: any) => {  
    setStartDate(date || new Date());
    plowingData.plowingInput.plowingDate = date;
    //date => { setStartDate(date || new Date()) } 
  }

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
            <h1>Add Plowing </h1>
          </div>
          <form className="form" onSubmit={onPlowingSubmit}>
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
                  Type of Plowing <input type="text" placeholder="Plowing type" className="input-text" onChange={handleTypeofPlowChange} required />
                  Date  <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date: Date) => handleDateChange(date)} className="input-text" />  
                  Plowing Expenses <input type="text" placeholder="Plowing Expenses" className="input-text" onChange={handlePlowEXPChange} required />
                  <div className="footcolor" >                    
                      <button className="ok-btn"> OK </button>                   
                    <Footer />
                  </div>
                </IonText>
              </IonCol>
            </IonRow>       
          </form>
          </div>         
      </IonContent>  
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { plowingData, PartitionLandData, LandDetailData } = state;
  return {
    plowingData, PartitionLandData, LandDetailData
  };
};

export default connect(mapStateToProps)(PlowingDetails);
