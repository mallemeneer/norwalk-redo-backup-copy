import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonThumbnail,
} from "@ionic/react";
import {
  arrowForward,
  chevronForward,
  cogOutline,
  fileTrayFullOutline,
  home,
} from "ionicons/icons";
import React from "react";
import NWFooter from "../components/NWFooter";
import NWHeader from "../components/NWHeader";

const Collection: React.FC = () => {
  return (
    <IonPage id="page-collection">
      <NWHeader setHeader="Collection" />
      <IonContent fullscreen>
        <IonList>
          <IonListHeader color="step-400">Walks</IonListHeader>
          <IonItemGroup>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
              <IonIcon
                slot="end"
                icon={chevronForward}
                color="medium"
                size="small"
              ></IonIcon>
            </IonItem>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
              <IonIcon
                slot="end"
                icon={chevronForward}
                color="medium"
                size="small"
              ></IonIcon>
            </IonItem>
          </IonItemGroup>

          <IonListHeader color="step-400">Bicycle rides</IonListHeader>
          <IonItemGroup>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
              <IonIcon
                slot="end"
                icon={chevronForward}
                color="medium"
                size="small"
              ></IonIcon>
            </IonItem>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
              <IonIcon
                slot="end"
                icon={chevronForward}
                color="medium"
                size="small"
              ></IonIcon>
            </IonItem>
          </IonItemGroup>

          <IonListHeader color="step-400">Train rides</IonListHeader>
          <IonItemGroup>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
              <IonIcon
                slot="end"
                icon={chevronForward}
                color="medium"
                size="small"
              ></IonIcon>
            </IonItem>
            <IonItem button>
              <IonThumbnail slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonThumbnail>
              <IonLabel>Item Thumbnail</IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonList>
      </IonContent>

      <IonFooter className="ion-no-border">
        <p>Footer</p>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonLabel>Dashboard</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </IonTabButton>
            <IonTabButton tab="collection" href="/collection" selected>
              <IonLabel>Collection</IonLabel>
              <IonIcon icon={fileTrayFullOutline}></IonIcon>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonLabel>Settings</IonLabel>
              <IonIcon icon={cogOutline}></IonIcon>
            </IonTabButton>
          </IonTabBar>
          <IonRouterOutlet></IonRouterOutlet>
        </IonTabs>
      </IonFooter>
    </IonPage>
  );
};

export default Collection;
