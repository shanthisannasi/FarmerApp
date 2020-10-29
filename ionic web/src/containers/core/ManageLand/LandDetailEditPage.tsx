import { IonItem, IonContent, IonPage,IonText,IonCol,IonRow, IonList, IonNote, IonPopover, IonSelectOption, IonLabel, IonSelect, IonLoading, isPlatform } from '@ionic/react';
import React, { useState } from 'react';
//import './Reg.scss';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { validateLandDetails} from '../../common/FormValidationRules';
import { Dispatch } from 'redux';
import { getLandDetailById, storeLandDetailData } from "../../../store/actions/LandDetail";
//import { getStatelList } from "../../../store/actions/StateList";
import { useDispatch, connect } from 'react-redux';
import { getStatelList } from '../../../store/actions/StateList';
import { RouteComponentProps } from 'react-router';





interface ILandAddEditProps {
  dispatch: Dispatch<any>;
  getLandDetailById1: any;
  storeLandDetailData1: any;
  getStates: any;
  LandDetailData: any;  
  stateListData: any;
  match: any;
  params: any;
}

interface ILandAddEditState {
  input: any;
  isFormSubmited: boolean;
  isEdit: boolean;
  isSubmitting: boolean;
  errors: any;
}

class LandDetailEditPage extends React.Component<ILandAddEditProps & RouteComponentProps, ILandAddEditState> {
  constructor(props: any) {
    super(props);
   
    this.state = {
      input: this.inputInit,
      isFormSubmited: false,
      isEdit: false,      
      isSubmitting: false,      
      errors: {}
    };    
    this.handleChange = this.handleChange.bind(this);
    this.handleOnsubmit = this.handleOnsubmit.bind(this);
  }

