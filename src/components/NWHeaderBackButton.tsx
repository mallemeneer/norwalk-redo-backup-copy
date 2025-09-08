import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
  IonBackButton,
} from "@ionic/react";
import { cogOutline, footsteps, walk, walkOutline } from "ionicons/icons";
import React from "react";

import './NWHeaderBackButton.css'

export const NWHeaderBackButton: React.FC<{ setHeader: string }> = (props) => (
  <IonHeader className="ion-no-border">
    <IonToolbar>
      <IonTitle>{props.setHeader}</IonTitle>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/collect" />
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default NWHeaderBackButton;
