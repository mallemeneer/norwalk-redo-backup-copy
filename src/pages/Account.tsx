import {
  IonAvatar,
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  cog,
  cogOutline,
  fileTrayFullOutline,
  home,
  homeOutline,
  person,
  tvOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import NWHeader from "../components/NWHeader";
import NWHeaderSettings from "../components/NWHeaderSettings";

const Account: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-account">
      <NWHeaderSettings setHeader="Account" />
      <IonContent fullscreen className="nw-background">
      <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(500, 1250)}
        />
        <IonList>
          <IonListHeader className="nw-list-border">
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel className="ion-margin-start">Jesse de Wit</IonLabel>
          </IonListHeader>
            <IonItem type="button" href="/initialsetup">
              Configure
            </IonItem>
            <IonItem type="button" href="/help">
              Help
            </IonItem>
          <IonItemGroup slot="end" className="ion-no-padding" title="Test">
            <IonItem type="button" href="/login">
              Log out
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Account;
