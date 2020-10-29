import * as React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { useState } from 'react';
import { storeLandDetailData } from '../../../store/actions/LandDetail';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getStatelList } from '../../../store/actions/StateList';


interface ILandDetailProps {
  dispatch: Dispatch<any>;
  LandDetailData: any;
  stateListData: any;
}


export const LandDetails: React.SFC<ILandDetailProps> = ({ dispatch, LandDetailData, stateListData}) => { 

  React.useEffect(() => {
    dispatch(getStatelList());
    
  }, [dispatch]);

  const onLandDetailSubmit = () => {
    dispatch(storeLandDetailData(LandDetailData.landDetailInput));
  }


  const handleStateChange = (event: any) => {
    LandDetailData.landDetailInput.StateId = event.target.value;
  }
  const handleCityChange = (event: any) => {
    LandDetailData.landDetailInput.city = event.target.value;
  };
  const handleVillageChange = (event: any) => {
    LandDetailData.landDetailInput.village = event.target.value;
  };
  const handlePattaNoChange = (event: any) => {
    LandDetailData.landDetailInput.pattaNumber = event.target.value;
  };
  const handleSurveyNoChange = (event: any) => {
    LandDetailData.landDetailInput.surveyNumber = event.target.value;
  };
  const handleAreaSizeChange = (event: any) => {
    LandDetailData.landDetailInput.areaSize = event.target.value;
  };
  const handleLandNameChange = (event: any) => {
    LandDetailData.landDetailInput.name = event.target.value;
  };


  const [StateData, setStateData] = useState([]);

  if (stateListData.stateitems.length > 0 && StateData.length === 0) {
    setStateData(stateListData.stateitems);
  }

  const stateitems: any = (StateData || []);
  const StateItemsList: any = [];
  stateitems.forEach((stateitems: any) => StateItemsList.push(
    <IonItem key={stateitems.stateName}>
      <IonLabel> {stateitems.stateName} </IonLabel>
    </IonItem>));

  return (


  <IonPage>
    <Header />
    <IonContent className=".reg-login">
      <div className="bg-image">
        <div className="reg-head">
          <h1>Manage Land Details</h1>
        </div>
        <form className="form">
          <IonRow>
            <IonCol>
                <IonText className="reg-fields">
                  <IonItem >
                  <IonLabel>State</IonLabel>
                    <IonSelect placeholder="Select One" className="dropclr" onIonChange={handleStateChange}>
                      {stateitems.map((data: any) => { return <IonSelectOption value={data.id} key={data.id} title={data.stateName}> {data.stateName } </IonSelectOption> })}
                  </IonSelect>
                  </IonItem>  
                  City <input type="text" placeholder="City" className="input-text" onChange={handleCityChange} required />
                  Village <input type="text" placeholder="Village Name" className="input-text" onChange={handleVillageChange} required />
                  Patta Number <input type="text" placeholder="Land Patta Number" className="input-text" onChange={handlePattaNoChange} required />
                  Survey Number <input type="text" placeholder="Land Survey Number" className="input-text" onChange={handleSurveyNoChange} required />
                  Area Size <input type="text" placeholder="Size of Land" className="input-text" onChange={handleAreaSizeChange} required />
                  Land Name <input type="text" placeholder="Land Name" className="input-text" onChange={handleLandNameChange} required />
              </IonText>
            </IonCol>
          </IonRow>
        </form>
      </div>
    </IonContent>
      <footer className="footcolor" >
        <div>
          <button className="ok-btn" onClick={onLandDetailSubmit}> OK </button>

        </div>
        <Footer />
      </footer>
  </IonPage>
   
  );
};

const mapStateToProps = (state: any) => {
  const { LandDetailData, stateListData } = state;
  return {
    LandDetailData, stateListData
  };
};

export default connect(mapStateToProps)(LandDetails);