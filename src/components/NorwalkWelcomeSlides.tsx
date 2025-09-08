import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonButton,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import "./NorwalkWelcomeSlides.css";
import { arrowForward } from "ionicons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

export const NorwalkWelcomeSlides: React.FC = () => (
  <IonContent className="IonPadding nw-background">
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
        <div className="slide">
          <IonCard className="translucent">
            <IonCardHeader translucent>
              <IonCardSubtitle color="dark">Norwalk introduction</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="">
              <p className="nw-text-light">
                The following slide will explain how with a few simple{" "}
                <i>steps</i>, you can travel through Norway from your home.
              </p>
            </IonCardContent>
          </IonCard>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            size="2x"
            color="dark"
          />
        </div>
      </IonSlide>
      <IonSlide>
        <div className="slide">
          <IonCard className="translucent">
            <IonCardHeader translucent>
              <IonCardSubtitle color="dark">Norwalk introduction</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="">
              <p className="nw-text-light">
                Norwalk allows you to travel to Norway from you home. How? Well,
                there's a hint in our name.
              </p>
<br/>
              <p className="nw-text-light">
                When walking around your home, Norwalk counts the number of
                steps you take and shows you beautiful Norwegian scenery in
                return.
              </p>
<br/>
              <p className="nw-text-light">
                The more you walk or participate in physical activities, the
                more Norwegian scenery you will explore.
              </p>
            </IonCardContent>
          </IonCard>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            size="2x"
            color="dark"
          />
        </div>
      </IonSlide>
      <IonSlide>
        <div className="slide">
          <h1 color="dark">Ready to explore?</h1>
          <IonButton
            href="/initialsetup"
            shape="round"
            color="transparant-dark-step-0"
            fill="solid"
            expand="block"
            className="nw-login-button ion-margin-top"
          >
            <IonLabel
              className="nw-bold-text nw-login-button-text"
              color="rgba(255, 255, 255, 0.79"
            >
              Continue
            </IonLabel>
          </IonButton>
        </div>
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default NorwalkWelcomeSlides;
