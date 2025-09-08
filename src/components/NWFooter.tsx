import {
  IonToolbar,
  IonTitle,
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
  IonFooter,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonCol,
  IonGrid,
  IonProgressBar,
  IonRow,
  IonSpinner,
  IonText,
} from "@ionic/react";
import {
  cogOutline,
  fileTrayFullOutline,
  home,
  homeOutline,
} from "ionicons/icons";
import React from "react";
import "./NWFooter.css";

export const NWFooter: React.FC = (props) => (
  <IonFooter className="ion-no-border">
        
        <div className="footer-bar">
                    <IonGrid>
            <IonRow>
              <IonCol size="10">
                <IonLabel color="medium">Progress current hike</IonLabel>
                <IonText>
                Progress current hike
                </IonText>
              </IonCol>
              <IonCol>
                <IonSpinner name="lines-small" />
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
  </IonFooter>
);

export default NWFooter;
