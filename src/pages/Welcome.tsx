import { IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonBackButton, IonButton, IonIcon, IonMenuButton, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react';
import { personCircle, search, helpCircle, star, create, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';
import React, { useState } from 'react';
//import NorwalkNavbar from '../components/NorwalkNavbar';
import NorwalkWelcomeSlides from '../components/NorwalkWelcomeSlides';

import './Welcome.css';

const Welcome: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  return (
    <IonPage id="page-welcome">
      <IonContent fullscreen className="IonPadding nw-background" scrollY={false}>
      <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          translucent={true}
          duration={getRandomArbitrary(500, 1250)}
        />
        <NorwalkWelcomeSlides />
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
