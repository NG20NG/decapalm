//
import Image from "next/image";
import fbSvg from "../../public/svg/icons8-facebook.svg";
import instaSvg from "../../public/svg/icons8-instagram.svg";
//
import footer from "./footer.module.css";
//
//
const Footer = () => {
  return (
    <div className={footer.footerMainStaticContainer}>
      <div className={footer.footerMainStatic}>
        <div className={footer.topSideFooterContainer}>
          <div className={footer.topSideFooterTitle}>Decapalm</div>
          <p className={footer.bottomSideFooterDescription}>
            Venez découvrir nos magnifiques fonds marin grâce aux randonnées
            subaquatiques ou l’on peut observer juste avec des palmes masque et
            tuba nos plus belles richesses et merveilles sous-marine
          </p>
          <div id={footer.reseau}>
            <div className={footer.reseauSVG}>
              <Image src={fbSvg} width={40} height={40} />
            </div>
            <div className={footer.reseauSVG}>
              <Image src={instaSvg} width={40} height={40} />
            </div>
          </div>
        </div>
        <p id={footer.copyright}>@ 2022 Copyright : decapalm.com</p>
      </div>
    </div>
  );
};
export default Footer;
