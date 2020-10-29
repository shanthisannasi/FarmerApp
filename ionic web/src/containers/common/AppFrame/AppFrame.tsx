//import classnames from 'classnames';
import * as React from 'react';
//import * as styles from './AppFrame.module.scss';
//import Header from '../Header';
//import { createStore } from 'redux';
import Home from '../../core/Home/Home';
//import { Container, Col, Row } from 'reactstrap';
interface IAppFrameProps {
 // children: React.ReactNode;
  isLogged?: boolean;
}
interface IAppFrameState { 
  userName: string;
  sessionTimeOut: number;
  isValid: boolean;
}
//const store = createStore(reducer);
class AppFrame extends React.Component<IAppFrameProps, IAppFrameState> {
  constructor(props:any) {
    super(props);
    this.state = {
      sessionTimeOut: 10,
      isValid: false,
      //isAdmin: false,
      userName: ""
    };
  }

  componentWillMount() {
    const loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString) {
      const loggedInData = JSON.parse(loggedInString);

      if (!loggedInData && !loggedInData.status.statusValue) {
        window.localStorage.setItem('AUTHDATA', "");
        window.location.href = "/login";
      }
      var currentLocation = window.location.pathname;
      if (currentLocation.includes('homes') && (loggedInData.userDetail.isFirstTimeLogin)) {
        window.location.href = "/postlogin";
      }
      this.setState({ userName: loggedInData.userDetail.userName });
    //  this.setState({ isAdmin: loggedInData.userDetail.roleID === 1 });
      if (currentLocation.includes('users')) {
        window.location.href = "/home";
      }
      else {
        this.setState({ isValid: true });
      }
      this.setState({ sessionTimeOut: loggedInData.sessionTimeout });
    }
    else {
      window.location.href = "/login";
    }
  }

 
  public render() {
    const {isLogged } = this.props;  

    return (

      <React.Fragment>
        <div>
          <div style={{ display: `${isLogged ? '' : 'none'}` }}>
            <Home />
          </div>
         </div>
      </React.Fragment>
    );
  }
}

export default AppFrame;
