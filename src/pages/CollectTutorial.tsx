import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChromecast } from "@fortawesome/free-brands-svg-icons";
import {
  faHiking,
  faPaw,
  faPowerOff,
  faRunning,
  faTv,
  faVolumeDown,
  faVolumeOff,
  faVolumeUp,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";

import {
  IonAlert,
  IonBackdrop,
  IonCard,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonFooter,
  IonGrid,
  IonHeader,
  IonLabel,
  IonListHeader,
  IonLoading,
  IonPage,
  IonProgressBar,
  IonRouterOutlet,
  IonRow,
  IonSpinner,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToast,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import {
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import {
  personCircle,
  search,
  helpCircle,
  star,
  create,
  ellipsisHorizontal,
  ellipsisVertical,
  fileTrayFullOutline,
  homeSharp,
  personCircleOutline,
  homeOutline,
  personCircleSharp,
  fileTrayFullSharp,
  desktopSharp,
  desktopOutline,
  pushOutline,
  push,
  cogOutline,
  home,
  personOutline,
  tv,
  radio,
  radioOutline,
  wifiOutline,
  settings,
  settingsOutline,
  share,
  logoVimeo,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  helpCircleOutline,
  tabletLandscapeOutline,
  mapOutline,
  cameraOutline,
  archiveOutline,
  walkOutline,
  shareOutline,
  tvOutline,
  footsteps,
} from "ionicons/icons";
import React, { useRef, useState, useCallback } from "react";
import "./Collect.css";
import NWHeaderCollect from "../components/NWHeaderCollect";
import { usePhotoGallery } from "./usePhotoGallery";

const CollectTutorial: React.FC = () => {
  const { takePhoto } = usePhotoGallery();

  const [showToast1, setShowToastExploration] = useState(false);
  const [showToast2, setShowToastProjection] = useState(false);
  const [showToast3, setShowToast3] = useState(false);
  const [showToast4, setShowToast4] = useState(false);
  const [showMovementAlert, setShowMovementAlert] = useState(false);

  const [stateNorwalkModeLabel, setStateNorwalkModeLabel] = useState<String>();

  const [stateCastingModeLabel, setStateCastingModeLabel] = useState<String>();
  const castingModeLabelRef = useRef<HTMLIonLabelElement>(null);
  const norwalkModeLabelRef = useRef<HTMLIonLabelElement>(null);


  const toggleNorwalkMode = () => {
    if (norwalkModeLabelRef.current?.textContent == "Exploration") {
      setStateNorwalkModeLabel("Projection");
      setShowLoading(false);
      setShowLoading(true);
      setTimeout(() => {
        setShowToastProjection(true);
      }, 750);
    } else if (norwalkModeLabelRef.current?.textContent == "Projection") {
      setStateNorwalkModeLabel("Exploration");
      setTimeout(() => {
        setShowToastExploration(true);
      }, 1);
    } else if (norwalkModeLabelRef) {
      setStateNorwalkModeLabel("Exploration");
      setTimeout(() => {
        setShowToastExploration(true);
      }, 1);
    }
  };

  const toggleCasting = () => {
    
  };
  const showSnapshotToast = () => {
    setShowLoading(false);
    setShowLoading(true);
    handleToast();
    async function handleToast() {
      setTimeout(() => {
        setShowToast3(true);
      }, getRandomArbitrary(500, 1750));
    }
  };

  const showSoundOffToast = () => {
    setShowLoading(false);
    setShowLoading(true);
    setShowToast4(true);
  };

  const initNorwalk = () => {
    handleAlert();
    async function handleAlert() {
      setTimeout(() => {
        setShowMovementAlert(true);
      }, getRandomArbitrary(1000, 2000));
    }
  };

  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage>
      <NWHeaderCollect setHeader="Norwalk" />
      <IonContent fullscreen className="nw-background" onLoad={initNorwalk}>
        <IonLabel ref={castingModeLabelRef}>Not casting</IonLabel>
        <IonAlert
          translucent
          isOpen={showMovementAlert}
          onDidDismiss={() => setShowMovementAlert(false)}
          cssClass="my-custom-class"
          header={"Home wifi detected"}
          subHeader={"Switch to Projection mode?"}
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
              text: "Switch",

              handler: () => {
                if (norwalkModeLabelRef.current?.textContent == "Exploration") {
                  toggleNorwalkMode();
                } 
                console.log("Confirm Ok");
              },
            },
          ]}
        />
        <IonToast
          isOpen={showToast2}
          onDidDismiss={() => setShowToastProjection(false)}
          message="Switched to Projection mode."
          duration={2000}
          position="top"
          id="toastProjection"
        />
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToastExploration(false)}
          message="Switched to Exploration mode."
          duration={2000}
          position="top"
          id="toastProjection"
        />
        <IonToast
          isOpen={showToast3}
          onDidDismiss={() => setShowToast3(false)}
          message="A snapshot of the content on your Norwalk device was made and saved to the picture library on this phone."
          duration={5000}
          position="top"
        />
        <IonToast
          isOpen={showToast4}
          onDidDismiss={() => setShowToast4(false)}
          message="Sound settings changed."
          duration={2000}
          position="top"
        />
        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(0, 500)}
        />
        <div className="subheaderbar-collect ion-padding-start ion-padding-end">
          <IonRow>
            <IonCol>
              <IonLabel className="ion-float-start">
                <strong>Mode</strong>{" "}
                <IonButton
                  className="nw-help-button ion-no-padding"
                  href="/help"
                  fill="clear"
                  color="dark"
                  size="small"
                >
                  <IonIcon icon={helpCircleOutline} />
                </IonButton>
              </IonLabel>
            </IonCol>
            <IonCol>
              {stateNorwalkModeLabel ? (
                <i>
                  <IonLabel
                    className="ion-float-end mode-label"
                    color="dark"
                    ref={norwalkModeLabelRef}
                  >
                    {stateNorwalkModeLabel}
                  </IonLabel>
                </i>
              ) : (
                <i>
                  <IonLabel
                    className="ion-float-end mode-label"
                    color="medium"
                    ref={norwalkModeLabelRef}
                  >
                    Exploration
                  </IonLabel>
                </i>
              )}
            </IonCol>
          </IonRow>
        </div>
        <div className="subsubheaderbar-collect ion-padding-start ion-padding-end">
          <IonRow>
            <IonCol>
              <IonLabel className="ion-float-start mode-label">
                <strong>Current activity</strong>{" "}
              </IonLabel>
            </IonCol>
            <IonCol>
              {norwalkModeLabelRef.current?.textContent == "Projection" ? (
                <IonLabel className="ion-float-end mode-label">
                  <i>Trolltunga (hike)</i>
                </IonLabel>
              ) : (
                <IonLabel color="medium" className="ion-float-end mode-label">
                  <i>None</i>
                </IonLabel>
              )}
            </IonCol>
          </IonRow>
          {norwalkModeLabelRef.current?.textContent == "Projection" ? (
            <React.Fragment>
              <IonRow>
                <IonCol>
                <IonProgressBar
                className="customprogressbar"
                value={0.23}
              ></IonProgressBar>
              <br />
                </IonCol>
              </IonRow>
            </React.Fragment>
          ) : null}
        </div>
        {/* <div className="headerbar-collect">
          <IonRow>
            <IonCol>
              <IonButton
                size="small"
                color="primary"
                fill="outline"
                expand="block"
                onClick={toggleNorwalkMode}
              >
                <IonIcon
                  icon={radioOutline}
                  className="button-icon-margin align-left"
                />
                <IonLabel ref={collectButtonRef}>Cast to device</IonLabel>
              </IonButton>
            </IonCol>
            <IonCol size="4">
              <IonButton
                size="small"
                color="medium"
                expand="block"
                fill="outline"
                href="/initialsetup"
              >
                <IonIcon
                  icon={settingsOutline}
                  className="button-icon-margin"
                />
                <IonLabel>Setup</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </div> */}
        {norwalkModeLabelRef.current?.textContent == "Projection" ? (
          <div className="fab-wrapper">
            <IonCard color="--ion-color-transparant-dark-step-0"></IonCard>
            <div className="fab-container">
              <IonFab vertical="center" horizontal="center">
                <IonFabButton className="custom-fab" translucent>
                  <FontAwesomeIcon
                    icon={faTv}
                    className="custom-fab-icon-big"
                    color="#fcfcfc"
                  />
                </IonFabButton>

                <IonFabList side="top" className="custom-fab-list-top">
                  <IonFabButton
                    href="/map"
                    className="custom-fab-small"
                    translucent
                  >
                    <IonIcon icon={mapOutline} size="large" color="secondary" />
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="bottom" className="custom-fab-list-bottom">
                  <IonFabButton
                    onClick={showSoundOffToast}
                    className="custom-fab-small"
                    translucent
                  >
                    <FontAwesomeIcon icon={faVolumeUp} color="#fff" size="2x" />
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="start" className="custom-fab-list-left">
                  <IonFabButton
                    type="button"
                    onClick={showSnapshotToast}
                    className="custom-fab-small"
                    translucent
                  >
                    <IonIcon icon={cameraOutline} color="dark" size="large" />
                  </IonFabButton>
                </IonFabList>
                <IonFabList side="end" className="custom-fab-list-right">
                  <IonFabButton
                    onClick={toggleCasting}
                    className="custom-fab-small"
                    translucent
                  >
                    <FontAwesomeIcon
                      icon={faChromecast}
                      color="#fff"
                      size="2x"
                    />
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </div>
          </div>
        ) : (
          <div className="fab-wrapper">
            <div className="fab-container">
              <IonFab vertical="center" horizontal="center">
                <IonFabButton
                  className="custom-fab"
                  translucent
                  onClick={toggleNorwalkMode}
                >
                  <FontAwesomeIcon
                    icon={faRunning}
                    className="custom-fab-icon-big"
                    color="#fcfcfc"
                  />
                </IonFabButton>

                <IonFabList side="top" className="custom-fab-list-top ion-hide">
                  <IonFabButton
                    href="/map"
                    className="custom-fab-small"
                    translucent
                  >
                    <IonIcon icon={mapOutline} size="large" color="secondary" />
                  </IonFabButton>
                </IonFabList>
                <IonFabList
                  side="bottom"
                  className="custom-fab-list-bottom ion-hide"
                >
                  <IonFabButton
                    onClick={toggleNorwalkMode}
                    className="custom-fab-small"
                    translucent
                  >
                    <FontAwesomeIcon
                      icon={faChromecast}
                      color="#fff"
                      size="2x"
                    />
                  </IonFabButton>
                </IonFabList>
                <IonFabList
                  side="start"
                  className="custom-fab-list-left ion-hide"
                >
                  <IonFabButton
                    type="button"
                    onClick={showSnapshotToast}
                    className="custom-fab-small"
                    translucent
                  >
                    <IonIcon icon={cameraOutline} color="dark" size="large" />
                  </IonFabButton>
                </IonFabList>
                <IonFabList
                  side="end"
                  className="custom-fab-list-right ion-hide"
                >
                  <IonFabButton
                    onClick={toggleNorwalkMode}
                    className="custom-fab-small"
                    translucent
                  >
                    <FontAwesomeIcon
                      icon={faChromecast}
                      color="#fff"
                      size="2x"
                    />
                  </IonFabButton>
                </IonFabList>
              </IonFab>
            </div>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CollectTutorial;
