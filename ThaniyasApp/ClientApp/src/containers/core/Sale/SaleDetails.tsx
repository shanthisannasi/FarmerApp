import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { storeSaleData } from "../../../store/actions/Sales";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getPartitionLandList } from '../../../store/actions/PartitionLand';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface ISaleProps {
  dispatch: Dispatch<any>;
  saleData: any;
  PartitionLandData: any;
  LandDetailData: any;
}

const SaleDetails: React.SFC<ISaleProps> = ({ dispatch, saleData, PartitionLandData, LandDetailData}) => {
  React.useEffect(() => {
    setStartDate((startDate))
    dispatch(getPartitionLandList());
    dispatch(getLandDetailList());
  }, [])
  const [startDate, setStartDate] = useState(new Date());
 // Date < DatePicker selected = { startDate } onChange = { date => { setStartDate(date || new Date()) }} className = "input-text" />
  const onSaleSubmit = () => {
    dispatch(storeSaleData(saleData.saleInput));
  }

  const handleDateChange = (date: any) => {
    setStartDate(date || new Date());
    saleData.saleInput.saleDate = date;
  }

  const handleLandNameChange = (event: any) => {
    saleData.saleInput.landDetailId = event.target.value;
  }
  const handlePLChange = (event: any) => {
    saleData.saleInput.partitionLandDetailId = event.target.value;
  };
  const handleQuantityChange = (event: any) => {
    saleData.saleInput.quantity = event.target.value;
  };
  const handlePriceChange = (event: any) => {
    saleData.saleInput.price = event.target.value;
  };
  const handleBNChange = (event: any) => {
    saleData.saleInput.buyerName = event.target.value;
  };

  const handleMBChange = (event: any) => {
    saleData.saleInput.buyerMobileNumber = event.target.value;
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
            <h1>Add Sale</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  <label> Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handleLandNameChange}>
                    {Landitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.name}> {data.name} </IonSelectOption> })}
                  </IonSelect>
                  <label> Partition Land Name </label>
                  <IonSelect placeholder="Select One" className="dropclr" onIonChange={handlePLChange}>
                    {PLitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={PartitionLandData.PLitems.landDetails}> {data.landDirection} </IonSelectOption> })}
                  </IonSelect>
                  Date  <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date: Date) => handleDateChange(date)} className="input-text" />                    
                  Quantity <input type="text" placeholder="Material Quantity" className="input-text" onChange={handleQuantityChange} required />
                  Price <input type="text" placeholder="Material Price" className="input-text" onChange={handlePriceChange} required />
                  Buyer Name <input type="text" placeholder="Buyer Name" className="input-text" onChange={handleBNChange} required />
                  Buyer Mobile Number <input type="text" placeholder="Buyer Phone number" className="input-text" onChange={handleMBChange} required />
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onSaleSubmit}> OK </button>

        </div>
        <Footer />
      </footer>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { saleData, PartitionLandData, LandDetailData } = state;
  return {
    saleData, PartitionLandData, LandDetailData
  };
};

export default connect(mapStateToProps)(SaleDetails);