  inputInit = {
    id: 0,
    StateId: 0,
    selectedStateListId: 0,
    city: "",
    village: "",
    pattaNumber: 0,
    areaSize: 0.0,
    notes: "",
    name: "",
    isFormSubmited: false,
    surveyNumber: 0
  };
  
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getStates();
    if (id && id !== null && id !== 0 && id !== "0") {
      this.props.getLandDetailById1(this.props.match.params.id);
      this.setState({ isEdit: true });
    }
    else {
      this.setState({ isEdit: false });
    }
  }

  componentWillReceiveProps(newProps: any) {
    if(this.state.isFormSubmited && newProps.LandDetailData.isLandNameExist)
    {
      this.setState({ isFormSubmited: false });
      alert("Given land name exist");
      return;
    }
    if (this.state.isFormSubmited && !newProps.LandDetailData.isFormSubmit) {
      this.setState({ isFormSubmited: false });
      window.location.href = '/manageLands';
      //this.props.history.push('/manageLands');
    }
    var id = this.props.match.params.id;
    if (!this.state.isEdit) {
      this.setState({ input: this.inputInit});
    }
    else if (this.state.isEdit && newProps.LandDetailData.LandItem) {
      this.setState({
        input: {
          ...newProps.LandDetailData.LandItem,
          StateId: newProps.LandDetailData.LandItem.selectedStateListId
        },
        //input.StateId: newProps.LandDetailData.LandItem.selectedStateListId,
       // state: newProps.LandDetailData.Landitems.state
      })
    }
  }

  handleOnsubmit(event: any) {
    event.preventDefault();        
    var errors = validateLandDetails(this.state.input);
    this.setState({ isSubmitting: true, errors: errors });
    this.processSave(this.state.input, errors, true);    
  }

  processSave(values: any, errors: any, isSubmit: boolean) {
    console.log(values);
    if (Object.keys(errors).length === 0 && isSubmit) {
      this.setState({ isFormSubmited: true });
      this.props.storeLandDetailData1(values);
    }    
  }

  handleChange(event: any) {
    const { name, value } = event.target;
    var errors = validateLandDetails(this.state.input);
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

  handleStateChange = (event: any) => {
    const { input } = this.state;
    this.setState({
      input:       
      { 
        ...input,
        StateId: event.target.value }
    });
  }

  render() {    
    return (
      <IonPage>
        <Header />
        <IonContent className=".reg-login">
          <div className="bg-image">
            <div className="AEreg-head">
              {!this.state.isEdit && (
                 <div> Add Land Detail </div>
              )}
              {this.state.isEdit && (
                <div>  Edit Land Detail </div>
              )}
            </div>
            <IonLoading
                isOpen={this.state.isFormSubmited}
                onDidDismiss={() => this.setState({ isFormSubmited: false })}
                message={'Please wait...'}               
              />
            {this.state.input && this.state.input !== null && (
              <form className="form AddEditScroll">
                <IonRow>
                  <IonCol>
                    <IonText className="reg-fields">
                      <IonLabel>State</IonLabel>
                      <IonItem >
                        {this.props.stateListData.stateitems.length > 0 && (
                          <IonSelect placeholder="Select One" className="dropclr" onIonChange={this.handleStateChange} value={this.state.input.StateId}>
                            {this.props.stateListData.stateitems.map((data: any) => {
                              return <IonSelectOption value={data.id}  key={data.id} title={data.stateName}
                                selected={data.id == this.state.input.StateId}> {data.stateName} </IonSelectOption>
                            })}
                          </IonSelect>
                        )}
                        {this.state.errors.StateId && (
                          <p className="help is-danger">{this.state.errors.StateId}</p>
                        )}
                      </IonItem>
                      Land Name <input type="text" name="name" className={`input-text ${this.state.errors.email && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.name} required />
                      {this.state.errors.name && (
                        <p className="help is-danger">{this.state.errors.name}</p>
                      )}
                      Patta Number <input type="text" name="pattaNumber" className={`input-text ${this.state.errors.email && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.pattaNumber} required />
                      {this.state.errors.pattaNumber && (
                        <p className="help is-danger">{this.state.errors.pattaNumber}</p>
                      )}
                      Survey Number <input type="text" name="surveyNumber" className={`input-text ${this.state.errors.surveyNumber && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.surveyNumber} required />
                      {this.state.errors.surveyNumber && (
                        <p className="help is-danger">{this.state.errors.surveyNumber}</p>
                      )}
                      
                      Area Size (By Acre)<input type="number"  name="areaSize" className={`input-text ${this.state.errors.email && 'is-danger'}` } onChange={this.handleChange} value={this.state.input.areaSize} />
                     
                      {this.state.errors.areaSize && (
                        <p className="help is-danger">{this.state.errors.areaSize}</p>
                      )}
                      City <input type="text" name="city" className={`input-text ${this.state.errors.email && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.city} required />
                      {this.state.errors.city && (
                        <p className="help is-danger">{this.state.errors.city}</p>
                      )}
                      Village <input type="text" name="village" className={`input-text ${this.state.errors.email && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.village} required />
                      {this.state.errors.village && (
                        <p className="help is-danger">{this.state.errors.village}</p>
                      )}

                      Notes <textarea name="notes" className={`input-text ${this.state.errors.email && 'is-danger'}`} onChange={this.handleChange} value={this.state.input.notes} required />
                      {this.state.errors.notes && (
                        <p className="help is-danger">{this.state.errors.notes}</p>
                      )}
                                                                  
                    </IonText>
                  </IonCol>
                </IonRow>
              </form>
            )}
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
  const { LandDetailData, stateListData } = state;

  return {
    LandDetailData, stateListData
  };
};

const mapDisptchToProps = (dispatch: any) => {
  return {
    getLandDetailById1: (id: any) => {
      dispatch(getLandDetailById(id));
      dispatch(getStatelList());
    },
    getStates: (id: any) => {
      dispatch(getStatelList());
    },
    storeLandDetailData1: (id: any) => {
      dispatch(storeLandDetailData(id));
    }
  };
};

export default connect(mapStateToProps, mapDisptchToProps)(LandDetailEditPage);