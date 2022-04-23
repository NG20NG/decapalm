//
import d from "./headerDescriptions.module.css";
//
//
//
export const AccueilDescription = () => {
  return (
    <div>
      Amoureux de la mer
      <br />
      ou juste envie de changer de cadre ? venez à DECAPALM découvrir les
      merveilles du monde sous-marin
    </div>
  );
};
//
//
export const ActiviteDescription = () => {
  return <div>ActiviteDescription</div>;
};
//
//
export const AproposDescription = () => {
  return (
    <div className={d.policeSizeApropos}>
      La plongée sous-marine est notre passion depuis déjà plusieurs années.
      Passion de plongeur tout d’abord, puis passion à l’enseigner
    </div>
  );
};
//
//
export const ContactDescription = () => {
  return (
    <div className={d.policeSizeContact}>
      Contactez-nous
      <br />
      et participer à une expérience inoubliable
    </div>
  );
};
