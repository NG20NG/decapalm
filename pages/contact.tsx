//
//
import contact from "../styles/contact.module.css";
//
//
//
//
const Contact = () => {
  return (
    <div className={contact.contactStaticContainer}>
      <div className={contact.contactStatic}>
        <div className={contact.contactLeftBarUnderGoogleMap}></div>
        <div id={contact.googleMapContainer}>
          <iframe
            id={contact.googleMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d798.8617286218181!2d3.322762336714813!3d36.783833732113884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e44614be8f1fd%3A0x174c961dd1bdf732!2sDeca%20Palm%20-%20Centre%20de%20Plong%C3%A9e%20Sous-Marine!5e0!3m2!1sfr!2sdz!4v1650585189465!5m2!1sfr!2sdz"
          />
        </div>
        <div className={contact.contactDescriptionContainer}>
          <div className={contact.contactPhotoDescription}>photo</div>
          <div className={contact.contactDecapalmInfoContainer}>
            <div>info</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
