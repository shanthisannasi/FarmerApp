import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonLoading, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { storePestControlData } from '../../../store/actions/PestControl';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getPartitionLandList, getPartitionLandById } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';


interface IPestControlProps {
  dispatch: Dispatch<any>;
  pestControlData: any;
  PartitionLandData: any;
  LandDetailData: any;
}

const PestControlDetails: React.SFC<IPestControlProps> = ({ dispatch, pestControlData, PartitionLandData, LandDetailData }) => {
  React.useEffect(() => {
    setStartDate((startDate))
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, [])
  const [startDate, setStartDate] = useState(new Date());

  const onPestControlSubmit = () => {
    dispatch(storePestControlData(pestControlData.pestControlInput));
  }
  const handleDateChange = (date: any) => {
    setStartDate(date || new Date());
    pestControlData.pestControlInput.pestControlDate = date;
    //date => { setStartDate(date || new Date()) } 
  }

  const handleLandChange = (event: any) => {
    pestControlData.pestControlInput.landDetailId = event.target.value;
    var items = PLitems.filter((item: any) => item.landDetailId == PartitionLandData.partitionLandInput.id);
    //dispatch(getPartitionLandList);
    return items;
  }
  const handlePLChange = (event: any) => {      
      pestControlData.pestControlInput.partitionLandDetailId = event.target.value;   
  };
  const handleCostChange = (event: any) => {
    pestControlData.pestControlInput.cost = event.target.value;
  };
  const handleNameofPestChange = (event: any) => {
    pestControlData.pestControlInput.nameofthePestSide = event.target.value;
  };
  const handleLCChange = (event: any) => {
    pestControlData.pestControlInput.labourCost = event.target.value;
  };
  const handlePurposeChange = (event: any) => {
    pestControlData.pestControlInput.purpose = event.target.value;
  };

  const [PartLandData, setPartLandData] = useState([]);

  if (PartitionLandData.PLitems.length > 0 && PartLandData.length === 0) {
    setPartLandData(PartitionLandData.PLitems);
  }
  const PLitems: any = (PartLandData || []);
  const PLitemLand: any = [];
  PLitems.forEach((PLitems: any) => PLitemLand.push(
   
    <IonItem key={PLitems.id }>
     <IonLabel> {PLitems.landDirection} </IonLabel>
      </IonItem>  ));

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
  //  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
  //    {PLitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={PartitionLandData.PLitems.landDetails}> {data.landDirection} </IonSelectOption> })}
  //  </IonSelect>
  //<IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
  //  {PLitems.filter((v: any) => v.landDetailId ==  pestControlData.pestControlInput.partitionLandDetailId).map(function (data: any) { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection} > {data.landDirection} </IonSelectOption> })}
  //</IonSelect>  

  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Add Pest Control </h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <label> Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handleLandChange}>
                    {Landitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id}  title={data.name}> {data.name} </IonSelectOption> })}
                  </IonSelect>
                  <label> Partition Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
                    {PLitems.map(function (data: any) { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={PartitionLandData.PLitems.landDetails}> {data.landDirection} </IonSelectOption> })}
                  </IonSelect>             
                  Date  <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date: Date) => handleDateChange(date)} className="input-text" />  
                  Name of the PestSide Name<input type="text" placeholder="PestSide Name" className="input-text" onChange={handleNameofPestChange} required />                  
                  Cost <input type="text" placeholder="Pest Cost" className="input-text" onChange={handleCostChange} required />
                  Purpose <input type="text" placeholder="Pest Using Purpose" className="input-text" onChange={handlePurposeChange} required />
                  Labour Cost <input type="text" placeholder="Labour Cost" className="input-text" onChange={handleLCChange} required />
                  
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onPestControlSubmit}> OK </button>

        </div>
        <Footer />
      </footer>
    </IonPage>
  );
};


const mapStateToProps = (state: any) => {
  const { pestControlData, PartitionLandData, LandDetailData } = state;
  return {
    pestControlData, PartitionLandData, LandDetailData
  };
};

export default connect(mapStateToProps)(PestControlDetails);
