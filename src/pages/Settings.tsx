import {
  IonAvatar,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonNav,
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
} from "ionicons/icons";
import React, { useState } from "react";
import NWHeader from "../components/NWHeader";
import NWHeaderBackButton from "../components/NWHeaderBackButton";
import NWHeaderSettings from "../components/NWHeaderSettings";

const Settings: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-settings">
      <NWHeaderBackButton setHeader="Settings" />
      <IonContent fullscreen className="ion-padding">
      <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(500, 1250)}
        />
      <IonListHeader>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar><IonLabel className="ion-margin-start">Jesse de Wit</IonLabel>
          </IonListHeader>
      <IonNav root="nav-home"/>
      </IonContent>

      <IonFooter className="ion-no-border">
        <p>Footer</p>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="norwalk" href="/collect">
              <IonLabel>Norwalk</IonLabel>
              <IonIcon icon={homeOutline}></IonIcon>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings" selected>
              <IonLabel>Settings</IonLabel>
              <IonIcon icon={cog}></IonIcon>
            </IonTabButton>
          </IonTabBar>
          <IonRouterOutlet></IonRouterOutlet>
        </IonTabs>
      </IonFooter>
    </IonPage>
  );
};

export default Settings;
