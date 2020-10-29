import React, { useState } from 'react';
import { IonModal, IonItem, IonButton, IonContent } from '@ionic/react';
//import MyModal from './sample1';
//import LandDetails from './LandDetails';

export const Tab1: React.FC = () => {
  //const [showModal, setShowModal] = useState(false);
  //<IonModal isOpen={showModal}>

  //  <LandDetails />
  //</IonModal>
  //  <IonButton onClick={() => setShowModal(true)}>
  //    Show Modal
  //    </IonButton>
 
  return (
    <IonContent>
      <IonItem>
        <h3> Land Details </h3>
        <h3> Land Details </h3>
        <h3> Land Details </h3>
        <h3> Land Details </h3>
        <h3> Land Details </h3>
      </IonItem>      
    </IonContent>
  );
};

export default Tab1;