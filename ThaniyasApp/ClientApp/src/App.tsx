import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import Home from './pages/Home';
//import FirstPage from './pages/FirstPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
//import './theme/variables.css';
import OtpPage from './containers/pages/OtpPage';
import LoginPage from './containers/pages/LoginPage';
import FirstPage from './containers/pages/FirstPage';
import Registrations from './containers/pages/Registrations/Registrations';
import ManageLands from './containers/pages/ManageLands/ManageLands';
import ManagePartitions from './containers/pages/ManagePartitions/ManagePartitions';
import Plowings from './containers/pages/Plowings/Plowings';
import Seedings from './containers/pages/Seedings/Seedings';
import PestControls from './containers/pages/PestControls/PestControls';
import WeedRemoves from './containers/pages/WeedRemoves/WeedRemoves';
import Harvestings from './containers/pages/Harvestings/Harvestings';
import Sales from './containers/pages/Sales/Sales';
import Homes from './containers/pages/Homes/Homes';
import Reports from './containers/pages/Reports/Reports';
import Tab1 from './containers/core/ManageLand/sample';
import LandDetails from './containers/core/ManageLand/LandDetails';
import HarvestDetails from './containers/core/Harvesting/HarvestDetails';
import ManagePartitionDetails from './containers/core/ManagePartition/ManagePartitionDetails';
import PestControlDetails from './containers/core/PestControl/PestControlDetails';
import PlowingDetails from './containers/core/Plowing/PlowingDetails';
import SaleDetails from './containers/core/Sale/SaleDetails';
import SeedingDetails from './containers/core/Seeding/SeedingDetails';
import WeedRemoveDetails from './containers/core/WeedRemove/WeedRemoveDetails';
import ManagePartitionEditPage from './containers/core/ManagePartition/ManagePartitionEditPage';
import HarvestingEditPage from './containers/core/Harvesting/HarvestingEditPage';
import SaleEditPage from './containers/core/Sale/SaleEditPage';
import WeedRemoveEditPage from './containers/core/WeedRemove/WeedRemoveEditPage';
import SeedEditPage from './containers/core/Seeding/SeedEditPage';
import LandDetailEditPage from './containers/core/ManageLand/LandDetailEditPage';
import PestControlEditPage from './containers/core/PestControl/PestControlEditPage';
import PlowingEditPage from './containers/core/Plowing/PlowingEditPage';
import Login from './containers/core/Registration/Login';
import { AppFrame } from './containers/common/AppFrame/intex';
import ViewReport from './containers/core/Report/ViewReport';

interface IAppProps {
}
interface IAppState {
  isLogged?: boolean;
}
class App extends React.Component<IAppProps> {
  public state = {
    isLogged: false
  };

  public constructor(props: any) {
    super(props);
  }


  componentWillMount() {
    const loggedInString = localStorage.getItem('AUTHDATA');
if (loggedInString) {
  const loggedInData = JSON.parse(loggedInString);
  this.setState({ isLogged: loggedInData.status.statusValue });
}
  }
   // <AppFrame isLogged={this.state.isLogged}> 
 public render() {
  return (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/registrations" component={Registrations} exact={true} />
          <Route path="/otpPage" component={OtpPage} exact={true} />
          <Route path="/login" component={Login} exact={true} />
                  <Route exact path="/" render={() => <Redirect to="/login" />} />
          
            <Route path="/home" component={Homes} exact={true} /> 
            
            <Route path="/manageLands" component={ManageLands} exact={true} />
            <Route path="/landDetails" component={LandDetails} exact={true} />
            <Route path="/landDetailEditPage/:id" component={LandDetailEditPage} exact={true} />
            <Route path="/tab1" component={Tab1} exact={true} />        
            <Route path="/managePartitions" component={ManagePartitions} exact={true} />
            <Route path="/managePartitionDetails" component={ManagePartitionDetails} exact={true} />
            <Route path="/managePartitionEdit/:id" component={ManagePartitionEditPage} exact={true} />
            <Route path="/plowings" component={Plowings} exact={true} />
            <Route path="/plowingDetails" component={PlowingDetails} exact={true} />
            <Route path="/plowingEditPage/:id" component={PlowingEditPage} exact={true} />
            <Route path="/seedings" component={Seedings} exact={true} />
            <Route path="/seedingDetails" component={SeedingDetails} exact={true} />
            <Route path="/seedEditPage/:id" component={SeedEditPage} exact={true} />
            <Route path="/pestControls" component={PestControls} exact={true} />
            <Route path="/pestControlDetails" component={PestControlDetails} exact={true} />
            <Route path="/pestControlEditPage/:id" component={PestControlEditPage} exact={true} />
            <Route path="/weedRemoves" component={WeedRemoves} exact={true} />
            <Route path="/weedRemoveDetails" component={WeedRemoveDetails} exact={true} />
            <Route path="/weedRemoveEditPage/:id" component={WeedRemoveEditPage} exact={true} />
            <Route path="/harvestings" component={Harvestings} exact={true} />
            <Route path="/harvestDetails" component={HarvestDetails} exact={true} />
            <Route path="/harvestingEditPage/:id" component={HarvestingEditPage} exact={true} />
            <Route path="/sales" component={Sales} exact={true}/>
            <Route path="/saleDetails" component={SaleDetails} exact={true} />
            <Route path="/saleEditPage/:id" component={SaleEditPage} exact={true} />
            <Route path="/reports" component={Reports} exact={true} />        
            <Route path="/loginpage" component={LoginPage} exact={true} />        
            <Route path="/firstpage" component={FirstPage} exact={true} />
          <Route path="/viewReports/:id" component={ViewReport} exact={true} />
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
    );
  }
}

export default App;
