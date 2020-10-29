import { IonHeader, IonSelect, IonSelectOption, IonLabel, IonBackButton, IonIcon, IonRow, IonCol} from '@ionic/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { HttpLocal } from '../../utils/Http';
//import { withRouter } from 'react-router-dom';
//import { createBrowserHistory } from 'history';
import { Plugins } from '@capacitor/core';
import "@codetrix-studio/capacitor-google-auth";

interface Props extends RouteComponentProps { }

interface IHeaderProps {  
  route: RouteComponentProps;
  //sessionTimeout: number;
  //login: any;
 // loginData: any;
 // userName: string;
  //LandDetailData: any;  
}

const Header: React.SFC<IHeaderProps & RouteComponentProps> = ({ history ,location,match,route}) => {
 // const BrowserHistory = require('react-router/lib/BrowserHistory').default;
 // onClick = { BrowserHistory.goBack }
  const clickLogout = () => {
    //this.props.login.dispatch(fetchLogout());
    // HttpLocal.axios().get('/Login/SignOutbyClient')
    //   .then((e) => {
    //     var results = e.data;
    //     window.localStorage.setItem('AUTHDATA', "");
    //     window.location.href = "/login";
    //   })
    //   .catch((e) => {
    //   })
    window.localStorage.setItem('AUTHDATA', "");
    signOut();
        window.location.href = "/login";
  }

  async function signOut(): Promise<void> {    
    try{
    await Plugins.GoogleAuth.signOut();  
    }
    catch(e){
      console.error(e);
    }  
  }
  React.useEffect(() => {
    const loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString && loggedInString!=="" && loggedInString!==null) {
      
    }
    else{
      window.location.href = "/login";
    }
  });

  function goBack(){    
    var old=document.referrer;    
    const previousPath =window.document.referrer;//location.state.from.pathname
    if (previousPath.indexOf('Edit') > -1){
      window.location.href = "/home";      
  } else {    
    history.goBack();
  }
  }
  return (   
    <IonHeader className="headcolor">
       <IonRow>
              <IonCol className="h-img">
              <img src="assets/backarrow.png" height="20" onClick={goBack} className="arrow"></img> 
              </IonCol>
              <IonCol className="logout-img">             
              <img src="assets/logouticon.png" height="40" onClick={clickLogout}></img>
              </IonCol>
        </IonRow>
    
        {/* <img src="assets/backarrow.png" height="20" onClick={history.goBack} className="arrow"></img>
      
      <img src="assets/Logocropped.png" height="40" onClick={()=>{window.location.href = "home";}} className="logo" ></img>
      <img src="assets/searchicon.png" height="20" className="search" ></img> */}
      {/* <IonSelect placeholder="Language" className="drop" >
        <IonSelectOption value="english" selected={true}>English</IonSelectOption>
        <IonSelectOption value="tamil">Tamil</IonSelectOption>
      </IonSelect> */}
      {/* <IonIcon name="log-out" onClick={clickLogout}></IonIcon> */}
      {/* <button onClick={clickLogout} className="Logout"> Logout </button> */}
    </IonHeader>
  );
};

//const mapStateToProps = (state: any) => {
//  const { loginData } = state;
//  return {
//    loginData
//  };
//};

const Child = withRouter(Header as any);
export default Child;


