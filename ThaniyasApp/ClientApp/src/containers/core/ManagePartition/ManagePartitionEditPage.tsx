import { IonItem, IonContent, IonPage, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Dispatch } from 'redux';
import { getPartitionLandById, storePartitionLandData } from "../../../store/actions/PartitionLand";
import { useDispatch, connect } from 'react-redux';
import { resolveAny } from 'dns';
import { URLSearchParams } from 'url';
import { useLocation } from 'react-router';
import { validatePartiation } from '../../common/FormValidationRules';

interface IPartLandAddEditProps {
  partitionLandInput: any;
  dispatch: Dispatch<any>;
  getPartitionLandById1: any;
  storePartitionLandData1: any;
  PartitionLandData: any;
  match: any;
  params: any;
  LandDetailData: any;

}

interface IPartLandAddEditState {

  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  isSubmitting: boolean;
  selectedLand: any;
  errors: any;    
}

class ManagePartitionEditPage extends React.Component<IPartLandAddEditProps,IPartLandAddEditState> {
  constructor(props : any) {
    super(props);

    this.state = {
      input: this.inputInit,
      isFormSubmited: false,
      isEdit: false,
      selectedLand: {},
      isSubmitting: false,
      errors: {}
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }
  componentWillMount() {
    this.props.getPartitionLandById1(this.props.match.params.id);
    var id = this.props.match.params.id;
    if (id && id !== null && id !== 0 && id !== "0") {
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
  }
  inputInit = {
    landDirection: "",
    areaSize: 0,
    landDetailId: 0,
    id: 0,
    isFormSubmited: false

  };
 
  handleOnsubmit(event: any) {
    event.preventDefault();
    var errors = validatePartiation(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);

  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storePartitionLandData1(values);
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

  componentWillReceiveProps(newProps: any) {
    if (!newProps.PartitionLandData.isFormSubmit) {
      window.location.href = '/managePartitions';
    }
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit });
    }
    else if (newProps.PartitionLandData.PLitem) {

      var item = newProps.PartitionLandData.PLitems.find((x: { id: number; }) => x.id === parseInt(this.props.match.params.id));
      var land = this.getLand(item.landDetailId);

      this.setState({
        input: {

          ...item,
          landDetailId: item.landDetailId,
        },
        selectedLand: land
      });      
    }
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    var errors = validatePartiation(this.state.input);
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

 
    handleLandChange = (event : any) => {      
      var errors = validatePartiation(this.state.input);
      var selectedLand = this.getLand(event.target.value);
      if (this.state) {
        const { input } = this.state;
        this.setState({
          input: {
            ...input,
            landDetailId: event.target.value
          },
          selectedLand: selectedLand
          , errors: errors
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
                 <h1> Add Manage Partition </h1>
               )}
               {this.state.isEdit && (
                 <h1> Edit Manage Partition </h1>
               )}
            </div>            
              <form className="form">
               {this.props.LandDetailData.Landitems && (
                 <IonSelect className="dropclr" onIonChange={this.handleLandChange} value={this.state.input.landDetailId}>
                   {this.props.LandDetailData.Landitems.map((data: any) => { return (< IonSelectOption value={data.id} key={data.id} title={data.name} selected={data.id == this.state.input.landDetailId} > {data.name} </IonSelectOption>) })}
                 </IonSelect>)}
               {this.state.errors.landDetailId && (
                 <p className="help is-danger">{this.state.errors.landDetailId}</p>
               )}
                Land Direction<input type="text" className="input-text" name="landDirection" onChange={this.handleChange} value={this.state.input.landDirection} />
               {this.state.errors.landDirection && (
                 <p className="help is-danger">{this.state.errors.landDirection}</p>
               )}
                Area Size <input type="text" className="input-text" name="areaSize" onChange={this.handleChange} value={this.state.input.areaSize} />
               {this.state.errors.areaSize && (
                 <p className="help is-danger">{this.state.errors.areaSize}</p>
               )}
                </form>            
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
  const { PartitionLandData, LandDetailData} = state;

  return {
    PartitionLandData, LandDetailData
  };
};

const mapDisptchToProps = (dispatch:any) => { 
  return {
    getPartitionLandById1: (id:any) => {
      dispatch(getPartitionLandById(id));
    },
   storePartitionLandData1: (id: any) => {
     dispatch(storePartitionLandData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(ManagePartitionEditPage);
