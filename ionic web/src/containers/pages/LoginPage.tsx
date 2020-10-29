import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonText, IonButton, IonImg } from '@ionic/react';
import React from 'react';
//import '../theme/Login.css';

const LoginPage: React.FC = (props) => {

 const onAddFriendClick = () => {
   alert("Login");
  }
  //<IonImg className="title-img" src="assets/capacitor.png" ></IonImg>
  return (
    <IonPage>
    
      <IonContent className="text-center">
        <div className="login-box"> 
          <div className="title">
            <IonRow>
              <IonCol >
                <IonText className="login-head">
                  Member Login
                </IonText>
              </IonCol>
            </IonRow>
          </div>
          <IonRow>
            <IonCol >
              <IonText>
                <input type="text" placeholder="User Name" className="input-text" required />
                <input type="password" placeholder="Password" className="input-text" required />
              </IonText>
            </IonCol>
          </IonRow>
          <IonButton className="login-button" expand="block" fill="solid" color="light" onClick={onAddFriendClick}>
            Login 
          </IonButton>
         </div>
      </IonContent>
       
    </IonPage>
    );
}

export default LoginPage;