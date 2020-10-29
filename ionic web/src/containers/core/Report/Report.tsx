import { IonContent, IonHeader, IonPage, IonTitle, IonItemDivider, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface IReportProps {
  dispatch: Dispatch<any>;
  LandDetailData: any;
  route: RouteComponentProps;
   //LandDetailData: any;  
}

const Report: React.SFC<IReportProps & RouteComponentProps> = ({ dispatch, LandDetailData, history }) => {

  React.useEffect(() => {
    dispatch(getLandDetailList());
  }, []);
  //<img src="assets/share.png" height="75" width="75"></img>
  const [LandData, setLandData] = useState([]);

  const [viewReport, setviewReport] = useState();
  const onViewReportClick = (id: any) => {
    setviewReport(id);
    history.push("/viewReports/" + id);
  }

  const [viewAllReport, setviewAllReport] = useState();
  const onViewAllReportClick = (id: any) => {
    setviewAllReport(id);
    history.push("/viewAll/" + id);
  }

  if (LandDetailData.Landitems.length > 0 && LandData.length === 0) {
    setLandData(LandDetailData.Landitems);
  }

  const Landitems: any = (LandData || []);
  const itemLand: any = [];

  Landitems.forEach((Landitems: any) => itemLand.push(
    <IonItem key={Landitems.id}>
      <IonLabel> {Landitems.name} </IonLabel>
      <div > <button onClick={() => onViewReportClick(Landitems.id)}> View </button></div>      
    </IonItem>));

  return (
    <IonPage>
      <Header />


      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <h1>Report </h1>
          </div>

          <form className="form">
          
           <button className="view-btn" onClick={() => onViewAllReportClick(Landitems.id)}> View All </button>
            <img src="assets/share.png" className="share-icon"></img>   
            <IonList>
              <div className="scroll">
                {itemLand}
              </div>
            </IonList>
          </form>
         </div>
      </IonContent> 
      
    </IonPage>
  );
};


const mapStateToProps = (state: any) => {
  const { LandDetailData } = state;

  return {
    LandDetailData
  };
};

const Child = withRouter(Report as any);
export default connect(mapStateToProps)(Child);

