import {
  IonPage,
  IonContent,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonList,
  IonGrid,
  IonItemGroup,
  IonAlert,
  IonLoading,
  IonRedirect,
  IonRouterOutlet,
} from "@ionic/react";
import {
  pin,
  wifi,
  wine,
  warning,
  walk,
  mail,
  lockClosed,
} from "ionicons/icons";
import React, { useRef, useState } from "react";
import { Redirect } from "react-router";
import NWHeader from "../components/NWHeader";
import "./InitialSetup.css";

const InitialSetup: React.FC = () => {
  const wifiAlertOptions = {
    header: "Please select your network",
    translucent: true,
  };

  const [showAlert4, setShowAlert4] = useState(false);

  const [stateNetworkSelect, setStateNetworkSelect] = useState<String>();
  const networkSelectRef = useRef<HTMLIonSelectElement>(null);

  const continueToApp = () => {
    setShowLoading(false);
    setShowLoading(true);
    handleToast();
    async function handleToast() {
      setTimeout(() => {}, 1000);
    }
  };
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-initial-setup">
      <IonContent fullscreen className="nw-background">
        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          translucent={true}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={getRandomArbitrary(500, 1250)}
        />
        <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          cssClass="my-custom-class"
          header={"Enter network password"}
          inputs={[
            {
              name: "network-password",
              type: "password",
              placeholder: "Network password...",
              cssClass: "specialClass",
              attributes: {
                maxlength: 16,
                inputmode: "decimal",
              },
            },
          ]}
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Ok",

              handler: () => {
                console.log("Confirm Ok");
              },
            },
          ]}
        />

        <NWHeader setHeader="Setup" />
        <IonListHeader>Let's configure Norwalk</IonListHeader>
        <div className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonRow>
                <IonLabel>Please select your network to continue</IonLabel>
              </IonRow>
              <IonRow className="">
                <IonItem>
                <IonSelect
                  ref={networkSelectRef}
                  className="nw-network-select"
                  value={stateNetworkSelect}
                  okText="Select"
                  cancelText="Dismiss"
                  placeholder="Select wifi network..."
                  interfaceOptions={wifiAlertOptions}
                  onIonChange={(e) => setStateNetworkSelect(e.detail.value)}
                >
                  <IonSelectOption value="wifiSelection1">
                    Wifi-3E5R
                  </IonSelectOption>
                  <IonSelectOption value="wifiSelection2">
                    Wifi-5736384
                  </IonSelectOption>
                  <IonSelectOption value="wifiSelection3">
                    Wifi-4398u43908u
                  </IonSelectOption>
                  <IonSelectOption value="wifiSelection4">
                    Wifi-were049rui034k
                  </IonSelectOption>
                </IonSelect>
                </IonItem>
              </IonRow>
              <IonRow>
                <IonItem>
                  <IonLabel position="floating">
                    <IonIcon
                      icon={lockClosed}
                      className="ion-margin-end"
                      size="default"
                    />
                    Network password (WPA2)
                  </IonLabel>
                  <IonInput value="" type="password"></IonInput>
                </IonItem>
              </IonRow>
            </IonRow>
          </IonGrid>
          <IonButton
            href="/collect"
            shape="round"
            color="transparant-dark-step-0"
            fill="solid"
            expand="block"
            className="nw-login-button ion-margin-top"
          >
            <IonLabel
              className="nw-bold-text nw-login-button-text"
              color="transparant-dark-step-1"
            >
              Begin exploring
            </IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InitialSetup;
