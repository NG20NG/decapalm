//
//
import apropos from "../styles/apropos.module.css";
import Image from "next/image";
import { useState } from "react";
//
//
//
const Apropos = () => {
  //
  //
  //
  //
  //
  //
  const userInfoArray = [
    [
      "Abdelaziz Ishak",
      "/apropos/user1.png",
      `Meilleur Centre de Plongée en Algérie pour apprendre et pratiquer la
    plongée sous marine. Un staff professionnel, Accueil chaleureux ! Je le
    recommande fortement, 😎😎`,
    ],
    [
      "Hachaichi Mohamed",
      "/apropos/user2.png",
      "Club de plongée tres beau . Moniteur gentil . Sortie agreable",
    ],
    [
      "Donnwell Page",
      "/apropos/user3.png",
      `J'ai fait mes stages chez eux, et pour moi c'est le meilleur 
      Club sur Alger, l'accueil chaleureux du staff, la propreté 
      et le bon état du matériel fait de ce club le choix numéro 1`,
    ],
  ];
  //
  //
  //
  return (
    <div className={apropos.aproposMainStaticContainer}>
      <div className={apropos.aproposMainStatic}>
        <div className={apropos.aproposTextAndPictureContainer}>
          <div
            className={`${apropos.aproposTextAndPicture} ${apropos.aproposTextContainer}`}
          >
            <div className={apropos.aproposTextTitle}>A-propos de nous</div>
            <div className={apropos.aproposTextDescription}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis voluptates eligendi reprehenderit odio dolore
              blanditiis, ipsum temporibus veniam aliquam laudantium illo unde
              autem suscipit nesciunt a error quasi natus incidunt!
            </div>
            <div className={apropos.aproposTextBTN}></div>
          </div>
          <div
            className={`${apropos.aproposTextAndPicture} ${apropos.aproposPicture}`}
          ></div>
        </div>
        <div className={apropos.aproposUserOpinionsContainer}>
          {userInfoArray.map((e, i: number) => (
            <div key={i}>
              <div
                className={apropos.userOpinionsNameAndStarsAndPictureContainer}
              >
                <Image src={e[1]} height={40} width={40} />
                <div className={apropos.userNameAndStarsContainer}>
                  <div className={apropos.userStarsRatingContainer}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className={apropos.userNameUnderStars}>{e[0]}</div>
                </div>
              </div>
              <div className={apropos.userDescription}>{e[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Apropos;
