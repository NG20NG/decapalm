import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
//
import gsap from "gsap";
import header from "../styles/Header.module.css";
import Image from "next/image";
//
import mobileMenuBTN from "../images/svg/mobileMenuBTN.svg";
import { useState } from "react";
//

//

function MyApp({ Component, pageProps }: AppProps) {
  //==========================================================
  const menuListArray = [
    ["/", "Accueil", header.accueilBTN],
    ["/activité", "Activité", header.activiteBTN],
    ["/contact", "Contact", header.contactBTN],
    ["/apropos", "À-propos", header.aproposBTN],
  ];
  const MobileListArray = [
    ["/", "Accueil"],
    ["/activité", "Activité"],
    ["/contact", "Contact"],
    ["/apropos", "À-propos"],
  ];
  //==========================================================
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
  //==========================================================
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
            <div className={header.headerDescription}>
              <p>
                Amoureux de la mer
                <br />
                ou juste envie de changer de cadre ?<br />
                venez à DECAPALM découvrir
                <br />
                les merveilles du monde sous-marin
              </p>
            </div>
          </header>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
