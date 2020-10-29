import { IonItem, IonContent, IonPage, IonRow, IonCol, IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getPlowingById, storePlowingData } from "../../../store/actions/Plowing";
import { useDispatch, connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import Footer from '../../common/Footer';
import { validatePlowingDetails } from '../../common/FormValidationRules';

interface IPlowingAddEditProps {
  dispatch: Dispatch<any>;
  getPlowingById1: any;
  storePlowingData1: any;
  plowingData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IPlowingAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  selectedLand: any;
  partitionList: any;
  isSubmitting: boolean;
  errors: any;
}

class PlowingEditPage extends React.Component<IPlowingAddEditProps, IPlowingAddEditState> {
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
    landDetailId: 0,
    partitionLandDetailId: 0,
    plowingDate: new Date(),
    typeofPlowing: "",
    plowingExp: "", 

  };

  componentWillMount() {
    var id = this.props.match.params.id;
    if (id && id !== null && id !== 0 && id !== "0") {
      //this.props.getPlowingById1(this.props.match.params.id);
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
    
  }

  componentWillReceiveProps(newProps: any) {
    if (!newProps.plowingData.isFormSubmit) {
      window.location.href = '/plowings';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (this.state.isEdit && newProps.plowingData.PlowingItems) {
      var item = newProps.plowingData.PlowingItems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
      var land = this.getLand(item.partitionLandDetail.landDetailId);
      
      this.setState({
        input: {

          ...item,
          landDetailId: item.partitionLandDetail.landDetailId,
          partitionLandDetailId: item.partitionLandDetailId,
        },
        selectedLand: land,
        partitionList: land.partitionLandDetails
        //input.StateId: newProps.LandDetailData.LandItem.selectedStateListId,
        // state: newProps.LandDetailData.Landitems.state
      });
    }    
  }

  setDate(dateValue: any) {
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          plowingDate: dateValue
        }

      });
    }    
  }


  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validatePlowingDetails(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);

  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storePlowingData1(values);
    }
  }
  getLand(id: any) {
    if (this.props.LandDetailData.Landitems.length > 0) {
      var item = this.props.LandDetailData.Landitems.find((x: { id: any; }) => x.id === id);
      //setLandData(LandDetailData.Landitems);
      return item;
    }
    return null;
  }
  handleLandChange = (event: any) => {
    var errors = validatePlowingDetails(this.state.input);
    var selectedLand = this.getLand(event.target.value);
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          landDetailId: event.target.value
        },
        selectedLand: selectedLand,
        partitionList: selectedLand.partitionLandDetails
        , errors: errors
      });
    }    
  }

  handlePLChange = (event: any) => {
    var errors = validatePlowingDetails(this.state.input);
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
    var errors = validatePlowingDetails(this.state.input);
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
            <div className="reg-head">              
              {!this.state.isEdit && (
                <h1>  Add Plowing </h1>
              )}
              {this.state.isEdit && (
                <h1>  Edit Plowing </h1>
              )}
            </div>
            {this.state.input !== null && this.state.input  && (
            <form className="form">
              <IonRow>
                <IonCol>
                  <IonText className="reg-fields">
                    <label> Land Name </label>                    
                      <IonSelect className="dropclr" onIonChange={this.handleLandChange} value={this.state.input.landDetailId}>
                        {this.props.LandDetailData.Landitems.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.state.input.landDetailId} > {data.name} </IonSelectOption>) })}
                      </IonSelect>
                      {this.state.errors.landDetailId && (
                        <p className="help is-danger">{this.state.errors.landDetailId}</p>
                      )}
                    <label> Partition Land Name </label>                    
                      <IonSelect className="dropclr" onIonChange={this.handlePLChange} value={this.state.input.partitionLandDetailId}>
                        {this.state.partitionList.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.landDirection} selected={data.id == this.state.input.partitionLandDetailId} > {data.landDirection} </IonSelectOption>) })}
                      </IonSelect>
                      {this.state.errors.partitionLandDetailId && (
                        <p className="help is-danger">{this.state.errors.partitionLandDetailId}</p>
                      )}
                      <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.input.plowingDate).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>
                      {this.state.errors.plowingDate && (
                        <p className="help is-danger">{this.state.errors.plowingDate}</p>
                      )}
                      Type of Plowing <input type="text" name="typeofPlowing" className="input-text" onChange={this.handleChange} value={this.state.input.typeofPlowing} required />
                      {this.state.errors.typeofPlowing && (
                        <p className="help is-danger">{this.state.errors.typeofPlowing}</p>
                      )}
                      Plowing Expenses <input type="text" name="plowingExp" className="input-text" onChange={this.handleChange} value={this.state.input.plowingExp} required />
                      {this.state.errors.plowingExp && (
                        <p className="help is-danger">{this.state.errors.plowingExp}</p>
                      )}
                  </IonText>
                </IonCol>
              </IonRow>
              </form>
            )}
          </div>
        </IonContent>
        <footer className="footcolor" >
          <div>
            <button className="ok-btn" onClick={this.handleOnsubmit}>SAVE </button>
          </div>
          <Footer />
        </footer>
      </IonPage>
    );
  }

};

const mapStateToProps = (state: any) => {
  const { plowingData, LandDetailData } = state;

  return {
    plowingData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getPlowingById1: (id: any) => {
      dispatch(getPlowingById(id));
    },
    storePlowingData1: (id: any) => {
      dispatch(storePlowingData(id));
    }
  };
};


export default connect(mapStateToProps, mapDisptchToProps)(PlowingEditPage);