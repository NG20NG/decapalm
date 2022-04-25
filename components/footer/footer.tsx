//
import Image from "next/image";
import fbSvg from "../../public/svg/icons8-facebook.svg";
import instaSvg from "../../public/svg/icons8-instagram.svg";
//
import footer from "./footer.module.css";
//
import { useContext } from "react";
import { multilingualism } from "../../contexts/multilingualism";
//
const Footer = () => {
  const { words } = useContext(multilingualism);
  return (
    <div className={footer.footerMainStaticContainer}>
      <div className={footer.footerMainStatic}>
        <div className={footer.topSideFooterContainer}>
          <div className={footer.topSideFooterTitle}>Decapalm</div>
          <p className={footer.bottomSideFooterDescription}>
            {words?.underDecapalm}
          </p>
          <div id={footer.reseau}>
            <div className={footer.reseauSVG}>
              <a
                href="https://fr-fr.facebook.com/decapalm"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={fbSvg} width={40} height={40} alt="facebook svg" />
              </a>
            </div>
            <div className={footer.reseauSVG}>
              <a
                href="https://www.instagram.com/decapalm"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={instaSvg}
                  width={40}
                  height={40}
                  alt="instagram svg"
                />
              </a>
            </div>
          </div>
        </div>
        <p id={footer.copyright}>@ 2022 Copyright : decapalm.com</p>
      </div>
    </div>
  );
};
export default Footer;
