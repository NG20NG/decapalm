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
//
import { multilingualism } from "../contexts/multilingualism";
//
//
import fr from "../components/multilingualism/fr";
import en from "../components/multilingualism/en";
//
//
function MyApp({ Component, pageProps }: AppProps) {
  //===============================================================
  const router = useRouter();
  //===============================================================
  const [words, setWords] = useState<any>(fr);
  const switchLanguageEN = () => {
    setWords(en);
    gsap.to(`.${header.englishDone}`, { display: "flex", opacity: 1 });
    gsap.to(`.${header.englishDone}`, { opacity: 0 }).delay(0.5);
    gsap.to(`.${header.englishDone}`, { display: "none" }).delay(0.5);
    console.log(321);
  };
  const switchLanguageFR = () => {
    setWords(fr);
    gsap.to(`.${header.francaisDone}`, { display: "flex", opacity: 1 });
    gsap.to(`.${header.francaisDone}`, { opacity: 0 }).delay(0.5);
    gsap.to(`.${header.francaisDone}`, { display: "none" }).delay(0.5);
    console.log(123);
  };
  //===============================================================
  gsap.config({
    autoSleep: 60,
    force3D: false,
    nullTargetWarn: false,
    units: { left: "%", top: "%", rotation: "rad" },
  });
  //===============================================================
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
    ["/", words?.Home, header.accueilBTN],
    ["/activite", words?.Activity, header.activiteBTN],
    ["/contact", words?.Contact, header.contactBTN],
    ["/apropos", words?.About, header.aproposBTN],
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
    if (menuOnClick === false) {
      gsap.to(`.${header.mobileUnorderedListMenuContainer}`, {
        left: "5px",
      });
      gsap.to(`.${header.mobileMenuListContainer}`, {
        opacity: 1,
      });
    } else {
      gsap.to(`.${header.mobileUnorderedListMenuContainer}`, {
        left: "300px",
      });
      gsap.to(`.${header.mobileMenuListContainer}`, {
        opacity: 0,
      });
    }
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
  const removeMobileMenu = () => {
    setMenuOnClick(false);
  };
  return (
    <div className={header.appStaticPageContainer}>
      <multilingualism.Provider value={{ words }}>
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
                    <div>
                      {MobileListArray?.map((e: any, i: any) => (
                        <Link key={i} href={e[0]}>
                          <a>
                            <li
                              className={`${header.mobileMenuList}`}
                              onClick={() => mobileMenuAnimation()}
                            >
                              {e[1]}
                            </li>
                          </a>
                        </Link>
                      ))}
                      <div className={header.changeLangMobileMenuContainer}>
                        <button
                          className={header.changeLang}
                          onClick={() => switchLanguageEN()}
                        >
                          <div className={header.enFlagBTN}></div>
                        </button>
                        <button
                          className={header.changeLang}
                          onClick={() => switchLanguageFR()}
                        >
                          <div className={header.frFlagBTN}></div>
                        </button>
                      </div>
                      <div className={header.langAnimationIsOk}>
                        <div className={header.francaisDone}>Francais</div>
                        <div className={header.englishDone}>English</div>
                      </div>
                    </div>
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
                  <button
                    className={header.changeLang}
                    onClick={() => switchLanguageEN()}
                  >
                    <div className={header.enFlagBTN}></div>
                  </button>
                  <button
                    className={header.changeLang}
                    onClick={() => switchLanguageFR()}
                  >
                    <div className={header.frFlagBTN}></div>
                  </button>
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
      </multilingualism.Provider>
    </div>
  );
}

export default MyApp;
