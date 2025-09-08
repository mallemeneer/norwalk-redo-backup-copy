import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import NWFooter from "./NWFooter";
import NWHeader from "./NWHeader";
import NWHeaderBackButton from "./NWHeaderBackButton";

const CollectionDetail: React.FC = () => {
  return (
    <IonPage>
      <NWHeaderBackButton setHeader="Item details"/>
      <IonContent fullscreen className="ion-padding">

      </IonContent>
      <NWFooter/>
    </IonPage>
  );
};

export default CollectionDetail;
