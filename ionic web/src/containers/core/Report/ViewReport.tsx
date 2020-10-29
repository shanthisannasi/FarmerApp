import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonGrid, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getViewReportList } from "../../../store/actions/ViewReport";
//import { getPartitionLandById } from "../../../store/actions/PartitionLand";
//import { getPartitionLandById } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';
import viewReportData from '../../../store/reducers/ViewReport/ViewReport';


interface IViewReportProps {
  dispatch: Dispatch<any>;
  getViewReportList1: any; 
  match: any;
  params: any;
  PartitionLandData: any;
  LandDetailData: any;
  viewReportData:any;
}

interface IViewReportState {
  name: any;
  id: 0;
  landDirection : any;  
  income: any;
  purpose: any;
  expense:any;
  ViewReportdata :any;
  }


class ViewReport extends React.Component<IViewReportProps, IViewReportState> {
  constructor(props: any) {
    super(props);

    this.state = {
      ViewReportdata: [],
      name: null,
      id: 0,
      landDirection: null,
      income: null,
      purpose: null,
      expense: null     
    };
  }

  componentWillMount() {
    this.props.getViewReportList1(this.props.match.params.id);
  }

  componentWillReceiveProps(newprops:any) {   
    if (newprops.viewReportData.viewReports) {
      this.setState({  
        ViewReportdata: newprops.viewReportData.viewReports  
        //name: newprops.viewReportData.viewReports.landName,
        //landDirection: newprops.landDirection,
        //income: newprops.state.income,
        //purpose: newprops.state.purpose,
        //expense: newprops.state.expense
      })
    }
  }
  //{this.state.id > 0 && (      )}
  render() {
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="reg-head">
              <h1>View Reports </h1>
            </div>
           
              <form className="Viewform">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <IonGrid>
                        {this.state.ViewReportdata && this.state.ViewReportdata.length > 0 &&
                          <label>{this.state.ViewReportdata[0].landName}</label>
                        }                    
                      <table className="table">
                          <tr>                            
                            <th>Partition</th> 
                            <th>Purpose</th>
                            <th>Inc</th>
                            <th>Exp</th>
                          </tr>
                          { this.state.ViewReportdata && this.state.ViewReportdata.map((report : any, i : any) => 
                             
                                <tr>                                 
                                  <td>{report.partition}</td>
                                  <td>{report.purpose}</td>
                                  <td>{report.income}</td>
                                  <td>{report.expense}</td>                                  
                                </tr> 
                            )
                          }
                        </table>
                      </IonGrid>
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
          
          </div>
        </IonContent>
       </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { LandDetailData, PartitionLandData, viewReportData } = state;

  return {
    LandDetailData, PartitionLandData, viewReportData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getViewReportList1: (id:any) => {
      dispatch(getViewReportList(id));
    },
   
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ViewReport);