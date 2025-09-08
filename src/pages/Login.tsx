import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonNote,
  IonPage,
  IonRow,
} from "@ionic/react";
import { lockClosed, lockOpen, mail } from "ionicons/icons";
import React, { useState } from "react";
import NWHeader from "../components/NWHeader";
import "./Login.css";

const Login: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-login">
      <NWHeader setHeader="Welcome back" />
      <IonContent fullscreen className="nw-background">
{/*       <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          translucent={true}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={getRandomArbitrary(500, 1250)}
        /> */}
        <IonList>
          <IonListHeader color="step-400">Sign in to Norwalk</IonListHeader>
          <IonItemGroup>
            <IonItem>
              <IonLabel position="floating">
                <IonIcon
                  icon={mail}
                  className="ion-margin-end"
                  size="default"
                />
                E-mail
              </IonLabel>
              <IonInput value="" type="email"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">
                <IonIcon
                  icon={lockClosed}
                  className="ion-margin-end"
                  size="default"
                />
                Password
              </IonLabel>
              <IonInput value="" type="password"></IonInput>
            </IonItem>
          </IonItemGroup>
        </IonList>
        <div className="ion-padding">
          <IonButton
            href="/welcome"
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
              Log in
            </IonLabel>
          </IonButton>
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <div className="ion-text-center ion-margin-bottom">
                  <IonLabel className="nw-light-text" color="medium">
                    <span>Not registered?</span>
                  </IonLabel>
                </div>
                <IonButton
                  fill="outline"
                  shape="round"
                  expand="block"
                  size="default"
                  className="nw-signup-button"
                  href="/signup"
                >
                  <IonLabel>
                    <span className="nw-bold-text" color="dark">
                      Create an account
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

export default Login;
