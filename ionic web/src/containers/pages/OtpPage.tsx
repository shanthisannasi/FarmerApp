import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
import Header from '../common/Header';

const OtpPage: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Registration</h1>
          </div>
          <form className="form">
            <IonRow>
              <IonCol>
                <IonText className="reg-fields">
                  OTP Number <input type="text" placeholder="xxxxx" className="input-text" required />
                  <button className="reg-btn"> Verify </button>
                </IonText>
              </IonCol>
            </IonRow>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default OtpPage;
