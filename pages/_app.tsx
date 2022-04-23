import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//
import gsap from "gsap";
import header from "../styles/Header.module.css";
import footer from "../components/footer/footer.module.css";
import Image from "next/image";
//
import mobileMenuBTN from "../public/svg/mobileMenuBTN.svg";
//
import Footer from "../components/footer/footer";
import {
  AccueilDescription,
  ActiviteDescription,
  AproposDescription,
  ContactDescription,
} from "../components/headerDescriptions/headerDescriptions";
//
function MyApp({ Component, pageProps }: AppProps) {
  //===============================================================
  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" },
  });
  //===============================================================
  const router = useRouter();
  let width: any;
  if (typeof window === "object" ? window.innerWidth : undefined) {
    width = typeof window === "object" ? window.innerWidth : undefined;
  }
  //===============================================================
  const pathNameAnimation = () => {
    if (width) {
      if (width <= 600) {
        console.log("you using a phone");
      } else {
        gsap.to(`.${header.headerDescription}`, {
          position: "relative",
          left: "2000px",
        });
        gsap
          .to(`.${header.headerDescription} > div`, { display: "none" })
          .delay(0.2);
        gsap.to(`.${header.headerDescription}`, { left: "-600px" }).delay(0.7);
        gsap
          .to(`.${header.headerDescription} > div`, { display: "flex" })
          .delay(1.1);
        gsap.to(`.${header.headerDescription}`, { left: "0px" }).delay(1.1);
      }
    }
  };
  //===============================================================
  const menuListArray = [
    ["/", "Accueil", header.accueilBTN],
    ["/activite", "Activité", header.activiteBTN],
    ["/contact", "Contact", header.contactBTN],
    ["/apropos", "À-propos", header.aproposBTN],
  ];
  const MobileListArray = [
    ["/", "Accueil"],
    ["/activite", "Activité"],
    ["/contact", "Contact"],
    ["/apropos", "À-propos"],
  ];
  //===============================================================
  const [menuOnClick, setMenuOnClick] = useState<Boolean>(false);
  const mobileMenuAnimation = () => {
    menuOnClick === false
      ? gsap.to(`.${header.mobileMenuListContainer}`, {
          right: "-10vw",
        })
      : gsap.to(`.${header.mobileMenuListContainer}`, {
          right: "-500px",
        });
    setMenuOnClick(!menuOnClick);
  };
  //===============================================================
  const [descriptionElem, setDescriptionElem] = useState<any>();
  const headerDescriptionFunction = () => {
    if (router.pathname === "/") {
      setDescriptionElem(<AccueilDescription />);
    } else if (router.pathname === "/contact") {
      setDescriptionElem(<ContactDescription />);
    } else if (router.pathname === "/activite") {
      setDescriptionElem(<ActiviteDescription />);
    } else if (router.pathname === "/apropos") {
      setDescriptionElem(<AproposDescription />);
    }
  };
  useEffect(() => {
    pathNameAnimation(); // header description animation from left t right
    headerDescriptionFunction(); // header description adding the elem before animation
  }, [router]); // activate the functions every time the router change
  //===============================================================
  return (
    <div className={header.appStaticPageContainer}>
      <div className={header.appStaticPage}>
        <div className={header.myApp}>
          <header className={header.header}>
            <nav className={header.nav}>
              <h1 className={header.h1}>Decapalm</h1>
              <button
                className={header.mobileMenuBTN}
                onClick={() => mobileMenuAnimation()}
              >
                <Image src={mobileMenuBTN} alt="mobile menu button svg" />
              </button>
              <div className={header.mobileMenuListContainer}>
                <ul className={header.mobileUnorderedListMenuContainer}>
                  {MobileListArray?.map((e: any, i: any) => (
                    <Link key={i} href={e[0]}>
                      <a>
                        <li className={`${header.mobileMenuList}`}>{e[1]}</li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
              <ul className={header.unorderedListMenuContainer}>
                {menuListArray?.map((e: any, i: any) => (
                  <Link key={i} href={e[0]}>
                    <a>
                      <li className={`${header.menuList} ${e[2]}`}>{e[1]}</li>
                    </a>
                  </Link>
                ))}
              </ul>
            </nav>
            <div>
              <div className={header.headerDescription}>
                <div>{descriptionElem}</div>
              </div>
            </div>
          </header>
          <Component {...pageProps} />
          <footer className={footer.footer}>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
