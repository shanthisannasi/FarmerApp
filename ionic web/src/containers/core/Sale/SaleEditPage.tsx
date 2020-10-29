import { IonItem, IonContent, IonText, IonPage, IonRow, IonCol, IonSelect,IonSelectOption, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getSaleById, storeSaleData } from "../../../store/actions/Sales";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { validateSale } from '../../common/FormValidationRules';

interface ISaleAddEditProps {
  dispatch: Dispatch<any>;
  getSaleById1: any;
  storeSaleData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  saleData: any;
  LandDetailData: any;
  getLandDetails: any;

}

interface ISaleAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  selectedLand: any;
  partitionList: any;
  isSubmitting: boolean;
  errors: any;
  
}

class SaleEditPage extends React.Component<ISaleAddEditProps, ISaleAddEditState> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      input: this.inputInit,
      isFormSubmited: false,
      isEdit: false,
      selectedLand: {},
      partitionList: [],
      isSubmitting: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }


  inputInit = {
    id: 0,
    saleDate: new Date(),
    quantity: 0,
    price: 0,
    buyerName: "",
    buyerMobileNumber: "",
    landDetailId: 0,
    partitionLandDetailId: 0,
    notes: "", 
  };


  componentWillMount() {
    var id = this.props.match.params.id;
    if (this.props.LandDetailData.Landitems) {
      if (this.props.LandDetailData.Landitems.length === 0) {
        this.props.getLandDetails();
      }
    }
    if (id && id !== null && id !== 0 && id !== "0") {
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
  }

  componentWillReceiveProps(newProps: any) {

    if (!newProps.saleData.isFormSubmit) {
      window.location.href = '/sales';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (this.state.isEdit && newProps.saleData.SaleItems) {
      var item = newProps.saleData.SaleItems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
      if (item !== null && item) {
        var land = this.getLand(item.partitionLandDetail.landDetailId);

        this.setState({
          input: {

            ...item,
            landDetailId: item.partitionLandDetail.landDetailId,
            partitionLandDetailId: item.partitionLandDetailId,
          },
          selectedLand: land,
          partitionList: land.partitionLandDetails
        });
      }
    }
  }
  setDate(dateValue: any) {
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          saleDate: dateValue
        }
      });
    }
  }


  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validateSale(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);
  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storeSaleData1(values);
    }
  }
  getLand(id: any) {
    if (this.props.LandDetailData.Landitems.length > 0) {
      var item = this.props.LandDetailData.Landitems.find((x: { id: any; }) => x.id === id);
      return item;
    }
    return null;
  }
  handleLandChange = (event: any) => {
    var errors = validateSale(this.state.input);
    var selectedLand = this.getLand(event.target.value);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          landDetailId: event.target.value,
          partitionLandDetailId:0
        },
        selectedLand: selectedLand,
        partitionList: selectedLand.partitionLandDetails
        , errors: errors
      });
    }
  }

  handlePLChange = (event: any) => {
    var errors = validateSale(this.state.input);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          partitionLandDetailId: event.target.value
        }
        , errors: errors
      });
    }
  }


  handleChange(event: any) {
    const { name, value } = event.target;
    var errors = validateSale(this.state.input);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          [name]: value
        },
        errors: errors
      });
    }
  }

  render() {
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="AEreg-head">              
              {!this.state.isEdit && (
                <div>  Add Sale </div>
              )}
              {this.state.isEdit && (
                <div>  Edit Sale </div>
              )}
            </div>   
            <IonLoading
                isOpen={this.state.isFormSubmited}
                onDidDismiss={() => this.setState({ isFormSubmited: false })}
                message={'Please wait...'}               
              />         
            <form className="form AddEditScroll">
              <IonRow>
                <IonCol>
                    <IonText className="reg-fields">
                    <label> Land  NameName
                       </label>
                    {this.props.LandDetailData.Landitems && (
                      <IonSelect className="dropclr" onIonChange={this.handleLandChange} value={this.state.input.landDetailId}>
                        {this.props.LandDetailData.Landitems.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.state.input.landDetailId} > {data.name} </IonSelectOption>) })}
                      </IonSelect>)}
                    {this.state.errors.landDetailId && (
                      <p className="help is-danger">{this.state.errors.landDetailId}</p>
                    )}
                    <label> Partition Land Name </label>
                    <IonSelect className="dropclr" onIonChange={this.handlePLChange} value={this.state.input.partitionLandDetailId}>
                      {this.state.partitionList.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.state.input.partitionLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                    </IonSelect>
                    {this.state.errors.landDetailId && (
                      <p className="help is-danger">{this.state.errors.landDetailId}</p>
                    )}
                    <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.input.saleDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>      
                    {this.state.errors.landDetailId && (
                      <p className="help is-danger">{this.state.errors.landDetailId}</p>
                    )}
                      Quantity <input type="number" name="quantity" className="input-text" onChange={this.handleChange} value={this.state.input.quantity} required />
                    {this.state.errors.quantity && (
                      <p className="help is-danger">{this.state.errors.quantity}</p>
                    )}
                      Price <input type="number" name="price" className="input-text" onChange={this.handleChange} value={this.state.input.price} required />
                    {this.state.errors.price && (
                      <p className="help is-danger">{this.state.errors.price}</p>
                    )}
                      Buyer Name <input type="text" name="buyerName" className="input-text" onChange={this.handleChange} value={this.state.input.buyerName} required />
                    {this.state.errors.buyerName && (
                      <p className="help is-danger">{this.state.errors.buyerName}</p>
                    )}
                      Buyer Mobile Number <input type="text" name="buyerMobileNumber" className="input-text" onChange={this.handleChange} value={this.state.input.buyerMobileNumber} required />
                    {this.state.errors.buyerMobileNumber && (
                      <p className="help is-danger">{this.state.errors.buyerMobileNumber}</p>
                    )}
                     Notes <textarea name="notes" className="input-text" onChange={this.handleChange} value={this.state.input.notes} />
                    {this.state.errors.notes && (
                      <p className="help is-danger">{this.state.errors.notes}</p>
                    )}
                  </IonText>
                </IonCol>
              </IonRow>
              </form>
          </div>
        </IonContent>
        <footer className="footcolor" >
        <Footer />
            <button className="ok-btn" onClick={this.handleOnsubmit}> SAVE </button>
        </footer>
      </IonPage>
    );
     
  }

};

const mapStateToProps = (state: any) => {
  const { saleData, LandDetailData } = state;

  return {
    saleData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetails: () => {
      dispatch(getLandDetailList());
    },
    getSaleById1: (id: any) => {
      dispatch(getSaleById(id));
    },
    storeSaleData1: (id: any) => {
      dispatch(storeSaleData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(SaleEditPage);