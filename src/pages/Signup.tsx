import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonMenuButton,
  IonNote,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { lockClosed, lockOpen, mail, text } from "ionicons/icons";

import React, { useState } from "react";
import NWHeader from "../components/NWHeader";
import NWHeaderCollect from "../components/NWHeaderCollect";
import "./Signup.css";

const Signup: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-signup">
      <NWHeader setHeader="Sign up" />
      <IonContent fullscreen className="nw-background">
      {/* <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(500, 1250)}
        /> */}
        <IonList>
          <IonListHeader color="step-400">Create Norwalk account</IonListHeader>
          <IonItemGroup>
            <IonItem>
              <IonLabel position="floating"><IonIcon icon={mail} className="ion-margin-end" size="default" />E-mail</IonLabel>
              <IonInput value="" type="email"></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="floating"><IonIcon icon={lockOpen} className="ion-margin-end" size="default" />Password</IonLabel>
              <IonInput value="" type="password"></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel position="floating"><IonIcon icon={lockClosed} className="ion-margin-end" size="default"  />Repeat password</IonLabel>
              <IonInput value="" type="password"></IonInput>
            </IonItem>
          </IonItemGroup>
        </IonList>
        <div className="ion-padding">
          <IonButton
            href="/login"
            shape="round"
            color="transparant-dark-step-0"
            fill="solid"
            expand="block"
            className="nw-login-button"
          >
            <IonLabel
              className="nw-bold-text nw-login-button-text"
              color="transparant-dark-step-1"
            >
              Sign up
            </IonLabel>
          </IonButton>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <div className="ion-text-center ion-margin-bottom">
                  <IonLabel className="nw-light-text" color="medium">
                    <span>Already have an account?</span>
                  </IonLabel>
                </div>
                <IonButton
                  fill="outline"
                  shape="round"
                  expand="block"
                  size="default"
                  className="nw-signup-button"
                  href="/login"
                >
                  <IonLabel>
                    <span className="nw-bold-text" color="dark">
                      Log in
                    </span>
                  </IonLabel>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
