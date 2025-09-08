import { IonContent, IonLoading, IonPage } from "@ionic/react";
import React, { useState } from "react";
import NWFooter from "../components/NWFooter";
import NWHeader from "../components/NWHeader";
import NWHeaderCollect from "../components/NWHeaderCollect";
import NWHeaderSettings from "../components/NWHeaderSettings";

const Map: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage>
      <NWHeaderSettings setHeader="Location"/>
      <IonContent fullscreen className="nw-background">
      <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(500, 1250)}
        />
        
      <iframe
      height="100%"
  width="100%"
  loading="lazy"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbUFbMP5zNiBNWOswq6NJn9APcCIM8-Ps
    &q=Trolltunga">
</iframe>
      </IonContent>
    </IonPage>
  );
};

export default Map;
