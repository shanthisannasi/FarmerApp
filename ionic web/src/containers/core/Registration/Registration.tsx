import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow,IonCol, IonGrid, IonImg, IonFooter } from '@ionic/react';
import * as React from 'react';
import { useState } from 'react';
import './Reg.scss';
import Header from '../../common/Header';
import { storeRegData } from '../../../store/actions/Registration';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
//import MediaQuery  from 'react-responsive';
//import '../theme/app.core.scss';
//import '../../src/images';
//import '../../public/assets';

interface IRegProps {
  dispatch: Dispatch<any>;
  regData: any;
}

const Registration: React.SFC<IRegProps> = ({ dispatch, regData}) => {
  
  //const [formSubmit, setformSubmit] = useState(false);
  //React.useEffect(() => {
  //  setformSubmit(false);
  //}, []);

  const onHandleSubmit = () => {
     dispatch(storeRegData(regData.regInput));
    //window.location.href = '/login';
  }


  const handleNameChange = (event: any) => {
    regData.regInput.userName = event.target.value;
  };

  const handleMobileNumberChange = (event: any) => {
    regData.regInput.mobileNumber = event.target.value;
  };

  const handleEmailChange = (event: any) => {
    regData.regInput.email = event.target.value;
  };
  const handlePWDChange = (event: any) => {
    regData.regInput.password = event.target.value;
  };

  //const handleSumbit = () => {
  //  window.location.href = "/home";
  //}

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

  if (regData && regData.isFormSubmit && regData.status.statusValue) {
    isShowError = false;
    window.localStorage.setItem('AUTHDATA', JSON.stringify(regData));
    window.location.href = "/home";
  }
  else if (regData && regData.isFormSubmit && !regData.status.statusValue) {
    isShowError = true;
    window.localStorage.setItem('AUTHDATA', "");
  }
   return (
    <IonPage>       
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Registration</h1>
          </div> 
          {isShowError && (
            <span>{regData.status.statusDisplay}</span>
          )
          }
          <form className="form" >
            <IonRow>
            <IonCol>
                <IonText className="reg-fields">
                  User Name <input type="text" placeholder="Peter" className="input-text" onChange={handleNameChange} required />
                  Password <input type="password" placeholder="Password" className="input-text" onChange={handlePWDChange} required />
                  Mobile Number <input type="text" placeholder="12345 67890" className="input-text" onChange={handleMobileNumberChange} required />
                   Email <input type="text" placeholder="peter@gmailx.com" className="input-text" onChange={handleEmailChange} required />
                   <label className="or-lbl">or</label> <br/>
                   <a href="/login" className="login">
                     Login </a>
                 </IonText>                
              </IonCol>
             </IonRow>           
          </form>        
        </div>
      </IonContent>
      <div className="footcolor" >
        <button className="reg-btn" onClick={onHandleSubmit}> Submit </button>
      </div>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { regData } = state;
  return {
    regData
  };
};

export default connect(mapStateToProps)(Registration);
