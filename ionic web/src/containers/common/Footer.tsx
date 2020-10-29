import { IonFooter, IonSelect, IonSelectOption } from '@ionic/react';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface IHeaderProps {
  route: RouteComponentProps;  
}

const Footer: React.SFC<IHeaderProps & RouteComponentProps> = ({ history }) => {

  return (
  
     
        <button className="cancel-btn" onClick={history.goBack}> CANCEL </button>
        
    
  );
};

const Child = withRouter(Footer as any);
export default Child;
