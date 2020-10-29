import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg, IonFooter } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';
import './Reg.scss';
import Header from '../../common/Header';
import { storeRegData } from '../../../store/actions/Registration';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchLoginData } from '../../../store/actions/Login';

interface ILoginProps {
  dispatch: Dispatch<any>
  loginData: any;
}

const Login: React.SFC<ILoginProps> = ({ dispatch, loginData}) => {

  const onHandleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(fetchLoginData(loginData.loginInput));
  };

  const handleUserNameChange = (event: any) => {
    loginData.loginInput.userName = event.target.value;
  };
  const handlePWDChange = (event: any) => {
    loginData.loginInput.password = event.target.value;
  };

  var isShowError = false;
  const loggedInString = localStorage.getItem('AUTHDATA');
  if (loggedInString) {
    const loggedInData = JSON.parse(loggedInString);
    if (loggedInData) {
      if (loggedInData.status.statusValue) {
        window.location.href = "/home";
      }
    }
  }

  if (loginData && loginData.isFormSubmit && !loginData.isLoading && loginData.status.statusValue) {
    isShowError = false;
    window.localStorage.setItem('AUTHDATA', JSON.stringify(loginData));
    window.location.href = "/home";
  }
  else if (loginData && loginData.isFormSubmit && !loginData.status.statusValue) {
    isShowError = true;
    window.localStorage.setItem('AUTHDATA', "");
  }  

 return (
    <IonPage>    
      <IonContent className="reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Login</h1>
          </div>
         <form className="form" >
            <IonRow>
              <IonCol>
               <IonText className="reg-fields">
                 User Name <input type="text" placeholder="User Name" onChange={handleUserNameChange} className="input-text" required />
                 Password <input type="password" placeholder="Password" onChange={handlePWDChange} className="input-text" required /> 
                 <button className="reg-btn" onClick={onHandleSubmit}> Login </button>
                </IonText>
              </IonCol>
           </IonRow>
           {isShowError && (
             <span>{loginData.action.status.statusDisplay}</span>
           )
           }
          </form>
        </div>
      </IonContent>
      <IonFooter className="footcolor" >
      </IonFooter>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { loginData } = state;
  return {
    loginData
  };
};


export default connect(mapStateToProps)(Login);
