import { faChromecast } from "@fortawesome/free-brands-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
  IonLabel,
  IonImg,
} from "@ionic/react";
import {
  helpBuoy,
  helpCircleOutline,
  helpCircleSharp,
  helpOutline,
  personCircleOutline,
  tv,
  tvOutline,
} from "ionicons/icons";
import React from "react";

export const NWHeaderCollect: React.FC<{ setHeader: string }> = (props) => (
  <IonHeader collapse="condense" className="ion-no-border">
    <IonToolbar>
      <IonTitle
        color="medium"
        size="small"
        className="norwalk-toolbar-title ion-text-upper"
      >

      </IonTitle>
    </IonToolbar>
    <IonToolbar>
      <IonTitle size="large">
      <img src="../assets/images/nw-logo.png" className="logo-img" />
      </IonTitle>
      <IonButtons slot="primary">
        <IonButton href="/account" fill="clear" color="dark" size="large">
          <IonIcon slot="end" icon={personCircleOutline} size="large" />
        </IonButton>
        </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default NWHeaderCollect;
