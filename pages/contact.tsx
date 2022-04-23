//
//
import Link from "next/link";
import contact from "../styles/contact.module.css";
//
//
//
//
const Contact = () => {
  return (
    <div className={contact.contactStaticContainer}>
      <div className={contact.contactStatic}>
        {/* <div className={contact.contactLeftBarUnderGoogleMap}></div> */}
        <div className={contact.contactCardPadding}>
          <div id={contact.googleMapContainer}>
            <iframe
              id={contact.googleMap}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.8617286218181!2d3.322762336714813!3d36.783833732113884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e44614be8f1fd%3A0x174c961dd1bdf732!2sDeca%20Palm%20-%20Centre%20de%20Plong%C3%A9e%20Sous-Marine!5e0!3m2!1sfr!2sdz!4v1650585189465!5m2!1sfr!2sdz"
            />
          </div>
          <div className={contact.contactDescriptionContainer}>
            <div className={contact.contactDescription}>
              <div className={contact.contactDescriptionTitle}>
                Contacter nous
              </div>
              <div className={contact.contactDescriptionInfoContainer}>
                <div className={contact.contactDescriptionInfoLeft}>
                  <p>Numéro :</p>
                  <p>+213 (0) 558 55 74 74</p>
                  <p>Adresse :</p>
                  <p>
                    Cité Déca plage N°07 Ain Taya Alger 16019 Alger, Algérie
                  </p>
                </div>
                <div className={contact.contactDescriptionInfoRight}>
                  <p>Mail :</p>
                  <p>decapalm@yahoo.fr</p>
                  <p>Réseaux sociaux :</p>
                  <p>Facebook : Decapalm</p>
                  <p>Instagram : @Decapalm</p>
                </div>
              </div>
              <div className={contact.contactUnderInfoDescriptionContainer}>
                <div className={contact.contactUnderInfo}>
                  Le baptême de plongée sous-marine est une simple{" "}
                  <button className={contact.contactUnderInfoBTN}>
                    <Link href="/activite">
                      <a>découverte</a>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
