import { IonItem, IonContent, IonPage, IonList, IonAlert, IonSelectOption, IonLabel, IonSelect, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { getSaleList,deleteSale } from '../../../store/actions/Sales';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Confirm from '../../common/Confirm';
import { getLandDetailList } from '../../../store/actions/LandDetail';

interface Props extends RouteComponentProps { }

interface ISaleProps {
  dispatch: Dispatch<any>;
  saleData: any;
  route: RouteComponentProps;
}


const Sale: React.SFC<ISaleProps & RouteComponentProps> = ({ dispatch, saleData, history}) => {
  React.useEffect(() => {
    dispatch(getSaleList());
    dispatch(getLandDetailList());
    setShowLoading(true);
  }, []);
  const [showPopover, setShowPopover] = useState(false);
  const [Sale, setSale] = useState()
  const onEditSaleClick = (id:any) => {
    setSale(id);
    history.push("/saleEditPage/" + id);
  }
  const [showLoading, setShowLoading] = useState(false);
  const [showAlert1, setShowAlert1] = useState(false);
  const [saleDel, setSaleDel] = useState();  
  const [showConfirm, setShowConfirm] = useState(false);
  const onDeleteSeedClick = (id: any) => {
    setSaleDel(id);
    setShowConfirm(true);
  }
  const [deleteProcess, setDeleteProcess] = useState(false);
  function processDelete() {
    setDeleteProcess(true);
    dispatch(deleteSale(saleDel));
  }
  if (deleteProcess && !saleData.isFormSubmit) {
    setDeleteProcess(false);
    setShowAlert1(true);
  }

  const [SaleData, setSaleData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (saleData.isLoading===false && isDataLoaded === false) {
    setSaleData(saleData.SaleItems);
    setIsDataLoaded(true);
    setShowLoading(false);
  }
  const SaleItems: any = (SaleData || []);
  const SaleList: any = [];
  SaleItems.forEach((SaleItems: any) => SaleList.push(
    <IonItem key={SaleItems.id}>
      <IonLabel> {SaleItems.buyerName} </IonLabel>
        <img src="assets/Edit.png" height="15" width="15" className="edit-icon" onClick={() => onEditSaleClick(SaleItems.id)}></img>
      <img src="assets/Delete.png" height="23" width="23" className="del-icon" onClick={() => onDeleteSeedClick(SaleItems.id)} ></img>
    </IonItem>));
  return (
    <IonPage>
      <Header />
      <IonContent className=".reg-login">
        <div className="bg-image">
          <div className="reg-head">
            <div className="MLand-Lbl">Sale List </div>
            <a onClick={() => {
            history.push("/saleEditPage/0")
              }}
            className="add-btn">  ADD  </a>
          </div>
          <IonLoading
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Please wait...'}               
              />
          <form className="form">            
            <IonList>
            <div className="scroll">
              {SaleList}
              </div>
            </IonList>
          </form>
          <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}            
            message={'Successfully Deleted'}
            buttons={['OK']}
          />
          <Confirm showConfirm={showConfirm} setShowConfirm={setShowConfirm} processDelete={processDelete} message="<strong>Are you sure do you want to delete it?</strong>!!!" />   
        </div>
      </IonContent>     
    </IonPage>
  );
};

const mapStateToProps = (state: any) => {
  const { saleData } = state;

  return {
    saleData
  };
};

const Child = withRouter(Sale as any);
export default connect(mapStateToProps)(Child);



