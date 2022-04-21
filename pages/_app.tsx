import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
//
import header from "../styles/Header.module.css";
//
//

//

function MyApp({ Component, pageProps }: AppProps) {
  // const linksData: string[][] = [
  //   ["/", "home", home.linkMenuBTN, home.animYHome],
  //   ["/contact", "contact", home.linkMenuBTN, home.animYContact],
  //   ["/about", "about", home.linkMenuBTN, home.animYAbout],
  // ];
  const menuListArray = [
    ["/", "Accueil", header.accueilBTN],
    ["/activité", "Activité", header.activiteBTN],
    ["/contact", "Contact", header.contactBTN],
    ["/apropos", "À-propos", header.aproposBTN],
  ];
  return (
    <div className={header.appStaticPageContainer}>
      <div className={header.appStaticPage}>
        <div className={header.myApp}>
          <header className={header.header}>
            <nav className={header.nav}>
              <h1 className={header.h1}>Decapalm</h1>
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
