import { IonItem, IonContent, IonPage, IonRow,IonCol,IonText, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect, IonLoading } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import { Dispatch } from 'redux';
import { getSeedById, storeSeedData } from "../../../store/actions/Seedings";
import { useDispatch, connect } from 'react-redux';
import Footer from '../../common/Footer';
import { getLandDetailList } from '../../../store/actions/LandDetail';
import { validateSeeding } from '../../common/FormValidationRules';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


interface ISeedAddEditProps {
  dispatch: Dispatch<any>;
  getSeedById1: any;
  storeSeedData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  seedData: any;
  LandDetailData: any;
  getLandDetails: any;
}

interface ISeedAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  selectedLand: any;
  partitionList: any;
  isSubmitting: boolean;
  errors: any;
  
}


class SeedEditPage extends React.Component<ISeedAddEditProps, ISeedAddEditState> {
  
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
    quantity: 0,
    seedName: "",
    seedCost: 0,
    noOfLabours: 0,
    labourCost: 0,
    notes: "",
    date: new Date(),
    id: 0,
    landDetailId: 0,
    partitionLandDetailId: 0,
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
    if(newProps.seedData.isSeedExist)
    {
      this.setState({ isFormSubmited: false });
      alert("Given land name exist");
      return;
    }
    if (!newProps.seedData.isFormSubmit && !newProps.seedData.isFormSubmit) {
      window.location.href = '/seedings';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (this.state.isEdit && newProps.seedData.Seeditems) {
      var item = newProps.seedData.Seeditems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
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
          date: dateValue
        }
      });
    }
  }


  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validateSeeding(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);
  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storeSeedData1(values);
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
    var errors = validateSeeding(this.state.input);
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
    var errors = validateSeeding(this.state.input);
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
    var errors = validateSeeding(this.state.input);
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
                <div>  Add Seeding </div>
              )}
              {this.state.isEdit && (
                <div>  Edit Seeding </div>
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
                      Quantity <input type="number" name="quantity" className="input-text" onChange={this.handleChange} value={this.state.input.quantity} />
                    {this.state.errors.quantity && (
                      <p className="help is-danger">{this.state.errors.quantity}</p>
                    )}
                      Seed Name <input type="text" name="seedName" className="input-text" onChange={this.handleChange} value={this.state.input.seedName} />
                    {this.state.errors.seedName && (
                      <p className="help is-danger">{this.state.errors.seedName}</p>
                    )}
                      Seed Cost <input type="number" name="seedCost" className="input-text" onChange={this.handleChange} value={this.state.input.seedCost} />
                    {this.state.errors.seedCost && (
                      <p className="help is-danger">{this.state.errors.seedCost}</p>
                    )}
                      NO of Labours <input type="number" name="noOfLabours" className="input-text" onChange={this.handleChange} value={this.state.input.noOfLabours} />
                    {this.state.errors.landDetailId && (
                      <p className="help is-danger">{this.state.errors.landDetailId}</p>
                    )}
                      Labour Cost <input type="number" name="labourCost" className="input-text" onChange={this.handleChange} value={this.state.input.labourCost} />
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

};


const mapStateToProps = (state: any) => {
  const { seedData, LandDetailData } = state;

  return {
    seedData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetails: () => {
      dispatch(getLandDetailList());
    },
    getSeedById1: (id: any) => {
      dispatch(getSeedById(id));
    },
    storeSeedData1: (id: any) => {
      dispatch(storeSeedData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(SeedEditPage);