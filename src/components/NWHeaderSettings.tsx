import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
} from "@ionic/react";
import {
  cogOutline,
  footsteps,
  personCircle,
  personCircleOutline,
  radio,
  radioOutline,
  radioSharp,
  settings,
  settingsOutline,
  tv,
  tvOutline,
  walk,
  walkOutline,
} from "ionicons/icons";
import React from "react";

export const NWHeaderSettings: React.FC<{ setHeader: string }> = (props) => (
  <IonHeader collapse="condense" className="ion-no-border">
    <IonToolbar>
      <IonTitle
        color="medium"
        size="small"
        className="norwalk-toolbar-title ion-text-upper "
      ></IonTitle>
    </IonToolbar>
    <IonToolbar>
      <IonTitle size="large">{props.setHeader}</IonTitle>
      <IonButtons slot="primary" className="ion-float-end">
      <IonButton href="/collect" fill="clear" color="dark">

        <IonIcon slot="end" icon={tvOutline} className="nw-logo-icon" color="dark" size="large"></IonIcon>

        </IonButton>
        </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default NWHeaderSettings;
