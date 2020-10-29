import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import * as React from 'react';
//import './Reg.scss';
import HomeHeader from '../../common/HomeHeader';
import { Http } from "../../../utils/Http";

interface IHomeProps {
  //sessionTimeout: number;
  //login: any;
  //loginData: any;
 // userName: string;
 // isAdmin: boolean;
}

interface IHeaderState {
  dropdownOpen: boolean;
  dropdownUsersOpen: boolean;
  dropdownLogoutOpen: boolean;
  islocalTimerStart: boolean;
  isTimeOutCalled: boolean;
  CHECK_INTERVAL: number;

}

class Home extends React.Component<IHomeProps, IHeaderState>{
  //constructor(props:any) {
  //  super(props);
  //  this.state = {
  //    dropdownOpen: false,
  //    dropdownUsersOpen: false,
  //    dropdownLogoutOpen: false,
  //    islocalTimerStart: false,
  //    isTimeOutCalled: false,
  //    CHECK_INTERVAL: 60000,  
  //  };  
  //}
  //select() {
  //  window.localStorage.setItem('AUTHDATA', "");
  //  window.location.href = "/login";
  //}
  //initInterval() {
  //  setInterval(() => {
  //    this.check();
  //  }, this.state.CHECK_INTERVAL);
  //}


  //check() {
  //  const loggedInString = localStorage.getItem('AUTHDATA');
  //  if (loggedInString) {
  //    const loggedInData = JSON.parse(loggedInString);
  //    Http.axios().get('/Account/CheckIsCurrentUserValid?userName=' + this.props.userName)
  //      .then((e) => {
  //        var results = e.data;
  //        if (results.status.statusValue === true) {
  //          if (this.state.isTimeOutCalled === true && this.state.islocalTimerStart === false) {
  //            this.setState({ islocalTimerStart: true });
  //            this.initInterval();
  //          }
  //        }
  //        else {
  //          window.location.href = "/login";
  //        }
  //      })
  //  }
  //}
     
   
    // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
 public render() {
  return (
    <IonPage>
      <HomeHeader />
      <IonContent className=".reg-login">
        <div className="bg-image">         
          <form className="form">
            <IonRow>
              <IonCol className="h-img">
                <a href="manageLands">
                  <img src="assets/ManageLand.png" height="75" width="75"></img>                
                  Manage Land
                </a>   
              </IonCol>
              <IonCol className="h-img">
                <a href="managePartitions">
                  <img src="assets/ManagePartition.png" height="75" width="75"></img>Manage Partition
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="plowings">
                  <img src="assets/Plowing.png" height="75" width="75"></img>Plowing
                </a>  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="h-img">
                <a href="seedings">
                  <img src="assets/Seeding.png" height="75" width="75"></img>Seeding
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="pestControls">
                  <img src="assets/PestControl.png" height="75" width="75"></img>Pest Control
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="weedRemoves">
                  <img src="assets/WeedRemove.png" height="75" width="75"></img>Weed Remove
                </a>  
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="h-img">
                <a href="harvestings">
                  <img src="assets/Harvesting.png" height="75" width="75"></img>Harvesting
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="sales">
                  <img src="assets/Sale.png" height="75" width="75"></img>Sale
                </a>  
              </IonCol>
              <IonCol className="h-img">
                <a href="reports">
                  <img src="assets/Report.png" height="75" width="75"></img>Report
                </a>  
              </IonCol>              
            </IonRow>
          </form>
        </div>
      </IonContent>
    </IonPage>
    );
  }
}
export default Home;
