import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonListHeader,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  chevronForward,
  cogOutline,
  fileTrayFullOutline,
  home,
  pin,
  walk,
  warning,
  wifi,
  wine,
} from "ionicons/icons";
import React from "react";
import NWHeaderCollect from "../components/NWHeaderCollect";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  type Item = {
    src: string;
    text: string;
  };
  const items: Item[] = [{ src: 'https://www.gannett-cdn.com/presto/2018/12/15/USAT/2e7b9863-85ac-4faa-aad3-096fc1826c20-GettyImages-841647034.jpg?width=2560', text: 'a picture of a cat' }];
  return (
    <IonPage id="page-dashboard">
      <IonContent fullscreen>
        <NWHeaderCollect setHeader="Dashboard" />

        <IonListHeader color="step-400">Recent activity</IonListHeader>

        <IonCard button href="/collection">
        {items.map((image, i) => (
          <IonImg src={image.src} className="nw-card-img" />
          ))}
          <IonCardHeader>
            <IonCardSubtitle color="tertiary">TIMELAPSE</IonCardSubtitle>
            <IonCardTitle>Northern Lights</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard button href="/collection">
          <IonCardHeader>
            <IonCardSubtitle color="tertiary">HIKING</IonCardSubtitle>
            <IonCardTitle>Hike</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonListHeader color="step-400">My collection</IonListHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle color="tertiary">SLOW TV</IonCardSubtitle>
            <IonCardTitle>Norway boat trip</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter className="ion-no-border">
        <p>Footer</p>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard" selected>
              <IonLabel>Dashboard</IonLabel>
              <IonIcon icon={home}></IonIcon>
            </IonTabButton>
            <IonTabButton tab="collection" href="/collection">
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

export default Dashboard;
