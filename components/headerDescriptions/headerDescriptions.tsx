//
import d from "./headerDescriptions.module.css";
//
import { useContext } from "react";
import { multilingualism } from "../../contexts/multilingualism";
//
//
export const AccueilDescription = () => {
  const { words } = useContext(multilingualism);

  return (
    <div>
      {words?.SeaLover}
      <br />
      {words?.or}
      <br />
      {words?.come}
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
  const { words } = useContext(multilingualism);
  return (
    <div className={d.policeSizeContact}>
      {words?.contactUs}
      <br />
      {words?.and}
    </div>
  );
};
