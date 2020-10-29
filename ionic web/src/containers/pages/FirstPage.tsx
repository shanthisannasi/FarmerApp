import { IonContent, IonCheckbox, IonPage, IonBadge, IonLabel, IonItem, IonList, IonButton, IonNote, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonFooter } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import React from 'react';
import { add, arrowDown } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';


const FirstPage: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Customer List
          </IonTitle>  
        </IonToolbar>  
      </IonHeader>
      
  <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Customer 1 </h1>
              <IonNote> Idea Customer </IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
        </IonBadge>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Customer 2 </h1>
              <IonNote>Airtel Customer</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
        </IonBadge>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Customer 3 </h1>
              <IonNote>Jio Customer</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
        </IonBadge>
          </IonItem>
        </IonList>
        <IonButton expand="full">Full Button</IonButton>
        <IonButton expand="block">Block Button</IonButton>

        {/*-- Round --*/}
        <IonButton shape="round">Round Button</IonButton>

        {/*-- Fill --*/}
        <IonButton expand="full" fill="outline">Outline + Full</IonButton>
        <IonButton expand="block" fill="outline">Outline + Block</IonButton>
        <IonButton shape="round" fill="outline">Outline + Round</IonButton>

        {/*-- Icons --*/}
        <IonButton>
          <IonIcon slot="start" name="star" />
          Left Icon
    </IonButton>

        <IonButton>
          Right Icon
      <IonIcon slot="end" name="star" />
        </IonButton>

        <IonButton>
          <IonIcon slot="icon-only" name="star" />
        </IonButton>

        {/*-- Sizes --*/}
        <IonButton size="large">Large</IonButton>
        <IonButton>Default</IonButton>
        <IonButton size="small">Small</IonButton>
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/home')} >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/home')} >
            <IonIcon icon={arrowDown} />
          </IonFabButton>
        </IonFab>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle> Footer Content </IonTitle>
        </IonToolbar>  
      </IonFooter>
    </IonPage>

    );
};

export default FirstPage;