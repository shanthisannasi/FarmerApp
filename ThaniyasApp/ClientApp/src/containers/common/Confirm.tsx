import { IonAlert } from '@ionic/react';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface Props extends RouteComponentProps { }

interface IHeaderProps {
  showConfirm: boolean;
  setShowConfirm: any;
  processDelete: any;
  message: string;
}

const Confirm: React.SFC<IHeaderProps> = ({ showConfirm, setShowConfirm, processDelete, message }) => {

  return (
    <IonAlert
      isOpen={showConfirm}
      onDidDismiss={() => setShowConfirm(false)}
      header={'Confirm!'}
      //message={'<strong>Are you sure do you want to delete it?</strong>!!!'}
      message={message}
      buttons={[
        {
          text: 'Okay',
          handler: () => {
            processDelete();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]}
    />
  );
};

export default Confirm;
