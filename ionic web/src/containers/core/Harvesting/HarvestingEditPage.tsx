import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonText, IonList, IonItem, IonInput, IonCheckbox, IonLabel, IonButton, IonNote, IonBadge, IonRow, IonCol, IonGrid, IonImg, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getHarvestById, storeHarvestData } from "../../../store/actions/Harvestings";
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Footer from '../../common/Footer';
import moment from 'moment';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { validateHarvesting } from '../../common/FormValidationRules';

interface IHarvestAddEditProps {
  //partitionLandInput: any;
  dispatch: Dispatch<any>;
  getHarvestById1: any;
  storeHarvestData1: any;
  harvestData: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;
  getLandDetails: any;

}

interface IHarvestLandAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  selectedLand: any;
  partitionList: any;
  isSubmitting: boolean;
  errors: any;
}

class HarvestingEditPage extends React.Component<IHarvestAddEditProps, IHarvestLandAddEditState> {

  constructor(props:any) {
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
  // harvestData: {},
  landDetailId: 0,
  partitionLandDetailId: 0,
  cost: 0,
  noOfLabours: 0,
  notes: "", 
  labourCost: 0,
  id: 0,
  date: new Date()
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
    if(newProps.harvestData.isHarvestExist)
    {
      this.setState({ isFormSubmited: false });
      alert("Given land name exist");
      return;
    }
    if (!newProps.harvestData.isFormSubmit && !newProps.harvestData.isFormSubmit) {
      this.setState({ isFormSubmited: false });
      window.location.href = '/harvestings';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (this.state.isEdit && newProps.harvestData.HarvestItems) {
      var item = newProps.harvestData.HarvestItems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
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
  setDate(dateValue: any) {
    if (this.state) {
      const { input } = this.state;
      this.setState({
        input: {
          ...input,
          date: dateValue
        }
      });
    }
  }


  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validateHarvesting(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);
  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storeHarvestData1(values);
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
    var errors = validateHarvesting(this.state.input);
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
    var errors = validateHarvesting(this.state.input);
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
    var errors = validateHarvesting(this.state.input);
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
              <div>  Add Harvesting </div>
            )}
            {this.state.isEdit && (
              <div>  Edit Harvesting </div>
            )}
          </div>
          <IonLoading
                isOpen={this.state.isFormSubmited}
                message={'Please wait...'}               
              />
          <form className="form AddEditScroll">
            <IonRow>
              <IonCol>
                  <IonText className="reg-fields">
                    <label> Land Name </label>
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
                    <IonRow> Date </IonRow><IonRow> <DatePicker selected={moment(this.state.input.date).toDate()} dateFormat="dd/MM/yyyy" onChange={(date) => this.setDate(date)} className="input-text" /> </IonRow>
                    {this.state.errors.date && (
                      <p className="help is-danger">{this.state.errors.date}</p>
                    )}
                    Cost <input type="text" name="cost" className="input-text" onChange={this.handleChange} value={this.state.input.cost} />
                    {this.state.errors.cost && (
                      <p className="help is-danger">{this.state.errors.cost}</p>
                    )}
                    NO of Labours <input type="text" name="noOfLabours" className="input-text" onChange={this.handleChange} value={this.state.input.noOfLabours} />
                    {this.state.errors.noOfLabours && (
                      <p className="help is-danger">{this.state.errors.noOfLabours}</p>
                    )}
                    Labour Cost <input type="text" name="labourCost" className="input-text" onChange={this.handleChange} value={this.state.input.labourCost} />
                    {this.state.errors.labourCost && (
                      <p className="help is-danger">{this.state.errors.labourCost}</p>
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
}

const mapStateToProps = (state: any) => {
  const { harvestData, LandDetailData  } = state;

  return {
    harvestData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetails: () => {
      dispatch(getLandDetailList());
    },
    getHarvestById1: (id: any) => {
      dispatch(getHarvestById(id));
    },
    storeHarvestData1: (obj: any) => {
      dispatch(storeHarvestData(obj));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(HarvestingEditPage);