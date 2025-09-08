import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
} from "@ionic/react";
import { cogOutline, footsteps, walk, walkOutline } from "ionicons/icons";
import React from "react";

export const NWHeader: React.FC<{ setHeader: string }> = (props) => (
  <IonHeader collapse="condense" className="ion-no-border nw-background">
    <IonToolbar>
      <IonTitle
        color="medium"
        size="small"
        className="norwalk-toolbar-title ion-text-upper"
      >
        
      </IonTitle>
    </IonToolbar>
    <IonToolbar>
      <IonTitle size="large">{props.setHeader}</IonTitle>
    </IonToolbar>
  </IonHeader>
);

export default NWHeader;
