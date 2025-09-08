import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import NWFooter from "../components/NWFooter";
import NWHeader from "../components/NWHeader";

const Page: React.FC = () => {
  return (
    <IonPage>
      <NWHeader setHeader=""/>
      <IonContent fullscreen className="ion-padding">

      </IonContent>
      <NWFooter/>
    </IonPage>
  );
};

export default Page;
