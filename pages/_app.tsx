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
//

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const descriptionArray = [
    [
      header.headerDescription,
      <p>
        Amoureux de la mer
        <br />
        ou juste envie de changer de cadre ?<br />
        venez à DECAPALM découvrir
        <br />
        les merveilles du monde sous-marin
      </p>,
    ],
    [header.headerDescriptionContact, <p>Contact</p>],
  ];
  let width: any;
  if (typeof window === "object" ? window.innerWidth : undefined) {
    width = typeof window === "object" ? window.innerWidth : undefined;
  }
  const pathName = () => {
    if (width) {
      if (width <= 600) {
        console.log("you using a phone");
      } else {
        if (router.pathname === "/") {
          gsap.to("." + header.headerDescription, {
            position: "absolute",
            left: 0,
          });
          gsap.to("." + header.headerDescription, { display: "flex" });
          console.log("if '/'");
          gsap.to("." + header.headerDescriptionContact, {
            display: "none",
          });
          gsap.to("." + header.headerDescriptionContact, {
            position: "absolute",
            left: -1300,
          });
          gsap
            .to("." + header.headerDescriptionContact, {
              display: "none",
            })
            .delay(0.5);
        } else {
          // ================ not '/'
          gsap.to("." + header.headerDescription, {
            position: "absolute",
            left: 1300,
          });
          gsap
            .to("." + header.headerDescription, {
              display: "none",
            })
            .delay(0.5);
          // ================ if '/contact'
          if (router.pathname === "/contact") {
            console.log(router.pathname);
            gsap.to("." + header.headerDescriptionContact, { display: "flex" });
            gsap
              .to("." + header.headerDescriptionContact, {
                left: 0,
              })
              .delay(0.1);
          }
        }
      }
    }
  };
  useEffect(() => {
    pathName();
  }, [router]);
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
            <div>
              {descriptionArray.map((e, i) => {
                return (
                  <div key={i} className={`${e[0]}`}>
                    {e[1]}
                  </div>
                );
              })}
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
