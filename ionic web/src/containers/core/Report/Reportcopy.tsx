import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { RouteComponentProps, withRouter } from 'react-router';


const Reportcopy: React.SFC = () => {


  return (
    <IonPage>
      <Header />


      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="AEreg-head">
           Report 
          </div>

          <form className="form">
          <img src="assets/under.jpg"></img>
          </form>
         </div>
      </IonContent> 
      
    </IonPage>
  );
};




export default Reportcopy;

