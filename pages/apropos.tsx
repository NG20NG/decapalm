//
//
import apropos from "../styles/apropos.module.css";
import Image from "next/image";
//
import rightBarImage from "../public/apropos/aproposRightImage.jpg";
import { useState } from "react";
//
//
const Apropos = () => {
  const [src, setB] = useState(rightBarImage);
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
              Opérateur touristique spécialisé dans les excursions
            </div>
            <div className={apropos.textDescriptionContainer}>
              <div className={apropos.textDescription}>
                les plongées se font toute au long de la semaine aussi et cela
                dépends de la météo toujours avec ça vous avez un choix de site
                à explorer :
                <div className={apropos.textDescriptionOptions}>
                  <div>{`l'ilot de Sandja`}</div>
                  <div>{`l'ilot de bounettah`}</div>
                  <div>la Bordelaise</div>
                  <div>Aguelli</div>
                  <div>Epaves</div>
                  <div>Banc du Djerb</div>
                  <div>Banc Matifou</div>
                </div>
                les plage de toute la cote de surcouf, Ain taya, deca plage te
                Kadous…
              </div>
              <div className={apropos.underTextDescription}>
                <div>Baptême de Plongée</div>
                <div>Plongées exploration à thèmes</div>
                <div>La formation</div>
                <div>ex...</div>
              </div>
            </div>
          </div>
          <div
            className={`${apropos.aproposTextAndPicture} ${apropos.aproposPicture}`}
          >
            <div>
              <Image
                src={"/apropos/aproposRightImage.jpg"}
                height={505}
                width={615}
                alt="right bar image"
              />
            </div>
          </div>
        </div>
        <div className={apropos.aproposUserOpinionsContainer}>
          {userInfoArray.map((e, i: number) => (
            <div key={i}>
              <div
                className={apropos.userOpinionsNameAndStarsAndPictureContainer}
              >
                <Image
                  src={e[1]}
                  height={40}
                  width={40}
                  alt="rating stars svg"
                />
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
